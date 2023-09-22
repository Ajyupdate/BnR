import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import fourKHouse from "public/FourKHouse.svg";
import sixKHouse from "public/sixKHouse.png";
import threeKHouse from "public/threeKHouse.svg";
import { ISingleHouseProps } from "../../../components/types/HouseProps";

const SingleHome = ({ title, location, price, image }: ISingleHouseProps) => {
  return (
    <Stack align={{ base: "center", md: "unset" }}>
      <Flex>
        <Image width={100000} src={image} alt={title} />
      </Flex>
      <Text color="#1CA5AE" fontSize={"2xl"} fontWeight={300}>
        ${price}K
      </Text>
      <Text fontSize="30" fontWeight={500}>
        {title}
      </Text>
      <Text fontSize="20" fontWeight={500} color={"gray.600"}>
        {location}
      </Text>
    </Stack>
  );
};

export default function BestChoice() {
  return (
    <Box mt={12} mx={{ base: 6, md: "5%" }}>
      <Flex>
        <Box py={4}>
          <Heading fontSize="2xl" fontWeight={300} color="#1CA5AE">
            Best Choices{" "}
          </Heading>
          <Heading fontSize="2xl" py={4}>
            Popular Residencies
          </Heading>
        </Box>

        <Spacer />

        {/* <button className="">
              <SearchIcon />
              Search by Location
            </button> */}
        <button className="w-70 mt-4 h-12 md:w-auto rounded-none px-6 text-lg font-normal text-white bg-green-900 hover:bg-green-300">
          <SearchIcon /> Search by Location
        </button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: "2%" }}>
        <SingleHome
          image={fourKHouse}
          price={4000}
          title={"Primerose Mansion"}
          location={"Abuja Lagos"}
        />
        <SingleHome
          image={threeKHouse}
          price={3500}
          title={"Oakwood Mansion"}
          location={"Abuja Lagos"}
        />
        <SingleHome
          image={sixKHouse}
          price={6000}
          title={"Lambo Homes"}
          location={"Abuja Lagos"}
        />
      </SimpleGrid>

      <Stack align={"center"} mt={4}>
        <button className="rounded-none w-80 md:w-1/2 mt-4 text-white bg-#03373A hover:bg-#1CA5AE flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
            <path
              fill-rule="evenodd"
              d="M14.293 15.293a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L13 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3z"
              clip-rule="evenodd"
            />
          </svg>
          Search by Location
        </button>

        {/* <button className='w-80 md:w-'><SearchIcon/> Search By Location</button> */}
      </Stack>
    </Box>
  );
}
