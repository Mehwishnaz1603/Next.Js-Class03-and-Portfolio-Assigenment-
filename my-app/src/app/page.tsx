import Image from "next/image";

import  image  from "https://wallpaperaccess.com/full/4865684.jpg";
export default function Home() {
  return (
    
    <div className="parentContainer">
      <div className="childContainer">
      <div className="h1"> <h1>Hello Everyone This Is Our Next.Js First Project <br /> Hello World</h1></div>
       Hey ,
       <br />
       My Name Is <span className="span"> MehwishNaz </span>
       <br /> 
       I am Next Js Developer
       <div className="intro">
       <p>
      Hello! I am Mehwish Naz, a passionate Next.js developer with a knack for creating dynamic, high-performance web applications. 
      With a strong foundation in JavaScript and React, I specialize in building scalable, user-friendly interfaces that enhance 
      user experiences. I love leveraging Next.js's powerful features like server-side rendering and static site generation to 
      optimize performance and SEO. 
      With 2 years of experience in web development, I have successfully delivered projects across various domains,collaborating 
      closely with designers and stakeholders to bring ideas to life. Whether it’s crafting responsive layouts or implementing complex 
      functionalities, 
      I thrive on solving challenges and staying up-to-date with the latest trends in the JavaScript ecosystem. 

      </p>
      <button className="btn"> About Me</button>
      <button className="btn"> Download Cv</button>
     </div>
      </div>
      <div>
        <img className="image" src="https://wallpaperaccess.com/full/4865684.jpg" alt="Error" />
      </div>
    </div>
    
  );
}

