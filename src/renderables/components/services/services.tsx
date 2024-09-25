"use client";

import React, {ReactNode, ReactElement, useId, useState, useEffect} from "react";
import Image from 'next/image'
import styles1 from "./services1.module.scss";
import styles2 from "./services2.module.scss";
import { vProps } from "@/src/helpers/pageStructure";
import styled from "styled-components";


type Props = {
    vps?: vProps[];
    variant?: "v1"|"v2";
    list?: string[];
    subhead?: string,
    headline?: string,
    supportCopy?: string,
    imageURL: string,
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

const Services: React.FC<Props> = ({ctaButtonCopy, ctaButtonURL, paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile,vps, variant, subhead, headline, supportCopy, list, imageURL}) => {

    const [style, setStyle] = useState(styles1);

    useEffect(() => {
        if (variant) {
            if(variant == "v2") {
                setStyle(styles2);
            }
        }
    }, [variant]);



    return (
        <StyledSection className={style.servicesWrap} paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile}>

            <div className="container">
                {subhead !== '' &&  <div className={style.subhead} >{subhead}</div>}
                {headline !== '' &&<div className={`headline-override ${style.headline}`} >{headline}</div>}
                {supportCopy !== '' && variant === "v1" && <div className={style.support} >{supportCopy}</div>}

                {variant === "v1" &&
                    <div className={style.outerFlexer} >
                        <div className={style.left}>
                            {vps.map((vpItem, index) => (

                                <div className={style.innerFlexer}  key={`items-${index}`}>

                                    <div  >
                                        {vpItem.imgURL !== '' && <div className={style.logoWrap} ><Image src={vpItem.imgURL} alt="icon" width={43} height={43} /></div>}
                                    </div>
                                    <div >
                                        {vpItem.headline !== '' && <div className={style.headline} >{vpItem.headline}</div>}
                                        {vpItem.supportCopy !== '' && <div  >{vpItem.supportCopy}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {imageURL !== "" &&
                            <div className={style.right}>
                                <Image src={imageURL} alt={headline} width={250} height={250} />
                            </div>
                        }
                    </div>
                }
                {variant === "v2" &&
                    <div className={style.outerFlexer} >
                        <div className={style.left}>
                            <Image src={imageURL} alt={headline} width={250} height={250} />
                        </div>
                        <div className={style.right}>
                            {supportCopy !== '' && <div className={style.support} >{supportCopy}</div>}

                            {list !== undefined &&
                                <ul className={style.supportList} >
                                    {list.map((item, index) =>
                                        <li key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                                            <span>{item}</span>
                                        </li>
                                    )}
                                </ul>
                            }
                        </div>
                    </div>
                }
                {ctaButtonCopy !== '' && ctaButtonCopy &&
                    <div className={style.ctaWrap}>
                        <a className={`cta-override ${style.btn}`} href={ctaButtonURL}>{ctaButtonCopy}</a>
                    </div>
                }
            </div>
        </StyledSection>
    )
};

export {Services};