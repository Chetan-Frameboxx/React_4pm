import React, { useState } from "react";
import { Products } from "./Products";

function ProductCatelog() {
  // const products = [
  //   { id: 1, name: "shoes", category: "Fashion", price: 800 },
  //   { id: 1, name: "Charger", category: "Electornics", price: 80 },
  //   { id: 1, name: "Jeans", category: "Fashion", price: 500 },
  //   { id: 1, name: "Mobile", category: "Electornics", price: 1000 },
  // ];

  // useState

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter Functionality

  const filteredProducts = Products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="container text-bg-dark">
        <h1 className="text-center">Product List</h1>

        {/* Search Functionality  */}

    <div className="row text-bg-danger py-3 m-4">

    
        <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Search For Product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>

        {/* Category Filter DropDown  */}

       <div className="col">
       <select
        className="form-select" 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Category</option>
          <option value="Electornics">Electornics</option>
          <option value="Fashion">Fashion</option>
        </select>
       </div>



       </div>

        {/* Display Products  */}

        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.title.slice(0,30)} - ${product.price} ({product.category})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductCatelog;
