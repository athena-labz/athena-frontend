import { useState } from "react";
import Router from "next/router";
import {
  Alert,
  AlertIcon,
  Box,
  CloseButton,
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
import { useUser } from "../../contexts/UserContext";

export default function LoginCard() {
  const [loginData, setLogin] = useState({ email: "", password: "" });
  const [failedAlert, setFailedAlert] = useState<string | null>(null);
  const { login } = useUser();

  return (
    <Stack spacing={1} mx={"auto"} maxW={"md"} py={4} px={3}>
      <Alert status="error" hidden={failedAlert === null}>
        <AlertIcon />
        {failedAlert}
        <CloseButton
          onClick={() => setFailedAlert(null)}
          position="absolute"
          right="8px"
          top="8px"
        />
      </Alert>
      <Stack align={"center"}>
        <Heading fontSize={"5xl"}>Sign in to your account</Heading>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={loginData.email}
              onChange={(evt) =>
                setLogin({ ...loginData, email: evt.target.value })
              }
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={loginData.password}
              onChange={(evt) =>
                setLogin({ ...loginData, password: evt.target.value })
              }
            />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link href="/forgot-password" color={"blue.400"}>
                Forgot password?
              </Link>
            </Stack>
            <Button
              onClick={async (e) => {
                login(loginData.email, loginData.password)
                  .then(() => {
                    Router.push("/");
                  })
                  .catch((err) => {
                    setFailedAlert(err);
                  });
              }}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
