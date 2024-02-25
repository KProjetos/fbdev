import ArrowTitle from "@/app/images/arrowTitle";
import { titleFont } from "@/app/font/title";
import { textFont } from "@/app/font/text"; 

function Devs(){
    return(
        <section className="w-full flex flex-col items-center justify-center bg-principal py-8">

        <div className="w-[90%] max-w-[1080px] flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-start justify-center">
                <h2 className={`${titleFont.className} text-3xl text-white`}>
                    Desenvolvedores
                </h2>
                <ArrowTitle color="white"/>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-evenly mt-12 text-white">
                <div className={`${textFont.className} w-full flex flex-col items-center justify-center mb-8`}>
                    <img className="mb-4" src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2FfernandaMBaccarini.png?alt=media&token=b98257f6-d500-436a-a2f4-7f0ec0c29ffb" alt="Fernanda Matuda Baccarini" />
                    <p>Desenvolvedora FrontEnd</p>
                    <p>QA - Quality Assurance</p>
                </div>

                <div className={`${textFont.className} w-full flex flex-col items-center justify-center mb-8`}>
                    <img className="mb-4" src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2FflavioBrancalhao.png?alt=media&token=842a83a4-e54e-41dd-9615-2d5cb1156207" alt="Flavio Brancalhão" />                    
                    <p>Desenvolvedor FrontEnd</p>
                    <p>Desanign</p>
                </div>
            </div>
        </div>

    </section>
    )
}

export default Devs;