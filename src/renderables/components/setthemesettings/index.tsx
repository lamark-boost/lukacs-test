"use client";

import React, { useEffect } from 'react';
import { lightenHexColor } from "@/src/helpers/colorGenerator";
import { ThemeSettings } from '@/src/helpers/pageStructure';

type Props = {
    themeSettings: ThemeSettings;
};


const SetThemeSettings: React.FC<Props> = ({themeSettings}) => {

    useEffect(() => {
        // Get the header height dynamically
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
    
        // Find all anchor elements with href="#"
        const links = document.querySelectorAll('a[href="#"]');
    
        // Define the scroll-to behavior
        const handleClick = (event) => {
          event.preventDefault(); // Prevent default link behavior
    
          // Find the element to scroll to
          const targetElement = document.getElementById('to-form');
          if (targetElement) {
            // Calculate the scroll position to account for the header height
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
    
            // Scroll to the calculated position smoothly
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        };
    
        // Attach click event listener to all matching links
        links.forEach((link) => {
          link.addEventListener('click', handleClick);
        });
    
        // Cleanup: Remove event listener when component unmounts
        return () => {
          links.forEach((link) => {
            link.removeEventListener('click', handleClick);
          });
        };
      }, []); // Empty dependency array to ensure this only runs once
    

    useEffect(() => {

        if(themeSettings) {
        
          const fontName = themeSettings.font;
          const fontHeadingName = themeSettings.headingFont;
    
          const styleId = 'dynamic-fonts-style';
    
          // Remove existing style element if it exists
          const existingStyleElement = document.getElementById(styleId);
          if (existingStyleElement) {
            existingStyleElement.remove();
          }
    
          // Create a new style element
          const styleElement = document.createElement('style');
          styleElement.id = styleId;
    
          
          // const formattedFontName = fontName.replace(/\s+/g, '+');
          // const formattedHeadingFontName = fontHeadingName.replace(/\s+/g, '+');
    
          document.documentElement.style.setProperty('--slick-active-color',    `${themeSettings.slickActiveColor ?? '#5a4ac7'}`);
          document.documentElement.style.setProperty('--slick-inactive-color',  `${themeSettings.slickInactiveColor ?? '#000'}`);
          document.documentElement.style.setProperty('--primary-color',         `${themeSettings.primary_brand_color}`);
          document.documentElement.style.setProperty('--primary-tint-color',    `${lightenHexColor(themeSettings.primary_brand_color,20)}`);
          document.documentElement.style.setProperty('--secondary-color',       `${themeSettings.secondary_brand_color}`);
          document.documentElement.style.setProperty('--secondary-tint-color',  `${lightenHexColor(themeSettings.secondary_brand_color,20)}`);
          document.documentElement.style.setProperty('--tertiary-color',        `${themeSettings.tertiary_brand_color}`);
          document.documentElement.style.setProperty('--white-text-color',      `${themeSettings.whiteTextColor ?? '#fff'}`);
          document.documentElement.style.setProperty('--black-text-color',      `${themeSettings.blackTextColor ?? '#000'}`);
          document.documentElement.style.setProperty('--text-overlay-color',      `${themeSettings.text_overlay_color ?? '#000'}`);
    
          document.documentElement.style.setProperty('--base-font', `'${fontName}', sans-serif`);
          document.documentElement.style.setProperty('--heading-font', `'${fontHeadingName}', sans-serif`);
    
          let cssCode = `@import url('https://fonts.googleapis.com/css2?family=${fontName}&display=swap');`;     
    
          if (fontName != fontHeadingName) {
            cssCode += `@import url('https://fonts.googleapis.com/css2?family=${fontHeadingName}&display=swap');`; 
          }
          // Append the generated CSS code to the style element
          styleElement.innerHTML = cssCode;
          document.head.appendChild(styleElement);
    
          
    
          // Cleanup on unmount
          return () => {
            styleElement.remove();
          };
        }
    }, [themeSettings]);

    return (
        <></>
    );

};

export { SetThemeSettings };