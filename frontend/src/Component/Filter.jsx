import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  Text,
  SimpleGrid,
  HStack,
  Select,
  Button,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Filter = ({ Color }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getPrice = searchParams.getAll("sort");
  const getColor = searchParams.getAll("color");
  const getMileage = searchParams.getAll("mileage");
  const [price, setPrice] = useState(getPrice || []);
  const [color, setColor] = useState(getColor || []);
  const [mileage, setMileage] = useState(getMileage || []);

  const handlePriceFilter = (val) => {
    setPrice(val);
  };

  const handelcolor = (item) => {
    const updatedColors = color.includes(item)
      ? color.filter((colorItem) => colorItem !== item)
      : [...color, item];
    setColor(updatedColors);
  };

  const handleMileage = (item) => {
    const updatedMileage = mileage.includes(item) ? [] : [item];
    setMileage(updatedMileage);
  };

  const handleResetFilter = () => {
    setPrice([]);
    setColor([]);
    setMileage([]);
    setSearchParams({});
  };

  useEffect(() => {
    const params = {
      price,
      color,
      mileage,
    };
    setSearchParams(params);
  }, [price, color, mileage]);

  return (
    <>
      <Box w="90%" m="auto" my="5">
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box>
            <Text as="b">Choose Color</Text>
            <HStack p="2" w="100%" justifyContent={"space-between"}>
              {Color?.map((ele, ind) => {
                return (
                  <Box key={ind}>
                    <Checkbox
                      onChange={() => handelcolor(ele)}
                      isChecked={color.includes(ele)}
                    ></Checkbox>
                    <Text
                      w="15px"
                      h="15px"
                      borderRadius={"20px"}
                      border="1px solid #000"
                      bg={ele}
                    ></Text>
                  </Box>
                );
              })}
            </HStack>
          </Box>
          <Box>
            <Text as="b">Choose Mileage</Text>
            <HStack p="2" w="100%" justifyContent="space-between">
              {[50, 150, 250, 500].map((item) => (
                <Box key={item}>
                  <Checkbox
                    onChange={() => handleMileage(item)}
                    isChecked={mileage.includes(item)}
                  ></Checkbox>
                  <Text>Below {item}</Text>
                </Box>
              ))}
            </HStack>
          </Box>
          <Box>
            <Text as="b">Choose Price</Text>
            <Select
              p="2"
              placeholder="Select option"
              onChange={(e) => handlePriceFilter(e.target.value)}
            >
              <option value="lowToHigh">lowToHigh</option>
              <option value="highToLow">highToLow</option>
            </Select>
          </Box>
          <Box
            display={"flex"}
            justifyContent={["flex-start", "center", "flex-start"]}
            alignItems={"center"}
          >
            <Button colorScheme="blue" onClick={handleResetFilter}>
              Reset Filter
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Filter;
