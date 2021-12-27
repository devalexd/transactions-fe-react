export default function Button (props) {
  return <button className="clickable" type="button" {...props}>{props.text ?? ''}</button>
};
