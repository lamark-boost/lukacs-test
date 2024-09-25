import { Header } from "@/src/renderables/components/header/header";
import { Hero } from "@/src/renderables/components/hero/hero";

import { BodySectionUnion, ComponentMap, componentMap, pageStructure } from "../helpers/pageStructure";
import { Footer } from "@/src/renderables/components/footer/footer";

import { SetThemeSettings } from "@/src/renderables/components/setthemesettings"
import { Suspense } from "react";

import { Theme } from "@/src/renderables/components/theme/theme";


type Props = {
    pageContents: pageStructure;
    isLoading?: boolean;
    isError?: boolean;
    threadId?: string;
};

const Renderables: React.FC<Props> = ({pageContents, isLoading, isError, threadId}) => {

    const renderSection = (section: BodySectionUnion) => {
        if(section.type in componentMap) {
            const Component = componentMap[section.type as keyof ComponentMap];
            if(section.type == 'contact') {
                return <Suspense>
                    <Component {...section} />
                </Suspense>
            } else {
                return <Component{...section} />
            }
        } else {
            return (<></>);
        }
    };

    return (
        <>
        {pageContents && pageContents.ready &&
            <>
                <SetThemeSettings themeSettings={pageContents.themeSettings} />
                {pageContents.theme && <Theme theme={pageContents.theme} />}
                {pageContents.header &&<Header  {...pageContents.header} />}
                {pageContents.hero_section &&<Hero {...pageContents.hero_section}/>}
                {pageContents.body_sections && pageContents.body_sections.map((section, index) => {
                    return (
                        <div key={index}>
                            {renderSection(section)}
                        </div>
                    );
                })}
                {pageContents.footer && <Footer {...pageContents.footer} />}
            </>
        }        
        </>
    )
};

export default Renderables;