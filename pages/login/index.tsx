import { ReactNode, useState } from "react";

import { Row, Col } from "@app/lib/grid";
import Card from "@app/lib/card";
import Form from "@app/lib/form";
import Input from "@app/lib/input";

// Props type for Layout Component
export interface LayoutProps {
  children: ReactNode;
}

// Create a Layout wrapper to wrap the whole app
const Login: React.FC<LayoutProps> = ({ children }) => {
    // @ts-ignore
  const {form} = Form.prototype.useForm()
  const [state, setState] = useState('')
  
  return (
    <Form form={form} >
      <Row>
        <Col>
          <Input
            name="firstName"
            label="First name"
            onFocus={() => {
              console.log(form?.getState());
            }}
            initialValue="hello"
            required
          />
        </Col>
        <Col>
          <Input
            name="lastName"
            label="LastName"
            onChange={(e: any) => {
              form?.setState({ firstName: e.currentTarget.value });
                setState(e.currentTarget.value)
             
            }}
            initialValue="hello"
            required
          />
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
