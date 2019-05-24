import React from "react";
import axios from "axios";
import styled from "styled-components";

const ClientID =
  "9c09a3d9057695353b381717f53b3b6b870787b366d870fd70bb31c8d556c41f";

const PhotoComponent = props => {
  const [photo, setPhoto] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/${props.id}`, {
        params: { client_id: ClientID }
      })
      .then(({ data }) => setPhoto(data))
      .catch(error => console.log(error));
  }, []);
  return (
    Object.keys(photo).length > 0 && (
      <Wrapper>
        <div className="movie">
          <img src={photo.urls.small} />
        </div>
        <div>
          <a
            className="link"
            href={photo.links.html}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="name">{photo.user.name}</h1>
            <p className="username">@{photo.user.username}</p>
          </a>
        </div>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  text-align: center;
  .link {
    text-decoration: none;
    color: black;
  }
  .name {
    font-size: 1em;
  }
  .username {
    font-size: 0.9em;
    color: #848181;
  }
`;

export default PhotoComponent;
