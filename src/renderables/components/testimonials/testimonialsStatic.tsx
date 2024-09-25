import React, {ReactNode} from "react";
import classNames from "classnames";
import styles from "./testimonials.module.scss";
import Slider from "react-slick";
import Image from 'next/image'
import styled from 'styled-components';
import { TestimonialItem } from "@/src/helpers/pageStructure";
import PageArrow from "@/src/renderables/components/ui/pagearrow/pagearrow";


type Props = {
    variant?: "b2c"|"b2b-three"|"b2b-one"
    headline: string,
    supheadline: string,
    abstract?: ReactNode,
    items: TestimonialItem[],
    bgimage?: any,
    bgblend?: boolean,
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
};


type StyledComponentProps = Pick<Props, 'bgblend' | 'bgimage' | 'paddingTopDesktop' | 'paddingBottomDesktop' | 'paddingTopMobile' | 'paddingBottomMobile' >;

const StyledDiv = styled.div<StyledComponentProps>`
  background-color: var(--primary-color); 
  ${props => props.bgblend && `
    background-blend-mode: multiply;
  `}
  background-size: cover; 
  background-position: center;
  background-image: ${props => {
    if (props.bgimage) return 'url('+props.bgimage+')';
    return 'none';
  }};   
    ${(props) => ( props.paddingTopDesktop || props.paddingTopDesktop === 0 )&& `padding-top: ${props.paddingTopDesktop}px!important;`}
    ${(props) => ( props.paddingBottomDesktop || props.paddingBottomDesktop === 0 ) && `padding-bottom: ${props.paddingBottomDesktop}px!important;`}
    
    @media screen and (max-width: 600px) {
        ${(props) => ( props.paddingTopMobile || props.paddingTopMobile === 0 ) && `padding-top: ${props.paddingTopMobile}px!important;`}
        ${(props) => ( props.paddingBottomMobile || props.paddingBottomMobile === 0 ) && `padding-bottom: ${props.paddingBottomMobile}px!important;`}
    }
`;



const Testimonials: React.FC<Props> = ({paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile, variant = "b2c",headline, supheadline, abstract, items, bgimage = '', bgblend = false}) => {

    
    // const nextSlide = () => {
    //     sliderRef.current.slickNext();
    // };

    // const prevSlide = () => {
    //     sliderRef.current.slickPrev();
    // };

    let numSlides = 1;
    let numSlidesTablet = 2;

    switch (variant) {
        case 'b2c':
            numSlides = 3;
          break;
        case 'b2b-three':
            numSlides = 3;
          break;
        case 'b2b-one':
            numSlides = 1;
            numSlidesTablet = 1;
          break;
        default:
            numSlides = 3;
          break;
    }
    
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        adaptiveHeight: false,
        speed: 500,
        autoplay:false,
        autoplaySpeed: 5000,
        slidesToShow: numSlides,
        slidesToScroll: 1,
        dotsClass: styles.dots,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: numSlides,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: numSlidesTablet,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };



    const classes = {
        [styles.testimonials]: 1,
        [styles.b2bThree]: variant == "b2b-three",
        [styles.b2bOne]: variant == "b2b-one",
        [styles.b2c]: variant == "b2c",
    }

    return (
            <StyledDiv bgimage={bgimage} bgblend={bgblend} className={classNames(classes)} paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile}>
                <div className={styles.container}>

                    <div className={styles.testimonialTop}>
                        <p className={styles.sup}>{supheadline}</p>
                        <h3 className={`headline-override ${styles.headline}`}>{headline}</h3>
                        {abstract && <p className={styles.abstract}>{abstract}</p>}
                    </div>

                    <div className={styles.testimonialData}>
                        <Slider className={styles.slider} {...settings}>
                        {items.map((item, index) =>
                            <div className={classNames(styles.testimonialItem)} key={`testimonials-items-${index}`}>
                                <div

                                    className={classNames(
                                        'br-override', // Add the br-override class here
                                        'keen-slider__slide',
                                        styles.slide
                                    )}
                                >

                                    <p className={styles.title}>{item.text}</p>

                                    {variant == 'b2c' && <div className={styles.name}>
                                        {item.image && <Image className={styles.icon} src={item.image} width={70} height={70} alt={`Testimonial ${index + 1}`} />}
                                        <div className={styles.namewrap}>
                                            <p className={styles.subtitle}>{item.name}</p>
                                            {item.company != '' && <p className={styles.company}>{item.company}</p>}
                                        </div>
                                    </div>}
                                    
                                    {variant == 'b2b-three' && <div className={styles.name}>
                                        <div>
                                            <p className={styles.subtitle}>{item.name}</p>
                                            {item.company != '' && <p className={styles.company}>{item.company}</p>}
                                        </div>
                                        {item.image && <Image className={styles.icon} src={item.image} width={43} height={43} alt={`Testimonial ${index + 1}`} />}
                                    </div>}

                                    {variant == 'b2b-one' && <div className={styles.nameOne}>
                                        <div className={styles.flexer}>
                                            {variant == 'b2b-one' && item.image && <div className={styles.iconTopWrap}><Image className={styles.icon} src={item.image} width={43} height={43} alt={`Testimonial ${index + 1}`} /></div>}
                                            <div>
                                                <p className={styles.subtitle}>{item.name}</p>
                                                {item.company != '' && <p className={styles.company}>{item.company}</p>}
                                            </div>

                                        </div>

                                        
                                    </div>}
                                    
                                </div>
                            </div>
                        )}
                        </Slider>
                    </div>
                    <div className={styles.buttons}>
                        <div className={classNames(styles.button, styles.prev)}><PageArrow direction="previous" /></div>
                        <div className={classNames(styles.button, styles.next)}><PageArrow direction="next" /></div>
                    </div>
                </div>
            </StyledDiv>
    )
};

export {Testimonials};