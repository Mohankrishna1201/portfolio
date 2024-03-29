import { Col } from "react-bootstrap";
import '../App.css'
export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url}>
        <div className="proj-imgbx">
          <img src={imgUrl} />

          <div className="proj-txtx">
            <h4 className="projecttitle">{title}</h4>
            <span className="projectdsc">{description}</span>

          </div>
        </div>
      </a>
    </Col>
  )
}
