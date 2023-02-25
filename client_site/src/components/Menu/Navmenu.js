import {React} from 'react';
import {  Dropdown, Space} from 'antd';
import {MenuUnfoldOutlined} from "@ant-design/icons";
import image from "../../assets/images/image.png"
import { removeSession,getUserDetails } from '../../helper/SesssionHelper';




const items = [
    {
        key: '1',
        label: (
            <a className="Item"  rel="noopener noreferrer" href="/dashboard">
               Dashboard
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a className="Item"  rel="noopener noreferrer" href="/create">
                Create New Post
            </a>
        ),
    },
    

];


const Navmenu = () => {

const logout=()=>{
    removeSession()
}

    return (

        <div className="shadow-lg ">
            <row>

                <nav className="navbar ">

                   <Space direction="vertical">

                       <Space wrap>
                           <Dropdown
                               menu={{
                                   items,
                               }}
                               placement="topRight"
                           >
                               <i className="navicon"><MenuUnfoldOutlined/></i>

                           </Dropdown>
                       </Space>
                   </Space>

                   <div>
                       <div className="float-right h-auto d-flex">
                           <div className="user-dropdown">
                               <img className="icon-nav-img icon-nav " src={image} alt=""/>


                               <div className="user-dropdown-content ">
                                   <div className="mt-4 text-center">
                                       
                                   <p>{getUserDetails()["0"]["name"]}</p>

                                       <hr className="user-dropdown-divider  p-0"/>
                                   </div>
                                   <div>
                                       <a  className="side-bar-item">

                                           <span onClick={logout}  className="side-bar-item-caption btn btn-primary">Logout</span>
                                       </a>
                                   </div>

                               </div>
                           </div>
                       </div>
                   </div>

               </nav>

               </row>

          </div>
    );
};

export default Navmenu;
