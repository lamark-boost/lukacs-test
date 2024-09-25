import React, {ReactNode, ReactElement, useId, useState} from "react";
import classNames from "classnames";
import styles from "./contact.module.scss";
import { ContactForm } from "../contactform/contactform";

type Props = {
    variant?: "b2c"|"b2b"
    headline: string,
    subhead?: string,
    supportBulletedList?: string[]
    abstract: ReactNode,
    rightheadline?: string,
    ctatext?: string,
    ctaurl?: string,
    terms?: ReactNode,
};



const Contact: React.FC<Props> = ({variant = 'b2c', supportBulletedList, headline, subhead = '', abstract, ctatext = '', ctaurl = '', rightheadline, terms = ''}) => {

    const classes = {
        [styles.contactWrap]: 1,
        [styles.b2c]: variant == "b2c",
        [styles.b2b]: variant == "b2b",
    }

    return (
        <section className={classNames(classes)} id="to-form">
            <div className={styles.container}>
                <div className={styles.flexer}>
                    <div className={styles.left}>
                        {subhead != '' && <p className={`subhead-override ${styles.sup}`}>{subhead}</p>}
                        <h3 className={`headline-override ${styles.headline}`}>{headline}</h3>
                        {abstract != '' &&<div className={styles.abstract}>
                            {abstract}
                        </div>}
                        {supportBulletedList !== undefined &&
                            <ul className={styles.supportList} >
                                {supportBulletedList.map((item, index) =>
                                    <li key={index}>{item}</li>
                                )}
                            </ul>
                        }
                        {(ctaurl != '' && ctatext != '') &&<div className={styles.abstract}>
                            <a className={styles.cta} href={ctaurl}>{ctatext}</a>
                        </div>}
                    </div>
                    <div className={styles.right}>
                        <div className={`br-override ${styles.formWrap}`} >
                            {rightheadline && <h3 className={styles.rightheadline}>{rightheadline}</h3>}
                            <ContactForm variant={variant} terms={terms} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export {Contact}