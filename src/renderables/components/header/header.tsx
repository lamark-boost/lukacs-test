"use client";

import React, {ReactNode, ReactElement, useId, useState, useRef, useEffect} from "react";

import Image from 'next/image'
import styles from "./header.module.scss";


type Props = {
    logoUrl: string,
    logoWidth: number,
    clickToCall?: string,
    ctaURL?: string,
    ctaCopy?: string,
    messaging?: string,
    backgroundColor?: string,
};

const Header: React.FC<Props> = ({logoUrl, logoWidth, backgroundColor, clickToCall, ctaURL, ctaCopy, messaging}) => {

    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledInit, setIsScrolledInit] = useState(false);
    let scrollTreshold = 80;
    // Function to handle scroll event
    const handleScroll = () => {
        let scrollY = window.scrollY;      
        

        if (scrollY > scrollTreshold) {
            setIsScrolled(true);
            scrollTreshold = 10;
        } else {
            setIsScrolled(false);
            scrollTreshold = 80;
        }
    };

    useEffect(() => {
                
        if (isScrolledInit === false) {
            setIsScrolledInit(true);
            window.addEventListener('scroll', handleScroll);
        }
        
        // Cleanup function to reset padding when component unmounts or height changes
        return () => {};
    }, [isScrolled]); // Empty dependency array ensures this runs only once after mounting

    return (
        <header className={isScrolled ? styles.scrolledHeader : styles.header} ref={headerRef}
                style={{
                   background: backgroundColor ? `${backgroundColor}` : '#fff'
                }}
        >
            {messaging !== '' &&  <div className={styles.promobar}>
                <div className="container">
                    <div className={styles.messaging} dangerouslySetInnerHTML={{ __html: messaging }}/>
                </div>
            </div>}

            <div className="primary">
                <div className="container">
                    <div className={styles.flexer}>
                        <div className={styles.logo}>
                            <Image
                                src={logoUrl}
                                alt="client logo"
                                width={100}
                                height={100}
                                style={{
                                    maxWidth: logoWidth ? `${logoWidth}px` : '200px'
                                }}
                            />
                        </div>
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