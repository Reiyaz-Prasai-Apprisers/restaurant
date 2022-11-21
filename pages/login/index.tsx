import { ReactNode, useState } from "react";

import { Row, Col } from "@app/lib/grid";
import Card from "@app/lib/card";
import Form, {useForm} from "@app/lib/form";
import Input from "@app/lib/input";

// Props type for Layout Component
export interface LayoutProps {
  children: ReactNode;
}

// Create a Layout wrapper to wrap the whole app
const Login: React.FC<LayoutProps> = ({ children }) => {
  // @ts-ignore
  const aForm = useForm({
    firstName: "Reiyaz",
    lastName: "Prasai",
  }).form;
  const bForm = useForm({
    firstName: "Smarica",
    lastName: "Acharya",
  }).form;
  const [state, setState] = useState("");

  return (
    <>
      <Form form={aForm}>
        <Row>
          <Col>
            <Input
              name="firstName"
              label="First name"
              onFocus={() => {
                console.log(aForm?.getState());
              }}
              required
            />
          </Col>
          <Col>
            <Input
              name="lastName"
              label="LastName"
              onChange={(e: any) => {
                aForm?.setState({ firstName: e.currentTarget.value });
              }}
              required
            />
          </Col>
        </Row>
      </Form>
      <Form form={bForm}>
        <Row>
          <Col>
            <Input
              name="firstName"
              label="First name"
              onFocus={() => {
                console.log(bForm?.getState());
              }}
              required
            />
          </Col>
          <Col>
            <Input
              name="lastName"
              label="LastName"
              onChange={(e: any) => {
                bForm?.setState({ firstName: e.currentTarget.value });
                // setState(e.currentTarget.value)
              }}
              required
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
