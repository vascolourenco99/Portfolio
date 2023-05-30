import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Routes from './Routes'
import "./App.css"
import ScrollToTopButton from './Components/ScrollToButton/ScrollButton'

function App() {
  
  
  return (
    <div>
      <Navbar/>
      <div className='App'>
        <Routes/>
        <ScrollToTopButton/>
        <Footer/>
      </div>
    </div>
  )
}

export default App