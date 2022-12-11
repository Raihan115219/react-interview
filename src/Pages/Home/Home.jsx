import React from "react";
import { Container } from "react-bootstrap";
import WaletBox from "../../Components/Box/WaletBox/WaletBox";
import Hero from "../../Components/Hero/Hero";
import Notice from "../../Components/Notice/Notice";
import Transetion from "../../Components/Transection/Transetion";
import "./Home.css";
function Home() {
  return (
    <div>
      {/* notice board */}
      <Notice />
      {/* hero  */}
      <Hero />
      {/* form secitons */}
      <section>
        <Container className="boxSection">
          <WaletBox />
          <Transetion />
        </Container>
      </section>
    </div>
  );
}

export default Home;
