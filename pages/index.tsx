import { Box, SimpleGrid, Flex, Heading, Center } from "@chakra-ui/react";
import type { NextPage } from "next";

const LandingPage: NextPage = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      width="100%"
      direction="column"
    >
      <Heading marginBottom="50px">Wordle</Heading>
      <Box height="50%" width="300px">
        <SimpleGrid columns={5} spacing={3}>
          {Array.from({ length: 30 }, (v: any, i: any) => (
            <Box border="1px" borderColor="gray.100" height="50px" width="50px">
              <Flex
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
              >
                {i % 2 == 0 ? "A" : "B"}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default LandingPage;
