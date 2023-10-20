import { Button, Flex } from "@chakra-ui/react";

const MyButton = ({ buttonText, handleSubmit }: any) => {
  return (
    <Flex mx={{ md: "20%", base: 8 }} justify="center" pt={2} align="center">
      {/* <button
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-teal-900 hover:bg-teal-500 text-white font-semibold py-2  "
      >
        {buttonText}
      </button> */}
      <button
        type="submit"
        className="w-full h-12 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-4 "
      >
        {buttonText}
      </button>
    </Flex>
  );
};

export default MyButton;

export const SubmittingButton = () => {
  return (
    <Flex mx={{ md: "unset", base: 8 }} justify="center" pt={2} align="center">
      <Button
        isLoading
        loadingText="Submitting"
        colorScheme="teal"
        variant="outline"
      />
    </Flex>
  );
};
