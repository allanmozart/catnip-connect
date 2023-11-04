import { useState, useEffect } from "react";
import axios from "axios";

import {
  DislikeButton,
  LikeButton,
  Modal,
  VoteContainer,
  VotingOptions,
} from "./style";

export const Vote = () => {
    const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&order=RANDOM&limit=1', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'live_KasVNFto4XAaTCjbdEB75L93A6YIwsEylHovNx5AZ86nkJgkWfT55eRsz430O3cC',
        },
      })
      .then((response) => {
        const image = response.data[0].url; // Assuming the URL of the image is in the 'url' property
        setImageUrl(image);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  return (
    <VoteContainer id="VoteContainer">
      <Modal>
        <VotingOptions>
          <LikeButton>I Love it Bro</LikeButton>
          <DislikeButton>Not This Time Bro</DislikeButton>
        </VotingOptions>
        <img src={imageUrl} style={{maxHeight: "500px", marginTop: "20px"}}></img>
      </Modal>
    </VoteContainer>
  );
};
