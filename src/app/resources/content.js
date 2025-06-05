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
  label: "À propos",
  title: `À propos – ${person.name}`,
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
          <li><strong>2012</strong> – Le Temps du Regard à l’Hôpital Paul Brousse de Villejuif, présentation par Jeanne Gatard.</li>
          <li><strong>2009</strong> – Espace Gainville, Aulnay-sous-Bois, exposition et livret avec texte de Christian Prigent.</li>
          <li><strong>2008</strong> – Gallery Granville ; Galerie / Librairie La 23ème marche à Auvers-sur-Oise.</li>
          <li><strong>2007</strong> – Atelier Véritable de Marc Pataut, lecture de Prigent et Demarcq, présentation Fusées 12.</li>
          <li><strong>2006</strong> – Chez Gilles Rozier et Anne-Sophie Dreyfus, présentation Fusées 10 ; Galerie L à Bellème.</li>
          <li><strong>2003</strong> – Centre Noroît à Arras, lectures (Prigent, Pennequin, Bothereau), catalogue avec texte de Verheggen.</li>
          <li><strong>1996</strong> – Chapelle de l’Hôtel de Ville de Vesoul ; Galerie G. à Besançon ; Centre Culturel de Vaulx-en-Velin.</li>
          <li><strong>1995</strong> – Galerie d’Art contemporain d’Auvers-sur-Oise, publication aux éditions de la Différence.</li>
          <li><strong>1994</strong> – Centre d’Art Contemporain de Bruxelles, texte de Claude Minière.</li>
          <li><strong>1988</strong> – Musée du Mans, première monographie aux éditions de la Différence.</li>
          <li><strong>1986</strong> – Galerie Axe Sud, Toulouse.</li>
          <li><strong>1984</strong> – Galerie Bernard Jordan, Paris ; École des Beaux-Arts de Clermont-Ferrand.</li>
          <li><strong>1982</strong> – Salle Demangel à Montpellier.</li>
          <li><strong>1981</strong> – Centre Culturel Français à Bari ; Galerie Regards ; peinture murale à Châtillon-sous-Bagneux ; Villa Médicis à Rome.</li>
          <li><strong>1980</strong> – Galerie Le Panthographe à Lyon.</li>
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
          <>2007 – Théâtre du Radeau, Le Mans ; Médiathèque Louis Aragon, Le Mans</>,
          <>2006 – Galerie Tampon-Ramier, Paris</>,
          <>2005 – Musée de Dunkerque</>,
          <>2004 – Beaux-Arts Besançon ; Centre d’Art à l’échelle, Charleville-Mézières</>,
          <>2003 – Galerie Tom Molenaars, Breda ; Centre Van Gogh, Zundert</>,
          <>2000 – Centre d’Art Contemporain de l’échelle</>,
          <>1999 – Médiathèque Louis Aragon, Le Mans</>,
          <>1986 – Atelier de Christian Sorg ; Galerie AXE SUD</>,
          <>1985 – Musées du Luxembourg, FRAC</>,
          <>1984 – Galerie J.-J. Donguy ; Galerie Le Chanjour ; CFDT, Paris ; Galerie L’main, Bruxelles</>,
          <>1983 – Galerie Jacques Damase ; Galerie AXE Sud ; Centre Georges Pompidou</>,
          <>1982 – Musée Fabre, Montpellier ; Salon de Mai, Paris ; Muro-Torto à Nantes et Toulouse</>,
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
            Philippe Boutibonnes, Claude Minière, Michel Butor, Jacques Demarcq, Hervé Castanet, Pierre Le Pillouër,
            Rémi Froger, Marc Pataut, Eric Clémens, Jean-Pierre Verheggen, Hubert Lucot, Bernard Noël, Raymond Federman,
            Charles Pennequin, Christian Prigent, Fabrice Thumerel, Cécile Wajsbrot. Édition Carte Blanche.
          </>
        ),
        images: [],
      },
      {
        title: "1995",
        description: (
          <>
            Claude Minière, Marcelin Pleynet, Eric Clémens, Jean-Pierre Verheggen, Hubert Lucot, Emmanuel Tugny,
            Christian Prigent. Photo de Willy Ronis. Éditions de la Différence.
          </>
        ),
        images: [],
      },
      {
        title: "1988",
        description: (
          <>
            Bernard Noël et Christian Prigent. Éditions de la Différence.
          </>
        ),
        images: [],
      },
    ],
  },
};


const blog = {
  path: "/blog",
  label: "Textes",
  title: "Poeésie et Écrits",
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
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    // Add more as needed
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
