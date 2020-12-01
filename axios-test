import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`, {
        params: {
          postId: "3",
        },
      })
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  return (
    <div>
      {items.map((v, i) => {
        return <li key={i}>{v.name}</li>;
      })}
    </div>
  );
}

export default App;
