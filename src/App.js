import { Fragment, useState } from "react";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import Handler from "./components/Handler";
import QRCode from "react-qr-code";
import "../src/App.css";

function App() {
  const [qrText, setQrText] = useState("");
  return (
    <Fragment>
      <div className="App-header">
        <Container className="mx-auto">
          <h1 className="my-4">Qr Code Generator</h1>
          {qrText.length > 0 && <QRCode value={qrText} />}
          <Tab.Container defaultActiveKey="text">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="text">Text and URLs</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="text">
                    <Handler setQrText={setQrText} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
