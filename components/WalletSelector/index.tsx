import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useWallet } from "../../contexts/WalletContext";
import { useUser } from "../../contexts/UserContext";
import { bech32addr } from "../../wallet/utils";

export default function WalletSelector() {
  const { getWallets, connect } = useWallet();
  const { register } = useUser();

  return (
    <Stack spacing={5} mx={"auto"} maxW={"md"} py={4} px={3} width="100%">
      <Stack align={"center"}>
        <Heading fontSize={"5xl"}>Select Wallet</Heading>
      </Stack>

      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={8}>
          <Stack spacing={4} direction="column">
            {Object.entries(getWallets()).map(
              ([key, { name, primaryColor, secundaryColor }]) => (
                <Button
                  size="lg"
                  bgGradient={`linear(to-r, ${primaryColor}, ${secundaryColor})`}
                  _hover={{
                    bgGradient: `linear(to-l, ${primaryColor}, ${secundaryColor})`,
                    transitionDelay: "500ms",
                  }}
                  onClick={() => {
                    connect(key)
                      .then(async (api) => {
                        console.log(api);
                        bech32addr(api).then((addr) => {
                          console.log(addr);
                          register(addr);
                        });
                      })
                      .catch(() => {});
                  }}
                >
                  {name}
                </Button>
              )
            )}
          </Stack>

          <Stack direction="row" spacing={4} justify="end">
            <Button variant="outline" colorScheme={"red"}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
