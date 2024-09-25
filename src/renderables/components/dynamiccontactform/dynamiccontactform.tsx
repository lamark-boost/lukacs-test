import React, {ReactElement, ReactNode, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import { FormDataProps, LayoutProps, defaultFormFields, formValidation } from "./types";

import {useRouter, useSearchParams} from "next/navigation";
import style from "./dynamiccontactform.module.css";
import classNames from "classnames";
import {simpleRequestHandler} from "./requestHandler";
import {handleResponse} from "./responseHandler";
import {yupResolver} from "@hookform/resolvers/yup";
import {BaseLayout} from "./layouts/baselayout"

export type FormVariant = "b2b"|"b2c"

export interface ContactFormProps {
    variant: FormVariant,
    formData: FormDataProps
}

const regularStatuses = [0, 4]

const errorMessages: {[key: number]: string} = {
    4: "The provided email is not valid",
}

const DynamicContactForm: React.FC<ContactFormProps> = ({variant = 'b2c', formData}) => {

    const router = useRouter()
    const captchaRef = null

    const searchParams = useSearchParams()
    const utmSource = searchParams.has("utm_source") ? searchParams.get('utm_source') : '';
    const utmMedium = searchParams.has("utm_medium") ? searchParams.get('utm_medium') : '';
    const utmContent = searchParams.has("utm_content") ? searchParams.get('utm_content') : '';
    const utmCampaign = searchParams.has("utm_campaign") ? searchParams.get('utm_campaign') : '';
    const utmTerm = searchParams.has("utm_term") ? searchParams.get('utm_term') : '';
    const search = '';
    const [isLoading, setIsLoading] = useState(false)
    const [requestStatus, setRequestStatus] = useState(0)

    const {
        control,
        formState: {errors},
        setValue,
        handleSubmit,
        trigger,
        watch
    } = useForm<FormData>({
        // @ts-ignore
        resolver: yupResolver(formValidation(formData.formLayout)),
        defaultValues: defaultFormFields(formData.formLayout)
    })

    const layoutProps: LayoutProps<FormData> = {

        status: requestStatus,
        control,
        errors,
        captchaRef,
        search,
        utmSource,
        utmMedium,
        utmTerm,
        utmCampaign,
        utmContent,
        formData,
        isLoading,
        trigger,
        variant,
        watch
    }

    const core = <BaseLayout {...layoutProps}/>
    

    const classes = {
        [style.formWrap]: 1,
        [style.b2b]: variant == 'b2b',
        [style.b2c]: variant == 'b2c',
    }

    const submit = async (values: any) => {
        setIsLoading(true);

        try {
            
            const date = new Date();
            values.timestamp = date.toDateString();
            values.url = window.location.href;
            values.utm_campaign = search;

            let data = await simpleRequestHandler(values)

            const handleResult = handleResponse(data)
            if (typeof handleResult == "string") {
                await router.push(handleResult)
            } else {
                setRequestStatus(handleResult)
            }
        } catch (e) {
            setRequestStatus(2)
        }

        setIsLoading(false);
    }

    return (
        <div className={classNames(classes)}>
            {(regularStatuses.includes(requestStatus)) &&
                <form className={style.form} onSubmit={handleSubmit(submit)}>
                    {errorMessages[requestStatus] &&
                        <p className={style.errorMessage}>{errorMessages[requestStatus]}</p>
                    }
                    {core}
                </form>
            }
            {requestStatus === 1 &&
                <div className={style.formResult}>
                    <p>
                        Thank you very much for your message.
                    </p>
                </div>
            }
            {requestStatus === 2 &&
                <div className={style.formResult}>
                    <p>
                        There has been a problem with the form submission. Please refresh the page and try again.
                    </p>
                </div>
            }
        </div>
    )
};

export { DynamicContactForm }