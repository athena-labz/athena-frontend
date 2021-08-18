import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}> 
      <main style={{flex:1}}>
          <Header />

          <Component {...pageProps} />
         
          <Footer />
          
       </main>
    </ChakraProvider>
  )
  
  
}
export default MyApp
