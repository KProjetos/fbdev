import { titleFont } from "./images/font/title";
import { textFont } from "./images/font/text";
import { Button } from "@/components/ui/button"
import "./globals.css";

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="w-[50%] px-12 flex flex-col items-center justify-center">
            <p className={`${titleFont.className} text-5xl mb-10`}>Desenvolvimento de sites e sistemas </p>
            <p className={`${textFont.className} text-xl`}>Empresa com foco em criação,melhoria e desempenho atendendo a sua necessidade com inovação e estratégia. Agende uma reunião.</p>
            <div className="flex flex-row items-center justify-between">
              <Button className="w-[150px] mx-4 my-8 rounded-xl" variant="default">AGENDAR</Button>
              <Button className="w-[150px] mx-4 my-8 rounded-xl" variant="default">PORTIFÓLIO</Button>
            </div>
          </div>
          <div className="w-[50%]">
            <img src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2FIMG%20HEADER.png?alt=media&token=630f1dd5-ad37-4472-b887-5c85bc2f94c3" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
