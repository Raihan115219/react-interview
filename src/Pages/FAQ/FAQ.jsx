import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./FAQ.css";
import { FaqData } from "./FAQData/FaqData";

function FAQ() {
  return (
    <div>
      <Container>
        <div className="title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faqs">
          <Accordion>
            {FaqData.map((faq, i) => {
              return (
                <Accordion.Item eventKey={faq.id} className="mb-3" key={faq.id}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.desc}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default FAQ;
