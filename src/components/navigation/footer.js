import { Expander } from "@blueprintjs/core";
import React from "react";
import { FaTelegram } from "react-icons/fa";
import { telebirr, visa, cbebirr } from "../../assets";
const Footers = () => {
  return (
    <>
      <footer className="text-center lg:text-left bg-[#24262B] text-gray-400">
        <div className=" py-6 text-center md:text-left grid  w-11/12 xl:w-11/12 mx-auto mb-2 border-b border-color-gray">
          <div className="md:flex sm:block md:justify-between  ">
            <div>
              <h3 className=" font-extrabold hover:text-primary text-xl mb-2 flex items-center justify-center md:justify-start decoration-4 text-[#ff9900] ">
                Top Router
              </h3>
              <p>Bahirdar to AA</p>
              <p>Bahirdar to Gonder</p>
              <p>Bahirdar to Woldia</p>
              <p>Bahirdar to Fnoteselam</p>
            </div>
            <div className="">
              <h3 className=" font-extrabold hover:text-primary text-xl mb-2 flex items-center justify-center md:justify-start decoration-4 text-[#ff9900] ">
                Quik Link
              </h3>
              <p className="mb-4 motion-safe:hover:translate-x-2 duration-300 font-display text-white">
                <a href="#">About Us</a>
              </p>
              <p className="mb-4 motion-safe:hover:translate-x-2 duration-300 font-display text-white">
                <a href="#">Download Ticket</a>
              </p>
              <p className="mb-4 motion-safe:hover:translate-x-2 duration-300 font-display text-white">
                <a href="#">Contact Us</a>
              </p>
            </div>
            <div className="">
              <h3 className=" font-extrabold hover:text-primary text-xl mb-2 flex items-center justify-center md:justify-start decoration-4 text-[#ff9900] ">
                Contact Information
              </h3>
              <p className="font-display text-white text-sm flex items-center justify-center md:justify-start mb-4 motion-safe:hover:translate-x-2 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 mr-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03
             4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953
             0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0
             0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <a href="https://address.BusTicket.et/">
                  www.TransportLogistic.et
                </a>
              </p>
              <p className="font-display text-white text-sm flex items-center justify-center md:justify-start mb-4 motion-safe:hover:translate-x-2 duration-300">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
                BahirDar kebele 7
              </p>
              <p className="font-display text-white text-sm flex items-center justify-center md:justify-start mb-4 motion-safe:hover:translate-x-2 duration-300">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                +2519-1 848 4782
              </p>
              <p className="font-display text-white text-sm flex items-center justify-center md:justify-start mb-4 motion-safe:hover:translate-x-2 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 mr-4"
                >
                  <path
                    stroke-linecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                <a href="https://mail.google.com/">www.transport@gmail.com</a>
              </p>
            </div>
            <div>
              <div>
                <h3 className=" font-extrabold hover:text-primary text-xl mb-2 flex items-center justify-center md:justify-start decoration-4 text-[#ff9900] ">
                  Pay With
                </h3>

                <div className=" flex mt-3 -ml-7">
                  <a href="https://www.ethiotelecom.et/telebirr/">
                    <img
                      className=" md:w-14 md:h-12 mt-1 w-24 h-16 lg:ml-1 sm:ml-5 rounded-xl shadow-md shadow-orange-300"
                      src={telebirr}
                      alt="NoLogue"
                    />
                  </a>
                  <a href="https://www.evisa.gov.et/continue-payment">
                    <img
                      className=" md:w-14 md:h-12 mt-1 w-24 h-16 lg:ml-1 sm:ml-5 rounded-xl shadow-md shadow-orange-300"
                      src={visa}
                      alt="NoLogue"
                    />
                  </a>
                  <a href="https://combanketh.et/cbe-birr/">
                    <img
                      className=" md:w-14 md:h-12 mt-1 w-24 h-16 lg:ml-1 sm:ml-5 rounded-xl shadow-md shadow-orange-300"
                      src={cbebirr}
                      alt="NoLogue"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center p-2 ">
          <span className="text-white">Copyright © 2023 TransportLogistic</span>
        </div>
      </footer>
    </>
  );
};

export default Footers;
