import Head from "next/head";
import Image from "next/image";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";

import { LinkIcon } from "@/components/Icons";
import { useCallback, useState } from "react";
import Modal from "@/components/Modal";

import Link from "next/link";
import { projects } from "../utils/projects";

function ModalProject({ open, setOpen, id }: any) {
  return (
    <>
      <Modal open={open} setOpen={setOpen} className="bg-zinc-800">
        {projects.map(
          (project) =>
            id === project.id && (
              <div key={project.name} className="w-full">
                <div className="flex items-center justify-start gap-x-4">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800 shadow-md shadow-zinc-800/5 ring-0 ring-1 ring-zinc-900/5">
                    <Image
                      src={project.logo}
                      alt=""
                      className="h-8 w-8 rounded-full object-cover"
                      unoptimized
                    />
                  </div>
                  <h2 className="text-base font-semibold text-zinc-100">
                    {project.name}
                  </h2>
                </div>
                <div className="mb-4 mt-2">
                  <Link href={`https://${project.link.repo}`} target="_blank">
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-100 transition hover:text-violet-500 ">
                      <LinkIcon className="h-6 w-6 flex-none" />
                      <span className="ml-4 ">{project.link.repo}</span>
                    </p>
                  </Link>

                  <Link href={`https://${project.link.label}`} target="_blank">
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-100 transition hover:text-violet-500 ">
                      <LinkIcon className="h-6 w-6 flex-none" />
                      <span className="ml-4">{project.link.label}</span>
                    </p>
                  </Link>
                </div>
              </div>
            )
        )}
      </Modal>
    </>
  );
}

export default function Projects() {
  const [openModalProject, setOpenModalProject] = useState<boolean>(false);
  const [idModalProject, setIdModalProject] = useState<number>(0);
  const handleOpenCard = useCallback((id: any) => {
    if (id) {
      setIdModalProject(id);
      setOpenModalProject(true);
    }
  }, []);
  return (
    <>
      {openModalProject && (
        <ModalProject
          open={openModalProject}
          setOpen={setOpenModalProject}
          id={idModalProject}
        />
      )}
      <Head>
        <title>Projects - Abner</title>
        <meta
          name="description"
          content="
          Aqui estão algumas coisas que fiz para aprimorar minhas habilidades:"
        />
      </Head>

      <SimpleLayout
        title="
        Aqui estão algumas coisas que fiz para aprimorar minhas habilidades:"
        intro="
        Aqui estão alguns dos meus pequenos projetos de código aberto. Se você quiser, pode conferir o repositório original deles."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card
              as="li"
              key={project.name}
              onClick={() => handleOpenCard(project.id)}
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full object-cover"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-violet-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
