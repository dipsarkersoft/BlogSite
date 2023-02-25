import {React} from 'react';
import {  Dropdown, Space} from 'antd';
import {MenuUnfoldOutlined} from "@ant-design/icons";
//import {getUserDetails, removeSession} from "../helper/SessionHelper";
import image from "../../assets/images/image.png"




const items = [
    {
        key: '1',
        label: (
            <a className="Item"  rel="noopener noreferrer" href="/">
               Dashboard
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a className="Item"  rel="noopener noreferrer" href="/create">
                Create New
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a className="Item"  rel="noopener noreferrer" href="/new">
                New Task
            </a>
        ),
    },
    {
        key: '4',
        label: (
            <a className="Item" rel="noopener noreferrer" href="/progress">
                In Progress
            </a>
        ),
    },
    {
        key: '5',
        label: (
            <a className="Item"  rel="noopener noreferrer" href="/completed">
                Completed
            </a>
        ),
    },
    {
        key: '6',
        label: (
            <a className="Item"  rel="noopener noreferrer" href="/canceled">
                Canceled
            </a>
        ),
    }

];


const Navmenu = () => {

const logout=()=>{
   
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
                                       <img className="icon-nav-img icon-nav" src="" alt=""/>

                                       <p></p>
                                       <hr className="user-dropdown-divider  p-0"/>
                                   </div>

                                   <div>
                                       <a  className="side-bar-item" href="/profile">

                                           <span  className="side-bar-item-caption">Profile</span>
                                       </a>
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
