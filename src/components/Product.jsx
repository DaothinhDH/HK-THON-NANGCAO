import React, { useState } from "react";

export default function Product() {
  const [cart, setCart] = useState([]); 

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const productLists = [
    {
      id: 1,
      name: "product1",
      price: "12000",
      count: 0,
    },
    {
      id: 2,
      name: "product2",
      price: "12000",
      count: 0,
    },
    {
      id: 3,
      name: "product3",
      price: "12000",
      count: 0,
    },
    {
      id: 4,
      name: "product4",
      price: "12000",
      count: 0,
    },
    {
      id: 5,
      name: "product5",
      price: "12000",
      count: 0,
    },
    {
      id: 6,
      name: "product6",
      price: "12000",
      count: 0,
    },
  ];

  return (
    <div className=" d-flex gap-10 justify-center flex-wrap m-16 ml-72 mr-72">
      {productLists.map(
        (
          product 
        ) => (
          <div
            key={product.id}
            className="card text-center"
            style={{ width: "20rem" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT8ft4R4PRJP3w1ShZLZhhENT0DZXzTPN0A&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text">{product.price}</p>
              <a
                href="#"
                className="btn btn-danger w-100"
                onClick={() => handleAddToCart(product)}
              >
                Thêm Giỏ Hàng
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
}
