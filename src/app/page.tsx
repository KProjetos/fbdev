import { titleFont } from "./font/title";
import { textFont } from "./font/text";
import { Button } from "@/components/ui/button"
import "./globals.css";
import Devs from "@/components/devs";
import Steps from "@/components/steps";
import Cases from "@/components/cases";

export default function Home() {
  return (
    <>
      <section className="lg:w-full hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
        <div className="w-full flex flex-row items-center  sm:w-[90%] justify-between">
          <div className="w-[50%] px-12 flex flex-col items-center justify-center">
            <p className={`${titleFont.className} text-5xl mb-10`}>Desenvolvimento de sites e sistemas </p>
            <p className={`${textFont.className} text-xl`}>Empresa com foco em criação,melhoria e desempenho atendendo a sua necessidade com inovação e estratégia. Agende uma reunião.</p>
            <div className="">
              <Button className="w-[150px] mx-4 my-8 rounded-xl transform hover:-translate-y-1 hover:scale-110 transition ease-in duration-300" variant="default">AGENDAR</Button>
              <Button className="w-[150px] mx-4 my-8 rounded-xl transform hover:-translate-y-1 hover:scale-110 transition ease-in duration-300" variant="default">PORTIFÓLIO</Button>
            </div>
          </div>
          <div className="w-[50%]">
            <img src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2FIMG%20HEADER.png?alt=media&token=630f1dd5-ad37-4472-b887-5c85bc2f94c3" alt="" />
          </div>
        </div>
      </section>

      <section className="w-full h-full flex flex-col items-center justify-center bg-[url('https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2FIMG%20HEADER.png?alt=media&token=630f1dd5-ad37-4472-b887-5c85bc2f94c3')] bg-no-repeat bg-center  lg:hidden">
        <div className="w-full h-full flex flex-col items-center justify-center py-[4.4rem] backdrop-brightness-50 bg-black/5">
          <div className="w-[90%] max-w-[1080px] flex flex-col items-center justify-center ">
            <div className="w-full flex flex-col items-center justify-center text-white">
              <p className={`${titleFont.className} text-4xl mb-10`}>Desenvolvimento de sites e sistemas </p>
              <p className={`${textFont.className} text-xl`}>Empresa com foco em criação,melhoria e desempenho atendendo a sua necessidade com inovação e estratégia. Agende uma reunião.</p>
              <div className="w-full flex flex-row items-center justify-evenly mt-12">
                <Button className="w-[150px] rounded-xl" variant="default">AGENDAR</Button>
                <Button className="w-[150px] rounded-xl" variant="default">PORTIFÓLIO</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Devs/>
      <Steps/>
      <Cases/>
    </>
  );
}
