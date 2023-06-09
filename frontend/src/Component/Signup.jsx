import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Heading,
  Text,
  FormControl,
  FormLabel,
  useToast,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { PostAPICALL } from "../Config/getFun";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === "radio") {
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handelSubmit = async () => {
    console.log(form);
    if (
      form.name !== "" &&
      form.email !== "" &&
      form.password !== "" &&
      form.role !== ""
    ) {
      await PostAPICALL(`user/register`, form)
        .then((r) => {
          if (r === "User already Exist") {
            toast({
              description: "User already Exist",
              status: "warning",
              duration: 3000,
              isClosable: true,
              position: "top-center",
            });
          } else {
            toast({
              description: "SignUp successfully",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top-center",
            });
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }
        })
        .catch((err) => {
          toast({
            description: err,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-center",
          });
        });
    } else {
      toast({
        description: "Please enter your all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-center",
      });
    }
  };

  return (
    <Flex
      justifyContent="center"
      gap="5rem"
      alignItems="center"
      p="10px"
      m="auto"
      mt="1rem"
    >
      <Box
        display={{ base: "none", md: "block" }}
        w="40%"
        h="500px"
        p="50px"
        borderRadius={"20px"}
        bg={`url(https://t3.ftcdn.net/jpg/05/65/46/48/360_F_565464881_20xX2xgiQ0UAeKZeHbFwArcD9DYOJsEi.jpghttps://t3.ftcdn.net/jpg/05/65/46/48/360_F_565464852_JoSSg4Tcag8U0AMkEXt7VgoHvZRIgBRT.jpg)`}
      >
        <Heading color="teal.400" mb="sm">
          Welcome
        </Heading>
      </Box>
      <Box w={{ base: "98%", md: "40%" }} p="30px" borderRadius="10px">
        <Heading
          as="h2"
          size="lg"
          mb="10px"
          textAlign="center"
          color="blue.400"
        >
          Create an Account
        </Heading>

        <FormControl isRequired>
          <FormLabel fontSize="12px">Name</FormLabel>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            value={form.name}
            placeholder="Enter your full name"
            required
            autoComplete="off"
          />
        </FormControl>
        <FormControl isRequired mt="20px">
          <FormLabel fontSize="12px">Email</FormLabel>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter email"
            required
            autoComplete="off"
          />
        </FormControl>
        <FormControl isRequired mt="10px">
          <FormLabel fontSize="12px">Password</FormLabel>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter password"
            required
            autoComplete="off"
          />
        </FormControl>
        <FormControl mt="20px" isRequired color="black">
          <FormLabel fontSize="12px">Register as</FormLabel>
          <RadioGroup
            name="role"
            fontWeight="bold"
            bg="blue.300"
            p="10px"
            m="auto"
            onChange={(value) =>
              handleChange({ target: { name: "role", value } })
            }
            value={form.role}
          >
            <Stack spacing={5} direction="row">
              <Radio colorScheme="red" value="dealer">
                Dealer
              </Radio>
              <Radio colorScheme="green" value="user">
                User
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Input
          w="full"
          onClick={handelSubmit}
          fontWeight="bold"
          bg="blue.500"
          _hover={{ bg: "blue.600" }}
          color="white"
          mt="20px"
          type="submit"
          cursor={"pointer"}
        />

        <Box mt="10px">
          <Text color="gray.900">
            Already have an account?{" "}
            <Link to="/login">
              <Text as="b" color="teal">
                Login
              </Text>
            </Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Signup;
