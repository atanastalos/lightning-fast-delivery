import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

import logo from './static/logo.png';
import flaticon from './static/flaticons/flaticon-logo.png';
import brain from './static/flaticons/brain.png';
import dev from './static/flaticons/development.png';
import puzzle from './static/flaticons/puzzle.png';
import star from './static/flaticons/star.png';

function App() {
    return (
        <>
            <div className="menu">
                <div className="title">MENU</div>
                <div className="nav">
                    <p><a href="#overview">Overview</a></p>
                    <p><a href="#agenda">Agenda</a></p>
                    <p><a href="#coach">Coach</a></p>
                    <p><a href="#gallery">Gallery</a></p>
                    <p><a href="#get-tickets">Get tickets</a></p>
                </div>
            </div>

            <div id="overview">
                <Container>
                    <Row>
                        <Col md={6}>
                            <p><img src={logo}/></p>
                            <p>Satisfy your customer through early and continuous delivery of valuable software</p>
                        </Col>
                        <Col md={6}>
                            <p>Software planning and delivery was started out as a year long process, these days the
                                environment demands speed from every software team, yet somehow a lot of them are stuck
                                in the tardiness of the early days. We are here to change that!</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <img src={brain}/>
                            <h4>Practical knowledge</h4>
                            <p>Don’t read yet another book on the subject, get the “muscle memory” with experience of
                                teamwork</p>
                        </Col>
                        <Col md={4}>
                            <img src={dev}/>
                            <h4>Learn while having fun</h4>
                            <p>Play is the highest level form of learning</p>
                        </Col>
                        <Col md={4}>
                            <img src={puzzle}/>
                            <h4>Get to know other craftsman</h4>
                            <p>This isn’t a lame networking event where you swap cards then never talk again, here you
                                get to know each other on a deeper level while working</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="get-tickets">

            </div>

            <div id="agenda">
                <div className="session">
                    <p>8:30am - Introduction</p>
                    <p>9:00am - Coding time</p>
                    <p>10:00am - Retrospective and break</p>
                </div>
                <div className="session">
                    <p>10:30am - Lightning talk: Maximizing value by achieving clarity</p>
                    <p>10:40am - Coding time</p>
                    <p>11:40am - Retrospective</p>
                    <p>12:00am - Lunch and networking time <img src={star} /></p>
                </div>
                <div className="session">
                    <p>12:50am - Lightning talk: The 3 stages of product maturity and why that matters to you</p>
                    <p>1:00pm - Coding time</p>
                    <p>2:00pm - Retrospective and break</p>
                    <p>2:30pm - Lightning talk: Strategies for mitigating deployment risk</p>
                    <p>2:40pm - Coding time</p>
                    <p>3:30pm - Retrospective and break</p>
                </div>
                <div className="session">
                    <p>4:00pm - Lightning talk: Build for resilience</p>
                    <p>4:10pm - Coding time</p>
                    <p>5:00pm - Retrospective</p>
                    <p>5:30pm - Closing circle - Takeaways</p>
                    <p>6:00pm - Wrap up</p>
                </div>
            </div>

            <div id="coach">

            </div>

            <div id="gallery">

            </div>

            <div id="footnote">
                <p>Icons are from <a href="https://www.flaticon.com/"><img src={flaticon}/></a></p>
            </div>
        </>
    );
}

export default App;
