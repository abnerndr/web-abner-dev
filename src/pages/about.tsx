/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/assets/images/portrait.jpg";
import { About } from "@/types/about";
import { MailIcon2 } from "@/components/Icons";

function SocialLink({ className, href, children, icon: Icon }: About) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-violet-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Eu sou Abner Ananias, tenho 22 anos e sou desenvolvedor fullstack.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Eu adoro criar coisas novas. Desenvolver uma nova funcionalidade
                ou solucionar um bug me traz uma imensa satisfação. Desde quando
                eu era criança, por volta dos 5 anos, lembro-me do meu primeiro
                computador e como eu adorava aprender a mexer nele. Aquela
                experiência era surreal para mim, e desde então, minha paixão
                por tecnologia só cresceu.
              </p>
              <p>
                Quando eu tinha 16 anos, criei minha primeira startup. Era um
                projeto que eu acreditava que revolucionaria o mundo, mas
                reconheço que não atingiu esse objetivo. No entanto, essa
                experiência me proporcionou um aprendizado valioso. Eu adorava
                desenvolver aquele projeto e, desde então, me apaixonei pelo
                desenvolvimento.
              </p>
              <p>
                Claro que não sou viciado em trabalho, tenho meus hobbies que
                utilizo tanto para aprimorar minhas habilidades quanto para o
                lazer. Sou apaixonado por jogar videogames, especialmente os
                online, e adoro a competitividade que eles proporcionam.
                Aprender um novo jogo no qual tenho dificuldade é uma das coisas
                mais empolgantes para mim.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://instagram.com/abner.ananias"
                icon={InstagramIcon}
                className="mt-4"
              >
                @abner.ananias
              </SocialLink>
              <SocialLink
                href="https://github.com/abnerndr"
                icon={GitHubIcon}
                className="mt-4"
              >
                @abnerndr
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/abner-andre-ananias/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Abner A. Ananias
              </SocialLink>
              <SocialLink
                href="mailto:abnerndr.dev@gmail.com"
                icon={MailIcon2}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                abnerndr.dev@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
