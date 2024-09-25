import React from "react";

import Image from 'next/image'
import styles from "./header.module.scss";


type Props = {
    logoUrl: string,
    clickToCall?: string,
    ctaURL?: string,
    ctaCopy?: string,
    messaging?: string,
    setHeaderHeight?: (height: number) => void;
};

const Header: React.FC<Props> = ({setHeaderHeight, logoUrl, clickToCall, ctaURL, ctaCopy, messaging}) => {
    return (
        <header className={styles.header} >
            {messaging !== '' &&  <div className={styles.promobar}>
                <div className="container">
                    <div className={styles.messaging} dangerouslySetInnerHTML={{ __html: messaging }}/>
                </div>
            </div>}

            <div className="primary">
                <div className="container">
                    <div className={styles.flexer}>
                        <div className={styles.logo}><Image src={logoUrl} alt="client logo" width={100} height={100} /></div>
                        <div className={styles.cta}>
                            {clickToCall !== '' && <div className={styles.ctc}><a  href={`tel:${clickToCall}`}>{clickToCall}</a></div>}

                            {ctaURL !== '' && <div className={styles.link}><a href={ctaURL} className="cta-override">{ctaCopy}</a></div>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export { Header };