import TagManager from "react-gtm-module";

const tagManagerArgs = {
    dataLayer: {
        event: 'Form Submitted'
    }
}

export const handleResponse = (data: Record<string, any>) => {
    
    TagManager.dataLayer(tagManagerArgs)
    

    if (data && data.hasOwnProperty('error')) {
        //we return error
        return 2;
    }

    //always yay for now
    return 1;
        
}