import Button from "react-bootstrap/Button";

import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsStars } from "react-icons/bs";
import "./project.scss";

interface IProps {
  imgPath: string;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  techStack: string[];
  date: string;
  badgeLabel: string;
}

function FeaturedProjectCard(props: IProps) {
  return (
    <div className="featured-project">
      {/* IMAGE */}
      <div className="featured-project-image">
        <div className="browser-bar">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>

        <img src={props.imgPath} alt={props.title} />
      </div>

      {/* BODY */}
      <div className="featured-project-body">
        <span className="featured-badge">
          <BsStars /> {props.badgeLabel}
        </span>

        <h3 className="featured-project-title">{props.title}</h3>

        <div className="project-date">{props.date}</div>

        <div className="project-tech-stack">
          {props.techStack.map((tech, index) => (
            <span className="project-tech-badge" key={index}>
              {tech}
            </span>
          ))}
        </div>

        <p className="project-description featured-project-description">
          {props.description}
        </p>

        <div className="project-buttons">
          <Button variant="outline-light" href={props.githubLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>

          {props.demoLink && (
            <Button variant="outline-light" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
