import { ISingleHouseProps } from "@/components/types/HouseProps";
import { SimpleGrid } from "@chakra-ui/react";
import fourKHouse from "public/FourKHouse.svg";
import sixKHouse from "public/sixKHouse.png";
import threeKHouse from "public/threeKHouse.svg";
import MainComponentAction from "./MainComponent";
export default function MainGrid() {
  const mainComponentData: ISingleHouseProps[] = [
    {
      title: "Primerose Mansion",
      location: "Abuja, Nigeia",
      price: 4000,
      image: fourKHouse,
    },
    {
      title: "Oakwood Mansion",
      location: "Abuja, Nigeia",
      price: 3500,
      image: threeKHouse,
    },
    {
      title: "Primerose Mansion",
      location: "Abuja, Nigeia",
      price: 4000,
      image: fourKHouse,
    },
    {
      title: "Lambo Homes",
      location: "Abuja, Nigeia",
      price: 6000,
      image: sixKHouse,
    },
  ];

  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {mainComponentData.map((action, index) => (
          <MainComponentAction key={action.title + index} {...action} />
        ))}
      </SimpleGrid>
    </div>
  );
}
