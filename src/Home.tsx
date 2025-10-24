import Header from "./components/Header";
import Main from "./components/Main";
import CountriesContainer from "./components/CountriesContainer";
import Countrie from "./components/Countrie";
import DisplayCountriesDetails from "./components/DisplayCountriesDetails";
import dados from './api/data.json'
import { useState } from "react";


function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  
  // 1. Função chamada quando um país é clicado
  const handleCountrySelect = (countryData:any)=>{
    // countryData agora contém todas as propriedades do país (graças ao {...countryData} no map)
    setSelectedCountry(countryData)
  }
  
  // 2. Função chamada quando o botão 'back' é clicado
  const handleBack = ()=>{
    setSelectedCountry(null); // Volta a mostrar a lista
  }


  console.log(dados);
  return (
    <div>
      <Header/>
      <Main>
        {/* Renderiza os detalhes se um país estiver selecionado */}
        {selectedCountry ? (
          // O objeto selecionado é passado diretamente como props
          <DisplayCountriesDetails {...selectedCountry} onBack={handleBack}/>
        ):(
          // Renderiza a lista de países
          <CountriesContainer>
            {
              dados.map((countryData)=>(
                  <Countrie 
                    // Passa todas as propriedades para o Countrie
                    {...countryData}
                    key={countryData.name} 
                    onSelect={handleCountrySelect}
                  />
                )
              )
            }
          </CountriesContainer>
        )}
      </Main>
    </div>
  )
}

export default Home;