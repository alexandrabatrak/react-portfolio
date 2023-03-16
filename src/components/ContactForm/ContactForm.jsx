import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import MotionParagraph from "../Motion/MotionParagraph";
import { motion } from "framer-motion";
import "./contactform.scss";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnqyzqjz");
  const [sent, setSent] = useState(false);

  const form = document.querySelector("form");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 1000);
  };

  return (
    <div className='form-wrapper'>
      <form onSubmit={handleFormSubmit}>
        <MotionParagraph>
          <div className='input'>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' />
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
          </div>
        </MotionParagraph>
        <MotionParagraph>
          <div className='submit-wrapper'>
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
