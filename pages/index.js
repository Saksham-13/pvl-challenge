import Head from 'next/head'
import Image from 'next/image'

import matter from 'gray-matter';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
// import ProgressCircle from 'react-native-progress-circle'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SidebarT from '../components/sidebar2';
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart,AiOutlineShareAlt,AiOutlineAccountBook } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { GoKebabVertical } from "react-icons/go";

const percentage = 3.8;
const percentage1 = 30.8;

const Home = () => {

  const menus = [
    { name: "My Report", link: "/wf w", icon:MdOutlineDashboard, margin: true   },
    { name: "My Dashboard", link: "/wf w", icon: MdOutlineDashboard },
    { name: "Department", link: "/fqw", icon: AiOutlineUser },
    { name: "Skillwise Data", link: "/fq", icon: FiMessageSquare },
    { name: "View Schedule", link: "/qwf", icon: TbReportAnalytics},
    { name: "Announcements", link: "/qwf", icon: TbReportAnalytics, margin: true },
    { name: "Explore Skills", link: "/fq", icon: FiFolder },
    { name: "Placement Tests", link: "/fq", icon: FiShoppingCart },
    { name: "Pre Assesment", link: "/fq", icon: AiOutlineHeart },
    { name: "Organisation", link: "/qwf", icon: TbReportAnalytics, margin: true },
    { name: "Assign Skills", link: "/f", icon: RiSettings4Line },
    { name: "Manage Student", link: "/f", icon: RiSettings4Line },
    { name: "Assign Skills", link: "/f", icon: RiSettings4Line },
    { name: "Report", link: "/f", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#25496E] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100  px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "my-4"
              } group flex  text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 hover:text-[#3B81F6]  rounded-md`}
            >
              { !menu?.margin&& <div>{React.createElement(menu?.icon, { size: "20" })}</div>}
              
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
            <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="Avatar of Writer"></img>
          <div class="text-sm">
            <p className={`text-gray-100 ${
                  !open && "hidden"
                }  leading-none` }>College Admin</p>
            <p className={`text-gray-100 ${
                  !open && "hidden"
                }  leading-none text-xs mt-1` }>College Admin</p>
          </div>
        </div>
        </div>
      </div>
    <div className="container lg:mx-20 md:mx-4 mt-12">
<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 px-4" >
<div className="shadow-md w-full px-4 py-5 bg-[#F77171] rounded-lg ">
<div className=" flex justify-between text-sm font-medium text-gray-100 truncate">
Students
<AiOutlineUser size={20} />
</div>
<div className="mt-1 text-3xl font-semibold text-gray-100">
26
</div>
</div>
<div className="shadow-md w-full px-4 py-5 bg-[#3B81F6] rounded-lg ">
<div className=" flex justify-between text-sm font-medium text-gray-100 truncate">
Departments
<AiOutlineShareAlt size={20} />
</div>
<div className="mt-1 text-3xl font-semibold text-gray-100">
5
</div>
</div>
<div className="shadow-md w-full px-4 py-5 bg-[#21C55D] rounded-lg ">
<div className="flex justify-between text-sm font-medium text-gray-100 truncate">
Placements
<AiOutlineAccountBook size={20} />
</div>
<div className="mt-1 text-3xl font-semibold text-gray-100">
0
</div>
</div>
</div>
{/* a div with button on the right */}
<div className="flex lg:justify-end md:justify-center px-4 mt-12">
<div className="flex gap-4">
<div className="bg-[#F87315] text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
  <span>Share with Facebook </span>
  <AiOutlineShareAlt size={20} />
              
</div>
</div>
</div>
<h1 className="my-8 text-xl text-[#21C55D]">Upcoming Placement Opportunities</h1>

<div className="flex grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2  p-4">
      <div>
        <div className="mb-20">
        <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Placement Tests</h2>
        <h2 className="text-gray-400 text-sm font-bold">No Placement Tests Scheduled</h2>
        </div>
      <div className=" shadow-xl rounded  p-4">
      <h2 className="text-[#f77171] text-sm font-bold"> Placement Exams History</h2>
      <div className=" my-8  ">
      <div className="mx-auto " style={{ width: 100, height: 100 }} >
      <CircularProgressbar className="my-2"  value={percentage} text={`${percentage}%`} />
      <div >26 Students</div>
      </div>
      </div>
      
      <div className=" flex p-4  justify-evenly ">
      <div className=" ">
      <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Total Students Accepted</h2>   
      <div className="bg-[#21C55D] lg:w-full  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <span className="mx-auto">1 </span>
              
              </div>   
      </div>
      <div className=" ">
      <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Total Students Cleared</h2>   
      <div className="bg-[#21C55D] lg:w-full  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <span className="mx-auto">1 </span>
              
              </div>   
      </div>

      </div>
      <div className=" text-sm text-gray-400 text-center"> 
        Resoulution was too low I could not read what was written
      </div>
      <div className=" flex p-4  justify-evenly ">
      <div className=" ">
      <h2 className="text-[#8B5CF6] text-sm font-bold mb-4"> Accepted</h2>   
      <div className="bg-[#8B5CF6] lg:w-full  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <span className="mx-auto">84 </span>
              
              </div>   
      </div>
      <div className=" ">
      <h2 className="text-[#8B5CF6] text-sm font-bold mb-4"> Dist</h2>   
      <div className="bg-[#8B5CF6] lg:w-full  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <span className="mx-auto">1 </span>
              
              </div>   
      </div>

      </div>
      </div>
      </div>
      <div>
        <div className="mb-20">
        <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Placement Tests</h2>
        <h2 className="text-gray-400 text-sm font-bold">No Placement Tests Scheduled</h2>
        </div>
      <div className=" shadow-xl rounded  p-4">
      <h2 className="text-[#f77171] text-sm font-bold"> Pre-Assesment Report</h2>
      <div className=" my-8  ">
      <div className="mx-auto " style={{ width: 100, height: 100 }} >
      <CircularProgressbar className="my-2"  value={percentage1} text={`${percentage1}%`} />
      <div >26 Students</div>
      </div>
      </div>
      
      <div className=" flex p-4  justify-evenly ">
      <div className=" ">
      <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Total Students Accepted</h2>   
      <div className="bg-[#21C55D] lg:w-full  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <span className="mx-auto">86 </span>
              
              </div>   
      </div>
      <div className=" ">
      <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Total Students Cleared</h2>   
      <div className="bg-[#21C55D] lg:w-full  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <span className="mx-auto">8</span>
              
              </div>   
      </div>

      </div>
      <div className=" text-sm text-gray-400 text-center"> 
        Resoulution was too low I could not read what was written
      </div>
      <div className=" flex p-4  justify-evenly ">
      <div className=" ">
      <h2 className="text-[#8B5CF6] text-sm font-bold mb-4"> Accepted</h2>   
      <div className="bg-[#8B5CF6] lg:w-full  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <span className="mx-auto">384 </span>
              
              </div>   
      </div>
      <div className=" ">
      <h2 className="text-[#8B5CF6] text-sm font-bold mb-4"> Dist</h2>   
      <div className="bg-[#8B5CF6] lg:w-full  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <span className="mx-auto">38 </span>
              
              </div>   
      </div>

      </div>
      </div>
      </div>
      
    </div>
  
</div>

    </section>
    
  );
};

export default Home;