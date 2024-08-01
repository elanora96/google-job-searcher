import { InputGroup, Form } from "react-bootstrap";
import { CheckboxesState } from "../types";

interface CustomInputProps {
  label: string;
  state: Array<string>;
  stateFunction: React.Dispatch<React.SetStateAction<Array<string>>>;
  type: string;
  checkboxes: CheckboxesState;
  setCheckboxes: React.Dispatch<React.SetStateAction<CheckboxesState>>;
}

export default function CustomInput(props: CustomInputProps) {
  const { label, state, stateFunction, type, checkboxes, setCheckboxes } =
    props;
  return (
    <InputGroup>
      <InputGroup.Checkbox
        checked={checkboxes[label]}
        onChange={() =>
          setCheckboxes({ ...checkboxes, [label]: !checkboxes[label] })
        }
        aria-label={`Toggle ${label}`}
      />
      <InputGroup.Text>
        {label.length < 8 ? label.padEnd(label.length - 8) : label}
      </InputGroup.Text>
      <Form.Control
        type={type}
        value={state.join(", ")}
        onChange={({ target: { value } }) => stateFunction(value.split(", "))}
        aria-label={`${label}`}
      />
    </InputGroup>
  );
}
