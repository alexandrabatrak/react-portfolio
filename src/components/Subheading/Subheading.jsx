import "./subheading.scss";
import slugify from "react-slugify";

export default function Subheading({ text, props }) {
  let id = slugify(text);
  return (
    <div className='subheading' id={id} {...props}>
      <h4>{text}</h4>
    </div>
  );
}
