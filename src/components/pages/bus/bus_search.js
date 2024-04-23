import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { bus1, bus2, bus3, testimonialTwo, seat2 } from "../../../assets";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BusModel from "./popup_model";
import Loginform from "../users/login";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../layout/layout";
const Search = () => {
  const [showLogin, setShowLogin] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
 const navigate=useNavigate()
 const busRegister =()=>{
  navigate("/busRegister")
 }
  const onSubmit = (data, e) => {
    // // pass the data form data
    // const formData = new FormData();
    // Object?.entries(data).forEach((entry) => {
    //   const [key, value] = entry;
    //   formData.append(key, value);
    // });
    // dispatch(registerUser(formData));
    // window.scrollTo(0, 0);
  };
  const [seeMore, setSeeMore] = useState(false);

  return (
    <Layout>
      <div className="bg-[#E1E1E1] pt-12 pb-6 mt-20">
        <div className="w-full mx-auto mb-2">
          <div
            className="block rounded-2xl bg-white h-full mx-2 md:mx-6 border-2 border-slate-400"
            style={{
              fontSize: "large",
              fontStyle: "italic",
            }}
          >
            <h1 className="text-2xl md:text-2xl xl:text-3xl text-primary text-start px-4 font-display tracking-tight leading-tight py-2">
              BUY TICKET
            </h1>
            <div className="mx-5 mb-4 mt-1 select-none">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/4 flex flex-col gap-4">
                    <div className="relative md:col-span-2 md:my-3">
                      <p className="text-sm text-gray-400 uppercase tracking-wide flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                        From :
                      </p>
                      <input
                        type="text"
                        {...register(`firstName`, {
                          required: true,
                          maxLength: 10,
                        })}
                        placeholder="አበበ"
                        className="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                      />

                      {errors.firstName && (
                        <p className="text-red-500">ትክክለኛ ስም ማስገባትዎን ያረጋግጡ</p>
                      )}
                    </div>
                  </div>
                  <div className="relative md:col-span-2 md:my-3">
                    <p className="flex text-sm text-gray-400 uppercase tracking-wide">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      To :
                    </p>
                    <select
                      type="text"
                      {...register(`customerBank`)}
                      className="form-select peer h-10 w-full border border-1.5 rounded-md 
                          border-gray-400 text-gray-900 placeholder-transparent focus:outline-none 
                          focus:border-gray-500 focus:border-2"
                    >
                      <option value="bahir dar">Bahir Dar</option>
                      <option value="gonder">Gonder</option>
                      <option value="debre tabor">Debre Tabor</option>
                      <option value="dangila">Dangila</option>
                      <option value="kosober">Kosober</option>
                      <option value="markos">Markos</option>
                    </select>
                  </div>

                  <div className="w-full lgl:w-1/4 flex flex-col gap-4">
                    <div className="relative md:col-span-2 md:my-3">
                      <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Date Of Journey
                      </p>
                      <input
                        type="text"
                        {...register(`firstName`, {
                          required: true,
                          maxLength: 10,
                        })}
                        placeholder="አበበ"
                        className="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                      />

                      {errors.firstName && (
                        <p className="text-red-500">ትክክለኛ ስም ማስገባትዎን ያረጋግጡ</p>
                      )}
                    </div>
                  </div>

                  <div className="w-full lgl:w-1/4 flex flex-col gap-4 py-7">
                    <button className="bg-[#ef7c10] hover:bg-[#a53f00] text-white font-bold py-2 px-4 rounded flex">
                      SEARCH_BUSES
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-[#ef7c10] mt-4 hover:bg-[#a53f00] text-white font-bold py-2 px-4 rounded mx-auto flex justify-around">
            <div className="flex justify-evenly">
              <p>bahir dar</p>
              <p className="px-8">debre tabor</p>
            </div>
            <div className=" ml-16">
              <p>june 19,2023</p>
            </div>
            <div className=" ml-4 float-right ">
              <button onClick={busRegister} className="">Add</button>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bus Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Schedule
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    FARE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SEAT AVAILABLE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    VIEW
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                {/* {users.users?.length > 0 ? (
                  users?.users?.map((user) => ( */}
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50
         dark:hover:bg-gray-600"
                  //   key={user.userCode}
                >
                  {/* {
        (users.users?.length)>0
          ?(
            users?.users?.map((user, index) => (
            <div key={index}>    */}

                  <td className="px-6 py-2">
                    <img
                      className="w-14 h-14 rounded-md"
                      src={bus3}
                      alt="profile Img"
                    />
                  </td>
                  <td className="px-6 py-2">wow bus</td>
                  <td className="px-6 py-2">bdr(20,2023 2:50 pm)</td>
                  <td className="px-6 py-2">D4D</td>
                  <td className="px-6 py-2">180/seat</td>
                  <td className="px-6 py-2">62/62</td>
                  <td className="px-6 py-2">
                    {/** edit and delete button  start*/}
                    <div className="space-y-2">
                      <button
                        className="bg-[#ef7c10] hover:bg-[#a53f00] text-white font-bold py-2 px-4 rounded flex"
                        onClick={() => setSeeMore(true)}
                      >
                        View Seats
                      </button>
                    </div>
                  </td>
                </tr>
                {/* ))
                ) : (
                  <div>Search Buses</div>
                )} */}
              </tbody>
            </table>
          </div>

          {seeMore && (
            <>
              <div className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between mt-4">
                  <div className="w-full lgl:w-[27%] h-full py-10 bg-[#ffffff] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
                    <div>
                      <img
                        className="w-12 h-12 rounded-md"
                        src={testimonialTwo}
                        alt="profile Img"
                      />
                    </div>
                    <div className="space-x-6">
                      <button>
                        1
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        2
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        3
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                    </div>
                    <div className="space-x-6">
                      <button>
                        4
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        5
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        6
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                    </div>
                    <div className="space-x-6">
                      <button>
                        7
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        8
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        9
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                    </div>
                    <div className="space-x-6">
                      <button>
                        10
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        11
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        12
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                    </div>
                    <div className="space-x-6">
                      <button>
                        13
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        14
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        15
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                    </div>
                    <div className="space-x-6">
                      <button>
                        16
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        17
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        18
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                    </div>
                    <div className="space-x-6">
                      <button>
                        19
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        20
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                      <button>
                        21
                        <img
                          className="w-12 h-12 rounded-md"
                          src={seat2}
                          alt="profile Img"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="w-full lgl:w-[71%] h-full py-10 bg-[#ffffff] flex flex-col lgl:flex-row gap-8 p-4 lgl:p-8 rounded-lg">
                    <div className="bg-white hover:bg-gray-50dark:hover:bg-gray-600">
                      <div className="flex border-b">
                        <h1 className="px-4 py-1 font-bold">Boarding Point</h1>
                        <p className="px-6 py-1">Bahir Dar</p>
                      </div>
                      <div className="flex border-b">
                        <h1 className="px-4 py-1 font-bold">Dropping Point</h1>
                        <p className="px-6 py-1">Debre Tabor</p>
                      </div>
                      <div className="flex border-b">
                        <h1 className="px-4 py-1 font-bold">TYPE</h1>
                        <p className="px-6 py-1">D4D</p>
                      </div>
                      <div className="flex border-b">
                        <h1 className="px-4 py-1 font-bold">DATE</h1>
                        <p className="px-6 py-1">20,20-2023</p>
                      </div>
                      <div className="flex border-b">
                        <h1 className="px-4 py-1 font-bold">Start Time</h1>
                        <p className="px-6 py-1">wow bus</p>
                      </div>
                      <div>
                        <button className="bg-[#ef7c10] hover:bg-[#a53f00] text-white font-bold py-2 px-4 rounded flex">
                          62 Seat Available
                        </button>
                      </div>
                    </div>
                    <div>
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700  bg-[#efa869]">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Seat No
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Birr
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-2">5</td>
                            <td className="px-6 py-2">Adult</td>
                            <td className="px-6 py-2">180</td>
                            <td className="px-6 py-2">
                              <button
                                className=" text-sm px-2 py-2 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  class="w-4 h-4"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                        <div className="w-full justify-end items-center">
                          <div className="flex w-full">
                            <h1 className="px-4 py-1 font-bold">Quantity </h1>
                            <p className="px-6 py-1">1</p>
                          </div>
                          <div className="w-full flex border-b">
                            <h1 className="flex px-4 py-1 font-bold">
                              Sub_Total
                            </h1>
                            <p className="px-6 py-1">180</p>
                          </div>
                        </div>
                        <div className="justify-end items-center flex">
                          <button
                            className="bg-[#ef7c10] hover:bg-[#a53f00] text-white font-bold py-2 px-8 rounded flex"
                            onClick={() => {
                              setShowLogin(true);
                            }}
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <BusModel isVisible={showLogin} onClose={() => setShowLogin(false)}>
          <Loginform />
        </BusModel>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
};
export default Search;
