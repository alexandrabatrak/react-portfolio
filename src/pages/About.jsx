import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import PageTitle from "../components/PageTitle/PageTitle";
import MotionPage from "../components/Motion/MotionPage";
import MotionParagraph from "../components/Motion/MotionParagraph";
import Separator from "../components/Separator/Separator";
import Subheading from "../components/Subheading/Subheading";
import ScrollDown from "../components/ScrollDown/ScrollDown";

export default function About() {
  // TODO: Not very happy with how it scrolls up not when initially directed? Generally not happy with rounting
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <MotionPage id={"about"} className='about'>
      <Container>
        <PageTitle title={"About"} />
        <MotionParagraph>
          <blockquote>
            <em>
              Do what you love, and you'll never have to work a day of your
              life.
            </em>
          </blockquote>
          <Separator />
          <div className='avatar-wrapper'>
            <div className='avatar'>
              <img src='./face.jpg' alt='' />
            </div>
          </div>
          <div className='text-font'>
            <p>
              Let me introduce myself - I'm Alexandra. I like to think of myself
              as a web developer. I am part of the amazing community of Women In
              Tech that collectively brings that nice feminine touch to the
              World Wide Web.
            </p>
            <p>
              <em>Creating</em> is my passion and hobby, and my love for web
              design and development only grew over the years.
            </p>
          </div>
        </MotionParagraph>
        <MotionParagraph delay={0.6}>
          <div className='text-font'>
            <p>
              For every project I create, I strive to deliver the best of my
              capabilities and beyond. I'm continuously expanding my knowledge
              and expertise. I deliver above what's expected and am a
              perfectionist.
            </p>
          </div>
        </MotionParagraph>
        <MotionParagraph>
          <Separator />
          <Link to='/contact'>
            <Subheading text={`Let's talk business now.`} />
          </Link>
          <Separator />
        </MotionParagraph>
        <MotionParagraph>
          <div className='text-font'>
            <p>
              I'm open for hire for remote positions in any EU country and the
              UK. Please take a look at my{" "}
              <a href='/AlexandraBatrakCV.pdf' target='_blank' rel='noreferrer'>
                resume
              </a>
              .
            </p>
          </div>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"What do I bring to the table?"} />
        </MotionParagraph>
        <MotionParagraph>
          <div className='text-font'>
            <p>
              <s>I bring a spoon.</s>
            </p>
          </div>
        </MotionParagraph>
        <MotionParagraph delay={0.6}>
          <div className='text-font'>
            <p>
              I have over 4 cumulative years of experience with frontend
              development (the famous trio and more). I'm skilled in semantic
              HTML, CSS/SCSS, Javascript/jQuery and WordPress. I'm on a journey
              to master Javascript frameworks(React and Next). I'm amazing at
              organising my code, which, I believe, is a bonus. (
              <em>If I don't praise myself, who else will?</em>)
            </p>
          </div>
        </MotionParagraph>
        <MotionParagraph>
          <div className='text-font'>
            <p>
              Over the years of learning and always challenging myself I have
              developed skills to express my creative vision. My most valuable
              transferable skills are problem-solving and being exceptionally
              quick learner. Everybody says that you'd say, but I mean it.
            </p>
          </div>
        </MotionParagraph>
        <MotionParagraph>
          <Subheading text={"Technicalities"} />
        </MotionParagraph>
        <MotionParagraph>
          <p>
            <em>
              I will learn more so that I will be able to add more icons to my
              GitHub profile in the skills section. Isn't it why we are all
              doing it?
            </em>
          </p>
        </MotionParagraph>
        <div className='text-font'>
          <MotionParagraph>
            <p>Languages I know: Javascript, PHP.</p>
          </MotionParagraph>
          <MotionParagraph>
            <p>I'm good with CSS and SCSS.</p>
          </MotionParagraph>
          <MotionParagraph>
            <p>
              Some popular frameworks I used are Bootstrap, Tailwind, jQuery,
              React.
            </p>
          </MotionParagraph>
          <MotionParagraph>
            <p>I worked with CMS such as WordPress and Prestashop.</p>
          </MotionParagraph>
          <MotionParagraph>
            <p>I'm also familiar with Node and proficient with Git.</p>
          </MotionParagraph>
          <MotionParagraph>
            <p>
              Main design tools I use are Simple White paper and Pen, Adobe
              Illustrator, Adobe Photoshop and Adobe InDesign.
            </p>
          </MotionParagraph>
          <MotionParagraph></MotionParagraph>
          <MotionParagraph>
            <p>In addition to all of that, I also have experience with:</p>
            <ul style={{ paddingInlineStart: "4rem", listStyleType: "'→ '" }}>
              <li>Product packaging design</li>
              <li>Illustration (traditional art and digital)</li>
              <li>
                Video editing and animation with Adobe AfterEffects and Premiere
                Pro.
              </li>
            </ul>
          </MotionParagraph>
        </div>
        <MotionParagraph>
          <Subheading
            text={`Yeah, let's build you a pretty website. Add me to your team.`}
          />
        </MotionParagraph>
        <MotionParagraph>
          <ScrollDown />
        </MotionParagraph>
      </Container>
    </MotionPage>
  );
}
