"use client"

import { FolderDot, FolderOpenDot } from "lucide-react";
import { type Project } from "@/_data/projects";
import Link from "next/link";
import { useState } from "react";

export function TimelineProjects({ data }: { data: Project[] }) {
  if (data.length === 0) return null;


  return (
    <ul className="flex flex-col gap-2 border-t-1 border-background px-6 pt-4">
      {data.map((project) => <TimelineProject key={project.key} project={project} />)}
    </ul>
  );
}

function TimelineProject({ project }: { project: Project }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <Link
      key={project.key}
      replace
      href={`/#project_${project.key}`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="flex items-center gap-3 text-cyan-600 underline-offset-4 hover:underline dark:text-cyan-400"
    >
      {isHover ? <FolderOpenDot size={20} /> : <FolderDot size={20} />}
      {project.name}
    </Link>
  )
}