import { Briefcase, MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export const Experience = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Briefcase className="mr-2" />
          Experiencia
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Experiencia 1 */}
        <div className="border-b pb-4">
          <h3 className="font-semibold">Desarrollador Frontend Junior</h3>
          <p className="text-sm text-muted-foreground">
            Boinca Servicios.ca • 2024 - Presente
          </p>
          <p className="mt-2 text-sm">
            Desarrollé una página web para Boinca Servicios, especializada en la
            reparación de motores eléctricos y bombas centrífugas para la
            industria petrolera. La plataforma destaca sus servicios técnicos
            avanzados, optimizando la navegación y mejorando la experiencia del
            usuario en cualquier dispositivo.
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <Badge>NextJS</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind</Badge>
            <Badge>Formik</Badge>
            <Badge>Yup</Badge>
            <Badge>Git</Badge>
          </div>
          <div className="mt-2 flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" />
              {}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              Comentar
            </Button>
            <Button variant="ghost" size="sm">
              <Share2
                className="mr-2 h-4 w-4"
                href="https://www.boincaservicios.com/"
              />
              Visitar
            </Button>
          </div>
        </div>
        {/* Experiencia 2 */}
        <div>
          <h3 className="font-semibold">Desarrollador Frontend</h3>
          <p className="text-sm text-muted-foreground">
            Telemedicina Co. • 2023
          </p>
          <p className="mt-2 text-sm">
            Colabore como desarrolador frontend en la elabolacion del formulario
            y creando secciones responsivas para la mejor experiencia del
            usuario.
          </p>
          <div className="my-4 flex flex-wrap gap-2">
            <Badge>NextJS</Badge>
            <Badge>Tailwind</Badge>
            <Badge>Formik</Badge>
            <Badge>Yup</Badge>
            <Badge>Git</Badge>
            <Badge>Docker</Badge>
          </div>
          <div className="mt-2 flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" />
              {/* {likes.exp2} */}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              Comentar
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" href="https://telemedicina-puce.vercel.app/" />
              Visitar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
