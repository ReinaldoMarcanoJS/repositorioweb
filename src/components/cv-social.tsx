"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";
import Image from "next/image";
import { Experience } from "./Experience";
import { Proyects } from "./Proyects";
import { Perfil } from "./Perfil";
import { Education } from "./Education";
export function CvSocial() {
  const [likes, setLikes] = useState({ exp1: 0, exp2: 0, proj1: 0, proj2: 0 });

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
