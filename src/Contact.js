import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button, Form} from 'react-bootstrap'
import emailjs from 'emailjs-com';

function Contact() {

    const [resultOfSendingEmail, setResultOfSendingEmail] = useState('');
    const [design, setDesign] = useState('');
    const [id, setId] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        setResultOfSendingEmail('Please wait while email is being sent.');
        setDesign('info');
        setId('info-alert');

        emailjs.sendForm('gmail', 'template_lq7wgyd', e.target, 'user_arXYp4I4EW74lEp92cYT1')
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
            <div className="alert">
                {(resultOfSendingEmail) ? tryToSendEmail() : null}
            </div>
            <div className='w-50 mx-auto p-3 mt-2'>
                <form className="contact-form" onSubmit={sendEmail}>
                    <Form>
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
                        <Button variant="dark" type='submit'
                                value='Send'>Send</Button>
                    </Form>
                </form>
            </div>
        </>
    );
}

export default Contact;
