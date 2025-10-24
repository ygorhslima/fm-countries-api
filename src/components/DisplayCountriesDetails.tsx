import type { propsCountrie } from "../interfaces/propsCountrie"

export default function DisplayCountriesDetails(props:propsCountrie & {onBack:()=>void}){

    // funções auxiliares para extrair o texto

    const getCurrencyNames=()=>{
        if(!props.currencies) return 'N/A';
        return props.currencies.map(c=>c.name).join(", ");
    }

    const getLanguagesNames=()=>{
        if(!props.languages) return "N/A";
        return props.languages.map(l=>l.name).join(", ");
    }

    const getTopLevelDomain=()=>{
        if(!props.topLevelDomain) return "N/A";
        return props.topLevelDomain.join(", ");
    }

    return(
        <>
            <div className="display-countrie-details">
                {/*ao clicar no botão back chamamos a função onBack para voltar*/}
                <button onClick={props.onBack}>back</button>
                <div className="content">
                    <div className="countrie-img-container">
                        <img src={props.flag} alt={props.name} className="img-flag" />
                    </div>
                    
                    <h1>{props.name}</h1>

                    <div>
                        <p>Native Name {props.nativeName}</p>
                        <p>Population: {props.population}</p>
                        <p>Region: {props.region}</p>
                        <p>Sub Region: {props.subregion}</p>
                        <p>Capital: {props.capital}</p>
                    </div>

                    <div>
                        <p>Top Level Domain: {getTopLevelDomain()}</p>
                        <p>Currencies: {getCurrencyNames()}</p>
                        <p>Languages: {getLanguagesNames()}</p>
                    </div>

                    <div>
                        <h2>Border Countries: </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
