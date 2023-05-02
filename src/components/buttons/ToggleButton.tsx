import { ChangeEventHandler } from "react";

export default function ToggleButton(props: {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  checked: boolean | undefined;
  id: string | undefined;
}) {
  return (
    <label className="toggle-button">
      <input
        type="checkbox"
        onChange={props.onChange}
        checked={props.checked}
        id={props.id}
      />
      <span className="slider"></span>
    </label>
  );
}
