import React, { useState, useEffect } from 'react';

function Bloglist() {
    const [data,setData]=useState(null)

    useEffect(() => {
      async function fetchDatas() {
        const response = await fetch("http://127.0.0.1:8000/api/blogs")
        const datas = await response.json();
        setData(datas);
      }
      fetchDatas()
      },[])

      if (data) {
        return (
          <div>
            <ul>            
            {data.map((item)=>(
               <li key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
               </li>
            ))}
            </ul>          
          </div>
        );
      };

}

export default Bloglist;