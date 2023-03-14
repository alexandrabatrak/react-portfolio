import "./subheading.scss";

export default function Subheading({ text, props }) {
  return (
    <div className='subheading' {...props}>
      <h4>{text}</h4>
    </div>
  );
}
