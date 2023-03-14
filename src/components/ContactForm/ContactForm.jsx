import { useForm } from "@formspree/react";
import Container from "../Container/Container";
import "./contactform.scss";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnqyzqjz");
  return (
    <Container>
      <div>{state.succeeded ? "Thank you for signing up!" : ""}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' name='name' />
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' />
        <label htmlFor='message'>Message</label>
        <input id='message' type='text' name='message' />
        <button type='submit' disabled={state.submitting}>
          Send
        </button>
      </form>
    </Container>
  );
}
