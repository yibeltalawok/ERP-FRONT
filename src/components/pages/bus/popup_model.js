import React from "react";
import { HiOutlineX } from "react-icons/hi";
const Model = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "productRate") onClose();
  };
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100 bg-black bg-opacity-25 backdrop-blur-sm"
        id="productRate"
        onClick={handleClose}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-end p-1">
              <button
                onClick={() => onClose()}
                type="button"
                className="text-red-600 rounded-lg text-lg p-1 ml-auto inline-flex items-center"
                data-modal-toggle="log-in-model"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
            </div>
            <div className="bg-white p-2 rounded"> {children} </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
