import React from 'react'
import About from '../About.css';
function AboutContent({date,day,topic,paragraph,image,topicBolean,textAlign,shownInFigure,shownInFigureBolean}) {
  return (
    <div className="AboutContent-container">
        <div className="AboutContent-dateContainer">
            <p className='date-and-day'>{date}</p><p className='date-and-day'>{day}</p>
        </div>
        {topicBolean?<h1 className='topic-tag'>Topic:-</h1>:""}
        
        <div className="topic">
                    <h3>{topic}</h3>
        </div>
        <main className='AboutContent-main'>
            <p style={{textAlign}} className='AboutContent-paragraph'>{paragraph}</p>
            <img src={image} alt="" />
            <h3 style={{textAlign:"center"}}>{shownInFigureBolean?"Figure No:":""}{shownInFigure}</h3>
        </main>
    </div>
)
}

export default AboutContent;