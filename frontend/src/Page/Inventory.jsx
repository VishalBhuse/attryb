import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { GetinventorySearch } from "../Redux/action/inventory.action";
import { PostAPICALL } from "../Config/getFun";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const auth = JSON.parse(localStorage.getItem("auth")) ?? { role: null };
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    model: "",
    year: "",
    price: "",
    color: "",
    engine: "",
    fuel: "",
    mileage: "",
    max_speed: "",
    img: "",
    user: auth._id,
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = () => {
    if (
      form.title !== "" &&
      form.description !== "" &&
      form.model !== "" &&
      form.year !== "" &&
      form.price !== "" &&
      form.color !== "" &&
      form.engine !== "" &&
      form.fuel !== "" &&
      form.mileage !== "" &&
      form.max_speed !== "" &&
      form.img !== "" &&
      form.user !== ""
    ) {
      PostAPICALL(`inventory`, form)
        .then((r) => {
          dispatch(GetinventorySearch());
          toast({
            description: "Your Inventory Added Successfull.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-center",
          });
            navigate("/inventoryall");
        })
        .catch((err) => {
          toast({
            description: "Add Inventory Properly",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top-center",
          });
        });
    } else {
      toast({
        description: "Enter Your Filled.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-center",
      });
    }
  };
  return (
    <>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={[2, 2, 2, 10]}>
        <Box>
          <Flex
            flexDirection="column"
            w={["300px", "400px", "500px", "500px"]}
            m="auto"
            mt="20px"
            gap="1.2rem"
            fontWeight={"600"}
          >
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Title"
              />
              <Input
                placeholder="eg:- Honda City"
                fontSize="13px"
                fontWeight="500"
                type="text"
                value={form.title}
                name="title"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Description"
              />
              <Input
                placeholder="eg:- A stylish and reliable sedan"
                type="text"
                fontSize="13px"
                fontWeight="500"
                value={form.description}
                name="description"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Model"
              />
              <Input
                placeholder="eg:- Civic"
                fontSize="13px"
                fontWeight="500"
                type="text"
                value={form.model}
                name="model"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Year"
              />
              <Input
                placeholder="eg:- 2015"
                type="number"
                fontSize="13px"
                fontWeight="500"
                value={form.year}
                name="year"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Price"
              />
              <Input
                placeholder="eg:- 240000"
                type="number"
                fontSize="13px"
                fontWeight="500"
                value={form.price}
                name="price"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Color"
              />
              <Input
                fontSize="13px"
                fontWeight="500"
                value={form.color}
                name="color"
                placeholder="eg:- red"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
          </Flex>
        </Box>
        <Box>
          <Flex
            flexDirection="column"
            w={["300px", "400px", "500px", "500px"]}
            m="auto"
            mt="20px"
            gap="1.2rem"
            fontWeight={"600"}
          >
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Engine"
              />
              <Input
                placeholder="eg:- 2.0L"
                fontSize="13px"
                fontWeight="500"
                value={form.engine}
                name="engine"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Fuel Capacity"
              />
              <Input
                placeholder="eg:- 10"
                type="number"
                fontSize="13px"
                fontWeight="500"
                value={form.fuel}
                name="fuel"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Mileage"
              />
              <Input
                placeholder="eg:- 120"
                fontSize="13px"
                fontWeight="500"
                type="number"
                value={form.mileage}
                name="mileage"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Max Speed"
              />
              <Input
                placeholder="eg:- 120"
                fontSize="13px"
                fontWeight="500"
                type="number"
                value={form.max_speed}
                name="max_speed"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon
                w="130px"
                bg="blue.500"
                color="#fff"
                children="Image"
              />
              <Input
                placeholder="eg:- enter URL"
                type="text"
                fontSize="13px"
                fontWeight="500"
                value={form.img}
                name="img"
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
          </Flex>
        </Box>
      </SimpleGrid>
      <Box w="90%" mx="auto" textAlign={"center"}>
        <Button
          onClick={handleSubmit}
          bg="blue.500"
          color="#fff"
          _hover={{ bg: "blue.700" }}
          width="20%"
          mx="auto"
          my="5"
        >
          Add Car
        </Button>
      </Box>
    </>
  );
};

export default Inventory;
