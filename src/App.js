import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

import logo from './static/logo.png';
import flaticon from './static/flaticons/flaticon-logo.png';
import brain from './static/flaticons/brain.png';
import dev from './static/flaticons/development.png';
import puzzle from './static/flaticons/puzzle.png';
import profil from './static/profil.JPG';

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
                <h2>Agenda</h2>
                <div className="session">
                    <p>8:30am - Introduction</p>
                    <p>9:00am - Coding time</p>
                    <p>10:00am - Retrospective and break</p>
                </div>
                <div className="session">
                    <p>10:30am - Lightning talk: Maximizing value by achieving clarity</p>
                    <p>10:40am - Coding time</p>
                    <p>11:40am - Retrospective</p>
                    <div className="extra">
                        <p>12:00am - Lunch and networking time</p>
                        <span class="extratext">During lunch time you will be paired with other participants to talk to while you are eating your lunch.</span>
                    </div>
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
                <Container>
                    <Row>
                        <Col md={4}>
                            <img src={profil}/>
                        </Col>
                        <Col md={8}>
                            <h4>Your coach for the day:</h4>
                            <p>Ivett Ördög is a lead developer and an experienced dev coach who has worked at several
                                industry
                                leading companies. She combines her developer and leadership skills with a mindful and
                                critical
                                approach to people and is an active participant in meetups, conferences, and the
                                developer community
                                in general. She has taught university courses and is an occasional blog author. She is
                                also the
                                creator of the Morning Commute YouTube channel.</p>
                            <p>During her tenure at Emarsys (acquired by SAP) the company has grown from having a dozen
                                developers
                                on staff into an engineering organization with over 200 people on payroll. Ivett has
                                successfully
                                managed teams during this period. A significant part of the organisation was on boarded
                                by her as
                                the leader of the company's bootcamp initiative. She also led the team that was the
                                first to
                                implement a continuous delivery approach and she was a strong proponent of using the
                                Saga pattern
                                that solved the resiliency issues that arose as the company moved from a monolithic
                                architecture to
                                a microservice architecture.</p>
                            <p>The unique combination of coaching, coding and leadership as well as her experience with
                                introducing
                                continuous delivery and microservice architectures makes her a great fit for helping you
                                get better
                                at delivering value early and often as the first principle of the Agile manifesto
                                demands. She is
                                the perfect opposite of the coach who teaches from the book and believes that a
                                company's
                                engineering culture is the key to its success: instead of following a so called “agile
                                framework” or
                                hiring “devops” engineers and putting them in a separate silo building a culture of
                                continuous
                                improvement, short and incremental iterations and rigorously following a scientific
                                approach to
                                problem solving is what makes a successful engineering organization. She lives,
                                practices, and
                                teaches agile, lean, and continuous deployment and she's more than happy to share her
                                knowledge and
                                comments with you.</p>
                        </Col>
                    </Row>
                </Container>
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
