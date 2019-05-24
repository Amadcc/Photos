import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styled from "styled-components";

const ClientID =
  "9c09a3d9057695353b381717f53b3b6b870787b366d870fd70bb31c8d556c41f";
const URL = "https://api.unsplash.com/photos/";

const Photos = () => {
  const [photosData, setPhotosData] = useState([]);
  useEffect(() => {
    axios
      .get(URL, { params: { client_id: ClientID } })
      .then(({ data }) => setPhotosData(data))
      .catch(error => console.log(error));
  }, []);

  function searchPhotos(e) {
    console.log(e.target.value);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: ClientID,
          query: e.target.value
        }
      })
      .then(({ data }) => setPhotosData(data.results))
      .catch(error => console.log(error));
  }

  return (
    <div style={main}>
      <input style={input} onChange={e => searchPhotos(e)} type="text" />
      <PhotoWrapper>
        {photosData.map(photo => (
          <div className="photo" key={photo.id}>
            <Link href={`photo?id=${photo.id}`}>
              <a className="link">
                <img src={photo.urls.thumb} />
              </a>
            </Link>
          </div>
        ))}
      </PhotoWrapper>
    </div>
  );
};

export default Photos;
const main = {
  marginTop: "3%"
};

const input = {
  width: "40%",
  borderRadius: 25,
  border: "none",
  border: "solid 1px #ccc",
  fontSize: "185%",
  borderWidth: 2,
  outline: "none"
};
const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-gap: 4rem;
  grid-auto-flow: dense;
  .photo {
    margin-top: 3em;
    .link {
      text-decoration: none;
      color: black;
    }
    .title {
      min-height: 2.5rem;
      position: relative;
    }
  }
`;
