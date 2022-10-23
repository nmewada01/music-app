import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getMusicRecords } from "../redux/AppReducer/action";

const SingleMusicRecord = () => {
  const { id } = useParams();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (musicRecords.length === 0) {
      dispatch(getMusicRecords());
    }
  }, [dispatch, musicRecords.length]);
  useEffect(() => {
    if (id) {
      const currentMusic = musicRecords.find((album) => album.id === id);
      currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  }, [id, musicRecords]);

  // console.log(currentMusicAlbum);
  return (
    <Box>
      <Heading>Music Title:- {currentMusicAlbum.name}</Heading>
      <Box>
        <NavLink to={`/music/${id}/edit`}>
          <Button p="1rem 5rem" bg="teal" mt="2rem">
            Edit
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};
export default SingleMusicRecord;
