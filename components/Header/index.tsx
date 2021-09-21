import type { NextPage } from 'next'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Divider,
    InputGroup,
    InputLeftElement,
    Input,
    WrapItem,
    Avatar,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    PhoneIcon,
} from '@chakra-ui/icons';
import { useState,useEffect } from 'react';
import Image from 'next/image';

const Header: NextPage = () => {
    const { isOpen, onToggle } = useDisclosure();

    const [state, setstate] = useState(true)
    const [yPos, setYPos] = useState(0)

    useEffect(function mount() {

    function onScroll() {
      setYPos(window.pageYOffset);
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });


    return (
        <Box w="100%" >
          <Flex
            as={'header'}
            pos={yPos > 60?"fixed" :""}
            top="0"
            w={'full'}
            boxShadow={'sm'}
            zIndex="999"
            justify={'center'}
            css={{
              backdropFilter: 'saturate(180%) blur(5px)',
              backgroundColor: useColorModeValue(
                'rgba(255, 255, 255, 0.8)',
                'rgba(26, 32, 44, 0.8)'
              ),
            }}
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'4rem'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}  >
            
            <Box ml={10}>            
              <a href={'/'} >
                <Image src="/logo.png" width="200rem" height="80rem" /> 
              </a>             
            </Box>
                
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>

            </Flex>

          
           {state ? 
              <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              marginRight="6rem"
              spacing={6}>
                
              <Button
                as={'a'}                
                fontSize={'md'}
                fontWeight={400}
                variant={'link'}
                href={'/login'}>
                Sign In
              </Button>

              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'md'}
                fontWeight={600}
                color={'white'}
                bg={'blue.500'}
                onClick={(e) => setstate(!state)}
                href={'#'}
                _hover={{
                  bg: 'blue.300',
                }}>
                Sign Up
              </Button>
            </Stack>

           :
           <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            marginRight="6rem"
            spacing={6}>
           
           <Popover >
              <PopoverTrigger >                
                  <Button
                    variant="outline"
                    size="lg"
                    fontSize={'md'}
                    fontWeight={400}  
                    borderRadius="35px"         
                    paddingLeft="0.5rem"  
                    href={'#'}
                    _hover={{
                      bg: 'black.300',
                    }}>

                    <WrapItem>
                      <Avatar name="Molaaa Tioluwani"  size="sm" />
                    </WrapItem>

                    <Text marginRight="0.3rem"  marginLeft="0.5rem">7.0000</Text>

                    <Text color="blue.500" fontWeight="700" > DSET </Text>

                  </Button>
              </PopoverTrigger>

              <PopoverContent >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
              </PopoverContent>
            </Popover>
          </Stack>
           }     
            
          </Flex>
    
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      );
    }
    
    const DesktopNav = () => {
      const linkColor = useColorModeValue('gray.600', 'gray.200');
      const linkHoverColor = useColorModeValue('gray.800', 'white');
      const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    
      return (
        <Stack direction={'row'} spacing={2} style={{alignItems:"center"}} >

          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label} >
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? '#'}
                    fontSize={'md'}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}>
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
    
                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={'xl'}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={'xl'}
                    minW={'sm'}>
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </Stack>
      );
    };
    
    const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
      return (
        <Link
          href={href}
          role={'group'}
          display={'block'}
          p={2}
          rounded={'md'}
          _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
          <Stack direction={'row'} align={'center'}>
            <Box>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'blue.500' }}
                fontWeight={500}>
                {label}
              </Text>
              <Text fontSize={'md'}>{subLabel}</Text>
            </Box>
            <Flex
              transition={'all .3s ease'}
              transform={'translateX(-10px)'}
              opacity={0}
              _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
              justify={'flex-end'}
              align={'center'}
              flex={1}>
              <Icon color={'blue.500'} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Link>
      );
    };
    
    const MobileNav = () => {
      return (
        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          display={{ md: 'none' }}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </Stack>
      );
    };
    
    const MobileNavItem = ({ label, children, href }: NavItem) => {
      const { isOpen, onToggle } = useDisclosure();
    
      return (
        <Stack spacing={2} onClick={children && onToggle}>
          <Flex
            py={3}
            as={Link}
            href={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}>
            <Text
              fontWeight={600}
              
              color={useColorModeValue('gray.600', 'gray.200')}>
              {label}
            </Text>
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={'all .25s ease-in-out'}
                transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
              />
            )}
          </Flex>
    
          <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <Stack
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={'solid'}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              align={'start'}>
              {children &&
                children.map((child) => (
                  <Link key={child.label} py={2} href={child.href}>
                    {child.label}
                  </Link>
                ))}
            </Stack>
          </Collapse>
        </Stack>
      );
    };
    
    interface NavItem {
      label: string;
      subLabel?: string;
      children?: Array<NavItem>;
      href?: string;
    }
    
    const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'The Problem',
        href:"#"

      },
      {
        label: 'Solution',
        href:"#"

      },
      {
        label: 'Roadmap',
        href:"#"

      },
      {
        label: 'Token',
        href:"/token"

      },
      {
        label: 'FAQ',

      },
      {
        label: 'Discover',
        href:"/discover"
      },
     
    ];
export default Header
