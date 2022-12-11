import React from "react";
import { Button, Modal } from "react-bootstrap";

function CoinModal(props) {
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...props}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Connect Wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <div className="wallet-card card border-0 shadow-lg">
                <img
                  src="https://cdn.dribbble.com/users/75026/screenshots/2160434/twitter-backdrop_03.png"
                  alt=""
                  className="img img-fluid img-thumbnai shadow-lg"
                />
                <p className="text-center fw-bold fs-3">Meta Vask</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wallet-card card border-0 shadow-lg">
                <img
                  src="https://cdn.dribbble.com/users/75026/screenshots/2160434/twitter-backdrop_03.png"
                  alt=""
                  className="img img-fluid img-thumbnai shadow-lg"
                />
                <p className="text-center fw-bold fs-3">Meta Vask</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CoinModal;
