import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

export interface iSubscription {}

const Subscription = (iSubscription: iSubscription) => {
  return (
    <Box
      border="2px"
      borderWidth="6px"
      borderColor="blue.100"
      color="white"
      mt={20}
      mx={{ base: 6, md: "5%" }}
    >
      <Box bg="#03373A" p={12}>
        <Box>
          <Center>
            <Heading fontSize="36px" textAlign={"center"} fontWeight="600px">
              Subscribe To our newsletter
            </Heading>
          </Center>
        </Box>

        <Box pt={4}>
          <Center>
            <Text fontWeight="400" align={"center"} fontSize="20px">
              Subscribe and find super attractive price quotes from us. find a
              residence soon.
            </Text>
          </Center>
        </Box>

        <Box pt={8}>
          <Center>
            <Button
              border="2px"
              p={8}
              borderWidth="5px"
              borderColor="blue.100"
              rounded={"none"}
              width={{ base: "lg", sm: "unset" }}
              colorScheme="white"
              variant="outline"
            >
              Get Started
            </Button>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
export default Subscription;
