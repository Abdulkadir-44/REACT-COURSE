import Header from './Header'
import Footer from './Footer'
import Provider from "../context/MyContext"

const Home = () => {

    return (
        <Provider>
            <div className='container mx-auto flex  justify-between'>
            <Header />
            <Footer />
            </div>
        </Provider>
    )
}

export default Home