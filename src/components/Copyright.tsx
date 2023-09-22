import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function Copyright() {
  return (
    <Box>
      <Box py={10}>
        <Flex
          align={"center"}
          borderBottom="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          flexGrow={1}
          mr={8}
        ></Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © Copyright 2023. RealEstatery. All Right Reserved
        </Text>
      </Box>
    </Box>
  );
}
