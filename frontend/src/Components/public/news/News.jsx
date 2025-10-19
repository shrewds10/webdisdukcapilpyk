import React from 'react'
import './news.css'
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../../../assets/berita 1.jpg"
import img2 from "../../../assets/berita 2.jpg"
import img3 from "../../../assets/berita 3.jpg"

const news = [
  {
    id: 1,
    img: "http://localhost:3000/images/WhatsApp%20Image%202025-06-03%20at%2007.39.17.jpeg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. consectetur adipisicing elit. Nemo tenetur, asperiores quis cum provident corporis dolore quam doloribus laudantium nihil mollitia iste nesciunt tempora odit eaque maxime, distinctio placeat perspiciatis.",
  },
  {
    id: 2,
    img: "http://localhost:3000/images/WhatsApp%20Image%202025-06-03%20at%2007.39.17.jpeg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tenetur, asperiores quis cum provident corporis dolore quam doloribus laudantium nihil mollitia iste nesciunt tempora odit eaque maxime, distinctio placeat perspiciatis.",
  },
  {
    id: 3,
    img: "http://localhost:3000/images/WhatsApp%20Image%202025-06-03%20at%2007.39.17.jpeg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tenetur, asperiores quis cum provident corporis dolore quam doloribus laudantium nihil mollitia iste nesciunt tempora odit eaque maxime, distinctio placeat perspiciatis.",
  },
  {
    id: 4,
    img: "http://localhost:3000/images/WhatsApp%20Image%202025-06-03%20at%2007.39.17.jpeg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tenetur, asperiores quis cum provident corporis dolore quam doloribus laudantium nihil mollitia iste nesciunt tempora odit eaque maxime, distinctio placeat perspiciatis.",
  },
]

const News = () => {
  return (
    <section className='news container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Berita
          </h2>
          <p>
            
          </p>
        </div>
      </div>
      
      <div className="mainContent grid">
        {
          news.map(({id, title, img, desc})=>{
            const truncateText = (text, maxLength) => {
              if (text.length > maxLength) {
                return text.substring(0, maxLength) + '...';
              } else {
                return text;
              }
            };
            return(
              <div className="singlePost grid">
                <div className="imgDiv">
                  <img src={img} alt="Image Name" />
                </div>
                <div className="postDetails">
                  <h3>
                    {title}
                  </h3>
                  <p>
                    {truncateText(desc, 200)}
                  </p>
                  <a href="#" className="flex">
                    Read More
                    <BsArrowRightShort className='icon'/>
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="button-container">
        <button className='button'>Lihat Semua</button>
      </div> 
    </section>
  )
}

export default News