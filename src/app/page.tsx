"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Logo from '../../public/decifra-logo.png'
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <Card>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-7 p-5"
          >
            <Image src={Logo} alt="Logo Decifra" width={200} />

            <div className="space-y-3">
              <Input
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <Button type="submit">
              LOGIN
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
