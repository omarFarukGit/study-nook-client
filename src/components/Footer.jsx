"use client";
import { InputGroup, TextField } from "@heroui/react";
import { BiEnvelope } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" pt-20 pb-10 bg-slate-50  ">
      <section className="mx-auto w-11/12 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  py-8 lg:grid-cols-4 ">
        <nav className="space-y-3">
          <div className="text-2xl font-bold  text-blue-600/80 hover:text-blue-600 tracking-tight cursor-pointer">
            Study<span className="text-black  ">Nook</span>
          </div>
          <div className="flex flex-col gap-2">
            <a className="link link-hover text-black  hover:text-blue-400">
              About us
            </a>
            <a className="link link-hover text-black  hover:text-blue-400">
              Contact
            </a>
            <a className="link link-hover  text-black hover:text-blue-400">
              Out Team
            </a>
          </div>
        </nav>
        <nav>
          <h1 className="footer-title ">Contact us</h1>
          <p className="text-sm text-black">Dinajpur, Basherhat, Road-8045</p>
          <p className="text-sm text-black">Villave: Dinajpur </p>
          <p className="text-sm text-black">Road: Tarminal</p>
          <p className="text-sm text-black">Phone: +880178508125</p>
        </nav>
        <nav>
          <h1 className="footer-title ">Social Link</h1>
          <nav className="flex gap-5 ">
            <a
              aria-label="social link facebook"
              href="#"
              className="hover:scale-110 duration-75 delay-75 link text-4xl link-hover hover:text-blue-400"
            >
              <FaFacebookF className="text-[#1877F2]"></FaFacebookF>
            </a>
            <a
              aria-label="social link twitter"
              href="#"
              className="hover:scale-110 duration-75 delay-75 link text-4xl link-hover hover:text-blue-400"
            >
              <RiTwitterXLine className="text-[#1DA1F2]"></RiTwitterXLine>
            </a>
            <a
              aria-label="social link linkedin"
              href="#"
              className="hover:scale-110 duration-75 delay-75 link text-4xl link-hover hover:text-blue-400"
            >
              <FaLinkedin className="text-[#0a66c2]"></FaLinkedin>
            </a>
          </nav>
        </nav>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast(
              <div className="flex items-center gap-2 text-blue-400/70">
                <BsFillSendFill /> Massage successfully send
              </div>,
            );
          }}
        >
          <h6 className="footer-title text-black">Massage us</h6>
          <fieldset className="w-80">
            <TextField
              className="w-full max-w-[280px]"
              name="email"
              aria-label="Massage box for user"
            >
              <textarea
                aria-label="Your Message"
                className="w-full h-20 border rounded-md border-white/10 text-gray-500 p-2"
                placeholder="Enter your Massage"
              />
              <InputGroup className="bg-white/10">
                <InputGroup.Prefix>
                  <BiEnvelope className="size-4 text-muted" />
                </InputGroup.Prefix>
                <InputGroup.Input
                  aria-label="Email Address, enter your email"
                  className="w-full max-w-[280px]"
                  placeholder="Enter you email"
                />
                <button className="backdrop-blur-[2px] text-black shadow shadow-white/[0.2]   flex items-center gap-2  hover:shadow hover:shadow-white/[0.2] px-4 py-1 hover:text-blue-400   transition-all duration-200  rounded-full hover:bg-white/10 hover:backdrop-blur-md  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]  border border-transparent hover:border-green-500/10">
                  <BsFillSendFill />
                  Send email
                </button>
              </InputGroup>
            </TextField>
          </fieldset>
        </form>
      </section>
      <div className="flex justify-between w-11/12 gap-5 mx-auto text-[12px] px-20 py3">
        <p>© 2026 Study Nook. All rights reserved.</p>
        <ul className="flex gap-3 flex-col lg:flex-row">
          <li className="link text-[12px] link-hover text-black hover:text-blue-400">
            Privacy Policy{" "}
          </li>
          <li className="link text-[12px] link-hover text-black hover:text-blue-400">
            Terms of Service
          </li>
          <li className="link text-[12px] link-hover text-black hover:text-blue-400">
            Cookies
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
