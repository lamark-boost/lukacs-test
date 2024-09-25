import {ReactNode} from "react";
import {Control, FieldErrors, FieldValues, UseFormTrigger, UseFormWatch} from "react-hook-form";
import * as yup from "yup";

/**
 * LAYOUT
 */

export type FormVariant = "b2b"|"b2c"

export interface LayoutProps<T extends FieldValues> {
    status: number,
    control: Control<T>,
    watch: UseFormWatch<T>,
    errors: FieldErrors<T>,
    captchaRef: any,
    search: string|null,
    utmSource: string|null,
    utmMedium: string|null,
    utmTerm: string|null,
    utmCampaign: string|null,
    utmContent: string|null,
    formData:FormDataProps,
    isLoading: boolean,
    variant?: FormVariant,
    trigger: UseFormTrigger<T>,
}



/**
 * FORM DATA
 */

export interface FormDataProps {
    submitButton: string,
    termsConditions?: ReactNode,
    formLayout: FormFieldUnion[][],
}


export interface BaseFormField {
    field: string,
    label?: string,
    placeholder?: string,
    required?: boolean,
    hidelabel?: boolean,
    default?: string,
}

interface SelectFormField extends BaseFormField {
    options: SelectOptionFormField[];
}

interface SelectOptionFormField {
    value: string,
    label: string;
}

export type FormFieldUnion = BaseFormField | SelectFormField;


/**
 * DEFAULTS
 */

export const defaultFormFields = (formData: FormFieldUnion[][]) => {
    
    let defaultValues = {}

    // Iterating through formLayout
    for (const row of formData) {
            
        // Iterating through each field in the row
        for (const field of row) {

            if (field.default) {
                // @ts-ignore
                defaultValues[field.field] = field.default;
            } else {
                // @ts-ignore
                defaultValues[field.field] = '';
            }
            
        }
    }

    return defaultValues;

};


/**
 * VALIDATION
 */

export const formValidation = (formData: FormFieldUnion[][]) => {

    let validationData = {};

    // Iterating through formLayout
    for (const row of formData) {
            
        // Iterating through each field in the row
        for (const field of row) {

            if (field.field == 'email') {
                // @ts-ignore
                validationData[field.field] = yup.string().email("Not a valid email").required("Email is required");
            } else {
                if (field.required == false) {
                    
                } else {
                    // @ts-ignore
                    validationData[field.field] = yup.string().required();
                }
            }

            
            
        }
    }

    return yup.object().shape(validationData);
}