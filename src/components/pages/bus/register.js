// React
import React, { useState, useEffect } from "react";
import { useNavigate,useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import {registerBus,retriveBus,updateBus,deleteBus, searchBus} from "../../../action_page/busAction";
import BusModel from "../bus/popup_model";
import Loginform from "../users/login";
import Header from "../../navigation/header";
import Footer from "../../navigation/footer";
import {bus} from "../../../assets";
const Register = () => {
  const dispatch = useDispatch();
  const param=useParams()
  const navgate=useNavigate()
  const id=param.id
  const onReset = async () =>{
  const result = await dispatch(searchBus(id))
    reset(result.payload); 
   }
  // const {posts} = useSelector(
  //     (state) => state.posts); 
  const [showLogin, setShowLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const {  handleSubmit,
           register,
           reset,
           formState: { errors }} = useForm();
  const OnSubmit =(busData) => {
    alert("jd")
    console.log("yibe new bus data is : ",busData);

    if(busData.busModel!=="" && busData.busType!=="")
         {
           if(!id){    
               dispatch(registerBus(busData));
             window.location.reload(false);
             alert("በትክክል መመዝገብ ችላዋል")
            }
        else{
                 dispatch(updateBus({id:id,busData}));
                 alert("በትክክል መመዝገብ ችላዋል") 
                 navgate('/ViewPosts')  
                 window.location.reload(); 
              }}
        else{
          alert("Please fill all field")    
        }}
     //delete bus
   const busDelete=()=>{
      dispatch(deleteBus())
     }
  // use effect
  useEffect(() => {
  dispatch(retriveBus())
  }, []);
  return (
    <>
    <Header/>
      <div style={{backgroundImage: `url(${bus})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
        backgroundPosition: 'center',
      paddingBottom: '60%',
      height:'0',
      paddingTop:'16%',

      }} 
      className="mt-20">
      {/* <img
        className=" h-full w-full absolute"
          src={bus}
           alt="NoLogue"
            /> */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full xl:w-8/12 lg:w-8/12 md:w-8/12 mx-auto ">
              <div className="flex flex-wrap rounded-lg w-full">
                <div className="bg-[white] -mt-72 p-5 z-20 grow-0 shrink-0 basis-auto ml-24  mb-5 w-10/12 rounded-lg shadow-shadowOne">
                <form onSubmit={handleSubmit(OnSubmit)}>                  
                    <div className=" text-sm mx-2 md:mx-9 lg:mx-9 mt-5 rounded-lg p-5 bg-slate-100 w-11/12">
                      <div className="relative md:my-3">
                          <p className=" ml-60 text-orange-400 font-bold text-xl underline">New Bus Registration</p>
                          <p className=" ml-16 mt-16 mb-7 text-slate-600 font-bold text-lg ">Bus Details:</p>
                          <div className="relative md:col-span-2 md:my-3 flex">
                        <p className="text-sm text-gray-400 uppercase w-36 tracking-wide">
                          Bus name
                        </p>
                        <input
                          type="text"
                          {...register(`busName`, {
                            required: true,
                            maxLength: 10,
                          })}
                          placeholder="Toyota"
                          className="peer h-10 w-7/12 border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.busName && (
                          <p className="text-red-500">Bus Name is required!</p>
                        )}
                        <p className="text-sm text-gray-400 uppercase tracking-wide ml-2 w-32">
                          Bus Level
                        </p>
                        <input
                          type="text"
                          {...register(`level`, {
                            required: true,
                            maxLength: 10,
                          })}
                          placeholder="Level 1"
                          className="peer h-10 w-4/12 border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.level && (
                          <p className="text-red-500">Bus Lavel is required!</p>
                        )}
                      </div>
                      <div className="relative md:col-span-2 md:my-3 flex">
                      <p className="text-sm text-gray-400 uppercase w-36 tracking-wide">
                          Bus type
                          </p>
                          <input
                            type="text"
                            {...register(`Bustype`, {
                              minLength: 6,
                            })}
                            placeholder="Public"
                            className="peer h-10 w-7/12 border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                          />
                          <p className="text-sm text-gray-400 uppercase tracking-wide ml-2 w-32">
                          Model No
                        </p>
                        <input
                          type="text"
                          {...register(`Tnumber`, {
                            required: true,
                          })}
                          placeholder="2735"
                          className="peer h-10 w-4/12 border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.Tnumber && (
                          <p className="text-red-500">Targa is required!</p>
                        )}
                      </div>
                      <br />
                      <div className="relative md:my-3 flex">
                      <p className="text-sm text-gray-400 uppercase tracking-wide ml-2 w-32">
                        Seat No
                        </p>
                        <input
                          type="number"
                          {...register(`seatNo`, {
                            required: true,
                            maxLength: 10,
                          })}
                          placeholder="10"
                          className="peer h-10 w-4/12 border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.seatNo && (
                          <p className="text-red-500">Bus seat is required!</p>
                        )}
                      <p className="text-sm text-gray-400 uppercase tracking-wide ml-2 w-32">
                        Side No
                        </p>
                        <input
                          type="number"
                          {...register(`sideNo`, {
                            required: true,
                            maxLength: 10,
                          })}
                          placeholder="10"
                          className="peer h-10 w-4/12 border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.sideNo && (
                          <p className="text-red-500">Bus seat is required!</p>
                        )}
                        <p className="text-sm text-gray-400 uppercase tracking-wide ml-2 w-32">
                        Lbry No
                        </p>
                        <input
                          type="number"
                          {...register(`lbryNo`, {
                            required: true,
                            maxLength: 10,
                          })}
                          placeholder="10"
                          className="peer h-10 w-4/12 border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.lbryNo && (
                          <p className="text-red-500">Bus seat is required!</p>
                        )}
                      </div>
                   </div>
                   <br />
                      <div className="my-7">
                        <div className="relative md:my-1 ml-60 mt-2">
                          <button className=" bg-[#ef7c10] hover:bg-[#a53f00]  text-white font-bold py-3 px-6 rounded">
                            Register Bus
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    <Footer/> 
     </>
  );
};

// export
export default Register;
