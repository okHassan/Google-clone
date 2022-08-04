import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import SearchBer from '../Components/Search_ber'


const Home = () => {
    return (
        <div className='w-full h-[100vh] bg-[#202124] overflow-hidden'>
            <Header/>
            <SearchBer/>
            <Footer/>
        </div>
    )
}

export default Home