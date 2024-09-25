"use client";

import React, {ReactNode, useRef , useId} from "react";
import classNames from "classnames";
import styles from "./producttestimonials.module.scss";
import Slider from "react-slick";
import Image from 'next/image';
import Stars from '../ui/stars/stars';
import PageArrow from '../ui/pagearrow/pagearrow';
import styled from "styled-components";
import { ProductTestimonialItem } from "@/src/helpers/pageStructure";

type Props = {
    variant?: "left" | "right",
    headline: string,
    image: any,
    items: ProductTestimonialItem[],
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

const ProductTestimonials: React.FC<Props> = ({ctaButtonCopy, ctaButtonURL, paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile, variant = "right",headline, items, image}) => {

    const id = useId()
    const sliderRef = useRef(null);


    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };
        
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        adaptiveHeight: false,
        speed: 500,
        autoplay:false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: styles.dots,
    };

    const classes = {
        [styles.propTest]: 1,
        [styles.leftalign]: variant == "left",
        [styles.rightalign]: variant == "right",
    }

    return (
        <StyledSection className={classNames(classes)} paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile}>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.left}>
                        <h3 className={`headline-override ${styles.headline}`}>{headline}</h3>

                        <Slider ref={sliderRef} className={styles.slider} {...settings}>
                            {items.map((item, index) =>
                                <div className={classNames(styles.testimonialItem)}
                                    key={`${id}-items-${index}`}>
                                    <div className={classNames(styles.slide)}>
                                          {item.stars && <Stars numberOfStars={item.stars} />}
                                          <p className={styles.text}>{item.text}</p>  
                                          <p className={styles.name}>{item.name}</p>

                                    </div>
                                </div>
                            )}
                        </Slider>
                        <div className={styles.buttons}>
                            <div className={classNames(styles.button, styles.prev)} onClick={prevSlide}><PageArrow direction="previous" /></div>
                            <div className={classNames(styles.button, styles.next)} onClick={nextSlide}><PageArrow direction="next" /></div>
                        </div>

                    </div>
                    <div className={styles.right}>
                    {image && <Image className={`br-override ${styles.image}`} src={image} width={500} height={500} alt={`Testimonial Image`} />}
                    </div>
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

export { ProductTestimonials };