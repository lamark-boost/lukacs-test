"use client";

import React, {ReactNode, ReactElement, useId, useState, useEffect} from "react";

import Image from 'next/image'
import styles1 from "./featured-product1.module.scss";
import styles2 from "./featured-product2.module.scss";
import styles from "@/src/renderables/components/steps/steps.module.scss";
import styled from "styled-components";


type Props = {
    imageUrl: string,
    subhead?: string,
    headline: string,
    supportCopy?: string,
    cta1ButtonURL?: string,
    cta1ButtonCopy?: string,
    cta2ButtonURL?: string,
    cta2ButtonCopy?: string,
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
    backgroundColor?: string,
    backgroundImg?: string,
    variant?: "v1"|"v2"|"v3";
};

type StyledComponentProps = Pick<Props, 'paddingTopDesktop' | 'paddingBottomDesktop' | 'paddingTopMobile' | 'paddingBottomMobile' | 'backgroundColor' | 'backgroundImg' >;

const StyledSection = styled.section<StyledComponentProps>`
  ${(props) => ( props.paddingTopDesktop !== undefined || props.paddingTopDesktop === 0 ) && `padding-top: ${props.paddingTopDesktop}px !important;`}
  ${(props) => ( props.paddingBottomDesktop !== undefined || props.paddingBottomDesktop === 0 ) && `padding-bottom: ${props.paddingBottomDesktop}px !important;`}
  
  @media screen and (max-width: 600px) {
    ${(props) => ( props.paddingTopMobile !== undefined || props.paddingTopMobile === 0 ) && `padding-top: ${props.paddingTopMobile}px !important;`}
    ${(props) => ( props.paddingBottomMobile !== undefined || props.paddingBottomMobile === 0 ) && `padding-bottom: ${props.paddingBottomMobile}px !important;`}
  }
  
  > div:last-of-type {
    ${(props) => ( props.backgroundColor !== undefined ) && `background-color: ${props.backgroundColor} !important;`}
    ${(props) => ( props.backgroundImg !== undefined ) && `background-image:url( ${props.backgroundImg}) !important;`}
  }
`;

const FeaturedProduct: React.FC<Props> = ({ backgroundColor, backgroundImg, paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile, imageUrl, subhead, headline, supportCopy, cta1ButtonCopy, cta1ButtonURL, cta2ButtonURL, cta2ButtonCopy, variant}) => {

    const [style, setStyle] = useState(styles1);

    useEffect(() => {
        if (variant) {
            if(variant == "v2") {
                setStyle(styles2);
            }
        }
    }, [variant]);

    return (
        <StyledSection className={style.featuredProduct} paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile} backgroundColor={backgroundColor} backgroundImg={backgroundImg}>
            <div className="container">
                <div className={style.flexer} >
                    <div className={`br-override ${style.imgWrap}`} >
                        <Image className={style.primaryImg} src={imageUrl} alt="client logo" width={550} height={550} />
                    </div>
                    <div className={style.content} >
                        {subhead !== '' && <div className={`subhead-override ${style.subhead}`} >{subhead}</div>}
                        <div className={`headline-override ${style.headline}`} >{headline}</div>
                        {supportCopy !== '' && <div className={style.supportCopy} >{supportCopy}</div>}
                        <div className={style.ctaWrap}>

                            {cta1ButtonCopy !== '' && cta1ButtonCopy && <a  className={`cta-override ${style.btn}`} href={cta1ButtonURL} >{cta1ButtonCopy}</a>}
                            {cta2ButtonCopy !== '' && cta2ButtonCopy && <a  className={`cta-override ${style.btn}`} href={cta2ButtonURL} >{cta2ButtonCopy}</a>}
                        </div>
                    </div>


                </div>
            </div>
            <div  className={style.bgWrap} ></div>
        </StyledSection>
    )
};
export { FeaturedProduct };