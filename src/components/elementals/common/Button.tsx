import { Props } from "../../../types/components";

const Button = (props: Props) => <button className="clickable" type="button" {...props}>{props.text ?? ''}</button>;

export default Button;
