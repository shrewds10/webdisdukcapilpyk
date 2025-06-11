import React from 'react'
import './news.css'
// import imgKTP from "../../Assets/berita 1.jpg"
import berita1 from "../../Assets/berita1.jpeg"
import imgKK from "../../Assets/berita 2.jpg"
import imgIKD from "../../Assets/berita 3.jpg"
import imgKIA from "../../Assets/KIA.png"
import imgAKTAKELAHIRAN from "../../Assets/AKTA KELAHIRAN.jpg"
import imgAKTAKEMATIAN from "../../Assets/AKTA KEMATIAN.jpeg"
import Navbar from '../../Components/Navbar/Navbar'

const news = [ 
  {
    id: 1,
    img: berita1,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    img: imgKK,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    img: imgIKD,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    img: imgAKTAKELAHIRAN,
    title: "Akta Kelahiran",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    img: imgKIA,
    title: "Kartu Indentitas Anak",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 6,
    img: imgAKTAKEMATIAN,
    title: "Akta Kematian",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }
]

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength);
    } else {
        return text;
    }
};

const News = () => {
    return (
        <>
          <Navbar/>
            <section className='News container section'>
                <div className='secContainer'>
                    <div className="secIntro">
                        <div className="secTitle">
                            <h3>Berita</h3>
                        </div>
                    </div>
                    <div className="mainContent">
                        <div className="mainSide">
                            <div className="side1">
                                <div className="descSide1">
                                {
                                    news.length > 0 &&(
                                        <div className="descBerita">
                                            <img src={news[0].img} alt="Image Name" />
                                            <div className="overlay">
                                                <h2>{news[0].title}</h2>
                                                <p>{truncateText(news[0].description, 100)}</p>
                                            </div>
                                        </div>
                                    )
                                }                           
                                </div>
                            </div>
                            <div className="side2">
                                <div className="subSide">
                                    <div className="subSide1">
                                        {
                                            news.length > 0 &&(
                                                <div className="singleBerita">
                                                    <div className="descBerita">
                                                        <img src={news[1].img} alt="Image Name"/>
                                                        <div className="overlay">
                                                            <h2>{news[1].title}</h2>
                                                            <p>{truncateText(news[1].description, 50)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }  
                                    </div>
                                    <div className="subSide2">
                                        <div className="descSubSide2">
                                            {
                                                news.length > 0 &&(
                                                    <div className="singleBerita">
                                                        <div className="descBerita">
                                                            <img src={news[2].img} alt="Image Name" />
                                                            <div className="overlay">
                                                                <h2>{news[2].title}</h2>
                                                                <p>{truncateText(news[2].description, 30)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            } 
                                        </div>
                                        <div className="descSubSide3">
                                            {
                                                news.length > 0 &&(
                                                    <div className="singleBerita">
                                                        <div className="descBerita">
                                                            <img src={news[0].img} alt="Image Name" />
                                                            <div className="overlay">
                                                                <h2>{news[2].title}</h2>
                                                                <p>{truncateText(news[2].description, 30)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            } 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="secondSide">
                            <div className="descSide">
                                <div className='news'>
                                {
                                    news.map(({id, title, img, description})=>{
                                        return(
                                            <div className="singleBerita">
                                                <div className="descBerita">
                                                    <img src={img} alt="Image Name" />
                                                    <div className="category">
                                                        <p>Category</p><span>01/01/2025</span>
                                                    </div>
                                                    <div className="overlay">
                                                        <h3>{title}</h3>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }                         
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
  
export default News