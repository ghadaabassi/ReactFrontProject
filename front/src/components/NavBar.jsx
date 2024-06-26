import InputWithLabel from "./InputWithLable";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";
import "../styles/ArtCard.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Flower from "./Flower";

const NavBar = ({
  id,
  value,
  onInputChange,
  onSearch,
  resultCount,
  searchTerm,
}) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          {
            //add the url to chicago art gallery official page
          }
          <a
            className="navbar-brand textStyling"
            href="https://www.artic.edu/collection"
            style={{ fontSize: "27px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {
              //add the logo to the navbar
            }
            <img
              src="\src\assets\images\logo.png"
              alt="Logo"
              width="80"
              height="80"
              className="d-inline-block"
              style={{ margin: "35px" }}
            />
            Art Gallery
          </a>

          <div className="mt-4">
            <Canvas
              style={{
                height: "200px",
              }}
            >
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <pointLight position={[30, 30, 30]} />
              {/* flower position  rotation*/}
              <group rotation={[Math.PI / 2, 6, 0]}>
                <Flower />
              </group>
            </Canvas>
          </div>

          <div>
            {/*The Reusable Component*/}
            <InputWithLabel id={id} value={value} onInputChange={onInputChange}>
              Search :
            </InputWithLabel>
            {/*The button is disabled when there search term is empty */}
            <button
              style={{ margin: "20px" }}
              className="btn-dark-red "
              type="button"
              onClick={onSearch}
              disabled={!searchTerm}
            >
              Search
            </button>
          </div>
          {/*add search count result */}
          <div>{resultCount} result(s)</div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
