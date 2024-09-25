import React, {ReactNode} from "react";
import style from "./contactform.module.css";
import classNames from "classnames";

export type FormVariant = "b2b"|"b2c"

export interface ContactFormProps {
    buttonText?: string,
    terms?: ReactNode,
    variant?: FormVariant
}

const regularStatuses = [0, 4]

const errorMessages: {[key: number]: string} = {
    4: "The provided email is not valid",
}

const ContactForm: React.FC<ContactFormProps> = ({variant = 'b2c', buttonText = 'Submit', terms = ''}) => {

    let requestStatus = 0;


    const classes = {
        [style.formWrap]: 1,
        [style.b2b]: variant == 'b2b',
        [style.b2c]: variant == 'b2c',
    }

    return (
        <div className={classNames(classes)}>
            {(regularStatuses.includes(requestStatus)) &&
                <form className={style.form}>
                    {errorMessages[requestStatus] &&
                        <p className={style.errorMessage}>{errorMessages[requestStatus]}</p>
                    }
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

export { ContactForm }