import React, { useEffect, useState, useRef } from "react";
import { RiMenuLine } from "react-icons/ri";
import "../../App.css";
import { downloads,user } from "../../assets";
import classNames from 'classnames';
const Header = () => {
  const [menu, setMenu] = useState(false);
  const setmenu = () => {
    if (menu == false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  const [menuSett, setMenuSett] = useState(false);
  const getmenuSet = () => {
    if (menuSett == false) {
      setMenuSett(true);
    } else {
      setMenuSett(false);
    }
  };

  const [isActive, setIsActive] = useState("b0");
  const getHome = (elmRef, btn0) => {
    setIsActive(btn0);
  };
  const getBus = (elmRef, btn2) => {
    setIsActive(btn2);
    };
  const getContact = (elmRef, btn2) => {
    setIsActive(btn2);
     };
  const getAbout = (elmRef, btn3) => {
    setIsActive(btn3);
     };
  const getTicket = (elmRef, btn4) => {
    setIsActive(btn4);
     };
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
   
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
                  <>
            <div className=" md:h-8  bg-[black] flex text-center justify-between  text-white ">
              <div className="md:flex sm:block pt-1">
                <div className=" md:mx-10 sm:mx-0 w-auto h-10/12 text-gray-900 rounded-lg  dark:bg-gray-800 dark:text-gray-300">
                  <button className="flex text-center  text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
                      />
                    </svg>
                    <p className=" text-sm ml-1 font-bold">Buy Ticket</p>
                  </button>
                </div>
                <div className="md:mx-16 sm:mx-0 h-10/12 text-gray-900 rounded-lg  dark:bg-gray-800 dark:text-gray-300">
                  <button className="flex text-center  text-white">
                    {/* <img className=' w-6 h-5 ' src={building} alt='Noicon'/> */}
                    <p className=" text-sm md:ml-1 sm:ml-0 font-bold">
                      +2519-1 848 4782
                    </p>
                  </button>
                </div>
              </div>

              <div className=" pt-1 h-10/12  text-gray-900 rounded-lg dark:bg-gray-800 dark:text-gray-300">
                <button className="flex flex-row items-center text-white mb-3 pr-5"
                  onClick={getmenuSet}
                >
                  <p className=" text-sm  font-bold">Yibeltal</p>
                  {/* <img className='' src={building} alt='Noicon'/> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" ml-1 w-6 h-6"
                    >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="navbar  z-50 pl-5 top-0 pr-20 overflow-hidden justify-between list-none font-serif uppercase font-medium xl:text-xl 
                           md:text-xl xs:text-xs text-justify-center w-full md:h-16 sm:h-20 shadow-xl sm:flex bg-white items-center">
              <button
                className="ml-1 w-52 bg mt-2 md:block block "
                onClick={scrollToTop}
              >
           <img
                  className=" md:w-20 md:h-10 -mt-2 w-16 h-10 lg:ml-7 sm:ml-5 rounded-xl"
                  src={downloads}
                  alt="NoLogue"
                />
                <span className="-mt-2 text-lime-900 font-extrabold mb-1 flex">
                  <p className=" text-zinc-950 mr-2">Transport</p><p className="text-[#ff9100]">Logi.</p>
                </span>
              </button>
              <div className="text-3xl top-16 right-2 absolute text-black cursor-pointer md:hidden">
                <RiMenuLine size={24} onClick={setmenu} />
              </div>
              <ul
                className=" lg:flex md:flex text-base bg-slate-50 left-0 w-full md:w-auto
                 sm:hidden justify-end list-none z-20 "
              >
                <li className="mx-4">
                  <button
                    className={`transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:text-[#0099ff]
                                    ${
                                      isActive === "b0"
                                        ? "text-[#ff9100] font-extrabold"
                                        : ""
                                    }`}
                    onClick={() => getHome("", "b0")}
                  >
                    {" "}
                    Home{" "}
                  </button>
                </li>
                <li className="mx-4">
                  <button
                    className={`transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:text-[#0099ff]
                                    ${
                                      isActive === "b1"
                                        ? "text-[#ff9100] font-extrabold"
                                        : ""
                                    }`}
                    onClick={() => getBus("", "b1")}
                  >
                    Bus Search
                  </button>
                </li>
                <li className="mx-4">
                  <button
                    className={`transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:text-[#0099ff]
                                    ${
                                      isActive === "b2" ? "text-[#ff9100]" : ""
                                    }`}
                    onClick={() => getTicket("", "b2")}
                  >
                    View Ticket
                  </button>
                </li>
                <li className="mx-4">
                  <button
                    className={`transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:text-[#0099ff]
                                    ${
                                      isActive === "b3"
                                        ? "text-[#ff9100] font-extrabold"
                                        : ""
                                    }`}
                    onClick={() => getAbout("", "b3")}
                  >
                    About
                  </button>
                </li>
                <li className="mx-4">
                  <button
                    className={`transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:text-[#0099ff]
                                    ${
                                      isActive === "b4"
                                        ? "text-[#ff9100] font-extrabold"
                                        : ""
                                    }`}
                    onClick={() => getContact("", "b4")}
                  >
                    Contact
                  </button>
                </li>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ml-3 mr-2 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-3xl  ml-2 mr-1 w-7 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <p className=" text-md mt-1 -ml-0.5 mr-3 font-bold text-[#ff9100]">
                  1
                </p>
              </ul>
            </nav>
            <ul
              className={`${
                menu ? "left-0 opacity-100" : "left-[-750px] md:opacity-0"
              }
                    sm:flex lg:hidden flex-1  list-none flex flex-col
                    p-6 bg-black-gradient fixed w-full right-0  ml-0 my-2 top-28
                    sidebar bg-white transition-all text-base duration-500 ease-in z-50
                    `}
            >
              <li className="mx-6 py-3 font-serif uppercase font-medium  ">
                <button
                  onClick={() => getHome()}
                  className="transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110 flex"
                >
                  Home{" "}
                </button>
              </li>
              <li className="mx-6 py-2 font-serif uppercase font-medium  ">
                <button
                  onClick={() => getBus()}
                  className="transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex"
                >
                  Bus Search
                </button>
              </li>
              <li className="mx-6 py-2 font-serif uppercase font-medium  ">
                <button
                  onClick={() => getTicket()}
                  className="transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex"
                >
                  View Ticket{" "}
                </button>
              </li>
              <li className="mx-6 py-2 font-serif uppercase font-medium  ">
                <button
                  onClick={() => getAbout()}
                  className="transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex">
                  About
                </button>
              </li>
              <li className="mx-6 py-2 font-serif uppercase font-medium">
                <button
                  onClick={() => getContact()}
                  className="transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex">
                  Contact
                </button>
              </li>
            </ul>
            {
              menuSett ?(
              <> 
              <div className=" w-80 h-96 bg-white fixed right-1 z-50 shadow-xl rounded-b-xl">
              <div className=" w-11/12 shadow-md bg-white m-3 pt-1 p-4  rounded-md">
              <div className=" w-full flex p-1 hover:bg-slate-200 hover:rounded-md">
              <img className="rounded-full h-12 w-12 ml-0.5" alt="" src={user}/>
                <p className=" ml-2 mt-3 font-extrabold ">Yibeltal Awoke</p>
              </div>
              <hr className=" w-11/12 ml-2 mt-5 mb-3 inline-block bg-slate-500">
             </hr>
             <div className=" w-full flex hover:bg-slate-200 hover:rounded-md">
                <button className="pl-9 p-1 text-sky-500">See all profile</button>
              </div>
              </div>
              <div className=" w-11/12 p-4 ">
              <button className=" m-1 w-full text-left text-lg p-1 hover:bg-slate-200 hover:rounded-md ">Setting</button><br />
              <button className=" m-1 w-full text-left text-lg p-1 hover:bg-slate-200 hover:rounded-md ">Help&Support</button><br />
              <button className=" m-1 w-full text-left text-lg p-1 hover:bg-slate-200 hover:rounded-md ">Give feedback</button><br />
              <button className=" m-1 w-full text-left text-lg p-1 hover:bg-slate-200 hover:rounded-md ">Logout</button><br />
             </div>
            </div>           
            </>
              ):(null)}
          </>
        </div>
    </>
    );};
export default Header;
