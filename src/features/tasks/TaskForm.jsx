import styled from "styled-components";
import Input from "../../ui/Input";
import { FaTasks } from "react-icons/fa";
import Button from "../../ui/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
function TaskForm() {
  const [detailed, setDetailed] = useState(false);
  return (
    <Form>
      <Input type="text" placeholder="Task title" />
      <Input type="textarea" placeholder="Task description" />
      {detailed && (
        <>
          {" "}
          <Input type="number" placeholder="Task duration" />
          <Input type="text" placeholder="Task project" />
          <Input type="text" placeholder="Task Category" />
        </>
      )}
      {detailed == false ? (
        <Button
          type="iconButton"
          style={{ alignSelf: "flex-end" }}
          onClick={() => {
            setDetailed(!detailed);
          }}
        >
          <FaPlus />
          Show more
        </Button>
      ) : (
        <Button
          type="iconButton"
          style={{ alignSelf: "flex-end" }}
          onClick={() => {
            setDetailed(!detailed);
          }}
        >
          <FaMinus />
          Show Less
        </Button>
      )}
      <Button
        style={{
          maxWidth: "7rem",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-end",
        }}
      >
        Add activity
      </Button>
    </Form>
  );
}

export default TaskForm;
