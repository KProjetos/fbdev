import { textFont } from "@/app/font/text";
import { titleFont } from "@/app/font/title";
import ArrowTitle from "@/app/images/arrowTitle";
import React from "@/app/images/react";

function Steps() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[1080px] flex flex-col items-center justify-center mb-8">
        <div className="w-full flex lg:flex-row flex-col items-center justify-center lg:justify-evenly gap-4">
          <div className="w-full h-[125px] px-4 flex flex-col items-start justify-start my-12">
            <h2 className={`${titleFont.className} uppercase mb-4 text-2xl title-detail pl-2 font-bold`}>
              1. Reunião
            </h2>
            <p className={`${textFont.className}`}>
              Iniciamos nosso processo com uma reunião inicial, onde mergulhamos
              na visão do seu projeto. Durante essa consulta, discutimos suas
              necessidades específicas, metas de negócios e preferências de
              design. Esta é a base para personalizar uma solução que atenda
              perfeitamente às suas expectativas.
            </p>
          </div>

          <div className="w-full h-[125px] px-4 flex flex-col items-start justify-start my-12">
            <h2 className={`${titleFont.className} uppercase mb-4 text-2xl title-detail pl-2 font-bold`}>
              2. Design
            </h2>
            <p className={`${textFont.className}`}>
              Após a reunião inicial, dedicamos tempo à planificação
              estratégica. Nossa equipe analisa os requisitos técnicos,
              identifica as melhores práticas de design e desenvolvimento.
            </p>
          </div>
        </div>

        <div className="w-full flex lg:flex-row flex-col items-center justify-center lg:justify-evenly gap-4">
          <div className="w-full h-[125px] px-4 flex flex-col items-start justify-start my-12">
            <h2 className={`${titleFont.className} uppercase mb-4 text-2xl title-detail pl-2 font-bold`}>
              3. Codificação
            </h2>
            <p className={`${textFont.className}`}>
              Com o plano em mãos, nossa equipe de desenvolvimento coloca as
              mãos à obra. Durante esta fase, trabalhamos arduamente para
              traduzir o conceito em realidade, focando na criação de um
              site/sistema esteticamente atraente, funcional e otimizado para
              desempenho.
            </p>
          </div>

          <div className="w-full h-[125px] px-4 flex flex-col items-start justify-start my-12">
            <h2 className={`${titleFont.className} uppercase mb-4 text-2xl title-detail pl-2 font-bold`}>
              4. Site / Sistema
            </h2>
            <p className={`${textFont.className}`}>
              O sucesso do seu site é nosso objetivo final. Após a
              implementação, conduzimos testes extensivos para garantir que tudo
              esteja funcionando perfeitamente. Desde a navegação do usuário até
              a funcionalidade em diferentes dispositivos.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:h-[100px] my-8 py-12 lg:py-0 flex flex-col items-center justify-center bg-principal">
        <div className="w-[90%] max-w-[1080px] flex lg:flex-row flex-col items-center justify-center lg:justify-evenly gap-4">
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="w-[130px] transform hover:-translate-y-1 hover:scale-110 transition ease-in duration-300 "
              src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2Freuniao.png?alt=media&token=6c12433e-9812-47b9-ba04-1da3093143f9"
              alt="Reunião"
            />
            <p className={`${titleFont.className} text-[1.2em] mt-1`}>Reunião</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="w-[130px] transform hover:-translate-y-1 hover:scale-110 transition ease-in duration-300 "
              src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2Fdesign.png?alt=media&token=c9a2d3c7-56df-433e-be35-9be20ecff05c"
              alt=""
            />
            <p className={`${titleFont.className} text-[1.2em] mt-1`}>Design</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="w-[130px] transform hover:-translate-y-1 hover:scale-110 transition ease-in duration-300 "
              src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2Fprogramacao%201.png?alt=media&token=2f76b12e-fefa-4f48-a517-a1c4bb9e1a75"
              alt=""
            />
            <p className={`${titleFont.className} text-[1.2em] mt-1`}>Codificação</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <img
              className="w-[130px] transform hover:-translate-y-1 hover:scale-110 transition ease-in duration-300 "
              src="https://firebasestorage.googleapis.com/v0/b/fbdev-97ff9.appspot.com/o/site%2Fsite.png?alt=media&token=d7df4a22-eabe-40d5-ae1f-2760b0cabae2"
              alt=""
            />
            <p className={`${titleFont.className} text-[1.2em] mt-1`}>Site</p>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-[1080px] flex flex-col items-center justify-center my-8">
        <div className="w-full flex flex-col items-start justify-center">
          <h2 className={`${titleFont.className} text-3xl `}>
            Ambiente de teste
          </h2>
          <ArrowTitle color="#4C97A3" />
        </div>

        <div className="w-full flex lg:flex-row flex-col items-center justify-center lg:justify-evenly gap-1">
          <div className="w-full h-[125px] px-4 flex flex-col items-start justify-start my-12">
            <h2 className={`${titleFont.className} uppercase mb-4 text-2xl pl-2 font-bold`}>
              Design
            </h2>
            <p className={`${textFont.className}`}>
              Escolhemos o Figma como nossa ferramenta principal para o design
              do seu projeto. Aonde poderá ver o design em tempo real
            </p>
          </div>

          <div className="w-full h-[125px] px-4 flex flex-col items-start justify-start my-12">
            <h2 className={`${titleFont.className} uppercase mb-4 text-2xl pl-2 font-bold`}>
              Site
            </h2>
            <p className={`${textFont.className}`}>
              Ambiente de Teste, um espaço dedicado para que você acompanhe
              diariamente o progresso do seu site de forma direta e envolvente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
