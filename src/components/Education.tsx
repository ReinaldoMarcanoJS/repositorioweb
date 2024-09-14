import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Education = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <GraduationCap className="mr-2" />
          Educación
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold">
          Licenciatura en Ciencias de la Computación
        </h3>
        <p className="text-sm text-muted-foreground">
          Universidad Tecnológica • 2014 - 2018
        </p>
      </CardContent>
    </Card>
  );
};
