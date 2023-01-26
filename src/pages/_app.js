import '../../styles/globals.scss'
import Navbar from '../components/navigationBar'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Navbar/>
    <Component {...pageProps} />
  </>
}

export default MyApp
