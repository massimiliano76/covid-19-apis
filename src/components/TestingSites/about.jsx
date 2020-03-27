import React from 'react';
import { Link } from 'gatsby';

const About = () => (
  <div className="about">
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eos facilis velit sunt blanditiis numquam, obcaecati cumque illum officia voluptatem, provident dolore nihil distinctio ut cum sapiente expedita! Optio, cumque!
    </p>
    <Link to="/" className="btn">read more</Link>
  </div>
);

export default About;
