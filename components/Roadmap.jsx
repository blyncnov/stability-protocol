import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MaxWidthComponent } from "../styles/constants/helpers";
import { FaBriefcase } from "react-icons/fa";

const Roadmap = () => {
  return (
    <MaxWidthComponent>
      <div style={{ color: "#333" }} className="RoadMap__header">
        <h1>Our Roadmap</h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(22, 16, 133)",
            color: "#333",
            fontFamily: "'Hind Guntur', sans-serif",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(22, 16, 133)" }}
          date="2011 - present"
          iconStyle={{ background: "#923917", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(22, 16, 133)",
            color: "#333",
            fontFamily: "'Hind Guntur', sans-serif",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(22, 16, 133)" }}
          date="2011 - present"
          iconStyle={{ background: "#923917", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(22, 16, 133)",
            color: "#333",
            fontFamily: "'Hind Guntur', sans-serif",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(22, 16, 133)" }}
          date="2011 - present"
          iconStyle={{ background: "#923917", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(22, 16, 133)",
            color: "#333",
            fontFamily: "'Hind Guntur', sans-serif",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(22, 16, 133)" }}
          date="2011 - present"
          iconStyle={{ background: "#923917", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work bg-neu"
          contentStyle={{
            background: "rgb(22, 16, 133)",
            color: "#333",
            fontFamily: "'Hind Guntur', sans-serif",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(22, 16, 133)" }}
          date="2011 - present"
          iconStyle={{ background: "#923917", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(22, 16, 133)",
            color: "#333",
            fontFamily: "'Hind Guntur', sans-serif",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(22, 16, 133)" }}
          date="2011 - present"
          iconStyle={{ background: "#923917", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(22, 16, 133)",
            color: "#333",
            fontFamily: "'Hind Guntur', sans-serif",
          }}

          contentArrowStyle={{ borderRight: "7px solid  rgb(22, 16, 133)" }}
          date="2011 - present"
          iconStyle={{ background: "#923917", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </MaxWidthComponent>
  );
};

export default Roadmap;
