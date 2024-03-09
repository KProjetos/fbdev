import { titleFont } from "@/app/font/title"
import Email from "@/app/images/email"
import Instagram from "@/app/images/instagram"
import LogoWhite from "@/app/images/logoWhite"
import Whatsapp from "@/app/images/whatsapp"

function Footer(){

    const now = new Date()
    const currentYear = now.getFullYear();

    return(
        <footer  className="w-full flex flex-col items-center justify-center bg-footer py-12">
            <div className="w-[90%] max-w-[1080px] flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-8 lg:gap-0">
                <div className="">
                    <h2 className={`${titleFont.className} text-center text-2xl mb-2 text-white`}>Contatos</h2>

                    <div className="w-full flex flex-row items-center justify-evenly gap-2">
                        <a href=""><Whatsapp/></a>
                        <a href=""><Instagram/></a>
                        <a href=""><Email/></a>
                    </div>
                    
                </div>

                <LogoWhite width={"175"} height={""}/>

                <img src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2Ffabinho.png?alt=media&token=8211b776-699b-42ee-9ce6-b5643560ffb4" alt="" />
            </div>
            <h3 className={`${titleFont.className} text-center bg-filterWhite py-2 px-8 mt-3 rounded-[1em]`}>Desenvolvido por FBDEV {currentYear}</h3>
        </footer>
    )

}

export default Footer