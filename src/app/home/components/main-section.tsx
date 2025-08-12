import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Download, icons, Upload } from "lucide-react";

const cards = [
  {
    title: 'Upload vídeos da 2ª fase',
    description: 'Faça o upload dos vídeos dos ganhadores referentes à segunda fase. Lembramos que é permitido enviar no máximo 2 vídeos na área destinada para o envio.',
    href: 'https://www.google.com/',
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
]

export function MainSection() {
  return (
    <main className="max-w-300 w-4/5 mx-auto py-10">
      <section className="grid grid-cols-4">
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
                <a className="flex gap-2" href={card.href} download>
                  {card.icon} {card.button}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}