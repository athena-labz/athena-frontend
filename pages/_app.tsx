import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathnames_not_show_footer = ['/login','/forgot-password','/reset-password']
  
  return (
    <ChakraProvider theme={theme}> 
      <main style={{flex:1}}>
          <Header />

          <Component {...pageProps} />
          
          {pathnames_not_show_footer.indexOf(router.pathname) === -1 &&  <Footer /> }
         
          
       </main>
    </ChakraProvider>
  )
  
  
}
export default MyApp
