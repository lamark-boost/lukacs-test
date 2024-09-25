import { ReactNode } from "react";

import { Accordion as AccordionComponent } from "../renderables/components/accordion/accordion";
import { Testimonials as TestimonialComponent } from "../renderables/components/testimonials/testimonials";
import { ValueProps as  ValuePropsComponent} from "../renderables/components/value-props/value-props";
import { Steps as StepsComponent} from "../renderables/components/steps/steps";
import { Logos as LogosComponent } from "../renderables/components/logos/logos";
import { Services as ServicesComponent } from "../renderables/components/services/services";
import { Contact as ContactComponent } from "../renderables/components/contact/contact";
import { ProductCategory as ProductCategoryComponent } from "../renderables/components/productcategory/productcategory";
import { FeaturedProduct as FeaturedProductComponent } from "../renderables/components/featured-product/featured-product";
import { ProductTestimonials as ProductTestimonialsComponent } from "../renderables/components/producttestimonials/producttestimonials";
import { SegmentedOffer as SegmentedOfferComponent } from "../renderables/components/segmented-offer/segmented-offer";


export enum LPTypes{
    eCommerce = 'eCommerce',
    leadGeneration = 'Lead Generation'
}

export interface ThemeSettings {
    font : string,
    headingFont : string,
    primary_brand_color: string,
    secondary_brand_color: string,
    tertiary_brand_color: string,
    whiteTextColor: string,
    blackTextColor: string,
    slickActiveColor: string,
    slickInactiveColor: string,
    text_overlay_color: string
};

export interface Header {
    logoUrl: string,
    clickToCall: string,
    ctaURL: string,
    ctaCopy: string,
    messaging: string,
    logoWidth: number,
    backgroundColor: string
}

export interface Footer {
    logoUrl: string,
    companyName?: string,
    copyrightInformation?: string,
    policyLinks?: ReactNode[],
    socialMediaLinks?: string[],
    backgroundColor?: string
}

export interface Hero {
    imageUrl?: string,
    subhead?: string,
    headline: string,
    supportCopy?: string,
    cta1ButtonURL: string,
    cta1ButtonCopy: string,
    supportBulletedList?: string[],
    variant?: "fifty"|"fifty-color-bg"|"form-b2b"|"form-b2c"|"hundred",
    abstract?: ReactNode,
    rightheadline?: string,
    terms?: ReactNode,
}

export interface BodySection {
    type: string;
}

export interface TestimonialItem {
    text: string,
    name: string,
    company?: string,
    image?: any,
}

export interface LogoItem {
    src: string,
    width: number,
    height: number,
}

export interface TestimonialCarousel extends BodySection{
    type: 'testimonial-carousel',
    variant?: "b2c"|"b2b-three"|"b2b-one",
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
}

export interface AccordionItem {
    question: string,
    answer: ReactNode
}

export interface AccordionItems {
    category?: string,
    items: AccordionItem[],
}

export interface Accordion extends BodySection{
    type: 'accordion',
    headline: string,
    supheadline: string,
    items: AccordionItems[],
    arrowfillcolor?: string,
    ctaButtonURL?: string;
    ctaButtonCopy?: string;
    paddingTopDesktop?: number;
    paddingBottomDesktop?: number;
    paddingTopMobile?: number;
    paddingBottomMobile?: number;
}

export interface vProps {
    imgURL: string,
    headline: string,
    supportCopy: string,
}

export interface ValueProps extends BodySection {
    type: 'value-props',
    vps: vProps[],
    variant?: "v1"|"v2"|"v3"|"v4",
    subhead?: string,
    headline?: string,
    supportCopy?: string,
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
    ctaButtonURL?: string,
    ctaButtonCopy?: string,
}

export interface Steps extends BodySection {
    type: 'steps',
    vps: vProps[],
    subhead?: string,
    headline?: string,
    supportCopy?: string,
};

export interface Logos extends BodySection {
    type: 'logos',
    subhead?: string,
    headline: string,
    logoList: string[],
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
    ctaButtonURL?: string,
    ctaButtonCopy?: string,
};

export interface Services {
    type: 'services'
    vps?: vProps[],
    variant?: "v1"|"v2",
    list?: string[],
    subhead?: string,
    headline?: string,
    supportCopy?: string,
    imageURL: string
};

export interface Contact {
    type: 'contact',
    variant?: "b2c"|"b2b",
    headline: string,
    supheadline?: string,
    supportBulletedList?: string[],
    abstract: ReactNode,
    rightheadline?: string,
    ctatext?: string,
    ctaurl?: string,
    terms?: ReactNode,
};

export interface ProductCategoryItem {
    image: any,
    linktext: string,
    linkurl: string,
}

export interface ProductCategory {
    type: 'product-category'
    variant?: "b2c" | "b2b",
    headline: string,
    supheadline?: string,
    abstract?: ReactNode,
    items: ProductCategoryItem[],
    paddingTopDesktop?: number,
    paddingBottomDesktop?: number,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
};

export interface FeaturedProduct {
    type: 'featured-product',
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
    variant?: "v1"|"v2"|"v3";
};


export interface ProductTestimonialItem {
    text: string,
    name: string,
    stars?: number,
}

export interface ProducTestimonials {
    type: 'product-testimonials',
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

export interface SegmentedOffer {
    type: 'segmented-offer',
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


export type BodySectionUnion = Accordion | TestimonialCarousel | ValueProps | Steps | Logos | Services | Contact | ProductCategory | FeaturedProduct | ProducTestimonials | SegmentedOffer;

export interface pageStructure {
    ready: boolean;
    brand_name?: string;
    logo_url?: any;
    theme: "theme1"|"theme2";
    themeSettings: ThemeSettings;
    landing_page_type?: LPTypes,
    header: Header,
    footer: Footer,
    hero_section: Hero,
    body_sections?: BodySectionUnion[]
}

export const componentMap: { [K in BodySectionUnion['type']]: React.FC<any> } = {
    'accordion': AccordionComponent,
    'testimonial-carousel': TestimonialComponent,
    'value-props': ValuePropsComponent,
    'steps': StepsComponent,
    'logos': LogosComponent,
    'services': ServicesComponent,
    'contact': ContactComponent,
    'product-category': ProductCategoryComponent,
    'featured-product': FeaturedProductComponent,
    'product-testimonials': ProductTestimonialsComponent,
    'segmented-offer': SegmentedOfferComponent,
};

export type ComponentMap = typeof componentMap;