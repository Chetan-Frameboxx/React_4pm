import React, { useEffect, useState } from "react";

function FetchData() {
  const [count, setCount] = useState(0);
  const [fiveCount, setFiveCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log("Component Mount");
    console.log("The Count is ", count);

    return () => {
      console.log("Data is Cleaned Up");
    };
  }, [count]);

  // Fecthing API

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div className="text-bg-warning p-3">
        <h1>Learning useEffect</h1>

        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Counter : {count}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setFiveCount(fiveCount + 5)}
        >
          Counter : {fiveCount}
        </button>

        <hr />

        <h2>API Data Fetch</h2>
        <ol>
            {users.map((u) => (
                <>
                     <div key={u.id} className="card" style={{width: "18rem"}}>
                        <img src={u.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{u.title.slice(0,30)}</h5>
                            <p className="card-text">{u.description.slice(0,30)}</p>
                            <a href="#" className="btn btn-primary">{u.price}</a>
                        </div>
                    </div>
                </>
            ))}
          {/* {users.map((u) => (
            <li key={u.id}>{u.title.slice(0,30)}</li>
           
          
          
          ))} */}
        </ol>
      </div>
    </>
  );
}

export default FetchData;
