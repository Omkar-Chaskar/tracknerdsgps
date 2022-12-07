import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <Form className="row justify-content-center align-items-center card-body form-login">
      <div className="col-lg-5 col-md-7 col-sm-7 shadow-lg px-4 py-5 mb-5 bg-body rounded">
        <Form.Group className="pt-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="pt-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>

        <Button className="mt-4 px-5 fw-bold" variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export { Login };
