import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import customtheme from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { UserContextProvider } from '../contexts/UserContext'
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathnames_not_show_footer = ['/login', '/contracts', '/forgot-password', '/profile', '/reset-password', "/signup", "/create-contract", "/contract"]

  const show_footer = (pathname: string) => {

    const filterd = pathnames_not_show_footer.filter((pathname_list: string) => {
      var aux = pathname.replace("/", "");
      if (aux != "" && pathname_list.includes(aux))
        return true

      return false
    })
    console.log(pathname.replace("/", ""), filterd)
    if (filterd.length > 0) return false
    else return true
  }

  return (
    <UserContextProvider>
      <ChakraProvider theme={customtheme}>
        <main style={{ flex: 1 }}>
          <Header />

          <Component {...pageProps} />

          {show_footer(router.pathname) && <Footer />}


        </main>
      </ChakraProvider>
    </UserContextProvider>
  )


}
export default MyApp
