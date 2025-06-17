import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Mathias",
  lastName: "Pérez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Artiste, Peintre",
  avatar: "/images/avatar.jpg",
  email: "mathias.perez@free.fr",
  location: "Europe/Paris",
  languages: ["Française", "Espagnole"],
};

const newsletter = {
  display: true,
  title: <>Abonnez-vous à la newsletter de {person.firstName}</>,
  description: <></>,
};

const social = [
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/mathiasperezpeinture/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/mathias.perez.313/",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mathias Pérez</>,
  underline: <>Artiste, Peintre Français</>,
  featured: {
    display: true,
    title: "Voir tous les œuvres",
    href: "portfolio",
  },
  subline: <>Né en janvier 1953 à Vaulx en Velin, près de Lyon.</>,
  monographie: {
    display: true,
    title: "Voir la monographie",
    description:
      "Téléchargez la monographie de Mathias Pérez pour découvrir en détail son œuvre.",
    pdf: "/monographie.pdf",
  },
};

const about = {
  path: "/about",
  label: "CV",
  title: `CV – ${person.name}`,
  description: `Lisez à propos de ${person.name}, ${person.role} basé à ${person.location}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Expositions Personnelles",
    description: (
      <>
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <strong>Déc. 1980</strong> – Galerie Le Pantographe à Lyon, texte de
            présentation de René Deroudille.
          </li>
          <li>
            <strong>Déc. 1981</strong> – Villa Médicis à Rome, textes du
            catalogue : Christian Prigent et Jacques Demarcq.
          </li>
          <li>
            <strong>Déc. 1981</strong> – Galerie Regard à Paris sur proposition
            du peintre James Guitet.
          </li>
          <li>
            <strong>Mars 1981</strong> – Centre Culturel Français de Bari
            (Italie), préface de Jean-Pierre Chauvet.
          </li>
          <li>
            <strong>Fév. 1982</strong> – Salle Demangel à Montpellier, texte de
            Jean-Claude Hauc.
          </li>
          <li>
            <strong>Jan. 1984</strong> – École des Beaux-Arts de
            Clermont-Ferrand, texte d’Alain Robinet.
          </li>
          <li>
            <strong>Juin 1984</strong> – Galerie Bernard Jordan, Paris.
          </li>
          <li>
            <strong>Déc. 1986</strong> – Galerie Axe Sud, Toulouse.
          </li>
          <li>
            <strong>Juin 1988</strong> – Musée du Mans.
          </li>
          <li>
            <strong>Sept. 1994</strong> – Centre d’Art contemporain de
            Bruxelles, sur l’invitation de Fabienne Dumont, texte de Claude
            Minière.
          </li>
          <li>
            <strong>Sept. 1995</strong> – Galerie d’Art contemporain
            d’Auvers-sur-Oise.
          </li>
          <li>
            <strong>Déc. 1996</strong> – Chapelle de l’Hôtel de ville de Vesoul,
            en collaboration avec la Galerie G de Besançon, texte de Bernard
            Noël.
          </li>
          <li>Galerie G. à Besançon, texte de Charles Pennequin.</li>
          <li>Centre Culturel de Vaulx-en-Velin, texte de Marcelin Pleynet.</li>
          <li>
            <strong>Déc. 2003</strong> – Centre Noroît à Arras, par Philippe
            Boisnard et Hortance Gauthier.
          </li>
          <li>
            <strong>Mai 2006</strong> – Galerie L. dirigée par Fabrice Poggiani.
          </li>
          <li>
            <strong>Sept. 2006</strong> – Chez Gilles Rozier et Anne Sophie
            Dreyfus, à Paris, présentation de la revue Fusées n°10, avec lecture
            de Cécile Wajsbrot.
          </li>
          <li>
            <strong>Mars 2008</strong> – Granville Gallery de Catherine Melotte
            et Jean-Pierre Bruaire.
          </li>
          <li>
            <strong>Avr. 2009</strong> – Espace Gainville à Aulnay-sous-Bois.
            Commissaire : Michèle Peinturier, catalogue de 12 cartes postales
            couleurs, préface de Christian Prigent.
          </li>
          <li>
            <strong>Fév. 2012</strong> – Le Temps du Regard, commissaire :
            Jeanne Gatard, à l’hôpital Brousse de Villejuif.
          </li>
          <li>
            <strong>Avr. 2014</strong> – Galerie Isabelle Mézières à
            Auvers-sur-Oise. Publication d’un catalogue.
          </li>
          <li>
            <strong>Nov. 2014</strong> – Granville Gallery à Paris. Catalogue
            *Vers le Dehors*, préface de Bernard Heidsieck, textes de Philippe
            Boutibonnes, Hubert Lucot et Claude Minière, texte de Daniel Dezeuze
            en quatrième de couverture.
          </li>
          <li>
            <strong>Déc. 2015</strong> – Villa Daumier à Valmondois (Val d’Oise)
            par Michel et Tao Guével.
          </li>
          <li>
            <strong>Juin 2021</strong> – Galerie des Sens à Caen (Laure Julien),
            livret *Le Scribe des contours* en hommage à Bernard Noël.
          </li>
          <li>
            <strong>Mai 2023</strong> – Galerie XXI à Paris, catalogue *Le
            pinceau sans maître* de Jean-Paul Fargier, préface de Cécile
            Wajsbrot.
          </li>
          <li>
            <strong>Juil. 2024</strong> – Salle Capitulaire à Goudargues,
            lecture de Charles Pennequin, hommage à Jean-Pierre Verheggen,
            commissaire : Jean-Paul Fargier.
          </li>
        </ul>
      </>
    ),
  },
  work: {
    display: true,
    title: "Expositions de Groupe",
    experiences: [
      {
        company: "Expositions Collectives",
        timeframe: "1980 – 2011",
        role: "Group Shows",
        achievements: [
          <>2011 – La Caverne des Écrivains, Paris</>,
          <>2010 – Salon Tryptique à Angers ; Atelier National, Marseille</>,
          <>2009 – Le sens du toucher, CIP Marseille</>,
          <>
            2007 – Théâtre du Radeau, Le Mans ; Médiathèque Louis Aragon, Le
            Mans
          </>,
          <>2006 – Galerie Tampon-Ramier, Paris</>,
          <>2005 – Musée de Dunkerque</>,
          <>
            2004 – Beaux-Arts Besançon ; Centre d’Art à l’échelle,
            Charleville-Mézières
          </>,
          <>2003 – Galerie Tom Molenaars, Breda ; Centre Van Gogh, Zundert</>,
          <>2000 – Centre d’Art Contemporain de l’échelle</>,
          <>1999 – Médiathèque Louis Aragon, Le Mans</>,
          <>1986 – Atelier de Christian Sorg ; Galerie AXE SUD</>,
          <>1985 – Musées du Luxembourg, FRAC</>,
          <>
            1984 – Galerie J.-J. Donguy ; Galerie Le Chanjour ; CFDT, Paris ;
            Galerie L’main, Bruxelles
          </>,
          <>
            1983 – Galerie Jacques Damase ; Galerie AXE Sud ; Centre Georges
            Pompidou
          </>,
          <>
            1982 – Musée Fabre, Montpellier ; Salon de Mai, Paris ; Muro-Torto à
            Nantes et Toulouse
          </>,
          <>1980 – Galerie Regards, Paris</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Publications Récentes",
    institutions: [
      {
        name: "EPHITALAMES",
        description: <>Texte de Michel Butor</>,
      },
      {
        name: "ELLE EST Là",
        description: <>Texte de Raymond Federman</>,
      },
      {
        name: "IL PARTICoLARE No.15/16",
        description: <>106 pages sur les peintures de Mathias Pérez (2007)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Monographies",
    skills: [
      {
        title: "2009",
        description: (
          <>
            Philippe Boutibonnes, Claude Minière, Michel Butor, Jacques Demarcq,
            Hervé Castanet, Pierre Le Pillouër, Rémi Froger, Marc Pataut, Eric
            Clémens, Jean-Pierre Verheggen, Hubert Lucot, Bernard Noël, Raymond
            Federman, Charles Pennequin, Christian Prigent, Fabrice Thumerel,
            Cécile Wajsbrot. Édition Carte Blanche.
          </>
        ),
        images: [],
      },
      {
        title: "1995",
        description: (
          <>
            Claude Minière, Marcelin Pleynet, Eric Clémens, Jean-Pierre
            Verheggen, Hubert Lucot, Emmanuel Tugny, Christian Prigent. Photo de
            Willy Ronis. Éditions de la Différence.
          </>
        ),
        images: [],
      },
      {
        title: "1988",
        description: (
          <>Bernard Noël et Christian Prigent. Éditions de la Différence.</>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Textes",
  title: "Poésie et Écrits",
  description: `Découvrez les publications, entretiens et écrits de ${person.name}`,
};

const work = {
  path: "/work",
  label: "Articles",
  title: `Articles – ${person.name}`,
  description: `Lisez les articles de ${person.name}`,
};

const gallery = {
  path: "/works",
  label: "Œuvres",
  title: `Galerie – ${person.name}`,
  description: `Une collection d’images et de travaux de ${person.name}`,
  images: [
    {
      src: "/images/gallery/Picture1.jpg",
      alt: "image",
      orientation: "horizontal",
      title: "Galerie Méziéres 2014",
      photographer: "Christophe Méziéres",
    },
    {
      src: "/images/gallery/3.jpg",
      alt: "image",
      orientation: "horizontal",
      title: "Galerie Méziéres 2014",
      photographer: "Christophe Méziéres",
    },
    {
      src: "/images/gallery/4.jpg",
      alt: "image",
      orientation: "horizontal",
      title: "Galerie Méziéres 2014",
      photographer: "Christophe Méziéres",
    },
    {
      src: "/images/gallery/5.jpg",
      alt: "image",
      orientation: "horizontal",
      title: "Galerie Méziéres 2014",
      photographer: "Christophe Méziéres",
    },
    {
      src: "/images/gallery/8.jpg",
      alt: "image",
      orientation: "horizontal",
      title: "Galerie Méziéres 2014",
      photographer: "Christophe Méziéres",
    },
    {
      src: "/images/gallery/9.jpg",
      alt: "image",
      orientation: "horizontal",
      title: "Galerie Méziéres 2014",
      photographer: "Christophe Méziéres",
    },
    {
      src: "/images/gallery/Picture3.jpg",
      alt: "image",
      orientation: "horizontal",
      title: "Galerie Méziéres 2014",
      photographer: "Christophe Méziéres",
    },
    {
      src: "/images/gallery/Picture2.jpg",
      alt: "image",
      orientation: "horizontal",
      title: "Galerie Méziéres 2014",
      photographer: "Christophe Méziéres",
    },

    // Add more as needed
  ],
  images2: [
    {
      src: "/images/gallery/IMG_3053.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_3054.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_3058.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/IMG_3074.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
