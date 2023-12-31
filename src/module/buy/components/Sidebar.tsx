"use client";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AiOutlineShareAlt } from "react-icons/ai";

//import Image from "next/image";
import { ISideBarHomeProps } from "@/components/types/HouseProps";
import { FaMapMarkerAlt } from "react-icons/fa";
import fourKHouse from "../../../../public/FourKHouse.svg";

import MoreImagesGrid from "@/components/MoreImagesGrid";

import { MdOutlineMoney } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
// import { Image } from "@chakra-ui/react";
import Image from "next/image";
function SidebarSkeleton({ title, location, price, image }: ISideBarHomeProps) {
  const sidebarImageWidth = useBreakpointValue({ base: "100%", md: "70%" });
  return (
    <Box h={{ md: "500px" }} overflowY={{ md: "scroll" }}>
      <Stack>
        <Flex w={sidebarImageWidth}>
          <Image src={image} alt={title} />
        </Flex>
        <Text color="#1CA5AE" fontSize={"xl"} fontWeight={600}>
          ${price}K
        </Text>
        <Text fontSize="20" fontWeight={500}>
          {title}
        </Text>
        <Flex>
          <Icon as={FaMapMarkerAlt} color="gray.300" boxSize={6} />
          <Text fontSize="20" pl={4} fontWeight={500} color={"gray.600"}>
            {location}
          </Text>
        </Flex>
        {/* <Text fontSize='10' fontWeight={500} color={'gray.600'}>{location}</Text> */}
      </Stack>

      <Box mt={8}>
        <Flex mr={4}>
          <Heading size="md">Popular Residencies</Heading>
          <Spacer />
          <Text mb={8} as={"p"} size="sm">
            Share <Icon as={AiOutlineShareAlt} />
          </Text>
        </Flex>

        <Text align={"left"} pr={4}>
          A beautiful family house situated in the nice vivaverde neighborhood,
          near a train station. It is a cozy 60 square-meter house with a
          garage. It has three bedrooms, two bathrooms and an ideal
          well-equipped kitchen with a perfect patio to do the laundry and a
          spacious living room with a lovely terrace with tables and chairs for
          relaxation. There are nice views of a big garden. It is a perfect
          house for a couple.
        </Text>

        <Heading size="md" mt={6}>
          More Images
        </Heading>
        <Box>
          <MoreImagesGrid />
        </Box>
        <Box mt={8}>
          <Heading py={4} size={"md"}>
            More Information
          </Heading>

          <Text py={2}>
            <Icon as={TbBrandBooking} boxSize={7} /> Book House appointment
          </Text>
          <Text py={2}>
            <Icon as={MdOutlineMoney} boxSize={7} /> Purchase House
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default function Sidebar() {
  return (
    <SidebarSkeleton
      image={fourKHouse}
      price={4000}
      title={"Primerose Mansion"}
      location={"Abuja Lagos"}
    />
  );
}
