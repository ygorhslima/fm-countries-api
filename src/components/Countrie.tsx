/* eslint-disable @typescript-eslint/no-explicit-any */

import type { propsCountrie } from "../interfaces/propsCountrie";

export default function Countrie(props:propsCountrie & { onSelect:(data:propsCountrie)=>void }){

    // função para lidar com o clique
    const handleClick = () =>{
        props.onSelect(props);
    }

    return(
        <div className="countrie-item" onClick={handleClick}>
            <div className="countrie-img-container">
                <img src={props.flag} alt={props.name} className="img-flag" />
            </div>
            <h3>{props.name}</h3>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Capital: {props.capital}</p>
        </div>
    )
}