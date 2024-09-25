import React, {ReactNode, Suspense} from "react";
import Image from 'next/image'
import styles from "./hero-fifty.module.scss";
import styles2 from "../contact/contact.module.scss";
import styles3 from "./hero-fifty2.module.scss";
import styles4 from "./hero-hundred.module.scss";
import {Contact} from "@/src/renderables/components/contact/contactStatic";
import styled from 'styled-components';


export interface ListItem {
    text: string,
}

type Props = {
    imageUrl?: string,
    subhead?: string,
    headline: string,
    supportCopy?: string,
    cta1ButtonURL: string,
    cta1ButtonCopy: string,
    supportBulletedList?: string[]
    variant?: "fifty"|"fifty-color-bg"|"form-b2b"|"form-b2c"|"hundred"
    abstract?: ReactNode,
    rightheadline?: string,
    terms?: ReactNode,
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
};
type StyledComponentProps = Pick<Props, 'paddingTopDesktop' | 'paddingBottomDesktop' | 'paddingTopMobile' | 'paddingBottomMobile' >;

const StyledSection = styled.section<StyledComponentProps>`
    > div {
        ${(props) => ( props.paddingTopDesktop || props.paddingTopDesktop === 0 ) && `padding-top: ${props.paddingTopDesktop}px!important;`}
        ${(props) => ( props.paddingBottomDesktop || props.paddingBottomDesktop === 0 ) && `padding-bottom: ${props.paddingBottomDesktop}px!important;`}
      
        @media screen and (max-width: 600px) {
            ${(props) => ( props.paddingTopMobile || props.paddingTopMobile === 0 ) && `padding-top: ${props.paddingTopMobile}px!important;`}
            ${(props) => ( props.paddingBottomMobile || props.paddingBottomMobile === 0 ) && `padding-bottom: ${props.paddingBottomMobile}px!important;`}
        }
      
    }
`;

const Hero: React.FC<Props> = ({paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile,abstract, rightheadline, terms, imageUrl, subhead, headline, supportCopy, cta1ButtonURL, cta1ButtonCopy, supportBulletedList, variant}) => {

    let style = styles;

    if (variant) {
        if(variant == "form-b2b") {
            style = styles2;
        }
        else if(variant == "fifty-color-bg") {
            style = styles3;
        }
        else if(variant == "hundred") {
            style = styles4;
        }
    }

    return (
        <StyledSection className="hero" paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile}>
            {(variant === "fifty" || variant === "fifty-color-bg") && <div id="hero-1" className={`bg-override ${style.hero1}`} >
                <div className="container">
                    <div className={style.flexer}>
                        <div className={style.content}>
                            {subhead !== '' &&  <div className={style.subhead} >{subhead}</div>}
                            <h1 className={style.headline} >{headline}</h1>
                            <div className={style.support} >{supportCopy}</div>
                            {supportBulletedList !== undefined &&
                                <ul className={style.supportList} >
                                    {supportBulletedList.map((item, index) =>
                                        <li key={index}>{item}</li>
                                    )}
                                </ul>
                            }
                            {cta1ButtonCopy !== '' && cta1ButtonCopy &&
                                <div className={style.ctaWrap}>
                                    <a className={`cta-override ${style.btn}`} href={cta1ButtonURL}>{cta1ButtonCopy}</a>
                                </div>
                            }
                        </div>
                        {imageUrl && 
                        <div className={`br-override ${style.imgWrap}`} >
                            <Image className={style.primaryImg} src={imageUrl} alt={headline} width={550} height={550} />
                        </div>
                        }
                    </div>
                </div>
            </div> }
            {variant === "form-b2b" &&
                <Suspense>
                    <Contact
                        supheadline={subhead}
                        headline={headline}
                        abstract={supportCopy}
                        supportBulletedList={supportBulletedList}
                        rightheadline={rightheadline}
                        terms={terms}
                        variant="b2b"
                    />
                </Suspense>
            }
            {variant === "form-b2c" &&
                <Suspense>
                    <Contact
                        supheadline={subhead}
                        headline={headline}
                        abstract={supportCopy}
                        supportBulletedList={supportBulletedList}
                        rightheadline={rightheadline}
                        terms={terms}
                        variant="b2c"
                    />
                </Suspense>
            }
            {variant === "hundred" &&
                <div id="hero-2" className={`bg-override ${style.hero1}`} >
                <div className="container">
                    <div className={style.flexer}>
                        <div className={style.content}>
                            {subhead !== '' &&  <div className={style.subhead} >{subhead}</div>}
                            <h1 className={style.headline} >{headline}</h1>
                            <div className={style.support} >{supportCopy}</div>
                            {supportBulletedList !== undefined &&
                                <ul className={style.supportList} >
                                    {supportBulletedList.map((item, index) =>
                                        <li key={index}>{item}</li>
                                    )}
                                </ul>
                            }
                            {cta1ButtonCopy !== '' && cta1ButtonCopy &&
                                <div className={style.ctaWrap}>
                                    <a className={`cta-override ${style.btn}`} href={cta1ButtonURL}>{cta1ButtonCopy}</a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                    {imageUrl &&
                        <div className={style.imgWrap}>
                            <Image className={style.primaryImg} src={imageUrl} alt={headline} width={1920}
                                   height={800}/>
                        </div>
                    }
                </div>
            }
        </StyledSection>
    )
};

export { Hero };

