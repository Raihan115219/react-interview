import React, { useEffect, useState } from "react";
import { Button, Container, Dropdown } from "react-bootstrap";
import "./Header.css";
import { BiUserCircle, BiWallet } from "react-icons/bi";
import { FaEthereum, FaWallet } from "react-icons/fa";
import { coin } from "./EtheriumCoinData/coin";
import CoinModal from "./Modal/CoinModal";
import { NavLink } from "react-router-dom";

function Header() {
  const [modalShow, setModalShow] = useState(false);
  // open modal funciton

  return (
    <div>
      <Container>
        <div className="headerWrap">
          <NavLink to="/" className="brand">
            <h2>Faucets</h2>
          </NavLink>
          <div className="infoBtn">
            {/* coin seletions */}
            <div className="me-2">
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="coinBtn"
                >
                  <FaEthereum />
                  <span className="coinName">Etherume Kovan</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {coin?.map((coin, i) => {
                    return (
                      <Dropdown.Item href="#/action-1">
                        {coin.icon} {coin.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* wallet check */}
            <div className="me-2">
              <Button
                variant="none"
                size="md"
                className="connectWallet"
                onClick={() => setModalShow(true)}
              >
                <FaWallet /> <span className="coinName">Connect wallet</span>
              </Button>
            </div>
            {/* user part */}
            <div className="me-2">
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <BiUserCircle className="userIcon" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink
                      to="/login"
                      className="text-decoration-none text-primary"
                    >
                      Login
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink
                      to="/signup"
                      className="text-decoration-none text-primary"
                    >
                      Signup
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink
                      to="/faq"
                      className="text-decoration-none text-primary"
                    >
                      FAQ
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        {/* Modal */}
        {modalShow && (
          <CoinModal show={modalShow} onHide={() => setModalShow(false)} />
        )}
      </Container>
    </div>
  );
}

export default Header;
