import React, {ComponentProps, FC, ReactNode, useId, useRef} from "react"
import {Control, Controller, UseFormSetValue} from "react-hook-form";
import classNames from "classnames";

interface InputProps<T> {
    title?: string,
    placeholder?: string,
    type?: string,
    required?: boolean,
    onChange?: (val: any) => void,
    options?: SelectOptions<any>,
    className?: string,
    coreClassName?: string,
    control?:Control<any>,
    error?:string,
    noErrorMessage?:boolean
    name?: keyof T,
    defaultValue?:any,
    row?: boolean,
    labelPosition?: "before"|"after"|"inline"|"inline-after",
    setValue?: UseFormSetValue<any>,
    icon?: FC<ComponentProps<'svg'>>,
    gray?: boolean,
    grayBg?:boolean,
    innerRef?: any,
    noWrapperMargin?: boolean,
    sitekey?: string,
    invisible?: boolean,
    onKeyDown?:(event: KeyboardEvent) => void,
    [key: string]: any
}

/**
 * Options for select components
 */
export interface SelectOption<T> {
    label: string,
    value: T
}

export type SelectOptions<T> = SelectOption<T>[]

/**
 * Main input component
 */
function Input<T>(
    {
        onKeyDown,
        control,
        defaultValue,
        name ,
        error,
        required = false,
        className,
        coreClassName,
        title,
        onChange,
        placeholder,
        type = "text",
        row,
        noErrorMessage = false,
        labelPosition = "before",
        setValue,
        icon,
        gray,
        grayBg,
        noWrapperMargin,
        innerRef,
        ...props
    }: InputProps<T>) {

    const id = useId()

    const label = <label htmlFor={id} >{title}</label>
    const core = <>
        {title && labelPosition == "inline" && label}
        {control
            ? (
                <Controller
                    control={control}
                    // @ts-ignore
                    name={name ?? ""}
                    // defaultValue={defaultValue}
                    render={ ({field: {onChange: innerOC, onBlur, value,...field }}) => {
                        return <InputCore
                            onChange={(e: any) => {
                                innerOC(e)
                                if (onChange) onChange(e)
                            }}
                            onKeyDown={onKeyDown}
                            className={coreClassName}
                            value={value}
                            onBlur={onBlur}
                            type={type}
                            required={required}
                            title={title}
                            control={control}
                            placeholder={placeholder}
                            color={error ? "failure" : "blue"}
                            id={id}
                            setValue={setValue}
                            {...props}
                            {...field}
                        />
                    }}
                />
            )
            : <>
                <InputCore
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    type={type}
                    defaultValue={defaultValue}
                    required={required}
                    className={coreClassName}
                    title={title}
                    placeholder={placeholder}
                    id={id}
                    color={error ? "failure" : undefined}
                    ref={innerRef}
                    {...props}
                />
                {title && labelPosition == "inline-after" && label}
              </>
        }
    </>

    return (
        <div className={classNames(className)}>
            {title && labelPosition == "before" && label}
            {core}
            {title && labelPosition == "after" && label}
        </div>
    )
}

interface InputCoreProps extends InputProps<object> {
    color?: "failure"|"info"|"success"|"warning"
}

/**
 * Main input element
 * We extracted this from the input component to make the code more clear but also to make it easier to conditionally
 * wrap it in Hook Form Controller
 */
const InputCore = React.forwardRef<HTMLInputElement|null,InputCoreProps>(({type  = "text", placeholder, error, options, title, isInvalid, setValue, onKeyDown, ...props}, ref) => {
    const id = useId()
    const getInputId = (index: number) => `${id}-${index}-${props.name}-input`

    switch(type){
        case "select":
            return (
                <select {...props}>
                    {options?.map(el => <option value={el.value} key={el.value}>{el.label}</option>)}
                </select>
            )
        case "radio":
            return (
                <div>
                    {options?.map((option, index) => (
                    <div key={`${index}-radio-${props.name}-${id}`}>
                        <input type="radio" {...props} id={getInputId(index)} value={option.value}/>
                        <label htmlFor={getInputId(index)}>{option.label}</label>
                    </div>
                    ))}
                </div>
            )
        case "textarea":
            return (
                <div>
                    <textarea rows={10} placeholder={placeholder} {...props}></textarea>
                </div>
            )
        case "captcha":
            return (
                <>
                    <p>To code captcha</p>
                </>
            )
        default:
            return (
                <>
                    <input
                        {...props}
                        // @ts-ignore
                        onKeyDown={onKeyDown}
                        ref={ref}
                        type={type}
                        placeholder={placeholder}
                    />
                </>
            )
    }
})

// Set display name for the component
InputCore.displayName = "InputCore";

export { Input } 
