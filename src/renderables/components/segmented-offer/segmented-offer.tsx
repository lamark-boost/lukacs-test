"use client";

import React from 'react'
import Image from 'next/image'
import styles from "./segmented-offer.module.scss";
import styled from "styled-components";

type Props = {
    imageUrl1: string,
    imageUrl2: string,
    subhead?: string,
    headline: string,
    supportCopy?: string,
    cta1ButtonURL: string,
    cta1ButtonCopy: string,
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,

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
const SegmentedOffer: React.FC<Props> = ({paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile,imageUrl1, imageUrl2, subhead, headline, supportCopy, cta1ButtonURL, cta1ButtonCopy}) => {

    return (
        <StyledSection className={styles.segofferSection} paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile}>
            <div className={styles.outerFlexer} >
                <div className={styles.imgWrap} >
                    <Image src={imageUrl1} alt={headline} width={550} height={550} />
                </div>
                <div className={`bg-override2 br-override ${styles.content}`}>
                    <div className={styles.contentInner}>
                        {subhead !== '' &&  <div className={`subhead-override ${styles.subhead}`} >{subhead}</div>}
                        <div className={`headline-override ${styles.headline}`} >{headline}</div>
                        {supportCopy !== '' && <div >{supportCopy}</div>}
                        {cta1ButtonCopy !== '' && cta1ButtonCopy &&
                            <div className={styles.ctaWrap}>
                                <a className={`cta-override ${styles.btn}`} href={cta1ButtonURL}>{cta1ButtonCopy}</a>
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.imgWrap} >
                    <Image src={imageUrl2} alt={headline} width={550} height={550} />
                </div>
            </div>
        </StyledSection>
    )
};

export { SegmentedOffer };