import { CommonProps } from "../../../types/componentsProps";

const Button = (props: CommonProps) => <button className="clickable" type="button" {...props}>{props.text ?? ''}</button>;

export default Button;
