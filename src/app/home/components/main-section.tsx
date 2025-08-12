import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function MainSection(){
  return(
    <main className="max-w-300 w-4/5 mx-auto py-10">
      <section className="grid grid-cols-4">
        <Card className="max-w-70">
          <CardContent className="flex flex-col justify-center items-center gap-5">
            <CardTitle>
              Upload vídeos da 2ª fase
            </CardTitle>
            <Button>
              <a href="https://www.google.com/" target="_blank"> 
                Enviar vídeo
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}