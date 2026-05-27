import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./project.scss";

interface IProps {
  imgPath: string;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  techStack: string[];
  date: string;
}

function ProjectCard(props: IProps) {
  return (
    <Card className="project-card-view">
      {/* IMAGE */}
      <div className="project-image-wrapper">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          className="project-image"
        />
      </div>

      {/* BODY */}
      <Card.Body className="d-flex flex-column">
        {/* TITLE */}
        <Card.Title className="project-title">{props.title}</Card.Title>

        {/* DATE */}
        <div className="project-date">{props.date}</div>

        {/* TECH STACK */}
        <div className="project-tech-stack">
          {props.techStack.map((tech, index) => (
            <span className="project-tech-badge" key={index}>
              {tech}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="d-flex flex-column justify-content-between h-100">
          <Card.Text className="project-description">
            {props.description}
          </Card.Text>

          {/* BUTTONS */}
          <div className="project-buttons">
            <Button
              variant="outline-light"
              href={props.githubLink}
              target="_blank"
            >
              <BsGithub /> &nbsp; GitHub
            </Button>

            {props.demoLink && (
              <Button
                variant="outline-light"
                href={props.demoLink}
                target="_blank"
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
