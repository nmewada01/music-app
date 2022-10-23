import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMusicRecords,
  updateMusicRecords,
} from "../redux/AppReducer/action";

const EditMusicRecord = () => {
  const { id } = useParams();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  const [musicName, setMusicName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [imageName, setImageName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (musicName && artistName && imageName) {
      const payload = {
        name: musicName,
        artist: artistName,
        img: imageName,
      };
      dispatch(updateMusicRecords(id, payload)).then(() => {
        dispatch(getMusicRecords());
      });
    }
  };

  useEffect(() => {
    if (id) {
      const currentMusic = musicRecords.find((album) => album.id === id);
      if (currentMusic) {
        setMusicName(currentMusic.name);
        setArtistName(currentMusic.artist);
        setImageName(currentMusic.image);
      }
    }
  }, [id, musicRecords]);

  return (
    <Box
      w="50%"
      m="auto"
      bgImage="linear-gradient(royalblue,skyblue,lightblue)"
      p="5rem"
      color="white"
      fontSize="4rem"
    >
      <Heading>Edit Page</Heading>
      <form onSubmit={handleSubmit}>
        <Box>
          <FormLabel>Edit Music Name</FormLabel>

          <Input
            onChange={(e) => setMusicName(e.target.value)}
            value={musicName}
          />
        </Box>
        <Box>
          <FormLabel>Edit Artist Name</FormLabel>
          <Input
            onChange={(e) => setArtistName(e.target.value)}
            value={artistName}
          />
        </Box>
        <Box>
          <FormLabel>Edit Image</FormLabel>
          <Input
            onChange={(e) => setImageName(e.target.value)}
            value={imageName}
          />
        </Box>
        <Button
          type="submit"
          color="purple"
          mt="2rem"
          p="1rem 8rem"
          bgImage="linear-gradient(green,yellowgreen)"
          fontSize="1rem"
        >
          Edit
        </Button>
      </form>
    </Box>
  );
};

export default EditMusicRecord;
