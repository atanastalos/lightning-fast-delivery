import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Parallax} from 'react-parallax';

import Tito from './Tito';

import logo from './static/logo.png';
import brain from './static/flaticons/brain.png';
import dev from './static/flaticons/project-management.png';
import gears from './static/flaticons/gears.png';
import mail from './static/flaticons/mail.png';
import profil from './static/profil.png';
import event3 from './static/events/event3.jpg';
import event5 from './static/events/event5.jpg';
import event2 from './static/events/event2.jpg';
import useEntries from "./hooks/useEntries";

function HomePage() {

    const entries = useEntries('overview');
    // console.log('fetched entries');
    // console.log(entries);

    const OverviewDescription = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h5>{entry.fields.headline}</h5>
            <p>{entry.fields.longerDescription}</p>
        </div>
    ))

    const OverViewList1 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h4>{entry.fields.listTitle1}</h4>
            <p>{entry.fields.listDescription1}</p>
        </div>
    ))

    const OverViewList2 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h4>{entry.fields.listTitle2}</h4>
            <p>{entry.fields.listDescription2}</p>
        </div>
    ))

    const OverViewList3 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h4>{entry.fields.listTitle3}</h4>
            <p>{entry.fields.listDescription3}</p>
        </div>
    ))

    return (
        <>
            <div className="menu">
                <div className="title">MENU</div>
                <div className="nav">
                    <p><a href="#overview">Overview</a></p>
                    <p><a href="#agenda">Agenda</a></p>
                    <p><a href="#coach">Coach</a></p>
                    <p><a href="#get-tickets">Get tickets</a></p>
                    <p><a href="/contact" target="_blank">Contact</a></p>
                    <p><a href="/coc" target="_blank">CoC</a></p>
                </div>
            </div>

            <div id="overview">
                <Container>
                    <div className="viewWith2Cols">
                        <Row>
                            <Col md={5}>
                                <p><img src={logo}/></p>
                            </Col>
                            <Col md={7}>
                                {OverviewDescription}
                            </Col>
                        </Row>
                    </div>
                    <div className="viewWith1Col">
                        <Row>
                            <img src={logo}/>
                            {OverviewDescription}
                        </Row>
                    </div>

                    <Row>
                        <Col md={4}>
                            <div className="img-center">
                                <img src={brain}/>
                            </div>
                            {OverViewList1}
                        </Col>
                        <Col md={4}>
                            <div className="img-center">
                                <img src={dev}/>
                            </div>
                            {OverViewList2}
                        </Col>
                        <Col md={4}>
                            <div className="img-center">
                                <img src={gears}/>
                            </div>
                            {OverViewList3}
                        </Col>
                    </Row>

                    <Row>
                        <div className="dates">
                            <h6>11th December 2020 </h6>
                            <Button href="#get-tickets">Get tickets</Button>
                        </div>
                    </Row>
                </Container>
            </div>

            <Parallax bgImage={event3} strength={500}>
                <div style={{height: 500}}></div>
            </Parallax>

            <div className="info">
                <Container>
                    <Row>
                        <Col md={5}>
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
                                    <p>12:50am - Lightning talk: The 3 stages of product maturity and why that
                                        matters
                                        to
                                        you</p>
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
                        </Col>

                        <Col md={7}>
                            <div className="float-md-right" id="coach">
                                <div className="img-center">
                                    <img src={profil}/>
                                </div>
                                <h4>Your coach for the day:</h4>
                                <p>Ivett Ördög is a lead developer and an experienced dev coach who has worked at
                                    several
                                    industry
                                    leading companies. She combines her developer and leadership skills with a
                                    mindful
                                    and
                                    critical
                                    approach to people and is an active participant in meetups, conferences, and the
                                    developer community
                                    in general. She has taught university courses and is an occasional blog author.
                                    She
                                    is
                                    also the
                                    creator of the Morning Commute YouTube channel.</p>
                                <p>During her tenure at Emarsys (acquired by SAP) the company has grown from having
                                    a
                                    dozen
                                    developers
                                    on staff into an engineering organization with over 200 people on payroll. Ivett
                                    has
                                    successfully
                                    managed teams during this period. A significant part of the organisation was on
                                    boarded
                                    by her as
                                    the leader of the company's bootcamp initiative. She also led the team that was
                                    the
                                    first to
                                    implement a continuous delivery approach and she was a strong proponent of using
                                    the
                                    Saga pattern
                                    that solved the resiliency issues that arose as the company moved from a
                                    monolithic
                                    architecture to
                                    a microservice architecture.</p>
                                <p>The unique combination of coaching, coding and leadership as well as her
                                    experience
                                    with
                                    introducing
                                    continuous delivery and microservice architectures makes her a great fit for
                                    helping
                                    you
                                    get better
                                    at delivering value early and often as the
                                    <a href="https://agilemanifesto.org/principles.html" target="_blank"> first
                                        principle </a>
                                    of the
                                    <a href="https://agilemanifesto.org/" target="_blank"> Agile manifesto </a>
                                    demands. She is
                                    the perfect opposite of the coach who teaches from the book and believes that a
                                    company's
                                    engineering culture is the key to its success: instead of following a so called
                                    “agile
                                    framework” or
                                    hiring “devops” engineers and putting them in a separate silo building a culture
                                    of
                                    continuous
                                    improvement, short and incremental iterations and rigorously following a
                                    scientific
                                    approach to
                                    problem solving is what makes a successful engineering organization. She lives,
                                    practices, and
                                    teaches agile, lean, and continuous deployment and she's more than happy to
                                    share
                                    her
                                    knowledge and
                                    comments with you.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Parallax bgImage={event5} strength={500}>
                <div style={{height: 500}}></div>
            </Parallax>

            <div id="get-tickets">
                <h1>Get your Ticket</h1>
                <Tito/>
                <p>By purchasing a ticket you agree to the <a href="/coc" target="_blank">Code of Conduct</a></p>
            </div>

            <Parallax bgImage={event2} strength={500}>
                <div style={{height: 500}}></div>
            </Parallax>

            <div id="footnote">
                <Container>
                    <div className="footnoteNotMobileView">
                        <Row>
                            <Col md={8}>
                                <p>Icons are from <a href="https://www.flaticon.com/"
                                                     target="_blank">flaticon.com</a>
                                </p>
                                <p>Code of conduct based on <a href="https://confcodeofconduct.com/"
                                                               target="_blank">confcodeofconduct.com</a></p>
                            </Col>
                            <Col md={4}>
                                <a href="/contact" target="_blank"><img src={mail}/></a>
                                <Button href="/contact" target="_blank">Contact us!</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="footnoteMobileView">
                        <div className="sendEmail">
                            <a href="/contact" target="_blank"><img src={mail}/></a>
                            <Button href="/contact" target="_blank">Contact us!</Button>
                        </div>
                        <div className="links">
                            <p>Icons are from <a href="https://www.flaticon.com/" target="_blank">flaticon.com</a>
                            </p>
                            <p>Code of conduct based on <a href="https://confcodeofconduct.com/"
                                                           target="_blank">confcodeofconduct.com</a></p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default HomePage;
