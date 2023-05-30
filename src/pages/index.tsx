/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";

import logoOrbt from "@/assets/images/logos/orbt.jpeg";
import logoVitae from "@/assets/images/logos/vitae.jpeg";
import image1 from "@/assets/images/photos/image-1.jpg";
import image2 from "@/assets/images/photos/image-2.jpg";
import image3 from "@/assets/images/photos/image-3.jpg";
import image4 from "@/assets/images/photos/image-4.jpg";
import image5 from "@/assets/images/photos/image-5.jpg";

import { ArrowDownIcon, BriefcaseIcon } from "@/components/Icons";

import { aboutMe } from "@/json/aboutMe";

import Typewriter from "typewriter-effect";

function Content() {
  return (
    <div className="max-w-2xl">
      <h1 className="flex items-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        <div>
          <span>Hello my name is Abner,</span>
          <div className="flex items-center gap-x-2">
            <span>and i am </span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(2500).deleteAll().start();
              }}
              options={{
                strings: ["Full Stack.", "Web Design.", "Developer."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I'm Abner, currently a full stack developer. I'm working on projects
        using react, next, node and typescript. I'm looking to study more the
        areas of front end and mobile development, I also study a little back
        end. Always looking to improve every day.
      </p>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://instagram.com/abner.ananias"
          aria-label="Follow on Instagram"
          icon={InstagramIcon}
        />
        <SocialLink
          href="https://github.com/abnerndr"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />
        <SocialLink
          href="https://www.linkedin.com/in/abner-andre-ananias/"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </div>
    </div>
  );
}

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Resume() {
  let resume = [
    {
      company: "Vitae Brasil",
      title: "FullStack Developer",
      logo: logoVitae,
      start: "2021",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Orbt · Autônomo",
      title: "FullStack Developer",
      logo: logoOrbt,
      start: "2021",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role: any, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="#"
        variant="secondary"
        className="group mt-6 w-full"
        type={"button"}
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          About Me
        </h1>
      </div>
      {aboutMe.map((about: any) => (
        <div key={about.id} className="mb-4 lg:order-first lg:row-span-2">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <about.icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            <span className="ml-3">{about.title}</span>
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>{about.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - abner.dev</title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <Content />
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/* {articles.map((skills: SkillsProps[any]) => (
              <Skills key={skills.id} skills={skills} />
            ))} */}
            <About />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
