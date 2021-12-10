import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import customtheme  from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathnames_not_show_footer = ['/login','/forgot-password','/profile','/reset-password',"/signup","/create-contract","/contract"]
  
  const show_footer = (pathname:string)=>{

    const filterd = pathnames_not_show_footer.filter((pathname_list:string)=>{ 
      if(pathname_list.includes(pathname))
        return true
    
      return false
    })

    if(filterd) return false
    else return true
  }

  return (
    <ChakraProvider theme={customtheme}> 
      <main style={{flex:1}}>
          <Header />

          <Component {...pageProps} />
          
          {show_footer(router.pathname) &&  <Footer /> }
         
          
       </main>
    </ChakraProvider>
  )     
  
  
}
export default MyApp
