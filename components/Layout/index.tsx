import { ReactNode } from "react";

import Header from "./header";
import styles from "../../styles/Layout.module.css";
import SideNav from "./sideNav";
import Content from "./content";
import { Row, Col } from "@app/lib/grid";
import Card from "@app/lib/card";

// Props type for Layout Component
export interface LayoutProps {
  children: ReactNode;
}

const Test = () => {
  console.log("here");
  return <div>Hello</div>;
};

// Create a Layout wrapper to wrap the whole app
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <Row gap={[16]} align="stretch">
        <Col span={{ l: 33, m: 100 }} order={{ l: 1, xs: 2 }}>
          <Card> Col 1 </Card>
        </Col>
        <Col span={{ l: 33, m: 100 }} order={{ l: 2, xs: 3 }}>
          <Card> Col 2</Card>
        </Col>
        <Col span={{ l: 34, m: 100 }} order={{ l: 3, xs: 1 }}>
          <Card> Col 3 </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
