import React, {ReactElement} from "react";
import classNames from "classnames";
import { LayoutProps } from "@/src/renderables/components/contactform/types";
import { Input } from "@/src/renderables/components/input/input";
import style from "@/src/renderables/components/contactform/layouts/b2blayout.module.scss";

const B2BLayout = (
    {
        control,
        errors,
        captchaRef,
        utmSource,
        utmMedium,
        utmTerm,
        utmCampaign,
        utmContent,
        search,
        terms,
        buttonText,
        variant,
        isLoading
    }: LayoutProps<FormData>): ReactElement => {


    return (
        <div className={style.flexWrap}>
            <div className={style.flex}>
                <div className={style.flexitem}>
                    <Input title="First Name" required={true} control={control} placeholder="First Name*"
                    className={classNames(style.generalInput, style.input)} name="firstName"
                        // @ts-ignore
                    error={errors.firstName?.message}/>
                </div>
                <div className={style.flexitem}>
                    <Input title="Last Name" required={true} control={control} placeholder="Last Name*"
                    className={classNames(style.generalInput, style.input)} name="lastName"
                        // @ts-ignore
                    error={errors.lastName?.message}/>
                </div>
            </div>
            <div className={style.flex}>
                <div className={style.flexitem}>
                    <Input title="Email Address" required={true} control={control} placeholder="Email*"
                    className={classNames(style.generalInput, style.input)} name="email"
                        // @ts-ignore
                    error={errors.email?.message}/>
                </div>
                <div className={style.flexitem}>
                    <Input title="Phone" required={true} control={control} placeholder="Phone*"
                    className={classNames(style.generalInput, style.input)} name="phone"
                        // @ts-ignore
                    error={errors.phone?.message}/>
                </div>
            </div>
            <div className={style.flex}>
                <div className={style.flexitemfull}>
                    <Input type="textarea" required={true} title="Message" control={control} placeholder="Comments & Feedback"
                    className={classNames(style.generalInput, style.input)} name="message"
                        // @ts-ignore
                    error={errors.message?.message}/>
                </div>
            </div>


            <div className={style.hiddenDiv}>
                <Input type="hidden" value={utmCampaign} name="utm_campaign"/>
            </div>
            {terms && 
                <div className={style.copyright}>
                    {terms}
                </div>
            }
            <div className={style.submitWrap}>
                <button className={classNames(style.button, {
                    [style.b2b]: variant == "b2b",
                    [style.b2c]: variant == "b2c"
                })} disabled={isLoading} type={"submit"}>{isLoading ? "Please wait..." : buttonText}</button>

            </div>
            

            
        </div>
    )
}

export { B2BLayout }