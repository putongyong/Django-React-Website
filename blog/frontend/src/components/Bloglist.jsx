import React, { useState, useEffect } from 'react';

function Bloglist() {
    const [blog,setBlog]=useState([{id: 1, title:"test", text:"testing"}])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/blogs")
        .then(response => response.json())
        .then(data => setBlog(data))
        .then(console.log(blog))
      },[])

  return (
    <h1>
        Bloglist
    </h1>
  );
}

export default Bloglist;