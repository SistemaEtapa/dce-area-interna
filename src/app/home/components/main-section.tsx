'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";

export function MainSection() {


  return (
    <main className="max-w-300 w-4/5 mx-auto py-10 flex flex-col justify-center gap-20">

      <section className="grid justify-center gap-5 lg:grid-cols-4">

        <Card className="max-w-70">
          <CardContent className="flex flex-col justify-between items-center h-full gap-5">
            <CardTitle className="text-center leading-5">
              4ª Fase - Camadas do Palimpsesto
            </CardTitle>
            <CardDescription className="text-center">
              Abaixo você encontrará o link para o formulário da 4ª fase e o PDF com as perguntas como material de apoio
            </CardDescription>
            <div className="text-center auto space-y-2">
              <Button className="w-full">
                <a className="flex gap-2" href="dcf-questoes-fase-4.pdf" target="_blank" download>
                  <Download /> Fazer download do pdf
                </a>
              </Button>
              <Button className="w-full">
                <a className="flex gap-2 items-center" href="https://docs.google.com/forms/d/e/1FAIpQLSfkPftEZ4PShjtL3ENvE4jzyCoi5cL-0tvlYNGL0ufwxF13gg/viewform?usp=header" target="_blank">
                  <ArrowRight /> Ir ao Formulário
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-70">
          <CardContent className="flex flex-col justify-between items-center h-full gap-5">
            <CardTitle className="text-center leading-5">
              Grade de Avaliação
            </CardTitle>
            <div className="text-center auto space-y-2">
              <Button className="w-full">
                <a className="flex gap-2" href="dcf-grade-de-avaliacao.pdf" target="_blank" download>
                  <Download /> Fazer download
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}