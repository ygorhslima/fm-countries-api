import React from "react";

interface mainProps{
    children:React.ReactNode;
}

function Main(props:mainProps){
    return(
        <main className="main">
            {props.children}
        </main>
    )
}

export default Main;