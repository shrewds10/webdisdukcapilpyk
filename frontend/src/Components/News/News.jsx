import React from 'react'
import './news.css'
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../../Assets/berita 1.jpg"
import img2 from "../../Assets/berita 2.jpg"
import img3 from "../../Assets/berita 3.jpg"

const news = [
  {
    id: 1,
    img: img1,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. consectetur adipisicing elit. Nemo tenetur, asperiores quis cum provident corporis dolore quam doloribus laudantium nihil mollitia iste nesciunt tempora odit eaque maxime, distinctio placeat perspiciatis.",
  },
  {
    id: 2,
    img: img2,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tenetur, asperiores quis cum provident corporis dolore quam doloribus laudantium nihil mollitia iste nesciunt tempora odit eaque maxime, distinctio placeat perspiciatis.",
  },
  {
    id: 3,
    img: img3,
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
            const maxLength = 10;
            const descr = desc 
            const truncateText = (descr) => {
              if (descr.length <= maxLength) {
                return descr;
              }
              return descr.slice(0, maxLength) + "..."; 
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
                    {descr}
                  </p>
                </div>
                <a href="#" className="flex">
                  Read More
                  <BsArrowRightShort className='icon'/>
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default News