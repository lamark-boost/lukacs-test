import React from "react";
import classNames from "classnames";
import styles from "./accordion.module.scss";
import { AccordionItems } from "@/src/helpers/pageStructure";
import styled from "styled-components";


// Extend props for the main component
interface Props {
    headline: string;
    supheadline: string;
    items: AccordionItems[];
    arrowfillcolor?: string;
    ctaButtonURL?: string;
    ctaButtonCopy?: string;
    paddingTopDesktop?: number;
    paddingBottomDesktop?: number;
    paddingTopMobile?: number;
    paddingBottomMobile?: number;
}

type StyledComponentProps = Pick<Props, 'paddingTopDesktop' | 'paddingBottomDesktop' | 'paddingTopMobile' | 'paddingBottomMobile' >;

// Define the styled component with the correct types
const StyledSection = styled.section<StyledComponentProps>`
  ${(props) => ( props.paddingTopDesktop !== undefined || props.paddingTopDesktop === 0 ) && `padding-top: ${props.paddingTopDesktop}px !important;`}
  ${(props) => ( props.paddingBottomDesktop !== undefined || props.paddingBottomDesktop === 0 ) && `padding-bottom: ${props.paddingBottomDesktop}px !important;`}
  
  @media screen and (max-width: 600px) {
    ${(props) => ( props.paddingTopMobile !== undefined || props.paddingTopMobile === 0 ) && `padding-top: ${props.paddingTopMobile}px !important;`}
    ${(props) => ( props.paddingBottomMobile !== undefined || props.paddingBottomMobile === 0 ) && `padding-bottom: ${props.paddingBottomMobile}px !important;`}
  }
`;

const Accordion: React.FC<Props> = ({
                                        ctaButtonCopy,
                                        ctaButtonURL,
                                        paddingTopDesktop,
                                        paddingBottomDesktop,
                                        paddingTopMobile,
                                        paddingBottomMobile,
                                        headline,
                                        supheadline,
                                        items,
                                        arrowfillcolor = '#17437d',
                                    }) => {
    let openTab = "";

    const toggleTab = (index: string) => {
        // Using the callback approach here to avoid issues with rapid repeated clicks
        openTab = openTab === index ? "" : index;
    };

    return (
        <StyledSection
            paddingBottomDesktop={paddingBottomDesktop}
            paddingTopDesktop={paddingTopDesktop}
            paddingBottomMobile={paddingBottomMobile}
            paddingTopMobile={paddingTopMobile}
            className={styles.accordionWrap}
        >
            <div className={styles.container}>
                <p className={`subhead-override ${styles.sup}`}>{supheadline}</p>
                <h3 className={`headline-override ${styles.headline}`}>{headline}</h3>
                <div className={styles.accordionData}>
                    {items.map((catitem, index) => (
                        <React.Fragment key={`category-${index}`}>
                            {catitem.category && (
                                <p className={styles.category}>{catitem.category}</p>
                            )}

                            {catitem.items.map((item, index2) => (
                                <div
                                    className={classNames(
                                        'br-override', // Add the br-override class here
                                        styles.accordion_wrap,
                                        {
                                            [styles.open]: openTab === `${index}-${index2}`,
                                        }
                                    )}
                                    key={`accordion-items-${index}-${index2}`}
                                >
                                    <div
                                        className={styles.top}
                                        onClick={() => toggleTab(`${index}-${index2}`)}
                                    >
                                        <div className={styles.question}>{item.question}</div>
                                        <div className={styles.icon}>
                                            <svg
                                                className={styles.svg}
                                                viewBox="25 10 50 80"
                                                version="1.1"
                                                x="0px"
                                                y="0px"
                                            >
                                                <g
                                                    stroke="none"
                                                    strokeWidth="1"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                >
                                                    <g fill={`${arrowfillcolor}`}>
                                                        <path
                                                            d="M67.5251263,62.4748737 C68.8919613,63.8417088 71.1080387,63.8417088 72.4748737,62.4748737 C73.8417088,61.1080387 73.8417088,58.8919613 72.4748737,57.5251263 L52.4748737,37.5251263 C51.1080387,36.1582912 48.8919613,36.1582912 47.5251263,37.5251263 L27.5251263,57.5251263 C26.1582912,58.8919613 26.1582912,61.1080387 27.5251263,62.4748737 C28.8919613,63.8417088 31.1080387,63.8417088 32.4748737,62.4748737 L50.0095722,44.9401752 L67.5251263,62.4748737 Z"
                                                            transform="translate(50.000000, 50.000000) rotate(-90.000000) translate(-50.000000, -50.000000) "
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={styles.bottom}>
                                        <div className={styles.bottom_inner}>
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
                {ctaButtonCopy !== '' && ctaButtonCopy && (
                    <div className={styles.ctaWrap}>
                        <a
                            className={`cta-override ${styles.btn}`}
                            href={ctaButtonURL}
                        >
                            {ctaButtonCopy}
                        </a>
                    </div>
                )}
            </div>
        </StyledSection>
    )
};

export { Accordion };
