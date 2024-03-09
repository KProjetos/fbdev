import { titleFont } from "@/app/font/title";
import Figma from "@/app/images/figma";
import Firebase from "@/app/images/firebase";
import React from "@/app/images/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Cases() {
  return (
    <section className="w-full flex flex-col items-center justify-center my-4">
      <div className="w-full flex flex-col items-center justify-center bg-principal">
        
        <div className="w-[90%] max-w-[1080px] flex flex-col items-center justify-center pt-8 pb-14">

        <Carousel className="w-[70%]">
          <CarouselContent >
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2Fqrpet.png?alt=media&token=62997343-9d87-4edc-a730-256d4ed0e48f" alt="" />
              <p className={`${titleFont.className} font-bold text-[1.2em]`}>QrPet</p>
              <a href="https://qrpet.vercel.app">qrpet.vercel.app</a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2FthaiTattoo.png?alt=media&token=3f0279f3-5448-42ca-b89a-59179fa6c09a" alt="" />
              <p className={`${titleFont.className} font-bold text-[1.2em]`}>Thai Tattoo Studio</p>
              <a href="https://thaitattoostudio.com.br">thaitattoostudio.com.br</a>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2Fbsnagocine.png?alt=media&token=10902ec0-7cef-4238-a974-ac3c0f0ea544" alt="" />
              <p className={`${titleFont.className} font-bold text-[1.2em]`}>BsnagoCine</p>
              <a href="">www.link.com</a>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </div>
      <div className="w-[90%] lg:w-[50%] max-w-[1080px] flex lg:flex-row flex-col items-center justify-center lg:justify-evenly relative bottom-8">
        <div className="w-[33.33%] flex flex-col items-center justify-center transform hover:-translate-y-1 hover:scale-110 transition ease-in duration-300">
          <Figma />
          <h2 className={`${titleFont.className} mt-2 mb-4 text-xl font-bold`}>Figma</h2>
        </div>

        <div className="w-[33.33%] flex flex-col items-center justify-center transform hover:-translate-y-1 hover:scale-110 transition ease-in duration-300">
          <Firebase />
          <h2 className={`${titleFont.className} mt-2 mb-4 text-xl font-bold`}>Firebase</h2>
        </div>

        <div className="w-[33.33%] flex flex-col items-center justify-center transform hover:-translate-y-1 hover:scale-110 transition ease-in duration-300">
          <React />
          <h2 className={`${titleFont.className} mt-2 mb-4 text-xl font-bold`}>React</h2>
        </div>
      </div>
    </section>
  );
}

export default Cases;
