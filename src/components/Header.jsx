import React from 'react'

export default function Header() {
  return (
    <>
      <nav className="navbar  bg-slate-400">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           Shopping Cart
          </a>
          <a href="">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </nav>
    </>
  );
}
