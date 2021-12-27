export default function Button (props) {
  return <button type="button" {...props}>{props.text ?? ''}</button>
};
