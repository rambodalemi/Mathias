import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, SmartImage } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Meta, Schema } from "@/once-ui/modules";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured && (
            <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
                href={home.featured.href}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Heading wrap="balance" onBackground="neutral-weak" variant="display-strong-xs">
              {home.underline}
            </Heading>
          </RevealFx>

          <RevealFx paddingTop="12" delay={0.3} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.5}>
        <Projects range={[2]} />
      </RevealFx>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <Flex
        background="neutral-alpha-weak"
        padding="24"
        radius="l"
        gap="16"
        direction="column"
        horizontal="center"
      >
        <Text onBackground="neutral-weak" variant="body-default-l">
          Bernard Noël et Mathias Pérez, mercredi 8 juin 2016
        </Text>
        <Image
          src="/images/gallery/Pataut_Noël.JPG"
          alt="Pataut"
          width={1600}
          height={700}
        />
      </Flex>
      <RevealFx translateY="16" delay={0.7}>
        <Flex
          background="neutral-alpha-weak"
          padding="24"
          radius="l"
          gap="16"
          direction="column"
          horizontal="center"
        >
          <div className="relative w-full aspect-video rounded-md overflow-hidden mt-24">
            <video width="400" controls>
              <source src="/images/projects/project-01/video-01.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 z-10" />
            <Heading align="center" wrap="balance" onBackground="neutral-weak" variant="body-strong-xl">
              Bernard Noël.
            </Heading>
          </div>
          <Text onBackground="neutral-weak" variant="body-default-m">
            Entretien de Mathias Pérez avec Marc Pataut et Bernard Noël
          </Text>
          <Button
            href="/files/Entretien-bn.pdf"
            variant="secondary"
            size="m"
            data-border="rounded"
          >
            Voir L'entretien en PDF
          </Button>
        </Flex>
      </RevealFx>
      <RevealFx translateY="8" delay={0.7}>
        <Flex
          background="brand-alpha-weak"
          padding="24"
          radius="l"
          gap="16"
          vertical="center"
          direction="column"
          horizontal="center"

        >
          <Heading variant="display-strong-s">
            Découvrez la monographie
          </Heading>
          <Text onBackground="neutral-weak" variant="body-default-m">
            Une analyse détaillée et illustrée de mon parcours, de mes expériences et de mes réflexions – à télécharger en format PDF.
          </Text>
          <Button
            href="/files/livre-perez.pdf"
            variant="primary"
            size="m"
            data-border="rounded"
          >
            Voir la monographie
          </Button>
        </Flex>
      </RevealFx>

      <RevealFx translateY="8" delay={0.75}>
        <Flex
          background="neutral-alpha-weak"
          padding="24"
          radius="l"
          gap="16"
          direction="column"
          horizontal="center"
        >
          <Heading variant="display-strong-s">
            Fusées 22 — Carte Blanche, 2012
          </Heading>
          <Text onBackground="neutral-weak" variant="body-default-m">
            Revue littéraire et poétique d’avant-garde. Disponible en PDF intégral avec couverture.
          </Text>
          <Button
            href="/fusees/fusees-22"
            variant="secondary"
            size="m"
            data-border="rounded"
          >
            Voir la page Fusées 22
          </Button>
        </Flex>
      </RevealFx>

      {routes["/work"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Derniers textes
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
