/* eslint-disable @typescript-eslint/no-explicit-any */

interface propsCountrie{
    /*initials informations*/

    flag:any;
    name:string;
    population:number;
    region:string;
    capital:any;

    /*details informations
        native_name:string;
        sub_region:string;
        top_level_domain:string;
        currencies:string;
        languages:string;    
    */
}

export default function Countrie(props:propsCountrie){
    return(
        <div>
            <img src={props.flag} alt={props.name} className="img-flag" />
            <h3>{props.name}</h3>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Capital: {props.capital}</p>
        </div>
    )
}