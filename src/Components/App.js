import React, { useState } from "react";
import InfiniteScroll from "./InfiniteScroll";

function App() {
  const [state, setState] = useState([]);
  return <InfiniteScroll state={state} setState={setState} />;
}

export default App;
