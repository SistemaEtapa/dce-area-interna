"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Logo from '../../public/decifra-logo.png'
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://decifra-3a9c8228edcb.herokuapp.com/professor/find/${email}`);
      
      sessionStorage.setItem("email", email);
      console.log(response);
      
      if(response.status === 201) {
        router.push("/home")
      } else {
        alert("Email não encontrado")
      }
      
    } catch (error) {
      console.log(error);
      alert("Email não encontrado")
    }
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
