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
import WalletSelector from "../WalletSelector";

import { useUser } from "../../contexts/UserContext";
import { useWallet } from "../../contexts/WalletContext";

import { bech32addr } from "../../wallet/utils";

type Role = "Proposer" | "Contributor" | "Mediator";

type UserData = {
  role: Role;
  name: string;
  email: string;
  password: string;
};

export default function RegisterCard() {
  const { connect } = useWallet();

  const [userData, setUser] = useState<UserData>({
    email: "",
    password: "",
    name: "",
    role: "Contributor",
  });
  const [openWalletSelector, setOpenWalletSelector] = useState(false);
  const [failedAlert, setFailedAlert] = useState<string | null>(null);
  const { register } = useUser();

  function setName(name: string) {
    setUser({ ...userData, name: name });
  }

  function setEmail(email: string) {
    setUser({ ...userData, email: email });
  }

  function setPassword(password: string) {
    setUser({ ...userData, password: password });
  }

  function setRole(role: Role) {
    setUser({ ...userData, role: role });
  }

  function registrationFailed() {
    console.log("Registration failed");
  }

  return (
    <>
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
          <Heading fontSize={"5xl"}>Create your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Center>
            <RadioGroup
              defaultValue="2"
              onChange={setRole}
              value={userData.role}
            >
              <Stack spacing={5} direction="row">
                <Radio
                  size="md"
                  name="Contributor"
                  value="Contributor"
                  colorScheme="blue"
                >
                  Contributor
                </Radio>
                <Radio
                  size="md"
                  name="Proposer"
                  value="Proposer"
                  colorScheme="blue"
                >
                  Proposer
                </Radio>
                <Radio
                  size="md"
                  name="Mediator"
                  value="Mediator"
                  colorScheme="blue"
                >
                  Mediator
                </Radio>
              </Stack>
            </RadioGroup>
          </Center>
          <br />
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Name</FormLabel>
              <Input
                value={userData.name}
                onChange={(evt) => setName(evt.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={userData.email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={userData.password}
                onChange={(evt) => setPassword(evt.target.value)}
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
                onClick={(e) => {
                  if (
                    userData.email.trim() !== "" &&
                    userData.name.trim() !== "" &&
                    userData.password.trim() !== ""
                  ) {
                    setOpenWalletSelector(true);
                  }
                }}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <WalletSelector
        isOpen={openWalletSelector}
        onSelect={async (wallet) => {
          try {
            const result = await connect(wallet);

            if (result.success === true && "api" in result) {
              const addr = await bech32addr(result.api);
              register(
                userData.role,
                userData.name,
                userData.email,
                addr,
                userData.password,
                result.api
              )
                .then(() => {
                  Router.push("/");
                })
                .catch((err) => {
                  setFailedAlert(err);
                  setOpenWalletSelector(false);
                });
            } else if (result.success === false && "message" in result) {
              setFailedAlert(
                "Wallet not installed, please install wallet and refresh page!"
              );
              setOpenWalletSelector(false);
            }
          } catch (err: any) {
            console.error(err);
            setFailedAlert("Invalid wallet selected");
            setOpenWalletSelector(false);
          }
        }}
        onClose={() => setOpenWalletSelector(false)}
      />
    </>
  );
}
