import AboutUs from "@/app/images/aboutUs";
import Contact from "@/app/images/contact";
import Logo from "@/app/images/logo";
import Services from "@/app/images/services";

function Header() {
  return (
    <>
      <header className="w-full flex flex-col items-center justify-center my-6">
        <section className="w-[90%] max-w-[1080px] flex flex-row items-center justify-between">
          <div className="">
            <Logo width={""} height={"50"} />
          </div>

          <div>
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
        </section>
      </header>
    </>
  );
}

export default Header;
