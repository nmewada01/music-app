import React from "react";
import styled from "styled-components";
import FilterSort from "../SortFilter/FilterSort";
import MusicRecords from "./MusicRecords";

const HomePage = () => {
  return (
    <HomeWrap>
      <FilterSortWrapper>
        <FilterSort />
      </FilterSortWrapper>
      <MusicWrapper>
        <MusicRecords />
      </MusicWrapper>
    </HomeWrap>
  );
};

export default HomePage;

const HomeWrap = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  color:white;
  background-image:linear-gradient(#011,#010)
`;

const FilterSortWrapper = styled.div`
  width: 200px;
`;

const MusicWrapper = styled.div`
  width: 100%;
  border: 1px solid green;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  justfiy-content: center;
  grid-gap: 1rem;
`;
