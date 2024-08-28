import "./timeline.css";
import { ReactComponent as WorkIcon } from "../assets/img/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/img/school.svg";

import timelineElements from "./Elements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimeLine() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
        <div >
            <h1 className="head23">Work Experience</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            contentArrowStyle={{ borderRight: '7px solid  #AA367C' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', borderColor: "black" }}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>

                            <p id="description">{element.description}</p>
                            <p id="description">Tech Stack{element.stack}</p>
                            {showButton && (
                                <a
                                    className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                                        }`}
                                    href="/"
                                >
                                    {element.buttonText}
                                </a>
                            )}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default TimeLine;