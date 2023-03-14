import './button.scss';

export default function ButtonLg({ text, className, props }) {
  return (
    <button {...props} className={className}>
      {text}
    </button>
  );
}
