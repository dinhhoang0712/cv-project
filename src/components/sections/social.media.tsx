import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import "./social.media.scss";

interface IProps {
  github: string;
  linkedin: string;
  facebook: string;
  email: string;
}

const SocialMedia = ({ github, linkedin, facebook, email }: IProps) => {
  return (
    <div className="social-media">
      <a href={github} target="_blank" rel="noreferrer">
        <FaGithub />
      </a>

      <a href={linkedin} target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>

      <a href={facebook} target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>

      <a href={`mailto:${email}`}>
        <MdEmail />
      </a>
    </div>
  );
};

export default SocialMedia;
