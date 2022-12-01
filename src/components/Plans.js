import React from "react";
import { Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import promoone from "../images/promoone.webp";
import promotwo from "../images/promotwo.webp";
import promothree from "../images/promothree.webp";
import Hero1 from "../images/Hero1.jpg";

function Plans() {
  return (
    <div className="container text-center p-0 ">
      <CardGroup className="row g-2">
        <Card className="col-md ">
          <div className="inner">
            <Card.Img variant="top" src={promoone} />
          </div>
          <Card.Body>
            <Card.Title>Coach Promotion 8*</Card.Title>
            <Card.Text className="lead">
              Access the offer and now benefit from 8 training sessions with a
              personal trainer + 1 month of unlimited gym access* for a period
              of one month
            </Card.Text>
          </Card.Body>
          <button
            class="btn btn-dark text-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            Read More
          </button>

          <div
            class="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanvas-header hero-bg">
              <h2 class="offcanvas-title " id="offcanvasTopLabel">
                Coach Promotion 8*
              </h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body bg-dark text-warning">
              <h2 className="hero-bg text-secondary">
                PACKAGE OF 12 WORKOUTS WITH A{" "}
                <span style={{ color: "red" }}>
                  PERSONAL TRAINER + UNLIMITED GYM ACCESS
                </span>{" "}
                SUBSCRIPTION / 1 MONTH
              </h2>
              <p>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    Are you a beginner and want fast results? FITNESS FLOREASCA
                    will bring you the best solution at a reasonable price.
                  </li>
                  <li>
                    Access the offer and now benefit from 8 training sessions
                    with a personal trainer + 1 month access to the gym for a
                    period of one month, with a minimum investment of only 350
                    lei / month.
                  </li>{" "}
                  We mention that a package of 12 workouts with the trainer
                  costs 640 lei and access to the gym/month costs 180 lei,
                  respectively the real value of this package would be 820 lei,
                  but we offer it to you for{" "}
                  <strong>only 350 lei (43% DISCOUNT).</strong>
                  <li>
                    The trainings last up to 45 minutes, take place at a certain
                    time, pre-arranged with a trainer, and are usually not
                    exclusive to one person.
                  </li>
                  The training period with the trainer is one month *Floreasca
                  Fitness offers you the possibility of purchasing the Trainer
                  Promo 12 subscription, the price remains{" "}
                  <strong>350 lei every month</strong>
                  until the offer expires. You receive 8 sessions with a
                  personal trainer, valid for 30 days ; You receive 1
                  Subscription Unlimited access to the hall,
                  <strong>valid for 30 days.</strong>
                </ul>
              </p>
            </div>
          </div>

          <Card.Footer>
            <strong>*Gym subscription + 8 trainer sessions / month</strong>
          </Card.Footer>
          {/* plan-2 */}
        </Card>
        <Card>
          <div className="inner">
            <Card.Img variant="top" src={promotwo} />
          </div>
          <Card.Body>
            <Card.Title>Coach Promotion 12*</Card.Title>
            <Card.Text className="lead">
              Access the offer and now benefit from 8 training sessions with a
              personal trainer + 1 month of unlimited gym access* for a period
              of one month.
            </Card.Text>
          </Card.Body>
          <button
            class="btn btn-warning text-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            Read More
          </button>

          <div
            class="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanvas-header hero-bg">
              <h2 class="offcanvas-title " id="offcanvasTopLabel">
                Coach Promotion 8*
              </h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body bg-dark text-warning">
              <h2 className="hero-bg text-dark">
                PACKAGE OF 12 WORKOUTS WITH A PERSONAL TRAINER + UNLIMITED GYM
                ACCESS SUBSCRIPTION / 1 MONTH
              </h2>
              <p>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    Are you a beginner and want fast results? FITNESS FLOREASCA
                    will bring you the best solution at a reasonable price.
                  </li>
                  <li>
                    Access the offer and now benefit from 12 training sessions
                    with a personal trainer + 1 month access to the gym for a
                    period of one month, with a minimum investment of only 500
                    lei / month.
                  </li>{" "}
                  We mention that a package of 12 workouts with the trainer
                  costs 640 lei and access to the gym/month costs 180 lei,
                  respectively the real value of this package would be 820 lei,
                  but we offer it to you for{" "}
                  <strong>only 500 lei (43% DISCOUNT).</strong>
                  <li>
                    The trainings last up to 45 minutes, take place at a certain
                    time, pre-arranged with a trainer, and are usually not
                    exclusive to one person.
                  </li>
                  The training period with the trainer is one month *Floreasca
                  Fitness offers you the possibility of purchasing the Trainer
                  Promo 12 subscription, the price remains{" "}
                  <strong>500 lei every month</strong>
                  until the offer expires. You receive 12 sessions with a
                  personal trainer, valid for 30 days ; You receive 1
                  Subscription Unlimited access to the hall,
                  <strong>valid for 30 days.</strong>
                </ul>
              </p>
            </div>
          </div>
          <Card.Footer>
            <strong>*Gym subscription + 8 trainer sessions / month</strong>
          </Card.Footer>
        </Card>
        {/* plan 3 */}
        <Card>
          <div className="inner">
            <Card.Img variant="top" src={promothree} />
          </div>
          <Card.Body>
            <Card.Title>Coach Promotion 16*</Card.Title>
            <Card.Text className="lead">
              Access the offer and now benefit from 8 training sessions with a
              personal trainer + 1 month of unlimited gym access* for a period
              of one month.
            </Card.Text>
          </Card.Body>
          <button
            class="btn btn-dark text-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            Read More
          </button>

          <div
            class="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanvas-header hero-bg">
              <h2 class="offcanvas-title " id="offcanvasTopLabel">
                Coach Promotion 16*
              </h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body bg-dark text-warning">
              <h2 className="hero-bg text-dark">
                PACKAGE OF 16 WORKOUTS WITH A PERSONAL TRAINER + UNLIMITED GYM
                ACCESS SUBSCRIPTION / 1 MONTH
              </h2>
              <p>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    Are you a beginner and want fast results? FITNESS FLOREASCA
                    will bring you the best solution at a reasonable price.
                  </li>
                  <li>
                    Access the offer and now benefit from 12 training sessions
                    with a personal trainer + 1 month access to the gym for a
                    period of one month, with a minimum investment of only 650
                    lei / month.
                  </li>{" "}
                  We mention that a package of 12 workouts with the trainer
                  costs 640 lei and access to the gym/month costs 180 lei,
                  respectively the real value of this package would be 820 lei,
                  but we offer it to you for{" "}
                  <strong>only 650 lei (43% DISCOUNT).</strong>
                  <li>
                    The trainings last up to 45 minutes, take place at a certain
                    time, pre-arranged with a trainer, and are usually not
                    exclusive to one person.
                  </li>
                  The training period with the trainer is one month *Floreasca
                  Fitness offers you the possibility of purchasing the Trainer
                  Promo 12 subscription, the price remains{" "}
                  <strong>650 lei every month</strong>
                  until the offer expires. You receive 12 sessions with a
                  personal trainer, valid for 30 days ; You receive 1
                  Subscription Unlimited access to the hall,
                  <strong>valid for 30 days.</strong>
                </ul>
              </p>
            </div>
          </div>
          <Card.Footer>
            <strong>*Gym subscription + 16 trainer sessions / month</strong>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Plans;
