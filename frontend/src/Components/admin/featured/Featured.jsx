import "./featured.css"
import { MdMoreVert } from "react-icons/md";
import Perkawinan from "../../public/aggregate/Perkawinan/Perkawinan";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Jumlah Penduduk</h1>
        <MdMoreVert/>
      </div>
      <div className="bottom">
        <Perkawinan/>
      </div>
    </div>
  )
}

export default Featured