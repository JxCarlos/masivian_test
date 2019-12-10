import React, { useState, useEffect } from "react";
import { bindComic } from "../../redux/comics/connect";
import ImgLike from "../../assets/svg/like.svg";
import ImgDisLike from "../../assets/svg/dislike.svg";
import {
  Container,
  CardDeck,
  Card,
} from "react-bootstrap";

import "./styles/index.css";

const Comics = ({ fechtSearchCommic, searchCommic }) => {
  useEffect(() => {
    const comicSelected = Math.floor(Math.random() * 614);
    fechtSearchCommic(comicSelected);
  }, []);

  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);

  const onPressVotingButton = type => {
    if (type === "LIKE") {
      setUpVote(upVote + 1);
    } else if (type === "DISLIKE") {
      setDownVote(downVote + 1);
    }
  };

  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src={searchCommic.img}
            alt={searchCommic.alt}
          />
          <Card.Body>
            <Card.Title className="text-center">
              <h2>{searchCommic.title}</h2>
            </Card.Title>
            <Card.Text className="text-justify">
              {searchCommic.transcript}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div>
							<div className="left" onClick={() => onPressVotingButton("LIKE")} style={{
                backgroundImage: `url(${ImgLike})`
              }}>
								{upVote}
							</div>
							<div className="right"  onClick={() => onPressVotingButton("DISLIKE")} style={{
                backgroundImage: `url(${ImgDisLike})`
              }}>
								{downVote}
							</div>
            </div>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default bindComic(Comics);
