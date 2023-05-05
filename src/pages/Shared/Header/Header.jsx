import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import './Header.css'

const Header = () => {


  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <span>Journalism Without Fear or Favour</span>
        </p>
        <p className="display__date">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex align-items-center news__container">
        <Button variant="danger" className="danger-btn">Latest</Button>
        <Marquee className="text-danger fw-bold" speed={60}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain
          — as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;