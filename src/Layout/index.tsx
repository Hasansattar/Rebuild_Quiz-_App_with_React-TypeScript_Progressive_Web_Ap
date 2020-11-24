import React from "react";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;
interface Props {}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
    <div  style={{background:"#503705"}}>
      <header style={{ marginBottom: "2rem", marginTop: "5rem" }}>
        <nav>
          <Row justify="center" align="middle">
            <Col>
              <h1
                style={{
                    
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
