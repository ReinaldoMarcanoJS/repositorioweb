import { Avatar } from "@radix-ui/react-avatar"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import Link from "next/link"


export const Perfil = () => {

    return (
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <Avatar className="w-32 h-32">
                  <Image
                    src={"/avatar.jpg"}
                    className="rounded-full"
                    alt="@usuario"
                    width={128}
                    height={128}
                  />
                </Avatar>
                <h1 className="mt-4 text-2xl font-bold">Reinaldo Marcano</h1>
                <p className="text-muted-foreground">
                  Desarrollador Web Frontend
                </p>
                <div className="mt-4 flex space-x-2">
                  <Link className="border p-2 rounded-md" target="_blank" href={"https://www.linkedin.com/in/reinaldo-solano-b58277284"}>
                    <Mail className="h-4 w-4" />
                  </Link>
                  <Link className="border p-2 rounded-md" target="_blank" href={"https://www.linkedin.com/in/reinaldo-solano-b58277284"}>
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link className="border p-2 rounded-md" target="_blank" href={"https://github.com/ReinaldoMarcanoJS"}>
                    <Github className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-lg font-semibold">Sobre mí</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Apasionado desarrollador Fullstack con 5 años de experiencia
                  creando interfaces de usuario atractivas y funcionales.
                </p>
              </div>
              <div className="mt-6">
                <h2 className="text-lg font-semibold">Habilidades</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>CSS</Badge>
                  <Badge>HTML</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Git</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

    )
}