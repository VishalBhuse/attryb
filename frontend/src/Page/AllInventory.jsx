import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  HStack,
  Heading,
  Image,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DelteinventoryApi,
  GetinventorySearch,
} from "../Redux/action/inventory.action";
import Filter from "../Component/Filter";
import EditModal from "../Component/EditModel";
import { AiFillDelete } from "react-icons/ai";

const AllInventory = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const auth = JSON.parse(localStorage.getItem("auth")) ?? { role: null };
  const { inventory } = useSelector((state) => state?.inventory);
  console.log(inventory);
  const Color = [
    "red",
    "white",
    "blue",
    "gray",
    "black",
    "green",
    "yellow",
    "orange",
  ];
  let location = useLocation();

  const handledelete = (item) => {
    if (item.user == auth._id) {
      dispatch(DelteinventoryApi(item._id));
      toast({
        description: `${item.title} Deleted successfully`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-center",
      });
    } else {
      toast({
        description: `Sorry, you are not allowed to delete this Inventory`,
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    dispatch(GetinventorySearch(location.search));
  }, [location]);

  return (
    <>
      <Filter Color={Color} />
      <Box w="95%" mx="auto" my="5">
        <SimpleGrid columns={[1, 1, 2, 3]} spacing="5">
          {inventory?.map((item) => (
            <Card
              key={item._id}
              textTransform={"capitalize"}
              boxShadow=" rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
            >
              <CardBody my="2">
                <Image
                  src={item.img}
                  alt="vishal/p4.png"
                  borderRadius="lg"
                  w="100%"
                  h="55%"
                  _hover={{
                    WebkitTransform: "scale(0.9)",
                    transition: "1s ease",
                  }}
                />
                <VStack mt="6" spacing="3">
                  <Heading size="md">{item.title}</Heading>
                  <Text>{item.description}</Text>
                  <HStack w="100%" justifyContent={"space-between"}>
                    <VStack gap="10px">
                      <Heading
                        fontSize={["12px", "15px", "15px", "15px"]}
                        fontWeight="600"
                        lineHeight={"15px"}
                        color="blue.600"
                      >
                        Model
                      </Heading>
                      <Text
                        fontSize={["12px", "15px", "15px", "15px"]}
                        fontWeight="400"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        {item.model}
                      </Text>
                    </VStack>
                    <VStack gap="10px">
                      <Heading
                        fontSize={["12px", "15px", "15px", "15px"]}
                        fontWeight="600"
                        lineHeight={"15px"}
                        color="blue.600"
                      >
                        Year
                      </Heading>
                      <Text
                        fontSize={["12px", "15px", "15px", "15px"]}
                        fontWeight="400"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        {item.year}
                      </Text>
                    </VStack>
                    <VStack gap="10px">
                      <Heading
                        fontSize={["12px", "15px", "15px", "15px"]}
                        fontWeight="600"
                        lineHeight={"15px"}
                        color="blue.600"
                      >
                        Color
                      </Heading>
                      <Text
                        fontSize={["12px", "15px", "15px", "15px"]}
                        fontWeight="400"
                        lineHeight={"15px"}
                        color="#000000"
                        bg={item.color}
                        h="15px"
                        w="15px"
                        border="1px solid #000"
                        borderRadius={"50%"}
                      ></Text>
                    </VStack>
                  </HStack>
                  <HStack
                    w="100%"
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    fontSize={["9px", "9px", "9px", "14px"]}
                    fontWeight="700"
                    lineHeight={"5px"}
                    p={"10px"}
                  >
                    <HStack>
                      <Heading
                        fontSize={["12px", "15px", "15px", "15px"]}
                        fontWeight="600"
                        lineHeight={"15px"}
                        color="blue.600"
                      >
                        Mileage
                      </Heading>
                      <Text
                        fontSize={["12px", "15px", "15px", "15px"]}
                        fontWeight="400"
                        lineHeight={"15px"}
                        color="#000000"
                      >
                        {item.mileage} MPG
                      </Text>
                    </HStack>
                    <HStack>
                      <Text
                        color={"#081839"}
                        fontSize={["10px", "10px", "10px", "16px"]}
                      >
                        From
                      </Text>
                      <Text
                        color={"#277E1F"}
                        fontSize={["10px", "10px", "10px", "16px"]}
                      >
                        Rs.{item.price}
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
              </CardBody>
              <Divider />
              <CardFooter>
                <HStack w="100%" justifyContent="space-between">
                  <Link to={`/singleinventory/${item._id}`}>
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      _hover={{ bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
                    >
                      More Details
                    </Button>
                  </Link>
                  {auth.role === "dealer" ? <EditModal {...item} /> : null}
                  {auth.role === "dealer" ? (
                    <Button
                      onClick={() => handledelete(item)}
                      variant="solid"
                      leftIcon={<AiFillDelete />}
                      colorScheme="red"
                      _hover={{ bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
                    >
                      Delete
                    </Button>
                  ) : null}
                </HStack>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default AllInventory;
