import React from "react"


interface CountriesContainerProps{
    children:React.ReactNode;    
}

export default function CountriesContainer(props:CountriesContainerProps){
    return(
        <section className="countries-container">
            {props.children}
        </section>
    )
}