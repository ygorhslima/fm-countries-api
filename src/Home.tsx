import Header from "./components/Header";
import Main from "./components/Main";
import CountriesContainer from "./components/CountriesContainer";
function Home() {
  return (
    <div>
      <Header/>
      <Main>
        <CountriesContainer>
          <div>Card</div>
        </CountriesContainer>
      </Main>
    </div>
  )
}

export default Home;