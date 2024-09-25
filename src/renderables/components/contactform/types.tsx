import {ReactNode} from "react";
import {Control, FieldErrors, FieldValues, UseFormTrigger, UseFormWatch} from "react-hook-form";
import { FormVariant } from "./contactform";
import * as yup from "yup";

/**
 * LAYOUT
 */

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
    terms: ReactNode|null,
    buttonText: string|null,
    isLoading: boolean,
    variant?: FormVariant,
    trigger: UseFormTrigger<T>,
}

export type LayoutPageProps<T extends FieldValues> = Partial<LayoutProps<T>>

/**
 * FORM DATA
 */

export interface BaseContactFormData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string
}

export type FormData = BaseContactFormData


/**
 * DEFAULTS
 */

export const formDefaultValues = {email: "" , phone: "" , firstName: "", lastName: "" }

export const defaultForSite = (variant?: FormVariant) => {
    switch (variant) {
        //this is for the futre if we'll want different forms
        case "b2b": return formDefaultValues
        case "b2c": return formDefaultValues
        default: return formDefaultValues
    }
}

/**
 * VALIDATION
 */

const baseContactFormValidation = {
    email: yup.string().email("Not a valid email").required("Email is required"),
}

export const contactFormValidation = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
    ...baseContactFormValidation
})

export const validationForSite = (variant?: FormVariant) => {
    switch (variant) {
        case "b2b": return contactFormValidation
        case "b2c": return contactFormValidation
        default: return baseContactFormValidation
    }
}