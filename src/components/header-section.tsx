import Image from "next/image";
import LogoDecifra from '../../public/decifra-logo.png'
import Link from "next/link";
import { LogOut, Users } from "lucide-react";
import { Button } from "./ui/button";

export function HeaderSection() {
  return (
    <header className="w-4/5 max-w-300 mx-auto py-5 flex justify-between items-center">
      <Link href={"/home"}>
        <Image src={LogoDecifra} alt="" width={150} />
      </Link>

      <nav className="flex flex-col gap-2 md:gap-5 md:flex-row">

        <Button asChild>
          <Link href={"/lista-de-alunos"} className="flex items-center gap-1">
            <Users /> Lista de alunos
          </Link>
        </Button>

        <Button asChild>
          <Link href={"/"} className="flex items-center gap-1 bg-red-500 text-white">
            <LogOut /> Sair
          </Link>
        </Button>
      </nav>
    </header>
  )
}