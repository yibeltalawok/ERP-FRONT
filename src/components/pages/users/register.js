// React
import React, { useState, useEffect } from "react";
import { useNavigate,useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
// import {registerUser,retriveUser,updateUser,deleteUser, searchUser} from "../../../action_page/userAction";
import {registerUser} from "../../../action_page/userAction";
import { HiOutlineX } from "react-icons/hi";
import BusModel from "../bus/popup_model";
import Loginform from "../users/login";
import Header from "../../navigation/header";
import Footer from "../../navigation/footer";
// import {userImage} from "../../../assets";
import userImage from "../../../assets/images/headers/Bus.jpeg";

const Register = () => {
  const dispatch = useDispatch();
  const param=useParams()
  const navgate=useNavigate()
  const id=1;
  const onReset = async () =>{
  // const result = await dispatch(searchUser(id))
    // reset(result.payload); 
   }
  // const {posts} = useSelector(
  //     (state) => state.posts); 
  const [showLogin, setShowLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const { handleSubmit,
    register,
    reset,
    formState: { errors }} = useForm();
  const OnSubmit =(userData) => {
    // console.log("yibe new data is : ",userData);
    // {firstName: 'Yibeltal', middleName: 'ccc', sex: 'male', email: 'yibeltalawoke058@gmail.com', password: 'yibe497'}
        if(userData.firstName!=="" && userData.description!=="")
         {
           if(!id){   
               dispatch(registerUser(userData));
               alert("registered")
            }
        else{
                //  dispatch(updateUser({id:id,userData}));
                 alert("updated") 
                //  navgate('/ViewPosts')  
                 window.location.reload(); 
              }}
        else{
          alert("Please fill all field")    
        }}
  //delete user
  const userDelete=()=>{
    // dispatch(deleteUser())
  }
  // use effect
  useEffect(() => {
  // dispatch(retriveUser())
  }, []);
  const styles = {
    backgroundImage: `url(${userImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <>
    <Header/>
    <div style={styles}>
        {/* <img
        className=" h-full w-full absolute"
          src={userImage}
           alt="NoLogue"
            /> */}
      {/* <button className="ml-10  text-cyan-500 mb-5">Go Back</button> */}
        <div className=" md:ml-32 ml-0 xl:w-11/12 lg:w-11/12 md:w-11/12 flex items-center justify-center">
          <div className=" xl:w-11/12 lg:w-11/12 md:w-11/12 mx-auto xl:mt-20 md:mt-20 mt-2">
            <div className=" xl:w-11/12 lg:w-11/12 md:w-11/12 flex flex-wrap rounded-lg text-center">
              <div className="md:ml-32 ml-0xl:w-9/12 lg:w-9/12 md:w-9/12 basis-auto  overflow-hidden p-5 m-7 pb-40 z-20 bg-white rounded-lg shadow-shadowOne">              
              <form onSubmit={handleSubmit(OnSubmit)} className="w-full h-screen">
               <p className=" text-orange-400 font-bold text-xl mt-3 underline">New User Registration</p>
                <br />
                <div className=" md:ml-28 ml-0 xl:w-9/12 lg:w-9/12 md:w-9/12 p-7 mb-10 rounded-lg bg-slate-50">
                <p className="   mb-3 text-slate-600 font-bold text-lg ">User Details:</p>
                <div className="relative md:col-span-2 md:my-3">
                        <p className="text-sm text-gray-400 uppercase tracking-wide float-left">
                          First name
                        </p>
                        <input
                          type="text"
                          {...register(`firstName`, {
                            required: true,
                            maxLength: 10,
                          })}
                          placeholder="abebe"
                          className="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />

                        {errors.firstName && (
                          <p className="text-red-500">Firstname is required!</p>
                        )}
                 </div>
                  <div className="relative md:col-span-2 md:my-3">
                        <p className="text-sm text-gray-400 uppercase tracking-wide float-left">
                          Middle name
                        </p>
                        <input
                          type="text"
                          {...register(`middleName`, {
                            required: true,
                            maxLength: 10,
                          })}
                          placeholder="metadel"
                          className="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.middleName && (
                          <p className="text-red-500">middle name is required!</p>
                        )}
                      </div>
                      <div className="relative md:col-span-2 md:my-3">
                        <p className="text-sm text-gray-400 uppercase tracking-wide float-left">
                          Last name
                        </p>
                        <input
                          type="text"
                          {...register(`lastName`, {
                            required: true,
                            maxLength: 10,
                          })}
                          placeholder="Gietu"
                          className="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.lastName && (
                          <p className="text-red-500">Lastname is required!</p>
                        )}
                      </div>

                      <div className="relative md:col-span-2 md:my-3">
                      <p className="text-sm text-gray-400 uppercase tracking-wide float-left">
                        Sex
                       </p>
                        <select
                          type="text"
                          {...register(`sex`)}
                          className="form-select peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500 focus:border-2"
                        >
                          <option value="">Sex</option>
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                        </select>
                      </div>
                      <div className="relative md:col-span-2 md:my-3">
                      <p className="text-sm text-gray-400 uppercase tracking-wide float-left">
                          Email
                        </p>
                        <input
                          type="email"
                          {...register(`email`, {
                            required: true,
                            pattern:
                              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          })}
                          placeholder="email@domain.com"
                          class="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.email && (
                          <p className="text-red-500">email is required!</p>
                        )}
                      </div>
                      <div className="relative md:col-span-2 md:my-3">
                      <p className="text-sm text-gray-400 uppercase tracking-wide float-left">
                          New Password
                        </p>
                        <input
                          type="password"
                          {...register(`password`, {
                            required: true,
                            minLength: 6,
                          })}
                          placeholder="12345678"
                          class="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.password && (
                          <p className="text-red-500">
                            new password is required!
                          </p>
                        )}
                      </div>
                      <div className="relative md:col-span-2 md:my-3">
                      <p className="text-sm text-gray-400 uppercase tracking-wide float-left">
                          Coniform Password
                        </p>
                        <input
                          type="password"
                          {...register(`password`, {
                            required: true,
                            minLength: 6,
                          })}
                          placeholder="12345678"
                          class="peer h-10 w-full border border-1.5 rounded-md border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500 focus:border-2 p-3"
                        />
                        {errors.password && (
                          <p className="text-red-500">
                            Coniform password is required!
                          </p>
                        )}
                      </div>

                      <div className="my-7">
                        {/* {loading ? (
                        <div className="inline-flex items-end">
                          <button
                            disabled
                            type="button"
                            class="bg-primary hover:bg-hoverButton text-white font-bold py-3 px-6 rounded"
                          >
                            <svg
                              aria-hidden="true"
                              role="status"
                              class="inline w-4 h-4 mr-3 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            loading...
                          </button>
                        </div>
                      ) : ( */}
                        <div className="relative md:col-span-2 md:my-1">
                          <button className="w-full bg-[#ef7c10] hover:bg-[#a53f00]  text-white font-bold py-3 px-6 rounded">
                            Create an Account
                          </button>
                        </div>
                        {/* )} */}
                      </div>
                      <div className="relative md:col-span-2 md:my-1 flex">
                        <h1> Already have an account? </h1>
                        <button
                          className="text-blue-500 px-2"
                          onClick={() => {
                            setShowLogin(true);
                          }}
                        >
                          Login here
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
        <BusModel isVisible={showLogin} onClose={() => setShowLogin(false)}>
          <Loginform />
        </BusModel>
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
      </div>
      <Footer />
    </>
);};
// export
export default Register;
