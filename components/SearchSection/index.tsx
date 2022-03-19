import type { NextPage } from 'next'
import {
  Container,
  Button,
  InputRightElement,
  InputGroup,
  Input,
  Flex,
  Divider,
  Center,

} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import type Project from '../../types/project'

type Discoverprops = {
  projects: Project[];
  filterServ: Project[];
  isCampaign: boolean;
  setfilter: (projects: any) => any;
}

const SearchSection = ({ projects, setfilter, isCampaign }: Discoverprops) => {
  function handleChange(e: any) {
    if (e.target.value.length > 0 && !isCampaign) {
      let filteredResults = projects.filter(p => {
        return (
          p.title.toLowerCase().match(e.target.value.toLowerCase()) ||
          p.description.toLowerCase().match(e.target.value.toLowerCase()) ||
          p.publisher.name.toLowerCase().match(e.target.value.toLowerCase())
        )
      });
      setfilter(filteredResults);
    }
    else {
      setfilter(projects)
    }

  }
  var handleClick = () => { }

  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <Flex p="2rem" ml="1.1rem" alignItems="start" style={{marginLeft: 0}} >
        <InputGroup size="lg">
          <Input
            onChange={handleChange}
            pr="30.5rem"
            placeholder="Search"
            _placeholder={{ color: 'gray.600' }}
          />
          <InputRightElement width="5.75rem" >
            <Button h="2.3rem" size="lg" onClick={handleClick} bg="#38b6ff">
              <Search2Icon color="white" />
            </Button>
          </InputRightElement>

        </InputGroup>
      </Flex>
    </div>
  );
}


export default SearchSection;