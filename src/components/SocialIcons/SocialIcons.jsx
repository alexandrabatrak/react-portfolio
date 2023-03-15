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
            <RiGithubLine />
          </a>
        </li>
        <li>
          <a href={socials.linkedin} target='_blank' rel='noreferrer'>
            <RiLinkedinLine />
          </a>
        </li>
        <li>
          <a href={socials.stackoverflow} target='_blank' rel='noreferrer'>
            <RiStackOverflowLine />
          </a>
        </li>
        <li>
          <a href={socials.codepen} target='_blank' rel='noreferrer'>
            <RiCodepenLine />
          </a>
        </li>
        <li>
          <a href={socials.email} target='_blank' rel='noreferrer'>
            <RiMailOpenLine />
          </a>
        </li>
      </ul>
    </div>
  );
}
