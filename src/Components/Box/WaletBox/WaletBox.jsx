import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "./WaletBox.css";

function WaletBox() {
  // google re captcha func
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      <div>
        <Alert variant="primary">
          Your wallet is connected to{" "}
          <span className="fw-bold">Ethereum Kovan</span>, so you are requesting{" "}
          <span className="fw-bold">Ethereum Kovan</span> Link/ETH.
        </Alert>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="label">Wallet Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="wallet address....."
                className="input"
              />
            </Form.Group>

            <div className="row">
              <Form.Label className="label">Request type</Form.Label>
              <div className="col-lg-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="20TH link" disabled />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="0.5ETH" disabled />
                </Form.Group>
              </div>
            </div>
            {/* I had not genarate any key sir...... */}
            <Form.Group className="mb-2" controlId="formBasicCheckbox">
              <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />,
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default WaletBox;
