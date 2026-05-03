import Header from './components/Header'
import Main from './components/Main'
import BlueBanner from './components/BlueBanner'
import Footer from './components/Footer'
import FooterBottom from './components/FooterBottom'
import comics from './data/comics'


function App() {
  return (
    <>
      <Header />
      <Main comics={comics}/>
      <BlueBanner />
      <Footer />
      <FooterBottom />
    </>
  )
}

export default App