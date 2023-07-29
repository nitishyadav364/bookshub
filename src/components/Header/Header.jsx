import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'> Books have the power to inspire, educate, entertain, and uplift us. They are an essential part of our cultural heritage and an irreplaceable source of wisdom and creativity. Whether in physical or digital form, books continue to be cherished companions in our pursuit of knowledge and personal growth.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header