import { Box, FormLabel, Checkbox, Text, Radio } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("genre");
  const initialSortParams = searchParams.get("sortBy");
  const [category, setCategory] = useState(initialGenreParams || []);
  const [sortBy, setSortBy] = useState(initialSortParams || ""); // I added [0] in this check and remove if any problem occurs

  const handleOnChange = (e) => {
    const option = e.target.value;

    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    if (category || sortBy) {
      setSearchParams({ genre: category, sortBy: sortBy });
    }
  }, [category, setSearchParams, sortBy]);
  return (
    <Box>
      <Box
        border="1px solid red"
        bgImage="linear-gradient(red,orange)"
        mt="2rem"
        color="whitesmoke"
      >
        <Text fontSize="2xl">Filter</Text>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <FormLabel>K-Pop</FormLabel>
        <Checkbox
          type="checkbox"
          defaultChecked={category.includes("K-Pop")}
          value="K-Pop"
          onChange={handleOnChange}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <FormLabel>Country</FormLabel>
        <Checkbox
          value="Country"
          type="checkbox"
          onChange={handleOnChange}
          defaultChecked={category.includes("Country")}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        {" "}
        <FormLabel>Pop</FormLabel>
        <Checkbox
          value="Pop"
          type="checkbox"
          onChange={handleOnChange}
          defaultChecked={category.includes("Pop")}
        />
      </Box>

      <Box display="flex" justifyContent="space-between">
        {" "}
        <FormLabel>Holiday</FormLabel>
        <Checkbox
          value="Holiday"
          type="checkbox"
          onChange={handleOnChange}
          defaultChecked={category.includes("Holiday")}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <FormLabel>Heavy Metal</FormLabel>
        <Checkbox
          value="Holiday"
          type="checkbox"
          onChange={handleOnChange}
          defaultChecked={category.includes("Heavy Metal")}
        />
      </Box>

      <Box
        border="1px solid red"
        bgImage="linear-gradient(red,orange)"
        mt="2rem"
        color="whitesmoke"
      >
        <Text fontSize="2xl">Sort</Text>
      </Box>

      <Box onChange={handleSortBy}>
        <Box display="flex" gap="1rem" justifyContent="space-between">
          <FormLabel>Ascending</FormLabel>
          <Radio type="radio" value="asc" defaultChecked={sortBy === "asc"} />
        </Box>

        <Box display="flex" gap="1rem" justifyContent="space-between">
          <FormLabel>Descending</FormLabel>
          <Radio type="radio" value="desc" defaultChecked={sortBy === "desc"} />
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSort;
