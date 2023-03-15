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
          <a href={socials.github}>
            <RiGithubLine />
          </a>
        </li>
        <li>
          <a href={socials.linkedin}>
            <RiLinkedinLine />
          </a>
        </li>
        <li>
          <a href={socials.stackoverflow}>
            <RiStackOverflowLine />
          </a>
        </li>
        <li>
          <a href={socials.codepen}>
            <RiCodepenLine />
          </a>
        </li>
        <li>
          <a href={socials.email}>
            <RiMailOpenLine />
          </a>
        </li>
      </ul>
    </div>
  );
}
