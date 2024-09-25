"use client";

import React, {ReactNode, useRef , useId} from "react";
import classNames from "classnames";
import styles from "./productcategory.module.scss";
import Image from 'next/image';
import styled from "styled-components";
import { ProductCategoryItem } from "@/src/helpers/pageStructure";

type Props = {
    variant?: "b2c" | "b2b",
    headline: string,
    subhead?: string,
    abstract?: ReactNode,
    items: ProductCategoryItem[],
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

const ProductCategory: React.FC<Props> = ({paddingTopDesktop, paddingBottomDesktop, paddingBottomMobile, paddingTopMobile, variant = "b2b", headline, subhead, abstract = "", items}) => {

    const id = useId()
    
        

    const classes = {
        [styles.propCats]: 1,
        [styles.b2c]: variant == "b2c",
        [styles.b2b]: variant == "b2b",
    }

    return (
        <StyledSection className={classNames(classes)} paddingBottomDesktop={paddingBottomDesktop} paddingTopDesktop={paddingTopDesktop} paddingBottomMobile={paddingBottomMobile} paddingTopMobile={paddingTopMobile}>
            <div className={styles.container}>

                <div className={styles.propCatsTop}>
                        {subhead && <p className={`subhead-override ${styles.sup}`}>{subhead}</p>}
                        <h3 className={`headline-override ${styles.headline}`}>{headline}</h3>
                        {abstract && <p className={styles.abstract}>{abstract}</p>}
                </div>

                <div className={styles.flex}>
                {items.map((item, index) =>
                    <div key={`${id}-items-${index}`} className={`br-override ${styles.flexItem}`}>
                        {item.image && <Image className={styles.image} style={{objectFit: "cover"}} src={item.image} width={280} height={420} alt={`Category Image`} />}
                        <a className={`cta-override ${styles.ctalink}`} href={item.linktext}>{item.linktext}</a>
                    </div>
                )}
                </div>

                
            </div>
        </StyledSection>
    )
};

export { ProductCategory };