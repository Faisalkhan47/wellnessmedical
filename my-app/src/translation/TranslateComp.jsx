import React, { useEffect, useRef } from "react";

export default function TranslateComp(){
    const googleTranslateRef = useRef(null);

    useEffect(()=>{
        let intervalId;
        const checkGoogleTranslate = () =>{
            if(window.google && window.google.translate){
                clearInterval(intervalId);
                new window.google.translate.TranslateElement(
                    {pagelanguage:'en',
                        includedLanguages: 'en,ru,bn,tg,kk,uz,tk,ky,sw,es,fr,ar',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
                    googleTranslateRef.current
                );
            }
        }
        intervalId = setInterval(checkGoogleTranslate,100);
    },[]);
    return (
        <div>
            <div ref={googleTranslateRef}></div>
        </div>
    )
}