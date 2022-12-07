import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { initialLogInData } from "../utils/constantData/authConstant";
import { useAuth } from "../Context/authProvider";

function Login() {
  const [logInData, setLogInData] = useState(initialLogInData);
  const { logInHandler } = useAuth();

  const logInChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogInData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Form className="row justify-content-center align-items-center card-body form-login"
    onSubmit={(e) => {
      e.preventDefault();
       logInHandler(logInData); 
      }}
    >
      <div className="col-lg-5 col-md-7 col-sm-7 shadow-lg px-4 py-5 mb-5 bg-body rounded">
        <Form.Group className="pt-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" name="username" required onChange={logInChangeHandler}/>
        </Form.Group>

        <Form.Group className="pt-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required onChange={logInChangeHandler}/>
        </Form.Group>

        <Button className="mt-4 px-5 fw-bold" variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export { Login };
