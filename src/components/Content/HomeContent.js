import React from 'react'
import "../Home.css"
function HomeDB({title,content,point1,point2,point3,point4,point5,point6,sub1,sub2,sub3,sub4,sub5,sub6}) {
  return (
    <div className="content-container">
        <h3 id="title">{title}</h3>
        <p id='content'>{content}</p>
        <p id="sub1">{sub1}</p><p id="point1">{point1}</p>
        <p id="sub2">{sub2}</p><p id="point2">{point2}</p>
        <p id="sub3">{sub3}</p><p id="point3">{point3}</p>
        <p id="sub4">{sub4}</p><p id="point4">{point4}</p>
        <p id="sub5">{sub5}</p><p id="point5">{point5}</p>
        <p id="sub6">{sub6}</p><p id="point6">{point6}</p>
        <img src="" id="" className="example" />
    </div>
  )
}

export default HomeDB