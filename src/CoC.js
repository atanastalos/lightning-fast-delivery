import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CoC() {
    return (
        <>
            <div className="menu">
                <div className="title">MENU</div>
                <div className="nav">
                    <p><a href="/" target="_blank">Home</a></p>
                    <p><a href="/contact" target="_blank">Contact</a></p>
                </div>
            </div>

            <div id="coc">
                <h5>Code of Conduct</h5>
                <p>Harassment includes offensive verbal comments related to gender, gender identity and expression, age,
                    sexual orientation, disability, physical appearance, body size, race, ethnicity, religion,
                    technology choices, sexual images in public spaces, deliberate intimidation, stalking, following,
                    harassing photography or recording, sustained disruption of the workshop, inappropriate physical
                    contact, and unwelcome sexual attention.</p>

                <p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>

                <p>Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use
                    sexualised images, activities, or other material. Booth staff (including volunteers) should not use
                    sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.</p>

                <p>If a participant engages in harassing behavior, the organisers may take any action they deem
                    appropriate, including warning the offender or expulsion from event with no refund.</p>

                <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns,
                    please contact the events coach or an organizer immediately. At the beginning of the event
                    organizers will be introduced if there are any other than the coach.</p>

                <p>Organisers will be happy to help participants contact venue security or local law enforcement,
                    provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of
                    the event. We value your attendance.</p>

                <p>We expect participants to follow these rules at the workshop venues and workshop related social
                    events.</p>
            </div>
        </>
    );
}

export default CoC;
