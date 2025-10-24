import Header from "./components/Header";
import Main from "./components/Main";
import CountriesContainer from "./components/CountriesContainer";
import Countrie from "./components/Countrie";
import dados from './api/data.json'

function Home() {
  return (
    <div>
      <Header/>
      <Main>
        <CountriesContainer>
          {
            dados.map(({flag,name,population,region,capital})=>{
              return(
                <Countrie 
                  flag={flag}
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                />
              )
            })
          }
        </CountriesContainer>
      </Main>
    </div>
  )
}

export default Home;