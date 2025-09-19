"use client";
import { useEffect, useState } from "react";
import { logins } from "@/lib/logins";
import { HeaderSection } from "@/components/header-section";

interface LoginInfosProps {
  link: string | undefined;
  escola: string;
  email: string;
  equipe1: string;
  passou1: boolean;
  senha1: string;
  equipe2: string;
  passou2: boolean;
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
              <h2 className="text-center font-bold text-xl">Resultados 3ª fase</h2>
              <span><strong>Equipe:</strong> {loginInfos?.equipe1} - <strong>Resultado:</strong> {loginInfos?.passou1 ? 'Passou para quarta fase 🚀' : 'Não passou para quarta fase'} </span>
              {loginInfos?.equipe2 && (
                <span><strong>Equipe:</strong> {loginInfos?.equipe2} - <strong>Resultado:</strong> {loginInfos?.passou2 ? 'Passou para quarta fase 🚀' : 'Não passou para quarta fase'} </span>
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
