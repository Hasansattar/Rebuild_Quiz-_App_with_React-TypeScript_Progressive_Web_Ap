import React from "react";
import { Layout, Row, Col } from "antd";
import "./styles.css"
const { Content } = Layout;
interface Props {}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
    <div  className="main">
      <header className="container">
        <nav>
          <Row justify="center" align="middle">
            <Col>
              <h1
                style={{
                    fontFamily:"emoji",
                  fontSize: "4rem",
                  color:"red"
                
              
                  
                }}
              >
                Quiz App
              </h1>
            </Col>
          </Row>
        </nav>
      </header>

      <Content>{children}</Content>

      </div>
    </>
  );
};
