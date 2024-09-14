import { Code, MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Proyects = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Code className="mr-2" />
          Proyectos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Proyecto 1 */}
        <div className="border-b pb-4">
          <h3 className="font-semibold">Calculadora Web</h3>
          <p className="mt-2 text-sm">
            Desarrollé una aplicación web que se basa en una calculadora con sus
            funcionalidades basicas, ademas le agregue una transicion de ligth
            mode a dark mode.
          </p>
          <div className="mt-2 flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" />
              {/* {likes.proj1} */}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              Comentar
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Visitar
            </Button>
          </div>
        </div>
        {/* Proyecto 2 */}
        <div>
          <h3 className="font-semibold">Portafolio Interactivo</h3>
          <p className="mt-2 text-sm">
            Diseñé y desarrollé un portafolio interactivo utilizando Three.js y
            React, destacando mis proyectos de manera creativa.
          </p>
          <div className="mt-2 flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" />
              {/* {likes.proj2} */}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              Comentar
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Visitar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
