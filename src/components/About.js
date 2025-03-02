import React from 'react';
import AboutContent from './Content/AboutContent';
import "./About.css";
import AboutDB from './Content/data/AboutDB';
function About() {
  return (
    <div className='About-container'>
      <div className="About-slide">
        <h3 className='About-defaultHeading'>Purpose to make about page:</h3>
        <h1 id='About-heading'>In About container we learn a vgc stretegy.The about page is written by VGC stretegy creater.</h1>
        <hr />
       <main className='AboutMain-container'>
        {
          AboutDB.map(data=><AboutContent
          date={data.date}
          day={data.day}
          topic={data.topic}
          paragraph={data.paragraph}
          image={data.exampleImg}
          topicBolean={data.topicBolean}
          textAlign={data.textAlign}
          shownInFigure={data.shownInFigure}
          shownInFigureBolean={data.shownInFigureBolean}
          />)
        }
        </main>
      </div>
    </div>
  )
}

export default About