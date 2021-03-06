import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {Alert, Button, Form} from 'react-bootstrap'

function Contact() {

    const [resultOfSendingEmail, setResultOfSendingEmail] = useState('');
    const [design, setDesign] = useState('');
    const [id, setId] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        setResultOfSendingEmail('Please wait while email is being sent.');
        setDesign('info');
        setId('info-alert');

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                setResultOfSendingEmail('Thank you for your email!');
                setDesign('success');
                setId('success-alert');
            }, (error) => {
                setResultOfSendingEmail(error.text);
                setDesign('danger');
                setId('error-alert');
            });
        e.target.reset();
    }

    function tryToSendEmail() {
        return <Alert variant={design} id={id}>{resultOfSendingEmail}</Alert>
    }

    return (
        <>
            <nav className="menu">
                <div className="title">MENU</div>
                <ul className="nav">
                    <li><a href="/" target="_blank">Home</a></li>
                    <li><a href="/coc" target="_blank">CoC</a></li>
                </ul>
            </nav>

            <div className="alert">
                {(resultOfSendingEmail) ? tryToSendEmail() : null}
            </div>
            <div className='w-80 mx-auto p-3 mt-2'>
                <Form className="contact-form" method="post" onSubmit={sendEmail}>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email'/>
                    </Form.Group>
                    <Form.Group controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="subject" name='subject'/>
                    </Form.Group>
                    <Form.Group controlId="textarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="10" name='message'/>
                    </Form.Group>
                    <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_KEY} data-size="compact"></div>
                    <Button variant="dark" type='submit'
                            value='Send'>Send</Button>
                </Form>
            </div>
        </>
    );
}

export default Contact;
