import React from "react"
import './app.css'
import { originals,action,ComedyMovies,HorrorMovies,Documentaries,RomanceMovies } from "./Urls"
import Navbar from './Components/NavBar/Navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <RowPost url={originals}  title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall={true}/>
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall={true}/>
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall={true}/>
      <RowPost url={Documentaries} title='Documentaries' isSmall={true}/>
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall={true}/>
      <Footer/>
    </>
  )
}

export default App
