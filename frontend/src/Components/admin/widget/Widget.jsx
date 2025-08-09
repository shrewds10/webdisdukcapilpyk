import React from 'react'
import "./widget.css"
import { FaRegUser } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";

const Widget = ({type}) => {
  let data;
  switch (type) {
    case "users":
      data={
        title:"USERS",
        counter:100,
        link:"See all users",
        icon:(
          <FaRegUser 
            className='icon' 
            style={{
              backgroundColor: "rgba(255, 0, 0, 0.343)",
              color: "red",
            }}
          />
        ),
      }
      break;
    case "news":
      data={
        title:"BERITA",
        counter:100,
        link:"See all news",
        icon:(
          <IoNewspaperOutline 
            className='icon' 
            style={{
              backgroundColor: "rgba(0, 255, 47, 0.343)",
              color: "green",
            }}
          />
        ),
      }
      break;
    case "documents":
      data={
        title:"DOKUMEN",
        counter:100,
        link:"See all documents",
        icon:(
          <IoDocumentsOutline 
            className='icon' 
            style={{
              backgroundColor: "rgba(255, 204, 0, 0.34)",
              color: "goldenrod",
            }}
          />
        ),
      }
      break;
    case "staff":
      data={
        title:"STAFF",
        counter:100,
        link:"See all staff",
        icon:(
          <MdPeopleAlt 
            className='icon' 
            style={{
              backgroundColor: "rgba(157, 0, 255, 0.34)",
              color: "purple",
            }}
          />
        ),
      }
      break;
    default:
      break;
  }
  return (
    <div className="widget">
        <div className="left">
          <div className="title">{data.title}</div>
          <div className="counter">{data.counter}</div>
          <div className="link">{data.link}</div>
        </div>
        <div className="right">
          <div className="percentage"></div>
          {data.icon}
        </div>
    </div>
  )
}

export default Widget