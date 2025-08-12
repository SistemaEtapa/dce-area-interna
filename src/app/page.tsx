import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Logo from '../../public/decifra-logo.png'
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">

      <Card>
        <CardContent>
          <form className="flex flex-col items-center justify-center gap-7 p-5">
            <Image src={Logo} alt="" width={200} />

            <div className="space-y-3">
              <Input placeholder="E-mail" />
              <Input placeholder="Senha" />
            </div>

            <Button>
              LOGIN
            </Button>
          </form>
        </CardContent>
      </Card>

    </main>
  );
}
