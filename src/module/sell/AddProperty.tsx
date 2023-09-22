"use client";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { ErrorMessage, Form, Formik } from "formik";
// import { useSession } from "next-auth/react";
import Nav from "@/components/Nav";
import { useRouter } from "next/navigation";
import * as React from "react";
import * as Yup from "yup";
import MyButton, { SubmittingButton } from "../../../utils/button";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export interface IAddPropertyFormProps {
  country: string;
  state: string;
  city: string;
  description: string;
  type: string;
  street: string;
  price: number;
  name?: string;
  id?: string;
}

export default function AddPropertyForm() {
  const toast = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [states, setStates] = React.useState([]);

  React.useEffect(() => {
    // Fetch the states data from Nigeria Geo-JSON API
    axios
      .get("https://locus.fkkas.com/api/states")
      .then((response) => {
        console.log(response.data.data);
        setStates(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  }, []);

  const initialValues: IAddPropertyFormProps = {
    country: "Nigeria",
    state: "",
    city: "",
    description: "",
    type: "",
    street: "",
    price: 0,
  };

  const validationSchema = Yup.object({
    type: Yup.string().max(15, "must not exceed 15 character").required(),
    street: Yup.string().max(15, "must not exceed 15 character").required(),
    price: Yup.string().required(),
    description: Yup.string().required(),
    country: Yup.string().required(),
    state: Yup.string().required(),
    city: Yup.string().max(15, "must not exceed 15 character").required(),
  });

  // const { data }: any = useSession();
  // const token = data?.user?.token;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(12);
        // const dataToSend = {
        //   country: values.country,
        //   state: values.state,
        //   city: values.city,
        //   description: values.description,
        //   type: values.type,
        //   street: values.street,
        //   price: values.price,
        // };
        // console.log(dataToSend);
        // const headers = {
        //   Authorization: `Bearer ${token}`,
        // };

        // // Send the data to the backend
        // axios
        //   .post(`${API_ENDPOINT}property/put_property_for_sale`, dataToSend, {
        //     headers,
        //   })
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
        //   .finally(() => {
        //     setSubmitting(false);
        //   });
      }}
    >
      {({ values, handleBlur, errors, handleChange, handleSubmit }) => (
        <Form>
          <Nav />
          <Flex direction={{ md: "column", base: "column" }} align={"center"}>
            <Heading
              mt={6}
              fontWeight={"extrabold"}
              fontSize={{ base: "20", md: "40" }}
              // fontSize={{base: '50', md:'unset'}}
              alignContent={{ base: "center" }}
              whiteSpace="nowrap"
            >
              Find Your Dream Home With Us.
            </Heading>
            <Text fontWeight={4} my={2}>
              Welcome to our community.
            </Text>
          </Flex>
          <Box>
            <Flex
              direction={{ base: "column", md: "column" }}
              wrap="wrap"
              mx={{ md: "unset", base: 8 }}
              align="center"
              justify="center"
            >
              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>Description</FormLabel>
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;",
                  }}
                  onBlur={handleBlur("description")}
                  rounded={"none"}
                  size={"lg"}
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="description" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>city</FormLabel>
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;",
                  }}
                  onBlur={handleBlur("city")}
                  rounded={"none"}
                  size={"lg"}
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="city" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>type</FormLabel>

                <Select
                  css={{
                    border: "1px solid black;",
                  }}
                  name="type"
                  value={values.type}
                  onBlur={handleBlur("type")}
                  rounded={"none"}
                  size={"lg"}
                  h={"16"}
                  onChange={handleChange}
                  id="state"
                  placeholder="Select a state"
                >
                  <option value="Mansion">Mansion</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Apartment">Apartment</option>
                </Select>

                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="type" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>Country</FormLabel>

                <Input
                  readOnly
                  css={{
                    padding: "30px",
                    border: "1px solid black;",
                  }}
                  onBlur={handleBlur("country")}
                  rounded={"none"}
                  size={"lg"}
                  type="text"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="country" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>State</FormLabel>

                <Select
                  css={{
                    // padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur("description")}
                  rounded={"none"}
                  size={"lg"}
                  h={"16"}
                  onChange={handleChange}
                  id="state"
                  placeholder="Select a state"
                >
                  {states &&
                    states.map((state: IAddPropertyFormProps) => (
                      <option value={state.name} key={state.id}>
                        {state.name}
                      </option>
                    ))}
                </Select>

                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="state" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>Street</FormLabel>
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur("street")}
                  rounded={"none"}
                  size={"lg"}
                  type="text"
                  name="street"
                  value={values.street}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="street" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>Price in numbers (naira)</FormLabel>
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur("price")}
                  rounded={"none"}
                  size={"lg"}
                  type="text"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="price" />
                </Box>
              </FormControl>
            </Flex>

            <Box>
              <>
                {!isLoading ? (
                  <MyButton
                    buttonText={"sign in"}
                    handleSubmit={handleSubmit}
                  />
                ) : (
                  <SubmittingButton />
                )}
              </>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
