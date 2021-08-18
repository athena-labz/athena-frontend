// Using a style object
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  components: {
    Divider:{
      baseStyle: {
        color: "#1a202c",
      },
    }
  },
    colors: {
      brand: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
    },
  })
  

