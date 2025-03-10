import React, { useState } from "react"; // Import useState to manage state
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => { // Capitalize the component name
  const [filter, setFilter] = useState(""); // Define filter state

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in"
              }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <SearchBar filter={filter} setFilter={setFilter} /> {/* Pass the filter state */}

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winners</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in"
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="Hero" /> {/* Added alt text for accessibility */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; // Export the component with the correct name
