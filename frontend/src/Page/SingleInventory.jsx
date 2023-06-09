import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { GetSingleinventoryApi } from "../Redux/action/inventory.action";
import {
  Box,
  Stack,
  Text,
  Image,
  Heading,
  SimpleGrid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Loading from "../Component/Loading";

const SingleInventory = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading: load, inventory } = useSelector((state) => state?.inventory);
  const singleInventory = inventory.find((item) => item._id === params.id);

  useEffect(() => {
    dispatch(GetSingleinventoryApi(params.id));
  }, [params.id]);

  if (!singleInventory) {
    return <Loading />;
  }
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <Box width="90%" margin="auto">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              h="100%"
              p="5"
            >
              <Image
                rounded={"2xl"}
                alt={"product image"}
                src={singleInventory.img}
                align={"center"}
                w={"100%"}
                mx="auto"
                h="100%"
              />
            </Box>
            <Stack spacing={{ base: 6, md: 10 }} shadow={"xl"} p="5">
              <Box as={"header"}>
                <Heading
                  color="#2F0F5D"
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {singleInventory.title}
                </Heading>
                <Text
                  mt="1"
                  color="blue.600"
                  fontSize={{ base: "1xl", sm: "2xl", lg: "2xl" }}
                  fontWeight={"500"}
                  textTransform="uppercase"
                >
                  {singleInventory.description}
                </Text>
              </Box>

              <Stack spacing={{ base: 4, sm: 6 }} direction={"column"}>
                <Box>
                  <Box w="90%" mx="auto" fontSize={"1.5rem"}>
                    <HStack justifyContent={"space-between"}>
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        textTransform="capitalize"
                      >
                        Fuel Capacity:
                      </Text>
                      <Text fontWeight={"600"}>{singleInventory.fuel} Ltr</Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        textTransform="capitalize"
                      >
                        Engine:
                      </Text>
                      <Text fontWeight={"600"}>{singleInventory.engine}</Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        textTransform="capitalize"
                      >
                        Milege:
                      </Text>
                      <Text fontWeight={"600"}>
                        {singleInventory.mileage} MPG
                      </Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        textTransform="capitalize"
                      >
                        Color:
                      </Text>
                      <Text
                        fontWeight={"600"}
                        bg={singleInventory.color}
                        h="15px"
                        w="15px"
                        border={"1px solid black"}
                      ></Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        textTransform="capitalize"
                      >
                        Max_Speed
                      </Text>
                      <Text fontWeight={"600"}>
                        {singleInventory.max_speed} MPH
                      </Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        textTransform="capitalize"
                      >
                        Engine:
                      </Text>
                      <Text fontWeight={"600"}>{singleInventory.engine}</Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        textTransform="capitalize"
                      >
                        Price:
                      </Text>
                      <Text fontWeight={"600"} color="green.600">
                        Rs.{singleInventory.price}
                      </Text>
                    </HStack>
                  </Box>
                </Box>
                <Box mt={[2, 2, 2, 7, 7]}>
                  <VStack w="100%" mx="auto" justifyContent={"space-between"}>
                    {/* <HStack
                  w="100%"
                  mx="auto"
                  justifyContent={"space-between"}
                  textTransform={"uppercase"}
                  fontWeight="600"
                  fontSize={["10px", "12px", "12px", "14px", "16px"]}
                  textAlign="center"
                  bg="#081839"
                  color="#F1CC5C"
                  py="2"
                >
                  <Text w="10%"></Text>
                  <Text w="25%">Tables</Text>
                  <Text w="20%">Price</Text>
                  <Text w="25%">OfferPrice</Text>
                  <Text w="20%">Changes</Text>
                </HStack> */}

                    {/* {details.tables &&
                  details?.tables.map((item) => (
                    <HStack
                      w="95%"
                      mx="auto"
                      justifyContent={"space-between"}
                      textTransform={"capitalize"}
                      fontWeight="600"
                      fontSize={["9px", "12px", "12px", "14px", "16px"]}
                      key={item._id}
                      textAlign="center"
                    >
                      <Text w="10%">
                        <Checkbox
                          type="checkbox"
                          id={item._id}
                          checked={!!checkedMap[item._id]}
                          onChange={(event) =>
                            handleCheckboxChange(event, item)
                          }
                        />
                      </Text>
                      <Text w="25%">For {item.personSize} Persons</Text>
                      <Text w="20%">Rs {item.price}</Text>
                      <Text w="25%">Rs {item.offerPrice}</Text>
                      <Text w="20%">Rs {item.price - item.offerPrice}</Text>
                    </HStack>
                  ))} */}
                  </VStack>
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};

export default SingleInventory;
