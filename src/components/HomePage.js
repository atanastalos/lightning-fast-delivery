import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Parallax} from 'react-parallax';

import Tito from './Tito';

import useEntries from '../hooks/useEntries';
import Overview from './Overview';
import Agenda from './Agenda';
import Coach from './Coach';

import logo from '../static/logo.png';
import brain from '../static/flaticons/brain.png';
import dev from '../static/flaticons/project-management.png';
import gears from '../static/flaticons/gears.png';
import mail from '../static/flaticons/mail.png';
import profil from '../static/profil.png';
import event3 from '../static/events/event3.jpg';
import event5 from '../static/events/event5.jpg';
import event2 from '../static/events/event2.jpg';

function HomePage() {

    const overview = Overview();
    const [session1, session2, lunch, extraInformation, session3, session4, session5] = Agenda();
    const coach = Coach();

    const entries = useEntries('dateOfNextWorkshop');

    const date = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h6>{entry.fields.dateOfNextWorkshop}</h6>
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
                                {overview[0]}
                            </Col>
                        </Row>
                    </div>
                    <div className="viewWith1Col">
                        <Row>
                            <img src={logo}/>
                            {overview[0]}
                        </Row>
                    </div>

                    <Row>
                        <Col md={4}>
                            <div className="img-center">
                                <img src={brain}/>
                            </div>
                            {overview[1]}
                        </Col>
                        <Col md={4}>
                            <div className="img-center">
                                <img src={dev}/>
                            </div>
                            {overview[2]}
                        </Col>
                        <Col md={4}>
                            <div className="img-center">
                                <img src={gears}/>
                            </div>
                            {overview[3]}
                        </Col>
                    </Row>

                    <Row>
                        <div className="dates">
                            {date}
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
                                    {session1}
                                </div>
                                <div className="session">
                                    {session2}
                                    <div className="extra">
                                        {lunch}
                                        {extraInformation}
                                    </div>
                                </div>
                                <div className="session">
                                    {session3}
                                </div>
                                <div className="session">
                                    {session4}
                                </div>
                                <div className="session">
                                    {session5}
                                </div>
                            </div>
                        </Col>

                        <Col md={7}>
                            <div className="float-md-right" id="coach">
                                <div className="img-center">
                                    <img src={profil}/>
                                </div>
                                {coach}
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
