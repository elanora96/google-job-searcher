import { InputGroup, Form } from 'react-bootstrap';

const CustomInput = (props) => {
  const { label, state, stateFunction, type, checkboxs, setCheckboxs } = props;
  return (
    <InputGroup style={{ marginBottom: '1rem' }}>
      <InputGroup.Checkbox
        checked={checkboxs[label]}
        onChange={() =>
          setCheckboxs({ ...checkboxs, [label]: !checkboxs[label] })
        }
        aria-label={`Toggle ${label}`}
      />
      <InputGroup.Text>
        {label.length < 8 ? label.padEnd(label.length - 8) : label}
      </InputGroup.Text>
      <Form.Control
        type={type}
        value={typeof state === 'string' ? state : state.join(', ')}
        onChange={({ target: { value } }) =>
          stateFunction(typeof state === 'string' ? value : value.split(', '))
        }
        aria-label={`${label}`}
      />
    </InputGroup>
  );
};

export default CustomInput;
