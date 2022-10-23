import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { getMusicRecords } from "../redux/AppReducer/action";
import { Box, Image } from "@chakra-ui/react";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const location = useLocation();
  const [searchParams] = useSearchParams();
    useEffect(() => {
      if (location || musicRecords.length === 0) {
        const sortBy = searchParams.get("sortBy");
        const queryParams = {
          params: {
            genre: searchParams.getAll("genre"),
            _sort: sortBy && "year",
            _order: sortBy,
          },
        };
        dispatch(getMusicRecords(queryParams));
      }
    }, [location.search]);
  return (
    <>
      {musicRecords.length > 0 &&
        musicRecords.map((t) => (
          <Music key={t.id}>
            <NavLink to={`/music/${t.id}`}>
              <Box>{t.name} </Box>
              <Box>
                <Image w="200px" m="auto" src={t.img} alt={t.name} />
              </Box>
              <Box>
                <Box>{t.genre}</Box>
                <Box>{t.year} </Box>
              </Box>
            </NavLink>
          </Music>
        ))}
    </>
  );
};
export default MusicRecords;

const Music = styled.div`
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: 5px solid teal;
  color: white;
`;
