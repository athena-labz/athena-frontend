import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    Progress,
    List,
    ListItem,
    Icon,
    useDisclosure,
    InputGroup,
    InputRightAddon
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next'
import { FiUsers, FiMapPin, FiCalendar } from 'react-icons/fi';
import Campaign from '../../types/campaign';
import { campaign } from '../api/campaingns';
import { useUser } from '../../contexts/UserContext'
import { GiInjustice } from 'react-icons/gi';


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    RadioGroup,
    Radio,
    Input,
} from '@chakra-ui/react'
import { useState } from 'react';


export default function Campaign_Page({ campaign }: { campaign: Campaign }) {
    const { isSignedIn } = useUser();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [amount, setAmount] = useState(0.00)

    return (
        <Container maxW={'7xl'}>
            <Modal isOpen={isOpen} onClose={onClose} isCentered >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Support this project</ModalHeader>
                    <chakra.span ml={6} mt={-4} mb={3}>Inform your pledge amount and select an option below</chakra.span>
                    <ModalCloseButton />
                    <ModalBody>
                        <InputGroup size='md'>
                            <Input
                                type="number"
                                placeholder="Pledge amount"
                                name="input"
                                id="service_input"
                                onChange={e => {e.target.value != ""?setAmount(parseFloat(e.target.value)):setAmount(0)}}
                                focusBorderColor="blue.400"
                                shadow="sm"
                                size="md"
                                w="60%"
                                rounded="md"
                            />
                            <InputRightAddon children='ADA' />
                        </InputGroup>
                        <RadioGroup
                            fontSize="sm"
                            color={useColorModeValue("gray.700", "gray.50")}
                            colorScheme="brand"
                            mt={4}
                            defaultValue="1"
                        >
                            <Stack spacing={6}>
                                <Radio size="md" colorScheme={"blue"} spacing={3} value="5" isDisabled={amount==0} >
                                    Pledge without a reward
                                </Radio>
                                <Radio size="md" colorScheme={"blue"} spacing={3} isDisabled={amount<5} value="8">
                                    Deliverable 1 - (min: 5 ADA)
                                </Radio>
                                <Radio size="md" colorScheme={"blue"} spacing={3} isDisabled={amount<8} value="9">
                                    Deliverable 2 - (min: 8 ADA)
                                </Radio>
                                <Radio size="md" colorScheme={"blue"} spacing={3} isDisabled={amount<12} value="129">
                                    Deliverable 3 - (min: 12 ADA)
                                </Radio>
                                <Radio size="md" colorScheme={"blue"} spacing={3} isDisabled={amount<16} value="119">
                                    Deliverable 4 - (min: 16 ADA)
                                </Radio>
                                <Radio size="md" colorScheme={"blue"} spacing={3} isDisabled={amount<24} value="98">
                                    Deliverable 5 - (min: 24 ADA)
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose} >
                            Confirm
                        </Button>
                        <Button variant='ghost'>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={campaign.img}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '300px', lg: '400px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            color={"blue.400"}
                            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                            {campaign.name}
                        </Heading>
                        <VStack spacing={{ base: 4, sm: 4 }}>
                            <Text fontSize={'lg'} ml={1} mt={2} textAlign={"justify"}>
                                {campaign.description}
                            </Text>
                        </VStack>
                    </Box>

                    <Stack px={2} pb={0} pt={0} style={{ marginTop: 25 }}>
                        <chakra.span
                            fontSize="1.1rem"
                            mt={0}
                            mr={6}
                            fontWeight="400"
                            color={useColorModeValue("gray.600", "gray.400")}
                        >
                            {Math.round((campaign.current_value / campaign.total_value) * 100)}% funded - {campaign.current_value} {campaign.currency} pledged of {campaign.total_value} {campaign.currency}
                        </chakra.span>
                        <Progress colorScheme='blue' size='lg' value={Math.round((campaign.current_value / campaign.total_value) * 100)} />

                        <Flex justify={"space-between"}>
                            <Box>
                                <Icon as={FiUsers} w={5} h={7} color="gray.600" />
                                {" "}
                                <chakra.span
                                    fontSize="1rem"
                                    mt={3}
                                    mr={6}
                                    fontWeight="400"
                                    color={useColorModeValue("gray.600", "gray.400")}
                                >
                                    by {campaign.owner}
                                </chakra.span>
                            </Box>

                            <Box>
                                <Icon as={FiMapPin} w={5} h={7} color="gray.600" />
                                {" "}
                                <chakra.span
                                    fontSize="1rem"
                                    mt={3}
                                    mr={6}
                                    fontWeight="400"
                                    color={useColorModeValue("gray.600", "gray.400")}
                                >
                                    {campaign.place}
                                </chakra.span>
                            </Box>
                        </Flex>
                        <Flex p={0} alignItems="center" justifyContent={"center"} style={{ marginTop: 5 }}>
                            <Icon as={GiInjustice} w={8} h={7} color="gray.600" />
                            {"   "}
                            <chakra.span
                                fontSize="1.3rem"
                                mt={0}
                                ml={3}
                                fontWeight="500"
                                color={useColorModeValue("gray.600", "gray.400")}
                            >
                                Judge by Halina Evelyn
                            </chakra.span>
                        </Flex>

                    </Stack>

                    <Button
                        rounded={'none'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={'blue.400'}
                        onClick={onOpen}
                        color={'white'}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        {isSignedIn() ? "ACCUSE" : "BACK THIS PROJECT"}
                    </Button>
                </Stack>
            </SimpleGrid>
            <Stack
                spacing={{ base: 4, sm: 6 }}
                mb={10}
                direction={'column'}
            >
                <Box>
                    <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color={useColorModeValue('blue.500', 'blue.300')}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        GOALS
                    </Text>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <List spacing={2}>
                            <ListItem>Chronograph</ListItem>
                            <ListItem>Master Chronometer Certified</ListItem>{' '}
                            <ListItem>Tachymeter</ListItem>
                        </List>
                        <List spacing={2}>
                            <ListItem>Anti‑magnetic</ListItem>
                            <ListItem>Chronometer</ListItem>
                            <ListItem>Small seconds</ListItem>
                        </List>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color={useColorModeValue('blue.500', 'blue.300')}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        Product Details
                    </Text>

                    <List spacing={2}>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Between lugs:
                            </Text>{' '}
                            20 mm
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Bracelet:
                            </Text>{' '}
                            leather strap
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Case:
                            </Text>{' '}
                            Steel
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Case diameter:
                            </Text>{' '}
                            42 mm
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Dial color:
                            </Text>{' '}
                            Black
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Crystal:
                            </Text>{' '}
                            Domed, scratch‑resistant sapphire crystal with anti‑reflective
                            treatment inside
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Water resistance:
                            </Text>{' '}
                            5 bar (50 metres / 167 feet){' '}
                        </ListItem>
                    </List>
                </Box>
            </Stack>
        </Container>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params!;

    if (!slug) return { notFound: true };

    const data = campaign(slug);

    if (data == null)
        return { notFound: true }

    return {
        props: {
            campaign: data

        },
        revalidate: 90 * 90 * 60// 24 hours
    }
}
