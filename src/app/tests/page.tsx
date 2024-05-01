"use client"; // This is a client component
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Teste")
  };
  return (
    <section
      className={`w-full h-[95vh] flex flex-col items-center justify-start `}
    >
      <div className="w-[90%] flex flex-col items-center justify-center my-[3em]">
        
        <div className="bg-bgGray mb-[20em] w-[90%] flex flex-col items-center justify-center rounded-lg mt-[3em] py-4">
          <h2 className="text-white text-[2.1em]"> LOGIN </h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center" action="">
            <label className="pt-2 text-white" htmlFor="">
              E-MAIL
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md p-1 outline-none"
              type="Email"
              placeholder="E-MAIL"
            />
            <label className="pt-2 text-white" htmlFor="">
              SENHA
            </label>
            <input
              onChange={(e) => setSenha(e.target.value)}
              className="rounded-md p-1 outline-none"
              type="Password"
              placeholder="SENHA"
            />
            <div className="flex flex-col items-center justify-center w-full pt-4 ">
              <button 
                className="bg-bgPurple w-full py-2 rounded-md text-white text-[0.7em] h-10"
                type="submit"
              >
                LOGAR
              </button>
            </div>
          </form>
        </div>
        <div>
          <img
            className="rounded-xl fixed bottom-0 transform -translate-x-1/2 w-[320px] "
            src="https://firebasestorage.googleapis.com/v0/b/cardapioanamonica.appspot.com/o/mocoFBDEV.png?alt=media&token=b3a0ce6b-1577-4a2d-bf4a-6bd02124b9f5"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}