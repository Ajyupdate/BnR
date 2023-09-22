import { Button, Flex } from "@chakra-ui/react";

const MyButton = ({ buttonText, handleSubmit }: any) => {
  return (
    <Flex mx={{ md: "5%", base: 8 }} justify="center" pt={2} align="center">
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-9/12 bg-teal-900 hover:bg-teal-500 text-white font-semibold py-2 px-4 "
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
