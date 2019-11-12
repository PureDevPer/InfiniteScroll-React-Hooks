import React, { useState, useEffect } from "react";
import { api } from "../api";

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

  console.log(state, setState);
  return <div>Hello</div>;
};

export default InfiniteScroll;
