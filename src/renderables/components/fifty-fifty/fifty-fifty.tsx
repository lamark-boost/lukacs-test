'use client'
import React, {ReactNode, ReactElement, useId, useState, useEffect, Suspense} from "react";
import classNames from "classnames";
import Image from 'next/image'
import styles from "./hero-fifty.module.scss";
import styles2 from "../contact/contact.module.scss";
import styles3 from "./hero-fifty2.module.scss";
import { ContactForm } from "../contactform/contactform";
import {Contact} from "@/src/renderables/components/contact/contact";
import styled from 'styled-components';

type Props = {
    imageUrl?: string,
    subhead?: string,
    headline: string,
    supportCopy?: string,
    ctaButtonURL: string,
    ctaButtonCopy: string,
    supportBulletedList?: string[]

    abstract?: ReactNode,
    rightheadline?: string,
    terms?: ReactNode,
    paddingTopDesktop?: string,
    paddingBottomDesktop?: string,
    paddingTopMobile?: number,
    paddingBottomMobile?: number,
};