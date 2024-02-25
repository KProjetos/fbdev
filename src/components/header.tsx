"use client"; // This is a client component
import AboutUs from "@/app/images/aboutUs";
import Contact from "@/app/images/contact";
import Logo from "@/app/images/logo";
import Menu from "@/app/images/menu";
import Services from "@/app/images/services";
import { titleFont } from "../app/font/title";
import { useState } from "react";


function Header() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleModalClose() {
		setModalIsOpen(false);
	}

  return (
    <>
      <header className="w-full flex flex-col items-center justify-center my-6">
        <section className="w-[90%] max-w-[1080px] flex lg:flex-row items-center justify-between">
          <div className="">
            <Logo width={""} height={"50"} />
          </div>

          <div className={`${titleFont.className} hidden lg:inline-block`}>
            <nav className="flex flex-row items-center justify-between gap-4">
              <a
                href=""
                className="flex flex-row items-center justify-between gap-1"
              >
                <span>
                  <AboutUs width={""} height={"25"} />
                </span>
                <p className="border-b-2 border-black">Sobre Nós</p>
              </a>
              <a
                href=""
                className="flex flex-row items-center justify-between gap-1"
              >
                <span>
                  <Contact width={""} height={"25"} />
                </span>
                <p className="border-b-2 border-black">Contato</p>
              </a>
              <a
                href=""
                className="flex flex-row items-center justify-between gap-1"
              >
                <span>
                  <Services width={""} height={"25"} />
                </span>
                <p className="border-b-2 border-black">Serviços</p>
              </a>
            </nav>
          </div>

          <div onClick={() => setModalIsOpen(true)} className="inline-block lg:hidden">
            <Menu/>
          </div>
        </section>

        <div className={modalIsOpen ? "fixed top-0  w-full flex flex-row items-center justify-center z-50" : "hidden"}>
          <div onClick={handleModalClose} className="w-[50%] h-[100vh] bg-filter">

          </div>

          <nav className="w-[50%] h-[100vh] flex flex-col items-start justify-start bg-white p-8">
            <div onClick={handleModalClose} className="w-full flex flex-col items-end justify-center">
             X
            </div>

            <div className={`${titleFont.className} w-full flex flex-col items-start justify-center gap-6 mt-8`}>
            <a
                href=""
                className="flex flex-row items-center gap-1"
              >
                <span>
                  <AboutUs width={""} height={"25"} />
                </span>
                <p className="border-b-2 border-black ">Sobre Nós</p>
              </a>
              <a
                href=""
                className="flex flex-row items-center gap-1"
              >
                <span>
                  <Contact width={""} height={"25"} />
                </span>
                <p className="border-b-2 border-black">Contato</p>
              </a>
              <a
                href=""
                className="flex flex-row items-center gap-1"
              >
                <span>
                  <Services width={""} height={"25"} />
                </span>
                <p className="border-b-2 border-black">Serviços</p>
              </a>
            </div>
            <div className="fixed bottom-6">
              <Logo width={""} height={"50"} />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
