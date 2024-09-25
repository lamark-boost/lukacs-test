"use client";

import React from "react";
import styles from "./steps.module.scss";
import { vProps } from "@/src/helpers/pageStructure";
import styled from "styled-components";


type Props = {
    vps: vProps[];
    subhead?: string,
    headline?: string,
    supportCopy?: string,
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
    ctaButtonURL: string,
    ctaButtonCopy: string,
};

type StyledComponentProps = Pick<Props, 'paddingTopDesktop' | 'paddingBottomDesktop' | 'paddingTopMobile' | 'paddingBottomMobile' >;

const StyledSection = styled.section<StyledComponentProps>`
    ${(props) => ( props.paddingTopDesktop || props.paddingTopDesktop === 0 )&& `padding-top: ${props.paddingTopDesktop}px!important;`}
    ${(props) => ( props.paddingBottomDesktop || props.paddingBottomDesktop === 0 ) && `padding-bottom: ${props.paddingBottomDesktop}px!important;`}
    
    @media screen and (max-width: 600px) {
        ${(props) => ( props.paddingTopMobile || props.paddingTopMobile === 0 ) && `padding-top: ${props.paddingTopMobile}px!important;`}
        ${(props) => ( props.paddingBottomMobile || props.paddingBottomMobile === 0 ) && `padding-bottom: ${props.paddingBottomMobile}px!important;`}
    }
`;

const Steps: React.FC<Props> = ({ctaButtonCopy, ctaButtonURL, paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile, vps, subhead, headline, supportCopy}) => {

    return (
        <StyledSection className={styles.stepsWrap} paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile}>
            <div className="container">
                {subhead !== '' && subhead && <div className={styles.subhead} >{subhead}</div>}
                {headline !== '' &&<div className={`headline-override ${styles.headline}`} >{headline}</div>}
                {supportCopy !== '' && supportCopy && <div className={styles.support} >{supportCopy}</div>}
                <div className={styles.outerFlexer} >

                    {vps.map((vpItem, index) => (

                        <div className={`br-override ${styles.innerFlexer}`}  key={`items-${index}`}>

                            <div className={styles.topper}>
                                {index === 0 && <span>STEP ONE</span>}
                                {index === 1 && <span>STEP TWO</span>}
                                {index === 2 && <span>STEP THREE</span>}
                                {index === 3 && <span>STEP FOUR</span>}
                            </div>
                            <div className={styles.content}>
                                {vpItem.headline !== '' && <div className={styles.headline} >{vpItem.headline}</div>}
                                {vpItem.supportCopy !== '' && <div  >{vpItem.supportCopy}</div>}
                            </div>
                        </div>
                    ))}

                </div>
                {ctaButtonCopy && ctaButtonCopy !== '' &&
                    <div className={styles.ctaWrap}>
                        <a className={`cta-override ${styles.btn}`} href={ctaButtonURL}>{ctaButtonCopy}</a>
                    </div>
                }
            </div>
        </StyledSection>
    )
};

export { Steps };