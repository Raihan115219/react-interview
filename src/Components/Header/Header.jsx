import React, { useEffect, useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
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
            <div className="etherume me-2">
              <Dropdown className="me-4">
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <div className="d-flex justify-content-center align-items-center ">
                    <FaEthereum className="me-1 fs-4" />
                    <p className=" d-lg-block d-sm-none d-md-none">
                      Ethereum Kovan
                    </p>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {coin?.map((coin) => {
                    return (
                      <div>
                        <Dropdown.Item
                          href={`#/action-${coin.id}`}
                          key={coin.id}
                          className="me-1"
                        >
                          {coin.icon}
                          {coin.name}
                        </Dropdown.Item>
                      </div>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* wallet check */}
            <div
              className="waletConnect me-2"
              onClick={() => setModalShow(true)}
            >
              <div>
                <FaWallet className="fs-5 me-1 walletIcon" />
              </div>
              <div>
                <p className="d-lg-block d-sm-none d-md-none">Wallet Connect</p>
              </div>
            </div>
            {/* user part */}
            <div className="userPart  me-2">
              <div className="icon">
                <Dropdown className="toggle">
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                    className="toggle"
                  >
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
