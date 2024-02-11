import styled from "styled-components";
import Input from "../../ui/Input";
import { GiTomato } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { MdNumbers } from "react-icons/md";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  h2 {
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;
function Settings() {
  return (
    <Form>
      <h2>
        <CiSettings /> Settings
      </h2>
      <Input
        id="pomodoro"
        placeholder="Pomodoro"
        type="number"
        icon={<GiTomato />}
      />
      <Input
        id="shortBreak"
        placeholder="Short Break"
        type="number"
        icon={<CiTimer />}
      />
      <Input
        id="longBreak"
        placeholder="Long Break"
        type="number"
        icon={<CiTimer />}
      />
      <Input
        id="autoStartBreak"
        placeholder="Auto Start Breaks"
        type="checkbox"
      />
      <Input
        id="autoStartPomodoro"
        placeholder="Auto Start Pomodoros"
        type="checkbox"
      />
      <Input
        id="longBreak"
        placeholder="Long Break Intervals"
        type="number"
        icon={<MdNumbers />}
      />
      <Input
        id="autoCheckTasks"
        placeholder="Auto Check Tasks"
        type="checkbox"
      />
      <Input
        id="autoSwitchTasks"
        placeholder="Auto Switch Tasks"
        type="checkbox"
      />
    </Form>
  );
}

export default Settings;
