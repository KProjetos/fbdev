import Email from "@/app/images/email"
import Instagram from "@/app/images/instagram"
import LogoWhite from "@/app/images/logoWhite"
import Whatsapp from "@/app/images/whatsapp"

function Footer(){

    return(
        <footer  className="w-full flex flex-col items-center justify-center bg-footer py-12">
            <div className="w-[90%] max-w-[1080px] flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-8 lg:gap-0">
                <div className="">
                    <h2 className="text-center text-2xl mb-2 text-white">Contatos</h2>

                    <div className="w-full flex flex-row items-center justify-evenly gap-2">
                        <Whatsapp/>
                        <Instagram/>
                        <Email/>
                    </div>
                    
                </div>

                <LogoWhite width={"175"} height={""}/>

                <img src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2Ffabinho.png?alt=media&token=8211b776-699b-42ee-9ce6-b5643560ffb4" alt="" />
            </div>
        </footer>
    )

}

export default Footer