import React from "react";
import Link from "next/link";
import Photos from "./Components/Photos";
import styled from "styled-components";

export default function Index() {
  return (
    <Wrapper>
      <Photos />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  nav ul li {
    display: inline-block;
    margin: 0.5em;
    a.active {
      font-weight: bold;
    }
  }
`;
