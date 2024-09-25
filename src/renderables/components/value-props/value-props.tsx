"use client";

import React, {ReactNode, ReactElement, useId, useState, useEffect} from "react";
import Image from 'next/image'
import styles1 from "./value-props1.module.scss";
import styles2 from "./value-props2.module.scss";
import styles3 from "./value-props3.module.scss";
import styles4 from "./value-props4.module.scss";
import { vProps } from "@/src/helpers/pageStructure";
import styled from "styled-components";


type Props = {
   vps: vProps[];
   variant?: "v1"|"v2"|"v3"|"v4";
   subhead?: string,
    headline?: string,
    supportCopy?: string,
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
    ctaButtonURL?: string,
    ctaButtonCopy?: string,
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

const ValueProps: React.FC<Props> = ({ctaButtonCopy, ctaButtonURL, paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile, vps, variant, subhead, headline, supportCopy}) => {

    const [style, setStyle] = useState(styles1);

    useEffect(() => {
        if (variant) {
            if(variant == "v2") {
                setStyle(styles2);
            } else if(variant == "v3") {
                setStyle(styles3);
            }
            else if(variant == "v4") {
                setStyle(styles4);
            }
        }
    }, [variant]);

    return (
        <StyledSection className={style.vPropsWrap} paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile}>
            <div className="container">
                {subhead !== '' &&  <div className={style.subhead} >{subhead}</div>}
                {headline !== '' &&<div className={style.headline} >{headline}</div>}
                {supportCopy !== '' && supportCopy && <div className={style.support} >{supportCopy}</div>}
                <div className={style.outerFlexer} >

                    {vps.map((vpItem, index) => (

                            <div className={`br-override ${style.innerFlexer}`}  key={`items-${index}`}>

                                    <div  >
                                        {vpItem.imgURL !== '' && vpItem.imgURL && <div className={style.logoWrap} ><Image src={vpItem.imgURL} alt="icon" width={43} height={43} /></div>}
                                    </div>
                                    <div >
                                        {vpItem.headline !== '' && <div className={`headline-override ${style.headline}`} >{vpItem.headline}</div>}
                                        {vpItem.supportCopy !== '' && <div  >{vpItem.supportCopy}</div>}
                                    </div>
                            </div>
                    ))}

                </div>
                {ctaButtonCopy !== '' && ctaButtonCopy &&
                    <div className={style.ctaWrap}>
                        <a className={`cta-override ${style.btn}`} href={ctaButtonURL}>{ctaButtonCopy}</a>
                    </div>
                }
            </div>
        </StyledSection>
    )
};

export {ValueProps};