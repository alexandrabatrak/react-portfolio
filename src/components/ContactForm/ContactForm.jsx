import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import MotionParagraph from "../Motion/MotionParagraph";
import { motion } from "framer-motion";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import "./contactform.scss";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnqyzqjz");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const form = document.querySelector("form");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setError(false);
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 1000);
    } else {
      setError(true);
    }
  };

  return (
    <div className='form-wrapper'>
      <form name='contact' onSubmit={handleFormSubmit}>
        <input type='text' name='zaschitaotpridurka' className='inputne' />
        <MotionParagraph>
          <div className='input'>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>
        </MotionParagraph>
        <MotionParagraph>
          <div className='input'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' />
            <ValidationError
              field='email'
              prefix='Email'
              errors={state.errors}
            />
          </div>
        </MotionParagraph>
        <MotionParagraph>
          <div className='input'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' type='text' name='message' />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
        </MotionParagraph>

        <MotionParagraph>
          <div className='submit-wrapper'>
            {(sent || error) && (
              <div
                className={`submit-feedback ${
                  state.succeeded ? "success" : "error"
                }`}>
                <p className='text-font'>
                  {state.errors && (
                    <i aria-hidden='true'>
                      {state.succeeded ? <RiCheckLine /> : <RiCloseLine />}
                    </i>
                  )}
                  {state.succeeded
                    ? `Thank you! I'll get back to you as soon as possible.`
                    : state.errors
                    ? state.errors[0].message
                    : ""}
                </p>
              </div>
            )}
            <small>
              By submitting this form, you agree to{" "}
              <a href='/privacy-policy'>Privacy Policy</a>. Your data will be
              processed only to reply back.
            </small>
            <motion.button
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: 0.5,
              }}
              type='submit'
              disabled={state.submitting}>
              {state.submitting ? "Sending..." : sent ? "Sent!" : "Send"}
            </motion.button>
          </div>
        </MotionParagraph>
      </form>
    </div>
  );
}
