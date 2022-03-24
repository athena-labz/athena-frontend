/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { Box, useStyleConfig } from "@chakra-ui/react";
function Card(props) {
  const { variant, children, ...rest } = props;
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={{
      p: "15px",
      display: "flex",
      flexDirection: "column",
      backdropFilter: "blur(120px)",
      width: "100%",
      borderRadius: "20px",
    }} {...rest}>
      {children}
    </Box>
  );
}

export default Card;
