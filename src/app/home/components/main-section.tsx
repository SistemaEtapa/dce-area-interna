import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Download, Upload } from "lucide-react";

const cards = [
  {
    title: 'Upload vídeos da 2ª fase',
    description: 'Faça o upload dos vídeos dos ganhadores referentes à segunda fase. Lembramos que é permitido enviar no máximo 2 vídeos na área destinada para o envio.',
    href: 'https://www.dropbox.com/request/I2bwMX0UXHhvE9m3S2Hn',
    button: 'Enviar vídeo',
    icon: <Upload />
  },
  {
    title: 'Termo de Compromisso e Uso de Imagem',
    description: 'Faça o download do Termo de Compromisso e, após assinado e datado por todos os responsáveis, faça o upload do documento na área destinada para o envio.',
    href: 'DCF-Termo de Compromisso com a Integridade Acadêmica.pdf',
    button: 'Fazer download',
    icon: <Download />
  },
  {
    title: 'Upload do Termo de Compromisso assinado',
    description: 'Faça o upload do Termo de Compromisso assinado e datado por todos os responsáveis.',
    href: 'https://www.dropbox.com/request/CCw9k6YMaGT6Vti00gG0',
    button: 'Enviar termo',
    icon: <Upload />
  },
]

export function MainSection() {
  return (
    <main className="max-w-300 w-4/5 mx-auto py-10 flex flex-col-reverse md:flex-col justify-center gap-10">
      <section className="grid justify-center gap-5 lg:grid-cols-4">
        {cards.map((card) => (
          <Card className="max-w-70" key={card.title}>
            <CardContent className="flex flex-col justify-between items-center h-full gap-5">
              <CardTitle className="text-center leading-5">
                {card.title}
              </CardTitle>
              <CardDescription className="text-center">
                {card.description}
              </CardDescription>
              <Button>
                <a className="flex gap-2" href={card.href} target="_blank" download>
                  {card.icon} {card.button}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="mx-auto w-full max-w-md md:max-w-lg">
        <div className="relative w-4/5 md:w-1/2 h-80 md:pb-[177.78%] overflow-hidden shadow-lg mx-auto">
          <iframe
            src="https://player.vimeo.com/video/1107863658?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            className="absolute inset-0 h-full md:h-1/2 w-full mx-auto rounded-2xl"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </section>
    </main>
  )
}