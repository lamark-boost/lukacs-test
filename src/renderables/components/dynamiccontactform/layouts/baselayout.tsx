import React, {ReactElement, useId} from "react";
import classNames from "classnames";
import { FormFieldUnion, LayoutProps } from "@/src/renderables/components/dynamiccontactform/types";
import { Input } from "@/src/renderables/components/input/input";
import style from "./baselayout.module.scss";

const BaseLayout = (
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
        formData,
        variant,
        isLoading
    }: LayoutProps<FormData>): ReactElement => {

        const buttonText = (formData.submitButton != '' ? formData.submitButton : 'Submit');
        const terms = formData?.termsConditions;

        const fieldsWithDefaults = [
            { fieldName: "first_name", labelDefaultValue: "First Name", placeholderDefaultValue: "Enter your first name" },
            { fieldName: "last_name", labelDefaultValue: "Last Name", placeholderDefaultValue: "Enter your last name" },
            { fieldName: "full_name", labelDefaultValue: "Name", placeholderDefaultValue: "Enter your name" },
            { fieldName: "email", labelDefaultValue: "Email Address", placeholderDefaultValue: "Enter your email address" },
            { fieldName: "phone", labelDefaultValue: "Phone Number", placeholderDefaultValue: "Enter your phone number" },
            { fieldName: "custom_1", labelDefaultValue: "Custom 1", placeholderDefaultValue: "" },
            { fieldName: "custom_2", labelDefaultValue: "Custom 2", placeholderDefaultValue: "" },
            { fieldName: "comments", labelDefaultValue: "Message", placeholderDefaultValue: "" },
            { fieldName: "dropdown_1", labelDefaultValue: "Dropdown 1" },
            { fieldName: "dropdown_2", labelDefaultValue: "Dropdown 2"  },
        ];

        const id = useId();

        // @ts-ignore
        const renderField = (fieldData) => {

            // @ts-ignore
            const errorData = errors[fieldData.field]?.message;

            const fieldName = `${fieldData.field}`;

            const defaultData = fieldsWithDefaults.find(f => f.fieldName === fieldName);

            if (!defaultData) {
                return '';
            }

            const title = fieldData?.label ? fieldData.label : defaultData.labelDefaultValue;
            const required = fieldData?.required !== undefined ? fieldData.required : true;
            const placeholder = fieldData?.placeholder ? fieldData.placeholder : defaultData.placeholderDefaultValue;


            //add hide label param here to hide it from css
            let classNameData = classNames(style.generalInput, style.input, { [style.hiddenLabel]: fieldData.hidelabel })
                        
            switch (fieldName) {
              case 'comments':

                return <Input title={title} type="textarea" required={required} control={control} placeholder={placeholder}
                className={classNameData} name={fieldName}
                    // @ts-ignore
                error={errorData}/>

              case 'dropdown_1':
              case 'dropdown_2':

                let defaultOptions = [
                    {
                        value: "",
                        label: fieldData?.default ? fieldData.default : ''
                    }
                ];

                const options = [...defaultOptions, ...fieldData.options];

                return <Input title={title} type="select" options={options} required={required} control={control} placeholder={placeholder}
                className={classNameData} name={fieldName}
                    // @ts-ignore
                error={errorData}/>;

              default:
                return  <Input title={title} required={required} control={control} placeholder={placeholder}
                className={classNameData} name={fieldName}
                    // @ts-ignore
                error={errorData}/>;
            }
        };


    return (
        <div className={style.flexWrap}>

            {formData.formLayout.map((row, rowIndex) => (
            <div key={`${id}-items-${rowIndex}`} className={style.flex}>
                {row.map((col, colIndex) => (
                    <div key={`${id}-i-${rowIndex}-${colIndex}`}  className={classNames({
                        [style.flexitem]: row.length > 1,          
                        [style.flexitemfull]: row.length === 1 
                      })}>
                        {renderField(col)}
                    </div>
                ))}
            </div>
            ))}
            
            
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

export { BaseLayout }