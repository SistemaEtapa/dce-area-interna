import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Download, Upload } from "lucide-react";

export function MainSection() {
  return (
    <main className="max-w-300 w-4/5 mx-auto py-10 flex flex-col-reverse md:flex-col justify-center gap-20">
      <section className="grid justify-center gap-5 lg:grid-cols-4">
        <Card className="max-w-70">
          <CardContent className="flex flex-col justify-between items-center h-full gap-5">
            <CardTitle className="text-center leading-5">
              Documentos da 1ª fase
            </CardTitle>
            <CardDescription className="text-center">
              Confira as instruções no vídeo.

              Abaixo, você terá três botões de acesso às perguntas, e do link para enviar a pontuação das equipes <br /><br />

              <i>(Lembre-se que o gabarito deve ser acessado apenas pelos professores)</i>
            </CardDescription>
            <div className="text-center auto space-y-2">
              <Button className="w-full">
                <a className="flex gap-2" href="dcf-questões-fase-1.pdf" target="_blank" download>
                  <Download /> Fazer download das questões
                </a>
              </Button>
              <Button className="w-full">
                <a className="flex gap-2" href="dcf-gabarito-fase-1.pdf" target="_blank" download>
                  <Download /> Fazer download do gabarito
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-70">
          <CardContent className="flex flex-col justify-between items-center h-full gap-5">
            <CardTitle className="text-center leading-5">
              Instruções de envio da pontuação da 1ª fase:
            </CardTitle>
            <CardDescription className="text-start">
              <ul className="space-y-2 italic">
                <li>
                  - Clique no botão Upload
                </li>
                <li>
                  - Envie um arquivo Word, Excel ou PDF com a pontuação de cada grupo.
                </li>
                <li>
                  - As pontuações podem estar em um único arquivo, desde que estejam claramente separadas por equipe.
                </li>
              </ul>
            </CardDescription>
            <Button className="w-full">
              <a className="flex gap-2" href="https://www.dropbox.com/request/35vX8mRdb1snBnsq0pyy" target="_blank" download>
                <Upload /> Upload
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="flex justify-start gap-5">
        <div className="relative w-4/5 pb-80 md:w-100 md:pb-250 overflow-hidden mx-auto">
          <h2 className="text-lg xl:text-2xl font-bold">Instruções 1ª fase</h2>
          <iframe
            src="https://player.vimeo.com/video/1110394132?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            className="absolute top-15 inset-0 md:h-[22%] w-full mx-auto rounded-2xl"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </section>
    </main>
  )
}