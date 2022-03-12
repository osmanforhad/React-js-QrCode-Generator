import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Handler({ setQrText }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setQrText(text);

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  );
}

export default Handler;
