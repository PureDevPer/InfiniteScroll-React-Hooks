import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin: 30px 0px;
`;

const Container = styled.div`
  width: 100%;
  padding: 0px 10px;
  display: grid;
  grid-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #fafafa;
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
        const api = axios.get("https://dog.ceo/api/breeds/image/random/10");

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

  useEffect(() => {
    const items = document.getElementById("items");

    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight ===
        items.clientHeight + items.offsetTop + 8
      ) {
        setLoadMore(true);
      }
    });
  }, []);

  useEffect(() => {
    const items = document.getElementById("items");

    if (items.clientHeight && items.clientHeight <= window.innerHeight) {
      setLoadMore(true);
    }
  }, [state]);

  return (
    <>
      <Header>Infinite Scroll using React Hooks</Header>
      <Container id="items">
        {state.map((data, index) => (
          <Image src={data} alt="" key={index} />
        ))}
      </Container>
    </>
  );
};

InfiniteScroll.propTypes = {
  state: PropTypes.array,
  setState: PropTypes.func
};

export default InfiniteScroll;
