"use client";
import { useEffect, useState } from "react";
import { logins } from "@/lib/logins";
import { HeaderSection } from "@/components/header-section";

interface LoginInfosProps {
  link: string | undefined;
  escola: string;
  email: string;
  equipe1: string;
  senha1: string;
  equipe2: string;
  senha2: string;
}

export default function Home() {
  const [loginInfos, setLoginInfos] = useState<LoginInfosProps>()
  const [email, setEmail] = useState<string | null>('')


  useEffect(() => {
    if (typeof window !== "undefined") {
      const email = sessionStorage.getItem("email");
      setEmail(email)
    }
  }, []);

  useEffect(() => {
    const escola = logins.find((login) => {
      return login.email === email
    })

    setLoginInfos(escola)
  }, [email])

  return (
    <>
      <HeaderSection />
      <main className="max-w-300 w-4/5 mx-auto py-10 flex flex-col justify-center gap-20">
        <section className="grid justify-center gap-5 lg:grid-cols-4">

          {loginInfos && (
            <div className="mx-auto flex flex-col gap-3 lg:col-span-4">
              <h2 className="text-center font-bold text-xl">Informações para login</h2>
              <a href={loginInfos.link} target="_blank" className="text-blue-600 underline text-center">Clique aqui para acessar o zoom</a>
              <span><strong>Equipe:</strong> {loginInfos?.equipe1} - <strong>Senha:</strong> {loginInfos?.senha1} </span>
              {loginInfos?.equipe2 && (
                <span><strong>Equipe:</strong> {loginInfos?.equipe2} - <strong>Senha:</strong> {loginInfos?.senha2} </span>
              )}
            </div>
          )}

        </section>
      </main>
    </>
  );
}
