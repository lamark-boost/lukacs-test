"use client";

import React, {ReactNode, ReactElement, useId, useState} from "react";

import Image from 'next/image'
import styles from "./logos.module.scss";
import classNames from "classnames";
import { LogoItem } from "@/src/helpers/pageStructure";
import styled from "styled-components";

type Props = {
    subhead?: string,
    headline: string,
    logoList: LogoItem[],
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
    ctaButtonURL?: string,
    ctaButtonCopy?: string,
};
type StyledComponentProps = Pick<Props, 'paddingTopDesktop' | 'paddingBottomDesktop' | 'paddingTopMobile' | 'paddingBottomMobile' >;
const StyledSection = styled.section<StyledComponentProps>`
    ${(props) => ( props.paddingTopDesktop !== undefined || props.paddingTopDesktop === 0 ) && `padding-top: ${props.paddingTopDesktop}px !important;`}
    ${(props) => ( props.paddingBottomDesktop !== undefined || props.paddingBottomDesktop === 0 ) && `padding-bottom: ${props.paddingBottomDesktop}px !important;`}

    @media screen and (max-width: 600px) {
    ${(props) => ( props.paddingTopMobile !== undefined || props.paddingTopMobile === 0 ) && `padding-top: ${props.paddingTopMobile}px !important;`}
    ${(props) => ( props.paddingBottomMobile !== undefined || props.paddingBottomMobile === 0 ) && `padding-bottom: ${props.paddingBottomMobile}px !important;`}
    }
`;

const Logos: React.FC<Props> = ({ctaButtonCopy, ctaButtonURL, paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile, subhead, headline, logoList}) => {

    return (

        <StyledSection className={styles.logosWrap} paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile}>
            <div className="container">
                {subhead !== '' && <div className={`subhead-override ${styles.subhead}`} >{subhead}</div>}
                {headline !== '' && <div className={`headline-override ${styles.headline}`}>{headline}</div>}

                <div className={styles.logosWrap}  >
                    {logoList.map((logo, index) => (
                        <div className={styles.logoWrap} key={index} >
                            <Image src={logo} alt="icon" width={200} height={200} />
                        </div>
                    ))}
                </div>

                {ctaButtonCopy !== '' && ctaButtonCopy &&
                    <div className={styles.ctaWrap}>
                        <a className={`cta-override ${styles.btn}`} href={ctaButtonURL}>{ctaButtonCopy}</a>
                    </div>
                }
            </div>
        </StyledSection>
    )
};

export {Logos};