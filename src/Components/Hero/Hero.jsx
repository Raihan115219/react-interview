import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <Container>
        <div className="content_title">
          <h2>Request testnet LINK</h2>
          <p>
            Get testnet LINK for an account on one of the supported blockchain
            testnets so you can create and test your own oracle and Chainlinked
            smart contract
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
