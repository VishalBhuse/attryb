import {
  Button,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  InputLeftAddon,
  ModalFooter,
  Input,
  Box,
  InputGroup,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { inventoryEditAPI } from "../Redux/action/inventory.action";

const EditModal = (item) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();

  const [form, setForm] = useState(item);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(inventoryEditAPI(form._id, { ...form }));
    toast({
      description: "Inventory Updated Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-center",
    });
    onClose();
  };
  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<FaEdit />}
        colorScheme="yellow"
        borderRadius="5px"
        fontWeight="700"
        fontSize="14px"
        size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
      >
        Edit
      </Button>

      <Modal size={"5xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={[2, 2, 2, 10]}>
              <Box>
                <Flex
                  flexDirection="column"
                  w={["100%", "90%", "80%", "100%"]}
                  m="auto"
                  mt="20px"
                  gap="1.2rem"
                  fontWeight={"600"}
                >
                  <InputGroup>
                    <InputLeftAddon
                      w="120px"
                      fontSize={"14px"}
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
                      w="120px"
                      fontSize={"14px"}
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
                      w="120px"
                      fontSize={"14px"}
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
                      w="120px"
                      fontSize={"14px"}
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
                      w="120px"
                      fontSize={"14px"}
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
                      w="120px"
                      fontSize={"14px"}
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
                  w={["100%", "90%", "80%", "100%"]}
                  m="auto"
                  mt="20px"
                  gap="1.2rem"
                  fontWeight={"600"}
                >
                  <InputGroup>
                    <InputLeftAddon
                      w="120px"
                      fontSize={"14px"}
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
                      w="120px"
                      fontSize={"14px"}
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
                      w="120px"
                      fontSize={"14px"}
                      bg="blue.500"
                      color="#fff"
                      children="Mileage"
                    />
                    <Input
                      placeholder="eg:- 120"
                      fontSize="13px"
                      fontWeight="500"
                      type="text"
                      value={form.mileage}
                      name="mileage"
                      onChange={(e) => handleChange(e)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon
                      w="120px"
                      fontSize={"14px"}
                      bg="blue.500"
                      color="#fff"
                      children="Max Speed"
                    />
                    <Input
                      placeholder="eg:- 120"
                      fontSize="13px"
                      fontWeight="500"
                      type="text"
                      value={form.max_speed}
                      name="max_speed"
                      onChange={(e) => handleChange(e)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon
                      w="120px"
                      fontSize={"14px"}
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
                my="2"
              >
                Update Inventory
              </Button>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
