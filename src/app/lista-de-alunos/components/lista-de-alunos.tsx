'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

type AlunoDecifra = {
  id: number;
  nome: string;
  email: string;
  serie: string;
  celular: string;
  equipeId: number;
};

type Equipe = {
  id: number;
  nome: string;
  professorId: string;
  cidade: string;
  email: string;
  alunoDecifra: AlunoDecifra[];
};

export function ListaDeAlunos() {
  const [email, setEmail] = useState<string | null>(null);
  const [teams, setTeams] = useState<Equipe[]>()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("email");
      setEmail(stored);
    }
  }, []);

  useEffect(() => {
    const getStudents = async (mail: string) => {
      try {
        const response = await axios.get(
          `https://decifra-3a9c8228edcb.herokuapp.com/professor/find/${mail}`
        );
        setTeams(response.data.equipe as Equipe[]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (email) getStudents(email);
  }, [email]);

  return (
    <section className="max-w-300 w-4/5 mx-auto">
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Equipe / Alunos</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {teams && teams.map((team) => (
                <>
                  <TableRow key={team.id}>
                    <TableCell>
                      <ChevronLeft
                        onClick={() =>
                          setSelectedIndex(selectedIndex === team.id ? null : team.id)
                        }
                        className={`${selectedIndex === team.id ? "-rotate-90 transition" : "transition cursor-pointer"
                          }`}
                      />
                    </TableCell>
                    <TableCell className="font-bold">{team.nome}</TableCell>
                  </TableRow>

                  {selectedIndex === team.id && team.alunoDecifra.map((aluno) => (
                    <TableRow key={aluno.id}>
                      <TableCell></TableCell>
                      <TableCell>{aluno.nome}</TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}
