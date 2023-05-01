import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
    <div className="Contact" id="Contact">

        <h1>Contact Me</h1>

      <Container>
        <Form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="57dae735-6efa-4508-9473-1ec4dc2ac128"/>
          
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" name="name" placeholder="Enter your name" required />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalMessage">
            <Form.Label column sm={2}>
              Message
            </Form.Label>
            <Col sm={10}>
            <Form.Control as="textarea" name="message" placeholder="Enter your message" rows={5} required />
            </Col>
        </Form.Group>
        
        <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
        <Button variant="primary" type="submit">Submit</Button>
        
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
