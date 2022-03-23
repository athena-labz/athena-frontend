// Chakra imports
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Button,
  DarkMode,
  Flex,
  Grid,
  Icon,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";

const tablesTableData = [
  {
    name: "Bipede robot crowd-funding",
    email: "Humanoid robots conceived with the final objective to have",
    subdomain: "Manager",
    domain: "Organization",
    status: "Progress",
    date: "14/06/21",
    link:"http://localhost:3000/campaign/93fb923456f9f955908f6092a6c58057"
  },
  {
    name: "Thunder Road: Vendetta",
    email: "The classic 1986 game about the world's most lethal",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Dispute",
    date: "12/05/21",
    link:"http://localhost:3000/campaign/259bf04f526341c498ebf1ce582d1291"
  },
  {
    name: "Floating Floors",
    email: "A tactical game of balance and cunning 🐱‍👤 ⛩️.",
    subdomain: "Executive",
    domain: "Projects",
    status: "Finished",
    date: "07/06/21",
    link:"http://localhost:3000/campaign/27b4039a42d9d632a5e791b166127c42"
  }
];

// Custom components
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardHeader from "../components/Card/CardHeader";
import IconBox from "../components/Icons/IconBox";
import TablesProjectRow from "../components/Tables/TablesProjectRow";
import TablesTableRow from "../components/Tables/TablesTableRow";


// Icons
import { IoDocumentsSharp } from "react-icons/io5";
import { SiTrustpilot } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { GiInjustice } from "react-icons/gi";
import {
  FaCube,
  FaPencilAlt,
} from "react-icons/fa";
import {  FulgerWhiteIcon } from "../components/Icons/Icons";

function Profile() {
  return (
    <Flex direction='column' p={8}>
      <Card
        direction={{ sm: "column", md: "row" }}
        bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 12%, rgba(56,182,255,1) 100%);"
        mx='auto'
        maxH='330px'
        w={{ sm: "90%", xl: "100%" }}
        justifyContent={{ sm: "center", md: "space-between" }}
        align='center'
        p='24px'
        borderRadius='20px'
        mt='6px'>
        <Flex align='center' direction={{ sm: "column", md: "row" }}>
          <Flex
            align='center'
            mb={{ sm: "10px", md: "0px" }}
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "start" }}>
            <Avatar
              me={{ md: "22px" }}
              name="Mark Johnson"
              w='80px'
              h='80px'
              borderRadius='15px'>
              <AvatarBadge
                cursor='pointer'
                borderRadius='8px'
                border='transparent'
                bg='linear-gradient(138.78deg, rgba(6, 11, 40, 0.94) 17.44%, rgba(10, 14, 35, 0.49) 93.55%, rgba(10, 14, 35, 0.69) 93.55%)'
                boxSize='26px'
                backdropFilter='blur(120px)'>
                <Icon h='12px' w='12px' color='#fff' as={FaPencilAlt} />
              </AvatarBadge>
            </Avatar>
            <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
              <Text
                fontSize={{ sm: "lg", lg: "xl" }}
                color='#fff'
                fontWeight='bold'
                ms={{ sm: "8px", md: "0px" }}>
                Mark Johnson
              </Text>
              <Text fontSize={{ sm: "sm", md: "md" }} color='gray.400'>
                mark@simmmple.com
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            w={{ sm: "100%", md: "50%", lg: "auto" }}>
            <Button
              borderRadius='12px'
              bg='brand.200'
              _hover={{ opacity: "0.8" }}
              _active={{ opacity: "0.9" }}
              me={{ base: "none", lg: "20px" }}
              leftIcon={<Icon color='white' as={FaCube} me='6px' />}>
              <Text fontSize='xs' color='#fff' fontWeight='bold'>
                REVIEWS
              </Text>
            </Button>
            <Button
              borderRadius='12px'
              bg='transparent'
              _hover={{
                bg: "brand.200",
              }}
              _active={{
                bg: "brand.200",
              }}
              me={{ base: "none", lg: "20px" }}
              leftIcon={
                <Icon color='white' as={IoDocumentsSharp} me='6px' />
              }>
              <Text fontSize='xs' color='#fff' fontWeight='bold'>
                DISPUTES
              </Text>
            </Button>

          </Flex>
        </Flex>
      </Card>

      {/* Car Informations */}
      <Card
        p='8px'
        bg="white"
        mb={5}
        mt={5}
        maxH={{ lg: "410px" }}
        maxW={{ sm: "325px", md: "725px", lg: "980px", xl: "100%" }}
        gridArea={{ xl: "2 / 1 / 3 / 3", "2xl": "auto" }}>
        <CardHeader p='12px 5px' mb='12px'>
          <Flex direction='column'>
            <Text fontSize='lg' color='gray.600' fontWeight='bold'>
              Resume
            </Text>
          </Flex>
        </CardHeader>
        <CardBody w='100%'>
          <Flex w='100%' direction={{ sm: "column", md: "row" }}>
            <Grid
              templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }}
              gap='24px'
              w='100%'
              alignSelf='flex-start'>
              <Flex
                align='center'
                p='18px'
                justify='space-between'
                bg='blue.500'
                borderRadius='20px'>
                <Flex direction='column' me='auto'>
                  <Text fontSize='sm' color='white' mb='3px'>
                    CAS
                  </Text>
                  <Text color='#fff' fontSize='22px' fontWeight='bold'>
                    62.25
                  </Text>
                </Flex>
                <IconBox bg='brand.200' w='56px' h='56px' direction='column'>
                  <SiTrustpilot size={'1.5rem'} color="white" />
                  <FulgerWhiteIcon
                    w='8px'
                    h='11px'
                    transform='rotate(90deg)'
                  />
                </IconBox>
              </Flex>
              <Flex
                align='center'
                p='18px'
                justify='space-between'
                bg='blue.500'
                borderRadius='20px'>
                <Flex direction='column' me='auto'>
                  <Text fontSize='sm' color='white' mb='3px'>
                    PROJECTS
                  </Text>
                  <Text color='#fff' fontSize='22px' fontWeight='bold'>
                    3
                  </Text>
                </Flex>
                <IconBox bg='brand.200' w='56px' h='56px' direction='column'>
                  <MdWork size={'1.9rem'} color="white" />
                  
                </IconBox>
              </Flex>
              <Flex
                align='center'
                p='18px'
                justify='space-between'
                bg='blue.500'
                borderRadius='20px'>
                <Flex direction='column' me='auto'>
                  <Text fontSize='sm' color='white' mb='3px'>
                    DISPUTES
                  </Text>
                  <Text color='#fff' fontSize='22px' fontWeight='bold'>
                    1
                  </Text>
                </Flex>
                <IconBox bg='brand.200' w='56px' h='56px' direction='column'>
                  <GiInjustice size={'1.9rem'} color="white" />
                  
                </IconBox>
              </Flex>
            </Grid>
          </Flex>
        </CardBody>
      </Card>


      {/* Projects Table */}
      <Card
        overflowX={{ sm: "scroll", xl: "hidden" }}
        bg="white"
        border="1px solid #e7e7e7"
        pb='0px'
      >
        <CardHeader p='6px 0px 22px 0px'>
          <Text fontSize='lg' color='blue.500' fontWeight='bold'>
            Projects
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color='#fff'>
            <Thead>
              <Tr my='.8rem' ps='0px' color='gray.400'>
                <Th
                  ps='0px'
                  color='blue.400'
                  borderBottomColor='#56577A'>
                  Name
                </Th>
                <Th
                  color='blue.400'
                  borderBottomColor='#56577A'>
                  Function
                </Th>
                <Th
                  color='blue.400'
                  borderBottomColor='#56577A'>
                  Status
                </Th>
                <Th
                  color='blue.400'
                  borderBottomColor='#56577A'>
                  Employed
                </Th>
                <Th borderBottomColor='#56577A' color='blue.400'> DETAILS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row, index, arr) => {
                return (
                  <TablesTableRow
                    key={row.name}
                    name={row.name}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                    status={row.status}
                    date={row.date}
                    lastItem={index === arr.length - 1 ? true : false}
                    link={row.link}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>

    </Flex>
  );
}

export default Profile;


const ProfilePage = () => {

  return (
    <h1>8797887</h1>
  );
};