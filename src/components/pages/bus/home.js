// react
import React, { useEffect,useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { testimonialOne } from "../../../assets/index";
import Layout from "../../layout/layout";
const Home = () => {
  const navigate = useNavigate();
  const {
     handleSubmit,
     register,
     formState: { errors },
    } = useForm();
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setDate(e.target.value);
   };
  const onSubmit = (data, e) => {
    navigate("/searchBus/" + 1);
    // // pass the data form data
    // const formData = new FormData();
    // Object?.entries(data).forEach((entry) => {
    //   const [key, value] = entry;
    //   formData.append(key, value);
    // });
    // dispatch(registerUser(formData));
    // window.scrollTo(0, 0);
  };
  const slides = [
    `https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1619943959856-52ec101f51d2?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <Layout>
      <div className="md:h-screen w-full mt-20 md:flex flex-wrap m-auto">
        <div className="text-textColor w-full text-center lg:text-left">
          {/* Hero image */}
          <div className=" overflow-hidden w-full bg-no-repeat bg-cover mb-4">
            <img
              src={slides[currentIndex]}
              className=" h-96 w-full"
              alt="images not found"
            />
          </div>
          <div className="w-11/12 xl:w-10/12 mx-auto mb-4">
            <div
              className="grid px-3 bg-white"
              style={{
                marginTop: "-120px",
                fontSize: "large",
                fontStyle: "italic",
              }}>
              <div
                  className="block rounded-2xl bg-white h-full mx-7 md:mx-20"
                  style={{
                  marginTop: "-100px",
                  fontSize: "large",
                  fontStyle: "italic",
                }}>
                <h1 className="text-2xl md:text-2xl xl:text-3xl text-primary text-start px-4 font-display tracking-tight leading-tight py-2">
                  BUY TICKET
                </h1>
                <div className="mx-5 mb-24 mt-1 select-none">
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
                            {...register(`from`, {
                              required: true,
                              maxLength: 10,
                            })}
                            placeholder="አበበ"
                            className="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                          />
                          {/* <label
                            for="firstName"
                            className="absolute left-2 px-1 bg-white text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-500 peer-focus:text-sm"
                          >
                            please select
                          </label> */}
                          {errors.firstName && (
                            <p className="text-red-500">
                              Starting Point is required
                            </p>
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
                          {/* <input
                            type="text"
                            {...register(`firstName`, {
                              required: true,
                              maxLength: 10,
                            })}
                            placeholder="አበበ"
                            className="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                          /> */}
                        <input
                          type="date"
                          {...register(`date`, {
                              required: true,
                              maxLength: 10,
                            })}
                        />
                        {errors.date && (
                            <p className="text-red-500">Date is required</p>
                          )}
                        </div>
                      </div>
                      <div className="w-full lgl:w-1/4 flex flex-col gap-4 py-7">
                        <button
                          className="bg-[#ef7c10] hover:bg-[#a53f00] text-white font-bold py-2 px-4 rounded flex  z-20"
                          type="submit"
                        >
                          SEARCH_BUSES
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );};
export default Home;
