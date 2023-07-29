import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Reading books for self-growth is a transformative journey that expands the horizons of our minds and nourishes our souls. Within the pages of books, we encounter diverse perspectives, profound wisdom, and valuable insights from authors who have walked varied paths in life. Each book becomes a stepping stone towards personal development, offering a mirror to reflect upon our strengths and weaknesses..</p>
            <p className='fs-17'>The habit of book reading for self-growth enriches our lives with continuous learning, encourages critical thinking, and empowers us to evolve into the best version of ourselves. With every turn of the page, we embark on a quest for self-discovery, finding solace, enlightenment, and a sense of purpose that propels us forward on our path to personal growth and fulfillment.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
