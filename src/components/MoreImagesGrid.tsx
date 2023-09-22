import { SimpleGrid } from "@chakra-ui/react";
import fourKHouse from "../../public/FourKHouse.svg";
import sixKHouse from "../../public/sixKHouse.png";
import threeKHouse from "../../public/threeKHouse.svg";
import MoreImages, { IMoreImageProps } from "./MoreImages";

export default function MoreImagesGrid() {
  const MoreImageData: IMoreImageProps[] = [
    {
      source: fourKHouse,
      title: "fourK house",
    },
    {
      source: threeKHouse,
      title: "three k house",
    },
    {
      source: sixKHouse,
      title: "six K house",
    },
  ];
  return (
    <div>
      <SimpleGrid mt={4} pr={4} columns={{ base: 1, md: 2 }} spacing={4}>
        {MoreImageData.map((action, index) => (
          <MoreImages key={action.title + index} {...action} />
        ))}
      </SimpleGrid>
    </div>
  );
}
