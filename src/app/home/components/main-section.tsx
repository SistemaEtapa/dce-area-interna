import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Download, Upload } from "lucide-react";

export function MainSection() {
  return (
    <main className="max-w-300 w-4/5 mx-auto py-10 flex flex-col justify-center gap-20">
      <section className="grid justify-center gap-5 lg:grid-cols-4">

        <Card className="max-w-70">
          <CardContent className="flex flex-col justify-between items-center h-full gap-5">
            <CardTitle className="text-center leading-5">
              Upload vídeos da 2ª fase
            </CardTitle>
            <CardDescription className="text-center">
              Faça o upload dos vídeos dos ganhadores referentes à segunda fase. Lembramos que é permitido enviar no máximo 2 vídeos na área destinada para o envio.
            </CardDescription>
            <Button className="w-full">
              <a className="flex gap-2" href="https://www.dropbox.com/request/I2bwMX0UXHhvE9m3S2Hn" target="_blank" download>
                <Upload /> Enviar vídeo
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="max-w-70">
          <CardContent className="flex flex-col justify-between items-center h-full gap-5">
            <CardTitle className="text-center leading-5">
              Termo de Compromisso e Uso de Imagem
            </CardTitle>
            <CardDescription className="text-center">
              Faça o download do Termo de Compromisso e, após assinado e datado por todos os responsáveis, faça o upload do documento na área destinada para o envio.
            </CardDescription>
            <div className="text-center auto space-y-2">
              <Button className="w-full">
                <a className="flex gap-2" href="DCF-Termo de Compromisso com a Integridade Acadêmica.pdf" target="_blank" download>
                  <Download /> Fazer download
                </a>
              </Button>
              <Button className="w-full">
                <a className="flex gap-2" href="https://www.dropbox.com/request/CCw9k6YMaGT6Vti00gG0" target="_blank">
                  <Upload /> Enviar documento
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-70">
          <CardContent className="flex flex-col justify-between items-center h-full gap-5">
            <CardTitle className="text-center leading-5">
              Propostas
            </CardTitle>
            <div className="text-center auto space-y-2">
              <Button className="w-full">
                <a className="flex gap-2" href="dcf-propostas.pdf" target="_blank" download>
                  <Download /> Fazer download
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

      <section className="text-center space-y-7 mt-5">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Instruções 2ª fase:</h1>
          <span className="text-gray-800 dark:text-gray-300">
            Peso 2, eliminatória, seleção das duas equipes que representarão a escola nas próximas fases.
          </span>
        </div>

        <h2 className="text-2xl font-semibold">Título: “A arte de lecionar: vídeo pedagógico”.</h2>

        <p className="w-4/5 mx-auto">
          Os alunos deverão elaborar um vídeo pedagógico obedecendo às instruções dos enunciados elaborados pela equipe do Sistema Etapa. Cada equipe poderá escolher a opção que considerar mais adequada, buscando criar um vídeo que seja divertido, busque provocar engajamento, mas seja rigorosamente educativo. Para isso, eles poderão usar estratégias didáticas diversas (simulação de aula, narrativa anedótica, jogos teatrais, animação, etc.). Os critérios de avaliação estão disponíveis para que cada escola possa selecionar as equipes que irão passar de fase.
        </p>
      </section>
    </main>
  )
}