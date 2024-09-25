import React from "react";

type Props = {
    theme?: "theme1"|"theme2"|"theme3"|"theme4";
};

const Theme: React.FC<Props> = ({theme}) => {

    const styles = (() => {
        switch (theme) {
            case 'theme1':
                return `.cta-override {\n
                            padding: 15px 20px!important;\n 
                            font-weight: normal;\n
                            border-radius: 0;\n
                            background: var(--secondary-color)!important;\n
                        }\n
                        
                        .bg-override {\n
                            background: #fff!important;\n
                        }\n
                        .bg-override2 {\n
                            background: var(--primary-tint-color)!important;\n
                        }\n
                        .br-override {\n
                            border-radius: 0!important;\n
                        }\n`;
            case 'theme2':
                return `.cta-override {\n
                            padding: 18px 25px!important;\n
                            font-weight: bold;\n
                            border-radius: 30px;\n
                            background: var(--primary-color)!important;\n
                        }\n
                        .cta-override:hover {\n
                            background: var(--secondary-color)!important;\n
                        }\n
                        .hero > div >div > div > div > div:first-of-type {\n
                            font-size:20px!important;\n
                            color: var(--secondary-color)!important;\n
                        }\n
                        .bg-override {\n
                            background: var(--primary-tint-color)!important;\n
                        }\n
                        .br-override {\n
                            border-radius: 30px!important;\n
                        }\n
                        .subhead-override {\n
                            font-size: 20px!important;\n
                            text-transform: uppercase;\n
                        }\n
                        `;

            default:
                return '';
        }
    })();

    return (
        <>
        <style
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
        />
        </>
        
    )

};

export { Theme };