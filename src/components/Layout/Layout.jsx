import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

import texture from '../../assets/images/texture.jpg'

const Layout = () => {
  return (
    <div className="app">
        <Sidebar/>
        <div className="page">
            <span className="tags top-tags">&lt;body&gt;</span>
            <img className="texture" src={texture} alt="texture" />
            <Outlet/>
      
            <span className="tags bottom-tags">
                &lt;/body&gt;
                <br/> 
            <span className="bottom-tags-html">&lt;/html&gt;</span>
            </span>
        </div>
    </div>
  )
}

export default Layout
