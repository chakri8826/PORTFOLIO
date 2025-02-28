import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repoLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} />
        </a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
