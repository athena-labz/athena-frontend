
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import customtheme from "../theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContextProvider } from "../contexts/UserContext";
import { WalletContextProvider } from "../contexts/WalletContext";
import Loader from "../wallet/loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [wasmLoading, setWasmLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Loader.load().then(() => {
      setWasmLoading(false);
    });
  }, []);

  useEffect(() => {
    // Redundant right now, but in the future we might add more loading components
    if (wasmLoading === false) setLoading(false);
  }, [wasmLoading]);

  const router = useRouter();
  const pathnames_not_show_footer = [
    "/login",
    "/contracts",
    "/forgot-password",
    "/profile",
    "/reset-password",
    "/signup",
    "/create-contract",
    "/contract",
  ];

  const show_footer = (pathname: string) => {
    const filterd = pathnames_not_show_footer.filter(
      (pathname_list: string) => {
        var aux = pathname.replace("/", "");
        if (aux != "" && pathname_list.includes(aux)) return true;

        return false;
      }
    );
    console.log(pathname.replace("/", ""), filterd);
    if (filterd.length > 0) return false;
    else return true;
  };

  // Chakra UI has weird margin-right by default
  if (typeof document !== "undefined")
    document.body.setAttribute('style', 'margin-right: 0 !important');

  if (loading === false)
    return (
      <WalletContextProvider>
        <UserContextProvider>
          <ChakraProvider theme={customtheme}>
            <main style={{ flex: 1 }}>
              <Header />

              <Component {...pageProps} />

              {show_footer(router.pathname) && <Footer />}
            </main>
          </ChakraProvider>
        </UserContextProvider>
      </WalletContextProvider>
    );
  else
    return <Spinner />
}
export default MyApp;
