import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Table2 from "../Table-2/Table2";
import Table1 from "../Table1/Table1";
import "./Transections.css";

function Transetion() {
  const [activeTab, setActiveTab] = useState(false);
  const handleTab = () => {
    setActiveTab(!activeTab);
  };
  return (
    <div>
      <div className="row">
        <div className="transections_history">
          <h2>Request History</h2>
          <div className="tabs_button">
            <div className="button">
              <button className={activeTab ? "" : "active"} onClick={handleTab}>
                ETH transaction history
              </button>
            </div>
            <div className="button">
              <button className={activeTab ? "active" : ""} onClick={handleTab}>
                TestLink Transaction History
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">{activeTab ? <Table1 /> : <Table2 />}</div>
      </div>
    </div>
  );
}

export default Transetion;
