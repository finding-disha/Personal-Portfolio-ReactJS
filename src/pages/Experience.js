import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import '../styles/Experience.css';
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className='experirnce'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2017 - 2019'
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Shri Rajashri Shahu College, Latur, Maharashtra </h3>
          <p>High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2020 - 2023'
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Badrinarayan Barwale College, Jalna, Maharashtra </h3>
          <p>Bachelor's degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='present'
        iconStyle={{background: "#e9d35b", color: "#fff"}}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Fresh out of College, Full of enthusiasm and Ready to add value.</h3>
          <p></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;