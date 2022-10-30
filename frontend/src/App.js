import "./App.css";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [res, setRes] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://172.20.201.218:8700/api/", {
        method: "POST",
        body: JSON.stringify({
          word: word,
        }),
      });
      let resJson = await res.json();
      setRes(resJson);
      setWord("");

    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="App">

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          placeholder="Uzbek text:"
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Translate</button>
        <div className="message">{res.translated}</div>
      </form>
    </div>
  );
}

export default App;


////////////////////////////////////

// import React, { useState, useEffect } from 'react';
//
// const App = () => {
//    const [post, setPost] = useState([]);
//    useEffect(() => {
//       fetch('http://127.0.0.1:8000/api/')
//          .then((response) => response.json())
//          .then((data) => {
//             console.log(data);
//             setPost(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);
//
//    return (
// <h1 className="post-title">{post.word}</h1>)}
//
//
//
//
//
//
// export default App;

