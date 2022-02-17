import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

const MainLayout = ({ children }) => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4} m={4}>
      <GridItem colSpan={12} w="100%" pb={4}>
        <Flex
          borderBottom={2}
          borderBottomColor={'gray.200'}
          rounded="5px"
          shadow="lg"
          pb={2}
        >
          <Box p="2">
            <Heading size="md">CTCAdmin2</Heading>
          </Box>
          <Spacer />
          <Box mr={2}>
            <Button colorScheme="teal" mr="4">
              Sign Up
            </Button>
            <Button colorScheme="teal">Log in</Button>
          </Box>
        </Flex>
      </GridItem>
      <GridItem colSpan={2} w="100%" h="10">
        <Box rounded="20px" overflow="hidden" shadow="lg">
          <Tabs orientation="vertical" p={[0, 5]}>
            <TabList>
              <Tab boxDecorationBreak="unset">One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>
          </Tabs>
        </Box>
      </GridItem>
      <GridItem colSpan={10} w="100%" bg="blue.500">
        {children}
      </GridItem>
    </Grid>
  )
}

export default MainLayout

// xs sm, md, lg, xl, xxl
