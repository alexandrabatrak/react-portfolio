import "./socialicons.scss";
import socials from "../../socials.json";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiStackOverflowLine,
  RiCodepenLine,
  RiMailOpenLine,
} from "react-icons/ri";

export default function SocialIcons() {
  return (
    <div className='socials-wrapper'>
      <ul>
        <li>
          <a href={socials.github} target='_blank' rel='noreferrer'>
            <span hidden>Link to Github</span>
            <RiGithubLine />
          </a>
        </li>
        <li>
          <a href={socials.linkedin} target='_blank' rel='noreferrer'>
            <span hidden>Link to LinkedIn</span>
            <RiLinkedinLine />
          </a>
        </li>
        <li>
          <a href={socials.stackoverflow} target='_blank' rel='noreferrer'>
            <span hidden>Link to StackOverflow</span>
            <RiStackOverflowLine />
          </a>
        </li>
        <li>
          <a href={socials.codepen} target='_blank' rel='noreferrer'>
            <span hidden>Link to Codepen</span>
            <RiCodepenLine />
          </a>
        </li>
        <li>
          <a href={socials.email} target='_blank' rel='noreferrer'>
            <span hidden>Link to Email</span>
            <RiMailOpenLine />
          </a>
        </li>
      </ul>
    </div>
  );
}
