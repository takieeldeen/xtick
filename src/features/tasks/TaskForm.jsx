import styled from "styled-components";
import Input from "../../ui/Input";
import { FaRegEdit, FaTasks } from "react-icons/fa";
import Button from "../../ui/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setRegister } from "../../utilis/helpers";
import { useDispatch } from "react-redux";
import { createTask, getCurrentTask, updateTask } from "./tasksSlice";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const H2 = styled.h2`
  margin-bottom: 0.9rem;
  display: flex;
  gap: 0.5rem;
`;

function TaskForm({ purpose = "add", task = {}, onCloseModal }) {
  const initalValues = task.id ? task : {};
  // console.log(initalValues);
  const dispatch = useDispatch();
  const signedIn = false;
  const [detailed, setDetailed] = useState(purpose === "edit" ? true : false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = function (data) {
    if (purpose === "add") {
      dispatch(createTask(data));
    } else {
      data.id = +task.id;
      dispatch(updateTask(data));
      onCloseModal();

      // data.id = task.id;
      // console.log(data);
    }
  };

  return (
    <>
      {purpose === "edit" ? (
        <H2>
          <FaRegEdit />
          Edit task
        </H2>
      ) : (
        ""
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          defaultValue={task.title}
          type="text"
          placeholder="Task title"
          {...setRegister(register("title"))}
        />
        <Input
          defaultValue={task.description}
          type="textarea"
          placeholder="Task description"
          {...setRegister(register("description"))}
        />
        <Input
          defaultValue={task.duration}
          type="number"
          placeholder="Task duration"
          {...setRegister(register("duration"))}
        />
        {detailed && (
          <>
            {" "}
            <Input
              type="text"
              placeholder="Task project"
              defaultValue={task.project}
              {...setRegister(register("project"))}
            />
            <Input
              type="text"
              placeholder="Task Category"
              defaultValue={task.category}
              {...setRegister(register("category"))}
            />
          </>
        )}

        {detailed === false ? (
          <Button
            type="iconButton"
            style={{
              alignSelf: "flex-end",
              color: `${purpose === "edit" ? "white" : ""}`,
            }}
            onClick={(e) => {
              e.preventDefault();
              setDetailed(!detailed);
            }}
          >
            <FaPlus />
            Show more
          </Button>
        ) : (
          <Button
            type="iconButton"
            style={{
              alignSelf: "flex-end",
              color: `${purpose === "edit" ? "white" : "red"}`,
            }}
            onClick={(e) => {
              e.preventDefault();
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
          {purpose === "edit" ? "Edit activity" : "Add activity"}
        </Button>
      </Form>
    </>
  );
}

export default TaskForm;
