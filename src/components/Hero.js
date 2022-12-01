import React from "react";
import { Card } from "react-bootstrap";
import Hero1 from "../images/Hero1.jpg";
import positivity from "../images/positive.jpg";
import diversity from "../images/diversity.webp";
import fun from "../images/fun.webp";
import family from "../images/family.webp";

function Hero() {
  return (
    <div className="container-fluid ">
      <img src={Hero1} alt="Hero" style={{ width: "100%" }} />
      <div className="d-none d-sm-flex justify-content-evenly bg-warning">
        <Card style={{ width: "18rem" }} className="shadow-lg">
          <div className="inner">
            <Card.Img variant="top" src={positivity} />
          </div>
          <Card.Body>
            <Card.Title>
              <span className="yellow">|</span>Positivity
            </Card.Title>
            <Card.Text>
              Differences are encouraged. Kindness, professionalism, fun and
              motivation. We strongly believe that people who feel inspired
              achieve their goals more easily. That voice inside you that tells
              you you can't, is lying.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="shadow-lg">
          <div className="inner">
            <Card.Img variant="top" src={diversity} />
          </div>
          <Card.Body>
            <Card.Title>
              <span className="yellow">|</span> Diversity
            </Card.Title>
            <Card.Text>
              Come as you are! There is no one type or way of training in our
              diverse community. Your body can do anything. You just have to
              convince your brain.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="shadow-lg">
          <div className="inner">
            <Card.Img variant="top" src={fun} />
          </div>
          <Card.Body>
            <Card.Title>
              <span className="yellow">|</span>Fun
            </Card.Title>
            <Card.Text>
              We know serious fitness is hard, but that doesn't mean it can't be
              fun. Our team will make sure that you get the most out of the time
              you dedicate to training.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="shadow-lg">
          <div className="inner">
            <Card.Img variant="top" src={family} />
          </div>
          <Card.Body>
            <Card.Title>
              <span className="yellow">|</span>Family Fitness
            </Card.Title>
            <Card.Text>
              Come with your partners and other family members to get Family
              packages and deals. Customised to your liking.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* Offers */}
      <div></div>
    </div>
  );
}

export default Hero;
