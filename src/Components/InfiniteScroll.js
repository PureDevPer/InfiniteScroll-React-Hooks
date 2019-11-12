import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { api } from "../api";

const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
  display: grid;
  grid-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1) translateY(-5px);
  }
`;

const InfiniteScroll = ({ state, setState }) => {
  const [loadMore, setLoadMore] = useState(true);

  const getAPI = async load => {
    try {
      if (load) {
        const {
          data: { message }
        } = await api;

        setState([...state, ...message]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPI(loadMore);
    setLoadMore(false);
  }, [getAPI, loadMore]);

  return (
    <Container>
      {state.map((data, index) => (
        <Image src={data} alt="" key={index} />
      ))}
    </Container>
  );
};

InfiniteScroll.propTypes = {
  state: PropTypes.array,
  setState: PropTypes.func
};

export default InfiniteScroll;
