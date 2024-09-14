"use client";

import { Experience } from "./Experience";
import { Proyects } from "./Proyects";
import { Perfil } from "./Perfil";
import { Education } from "./Education";
export function CvSocial() {

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <Perfil />
        <div className="md:col-span-2 space-y-4">
          <Experience />
          <Proyects />
          <Education/>
        </div>
      </div>
    </div>
  );
}
