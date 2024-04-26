import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillAmazonCircle,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Navyata</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, earum
            dolorum! Provident, quaerat voluptatem? Ipsa cumque quis perferendis
            voluptates, tempora odit perspiciatis illum provident magni optio a
            voluptatum numquam inventore.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            deserunt accusamus aspernatur corporis nihil maxime, obcaecati
            quidem facilis nulla consequatur error tempore, ea, illum iure
            quisquam. Ipsa, quis? Repellat, deserunt!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.4s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
