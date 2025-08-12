import Image from "next/image";
import LogoDecifra from '../../public/decifra-logo.png'
import Link from "next/link";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function HeaderSection() {
  return (
    <header className="w-4/5 max-w-300 mx-auto py-5 flex justify-between items-center">
      <Image src={LogoDecifra} alt="" width={150} />

      <nav className="flex flex-col gap-2 md:gap-5 md:flex-row">

        <Button asChild>
          <Link href={"/"} className="flex items-center gap-1 bg-red-500 text-white">
            <LogOut /> Sair
          </Link>
        </Button>
      </nav>
    </header>
  )
}