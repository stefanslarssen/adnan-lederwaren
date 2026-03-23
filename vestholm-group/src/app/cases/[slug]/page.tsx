"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import { useLanguage } from "@/components/LanguageProvider";
import ColorSwatch from "@/components/ColorSwatch";

interface CaseStudy {
  title: string;
  subtitle: { en: string; no: string };
  category: { en: string; no: string };
  color: string;
  date: { en: string; no: string };
  readTime: { en: string; no: string };
  screenshot?: string;
  video?: string;
  mobileVideo?: string;
  videoType?: "mobile" | "desktop";
  liveDemo?: string;
  meta: {
    client: string;
    industry: { en: string; no: string };
    location: { en: string; no: string };
    liveUrl?: string;
  };
  content: {
    theClient: { en: string; no: string };
    theProblem: { en: string; no: string };
    whatWeImproved: { title: { en: string; no: string }; text: { en: string; no: string }; colors?: { name: { en: string; no: string }; hex: string }[] }[];
    decisions?: { title: { en: string; no: string }; text: { en: string; no: string } }[];
    theResult: { en: string; no: string };
  };
  colorPalette?: { name: string; hex: string }[];
  tags: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  "kfk-snickeri": {
    title: "KFK Snickeri",
    subtitle: {
      en: "A Digital Home for Traditional Swedish Craftsmanship",
      no: "Et digitalt hjem for tradisjonelt svensk håndverk",
    },
    category: { en: "Corporate Website", no: "Bedriftsnettside" },
    color: "#8C6D4F",
    date: { en: "February 2026", no: "Februar 2026" },
    readTime: { en: "5 min read", no: "5 min lesetid" },
    screenshot: "/screenshots/kfk-snickeri.png",
    meta: {
      client: "K.F.K. Snickeri",
      industry: { en: "Carpentry / Custom Furniture", no: "Snekker / Skreddersydde møbler" },
      location: { en: "Sweden", no: "Sverige" },
      liveUrl: "https://stefanslarssen.github.io/kfk-snickeri/",
    },
    content: {
      theClient: {
        en: `K.F.K. Snickeri is a Swedish carpentry studio founded in 2008 by craftsmen trained at the Carl Malmsten Furniture Studies — Sweden's most prestigious school for traditional woodworking. They build custom furniture, shop interiors, private home fit-outs, and one-off pieces. Every project is handcrafted using traditional joinery techniques passed down through generations of Scandinavian furniture makers.

Their tagline says it all: "Hantverk utan kompromiss" — Craftsmanship without compromise.

The company works with private clients, retail brands, and commercial offices across Sweden. Their portfolio includes everything from bespoke kitchen cabinetry to complete store interiors for high-end retailers.`,
        no: `K.F.K. Snickeri er et svensk snekkerverksted grunnlagt i 2008 av håndverkere utdannet ved Carl Malmsten Furniture Studies — Sveriges mest prestisjefylte skole for tradisjonelt trearbeid. De bygger skreddersydde møbler, butikkinnredninger, private hjem og enestående møbelstykker. Hvert prosjekt er håndlaget med tradisjonelle snekketeknikker overført gjennom generasjoner av skandinaviske møbelsnekker.

Slagordet sier alt: "Hantverk utan kompromiss" — Håndverk uten kompromiss.

Selskapet jobber med private kunder, butikkmerker og kommersielle kontorer over hele Sverige. Porteføljen inkluderer alt fra skreddersydde kjøkkenskap til komplette butikkinnredninger for eksklusive forhandlere.`,
      },
      theProblem: {
        en: `The craftsmen at KFK Snickeri had spent years building a reputation through word of mouth. Their work spoke for itself — but only to people who had seen it in person. Without a proper web presence, they were invisible to potential clients searching online.

The challenge wasn't just building a website. It was creating something that could communicate the quality, warmth, and tradition of their work without the visitor ever touching the wood. Photography would do most of the heavy lifting, but the design itself needed to feel handcrafted — not templated.

Generic portfolio templates wouldn't work. The site needed to feel like an extension of their workshop: warm, considered, and built with the same attention to detail they bring to their furniture.`,
        no: `Håndverkerne hos KFK Snickeri hadde brukt år på å bygge opp et rykte gjennom jungeltelegrafen. Arbeidet deres talte for seg selv — men bare for folk som hadde sett det personlig. Uten en ordentlig nettilstedeværelse var de usynlige for potensielle kunder som søkte på nett.

Utfordringen var ikke bare å bygge en nettside. Det var å skape noe som kunne kommunisere kvaliteten, varmen og tradisjonen i arbeidet deres uten at besøkende noen gang rørte ved treverket. Fotografering ville gjøre det meste av jobben, men selve designet måtte føles håndlaget — ikke malt.

Generiske porteføljemaler ville ikke fungere. Siden måtte føles som en forlengelse av verkstedet deres: varm, gjennomtenkt og bygget med samme oppmerksomhet på detaljer som de bringer til møblene sine.`,
      },
      whatWeImproved: [
        {
          title: { en: "A colour palette drawn from the workshop", no: "En fargepalett hentet fra verkstedet" },
          text: {
            en: `The design starts with wood tones. The primary palette uses --hvit for clean backgrounds, --krem for warmth, --tre as the core brown that runs through all accent elements, and --kull for typography. Gold accents appear sparingly — on labels, hover states, and the occasional decorative detail.

The result feels like stepping into a sunlit carpentry studio. Light, warm, but never cluttered.`,
            no: `Designet starter med tretoner. Hovedpaletten bruker --hvit for rene bakgrunner, --krem for varme, --tre som kjernefargen som går gjennom alle aksentelementer, og --kull for typografi. Gullaksenter vises sparsomt — på etiketter, hover-tilstander og sporadiske dekorative detaljer.

Resultatet føles som å gå inn i et solbelyst snekkerverksted. Lyst, varmt, men aldri rotete.`,
          },
          colors: [
            { name: { en: "White", no: "Hvit" }, hex: "#FAF9F7" },
            { name: { en: "Cream", no: "Krem" }, hex: "#F0EDE6" },
            { name: { en: "Wood", no: "Tre" }, hex: "#8C6D4F" },
            { name: { en: "Charcoal", no: "Kull" }, hex: "#1A1814" },
            { name: { en: "Gold", no: "Gull" }, hex: "#C4A35A" },
          ],
        },
        {
          title: { en: "Typography that respects the craft", no: "Typografi som respekterer håndverket" },
          text: {
            en: `Headlines use Playfair Display in italic — a serif with enough character to feel distinctive without competing with the photography. Body text uses DM Sans at weight 300 for a clean, modern reading experience. Navigation and labels use DM Mono, bringing the precision of technical drawings into the typographic system.

The combination is intentional: traditional serif for the emotional weight, modern sans for readability, monospace for technical elements. Three fonts, each with a clear role.`,
            no: `Overskrifter bruker Playfair Display i kursiv — en serif med nok karakter til å føles særegen uten å konkurrere med fotografiene. Brødtekst bruker DM Sans med vekt 300 for en ren, moderne leseopplevelse. Navigasjon og etiketter bruker DM Mono, som bringer presisjonen fra tekniske tegninger inn i det typografiske systemet.

Kombinasjonen er bevisst: tradisjonell serif for den emosjonelle tyngden, moderne sans for lesbarhet, monospace for tekniske elementer. Tre fonter, hver med en klar rolle.`,
          },
        },
        {
          title: { en: "A hero that leads with the work", no: "En hero som leder med arbeidet" },
          text: {
            en: `The homepage opens with a two-column split: text on the left, a full-bleed image of their craftsmanship on the right. The label "SKRÄDDARSYDDA SNICKERIER SEDAN 2008" anchors the context before the visitor reads anything else.

No slider. No animation. Just the work, presented with confidence.`,
            no: `Hjemmesiden åpner med en todelt layout: tekst til venstre, et fullbredde bilde av håndverket til høyre. Etiketten "SKRÄDDARSYDDA SNICKERIER SEDAN 2008" forankrer konteksten før besøkende leser noe annet.

Ingen slider. Ingen animasjon. Bare arbeidet, presentert med selvtillit.`,
          },
        },
      ],
      decisions: [
        {
          title: { en: "Single-file architecture", no: "Enkeltfil-arkitektur" },
          text: {
            en: `The entire site lives in one HTML file. For a portfolio site that updates maybe twice a year, this makes maintenance trivial. No build step, no dependencies, no framework lock-in. Open the file, edit the content, upload. Done.`,
            no: `Hele siden lever i én HTML-fil. For en porteføljeside som oppdateres kanskje to ganger i året, gjør dette vedlikehold trivielt. Ingen byggsteg, ingen avhengigheter, ingen rammeverklås. Åpne filen, rediger innholdet, last opp. Ferdig.`,
          },
        },
        {
          title: { en: "No JavaScript frameworks", no: "Ingen JavaScript-rammeverk" },
          text: {
            en: `The site uses vanilla JavaScript for interactions — mobile menu toggle, smooth scroll, that's it. No React, no Vue, no build system. The entire page weighs under 50KB before images.`,
            no: `Siden bruker vanilla JavaScript for interaksjoner — mobil meny-toggle, jevn scroll, det er alt. Ingen React, ingen Vue, ingen byggesystem. Hele siden veier under 50KB før bilder.`,
          },
        },
      ],
      theResult: {
        en: `A website that feels like it belongs to the craftsmen who commissioned it. Visitors land on the homepage and immediately understand what KFK Snickeri does and how seriously they do it. The photography carries the emotional weight; the design gets out of the way.

The site loads fast, works on any device, and presents years of portfolio work in a format that's easy to browse and update. More importantly, it finally gives the studio a digital presence that matches the quality of their physical work.

Hantverk utan kompromiss — now online.`,
        no: `En nettside som føles som om den tilhører håndverkerne som bestilte den. Besøkende lander på hjemmesiden og forstår umiddelbart hva KFK Snickeri gjør og hvor seriøst de tar det. Fotografiene bærer den emosjonelle tyngden; designet holder seg unna.

Siden laster raskt, fungerer på alle enheter og presenterer år med porteføljearbeid i et format som er enkelt å bla gjennom og oppdatere. Enda viktigere, den gir endelig studioet en digital tilstedeværelse som matcher kvaliteten på det fysiske arbeidet deres.

Hantverk utan kompromiss — nå online.`,
      },
    },
    tags: ["Corporate Website", "Carpentry", "Sweden", "Portfolio", "Single-file"],
  },

  "muller-metall": {
    title: "Müller Metallverarbeitung",
    subtitle: {
      en: "Replacing a Broken 2005 Website With a Modern React Application",
      no: "Erstatter en ødelagt 2005-nettside med en moderne React-applikasjon",
    },
    category: { en: "Corporate Website", no: "Bedriftsnettside" },
    color: "#B8860B",
    date: { en: "January 2026", no: "Januar 2026" },
    readTime: { en: "4 min read", no: "4 min lesetid" },
    screenshot: "/screenshots/muller-metall.png",
    meta: {
      client: "Müller Metallverarbeitung GmbH",
      industry: { en: "Metal Manufacturing", no: "Metallproduksjon" },
      location: { en: "Germany", no: "Tyskland" },
      liveUrl: "https://stefanslarssen.github.io/muller-metallverarbeitung/",
    },
    content: {
      theClient: {
        en: `Müller Metallverarbeitung GmbH is a German metal manufacturing company with over 50 years of experience in precision metalwork. Based in Germany, they offer services including stainless steel processing, steel construction, plant engineering, and apparatus construction.`,
        no: `Müller Metallverarbeitung GmbH er et tysk metallproduksjonsselskap med over 50 års erfaring innen presisjonsmetallarbeid. Basert i Tyskland tilbyr de tjenester inkludert rustfri stålbearbeiding, stålkonstruksjon, anleggsteknikk og apparatkonstruksjon.`,
      },
      theProblem: {
        en: `The company's original website was built in 2005 and had been left to rot. When we first looked at it, the situation was bad:

- Broken images across every page
- No CSS styling — the browser was rendering raw HTML
- No mobile support whatsoever
- The domain was still live, but the site was functionally useless

For a manufacturing company that competes on expertise and professionalism, having a broken website was worse than having no website at all.`,
        no: `Selskapets opprinnelige nettside ble bygget i 2005 og hadde fått råtne. Da vi først så på den, var situasjonen dårlig:

- Ødelagte bilder på hver side
- Ingen CSS-styling — nettleseren rendret rå HTML
- Ingen mobilstøtte overhodet
- Domenet var fortsatt aktivt, men siden var funksjonelt ubrukelig

For et produksjonsselskap som konkurrerer på ekspertise og profesjonalitet, var det å ha en ødelagt nettside verre enn å ikke ha noen nettside i det hele tatt.`,
      },
      whatWeImproved: [
        {
          title: { en: "A complete React rebuild", no: "En komplett React-ombygging" },
          text: {
            en: `We replaced the broken static HTML with a modern single-page application built in React. Vite handles the build tooling, giving us fast development cycles and optimized production bundles.`,
            no: `Vi erstattet den ødelagte statiske HTML-en med en moderne enkeltsideapplikasjon bygget i React. Vite håndterer byggeverktøyene, noe som gir oss raske utviklingssykluser og optimaliserte produksjonspakker.`,
          },
        },
        {
          title: { en: "Industrial design language", no: "Industrielt designspråk" },
          text: {
            en: `The colour palette sets the tone immediately: a near-black background, dark surface cards, subtle borders, silver for text, and blue accents for key calls to action.`,
            no: `Fargepaletten setter tonen umiddelbart: en nesten svart bakgrunn, mørke overflatekort, subtile kanter, sølv for tekst, og blå aksenter for viktige handlingsoppfordringer.`,
          },
          colors: [
            { name: { en: "Background", no: "Bakgrunn" }, hex: "#0a0a0a" },
            { name: { en: "Surface", no: "Overflate" }, hex: "#141414" },
            { name: { en: "Border", no: "Kant" }, hex: "#2a2a2a" },
            { name: { en: "Silver", no: "Sølv" }, hex: "#c0c0c0" },
            { name: { en: "Accent Blue", no: "Aksentblå" }, hex: "#0077be" },
          ],
        },
        {
          title: { en: "Fully responsive", no: "Fullt responsiv" },
          text: {
            en: `Every component adapts to screen size. The navigation collapses to a hamburger menu on mobile. Service cards reflow gracefully. A manufacturing company's website will be viewed on everything from office desktops to tablets on the shop floor.`,
            no: `Hver komponent tilpasser seg skjermstørrelse. Navigasjonen kollapser til en hamburgermeny på mobil. Tjenestekort flyter om elegant. En produksjonsbedrifts nettside vil bli sett på alt fra kontorskrivebord til nettbrett på verkstedgulvet.`,
          },
        },
      ],
      theResult: {
        en: `The new site loads in under a second, looks professional on any device, and actually works. The industrial design language communicates competence before the visitor reads a word of content.

The 2005 site is gone. The new one is ready for the next decade.`,
        no: `Den nye siden laster på under et sekund, ser profesjonell ut på alle enheter og fungerer faktisk. Det industrielle designspråket kommuniserer kompetanse før besøkende leser et ord av innholdet.

2005-siden er borte. Den nye er klar for det neste tiåret.`,
      },
    },
    tags: ["Corporate Website", "Metal Manufacturing", "Germany", "React", "Vite"],
  },

  "agrotop": {
    title: "Agrotop Kaczmarek",
    subtitle: {
      en: "Bringing Poland's Vegetable Machinery Leader Online",
      no: "Bringer Polens leder innen grønnsaksmaskiner på nett",
    },
    category: { en: "Corporate Website", no: "Bedriftsnettside" },
    color: "#2D5016",
    date: { en: "December 2025", no: "Desember 2025" },
    readTime: { en: "5 min read", no: "5 min lesetid" },
    screenshot: "/screenshots/agrotop.png",
    meta: {
      client: "Agrotop-Kaczmarek Sp. z o.o.",
      industry: { en: "Agricultural Machinery", no: "Landbruksmaskiner" },
      location: { en: "Ostrzeszów, Poland", no: "Ostrzeszów, Polen" },
      liveUrl: "https://stefanslarssen.github.io/Agrotop-Kaczmarek/",
    },
    content: {
      theClient: {
        en: `Agrotop-Kaczmarek has been Poland's leading vegetable machinery specialist since 1997. They serve farmers across Poland with equipment for harvesting, sorting, and processing vegetables. Since 2008, they've been the official Polish importer for AVR and Miedema.`,
        no: `Agrotop-Kaczmarek har vært Polens ledende spesialist på grønnsaksmaskiner siden 1997. De betjener bønder over hele Polen med utstyr for høsting, sortering og bearbeiding av grønnsaker. Siden 2008 har de vært den offisielle polske importøren for AVR og Miedema.`,
      },
      theProblem: {
        en: `Despite being market leaders in Poland, Agrotop-Kaczmarek had limited online presence. Farmers looking for vegetable machinery would search online and find competitors with better websites — even if those competitors had inferior equipment and service.`,
        no: `Til tross for å være markedsledere i Polen, hadde Agrotop-Kaczmarek begrenset nettilstedeværelse. Bønder som lette etter grønnsaksmaskiner søkte på nett og fant konkurrenter med bedre nettsider — selv om disse konkurrentene hadde dårligere utstyr og service.`,
      },
      whatWeImproved: [
        {
          title: { en: "Brand-driven colour system", no: "Merkevaredrevet fargesystem" },
          text: {
            en: `The Agrotop logo features two overlapping ellipses in red (#D32027) and yellow (#FFD200). We built the entire colour system around these brand colours.`,
            no: `Agrotop-logoen har to overlappende ellipser i rødt (#D32027) og gult (#FFD200). Vi bygde hele fargesystemet rundt disse merkevarefargene.`,
          },
          colors: [
            { name: { en: "Agrotop Red", no: "Agrotop Rød" }, hex: "#D32027" },
            { name: { en: "Agrotop Yellow", no: "Agrotop Gul" }, hex: "#FFD200" },
          ],
        },
        {
          title: { en: "Structured data for search", no: "Strukturert data for søk" },
          text: {
            en: `The site includes comprehensive JSON-LD structured data identifying Agrotop-Kaczmarek as an organization, including founding date (1997), employee count, address, and contact information.`,
            no: `Siden inkluderer omfattende JSON-LD strukturert data som identifiserer Agrotop-Kaczmarek som en organisasjon, inkludert grunnleggelsesdato (1997), antall ansatte, adresse og kontaktinformasjon.`,
          },
        },
      ],
      theResult: {
        en: `Agrotop-Kaczmarek now has a web presence that matches their market position. Farmers searching for vegetable machinery in Poland find a professional, modern website that clearly communicates the company's expertise.`,
        no: `Agrotop-Kaczmarek har nå en nettilstedeværelse som matcher deres markedsposisjon. Bønder som søker etter grønnsaksmaskiner i Polen finner en profesjonell, moderne nettside som tydelig kommuniserer selskapets ekspertise.`,
      },
    },
    tags: ["Corporate Website", "Agriculture", "Poland", "Docker"],
  },

  "espi": {
    title: "Amarrra",
    subtitle: {
      en: "Self-Service Boat Slip Booking With Vipps Integration",
      no: "Selvbetjent båtplassbooking med Vipps-integrasjon",
    },
    category: { en: "Mobile App", no: "Mobilapp" },
    color: "#0066CC",
    date: { en: "March 2026", no: "Mars 2026" },
    readTime: { en: "6 min read", no: "6 min lesetid" },
    video: "/videos/espi-demo.mp4",
    screenshot: "/screenshots/amarrra-app.png",
    meta: {
      client: "Amarrra",
      industry: { en: "Marina Services", no: "Marinatjenester" },
      location: { en: "Norway", no: "Norge" },
    },
    content: {
      theClient: {
        en: `Amarrra is a mobile app for marina booking across Norway. The app allows boat owners to find, book, and pay for boat slips at marinas throughout the country. Espevær, a small island on Norway's rugged west coast accessible only by boat, serves as the pilot area for the app. The marina at Espevær operates 25 boat slips in three sizes, each with optional electricity hookup.`,
        no: `Amarrra er en mobilapp for marinabooking over hele Norge. Appen lar båteiere finne, booke og betale for båtplasser ved marinaer over hele landet. Espevær, en liten øy på Norges værharde vestkyst kun tilgjengelig med båt, fungerer som pilotområde for appen. Marinaen på Espevær driver 25 båtplasser i tre størrelser, hver med valgfri strømtilkobling.`,
      },
      theProblem: {
        en: `The manual booking system created problems for everyone:

For guests: No way to check availability before making the trip. No advance booking meant arriving to find all slips occupied.

For the marina: Constant phone interruptions during the busy season. Paper records prone to double-bookings and errors.

The solution needed to work with Vipps. Norwegian boat owners expect to pay with Vipps.`,
        no: `Det manuelle bookingsystemet skapte problemer for alle:

For gjester: Ingen måte å sjekke tilgjengelighet før turen. Ingen forhåndsbestilling betydde å ankomme og finne alle plasser opptatt.

For marinaen: Konstante telefonavbrytelser i høysesongen. Papirjournaler utsatt for dobbeltbookinger og feil.

Løsningen måtte fungere med Vipps. Norske båteiere forventer å betale med Vipps.`,
      },
      whatWeImproved: [
        {
          title: { en: "Vipps Login with BankID verification", no: "Vipps-innlogging med BankID-verifisering" },
          text: {
            en: `Users authenticate using Vipps Login, which means they're verified through Norwegian BankID. No passwords to remember, no accounts to create. Tap "Logg inn med Vipps," confirm in the Vipps app, done.`,
            no: `Brukere autentiserer seg med Vipps-innlogging, som betyr at de er verifisert gjennom norsk BankID. Ingen passord å huske, ingen kontoer å opprette. Trykk "Logg inn med Vipps", bekreft i Vipps-appen, ferdig.`,
          },
        },
        {
          title: { en: "Real-time availability calendar", no: "Sanntids tilgjengelighetskalender" },
          text: {
            en: `The app shows a calendar view with real-time slip availability. Select your dates, and the app immediately shows which slips are available, which are booked, and the price for your stay.`,
            no: `Appen viser en kalendervisning med sanntids plasstilgjengelighet. Velg datoene dine, og appen viser umiddelbart hvilke plasser som er tilgjengelige, hvilke som er booket, og prisen for oppholdet ditt.`,
          },
        },
        {
          title: { en: "Vipps Payment", no: "Vipps-betaling" },
          text: {
            en: `Payment happens entirely through Vipps. The guest confirms the total, taps pay, approves in Vipps, and the booking is confirmed instantly. No credit card forms, no bank transfers, no cash on arrival.`,
            no: `Betaling skjer helt gjennom Vipps. Gjesten bekrefter totalen, trykker betal, godkjenner i Vipps, og bookingen bekreftes umiddelbart. Ingen kredittkortskjemaer, ingen bankoverføringer, ingen kontanter ved ankomst.`,
          },
        },
      ],
      theResult: {
        en: `The marina now operates 24/7 self-service booking. Guests check availability, book, and pay before they ever leave their home marina. Staff spend less time on the phone and more time helping guests in person.

Double-bookings are impossible. Availability updates in real-time across all devices.`,
        no: `Marinaen driver nå 24/7 selvbetjent booking. Gjester sjekker tilgjengelighet, booker og betaler før de i det hele tatt forlater hjemmehavnen sin. Ansatte bruker mindre tid på telefonen og mer tid på å hjelpe gjester personlig.

Dobbeltbookinger er umulig. Tilgjengelighet oppdateres i sanntid på alle enheter.`,
      },
    },
    tags: ["Mobile App", "React Native", "Vipps", "Supabase", "Norway"],
  },

  "nabolagsappen": {
    title: "Nabolagsappen",
    subtitle: {
      en: "Hyperlocal Social Networking for Oslo's Neighbourhoods",
      no: "Hyperlokal sosial nettverksbygging for Oslos nabolag",
    },
    category: { en: "Mobile App", no: "Mobilapp" },
    color: "#6B46C1",
    date: { en: "February 2026", no: "Februar 2026" },
    readTime: { en: "5 min read", no: "5 min lesetid" },
    screenshot: "/screenshots/nabolagsappen-mockup.png",
    meta: {
      client: "Community Project",
      industry: { en: "Social Networking", no: "Sosialt nettverk" },
      location: { en: "Oslo, Norway", no: "Oslo, Norge" },
    },
    content: {
      theClient: {
        en: `Nabolagsappen started as a simple observation: most people don't know their neighbours. Global social networks connect you with friends across the world but not with the person who lives three doors down.`,
        no: `Nabolagsappen startet som en enkel observasjon: de fleste kjenner ikke naboene sine. Globale sosiale nettverk kobler deg med venner over hele verden, men ikke med personen som bor tre dører nedover.`,
      },
      theProblem: {
        en: `Urban isolation is a documented phenomenon. People live in apartment buildings for years without knowing their neighbours' names. Existing solutions fail for different reasons: Facebook groups are cluttered, Ring/Nextdoor have privacy concerns, WhatsApp groups require manual adding.`,
        no: `Urban isolasjon er et dokumentert fenomen. Folk bor i leilighetsbygg i årevis uten å kjenne naboenes navn. Eksisterende løsninger feiler av ulike grunner: Facebook-grupper er rotete, Ring/Nextdoor har personvernbekymringer, WhatsApp-grupper krever manuell tillegging.`,
      },
      whatWeImproved: [
        {
          title: { en: "Location-based neighbourhood detection", no: "Stedsbasert nabolagsdeteksjon" },
          text: {
            en: `The app uses GPS location to determine which neighbourhood you're in. We mapped all of Oslo's districts — from Frogner to Stovner. The database includes over 80 Oslo neighbourhoods.`,
            no: `Appen bruker GPS-posisjon for å bestemme hvilket nabolag du er i. Vi kartla alle Oslos bydeler — fra Frogner til Stovner. Databasen inkluderer over 80 Oslo-nabolag.`,
          },
        },
        {
          title: { en: "Neighbourhood feed", no: "Nabolagsstrøm" },
          text: {
            en: `Each neighbourhood has a shared feed where residents post updates. Lost pets, event announcements, recommendations, items for sale. No algorithmic sorting, no promoted content, no ads.`,
            no: `Hvert nabolag har en delt strøm der beboere legger ut oppdateringer. Savnede kjæledyr, arrangementsannonseringer, anbefalinger, ting til salgs. Ingen algoritmisk sortering, ingen sponset innhold, ingen annonser.`,
          },
        },
      ],
      theResult: {
        en: `An app that does exactly what it promises: connects neighbours. Open the app, and you see what's happening on your street. No global feed. No trending topics. Just your neighbourhood, your neighbours, your community.

Oslo's 80+ neighbourhoods, now connected — one block at a time.`,
        no: `En app som gjør akkurat det den lover: kobler naboer. Åpne appen, og du ser hva som skjer i gaten din. Ingen global strøm. Ingen trendende temaer. Bare nabolaget ditt, naboene dine, samfunnet ditt.

Oslos 80+ nabolag, nå forbundet — én blokk om gangen.`,
      },
    },
    tags: ["Mobile App", "React Native", "Oslo", "Community"],
  },

  "nfs-workflow": {
    title: "NFS Workflow System",
    subtitle: {
      en: "Automating Seafood Brokerage Operations With AI and Telegram",
      no: "Automatisering av sjømatmegling med AI og Telegram",
    },
    category: { en: "Business Automation", no: "Forretningsautomatisering" },
    color: "#0891B2",
    date: { en: "March 2026", no: "Mars 2026" },
    readTime: { en: "7 min read", no: "7 min lesetid" },
    meta: {
      client: "Nordfjord Solutions",
      industry: { en: "Seafood Brokerage", no: "Sjømatmegling" },
      location: { en: "Norway", no: "Norge" },
    },
    content: {
      theClient: {
        en: `Nordfjord Solutions (NFS) operates as a seafood broker, connecting Norwegian salmon suppliers with international buyers. The business runs on relationships and responsiveness — suppliers send product availability, NFS generates quotes, buyers respond, deals close.`,
        no: `Nordfjord Solutions (NFS) opererer som sjømatmegler og kobler norske lakseleverandører med internasjonale kjøpere. Virksomheten kjører på relasjoner og responsivitet — leverandører sender produkttilgjengelighet, NFS genererer tilbud, kjøpere svarer, avtaler lukkes.`,
      },
      theProblem: {
        en: `The broker was drowning in email. Every incoming message required manual processing: Is this a new quote request? A reply to an existing thread? Each type needed different handling. The business owner was spending more time on email administration than on actual deal-making.

The system needed automation, but not full automation. Seafood brokerage involves relationships and judgement calls. The system should draft and suggest, but a human should approve every outbound message.`,
        no: `Megleren druknet i e-post. Hver innkommende melding krevde manuell behandling: Er dette en ny tilbudsforespørsel? Et svar på en eksisterende tråd? Hver type trengte ulik håndtering. Bedriftseieren brukte mer tid på e-postadministrasjon enn på faktisk avtaleinngåelse.

Systemet trengte automatisering, men ikke full automatisering. Sjømatmegling involverer relasjoner og skjønnsmessige vurderinger. Systemet bør utarbeide og foreslå, men et menneske bør godkjenne hver utgående melding.`,
      },
      whatWeImproved: [
        {
          title: { en: "10 interconnected n8n workflows", no: "10 sammenkoblede n8n-arbeidsflyter" },
          text: {
            en: `The system comprises 10 workflows handling every aspect of the brokerage operation: email ingestion, quote generation, follow-ups, market price monitoring, Telegram approvals, and more.`,
            no: `Systemet består av 10 arbeidsflyter som håndterer alle aspekter av megleroperasjonen: e-postinntak, tilbudsgenerering, oppfølginger, markedsprisovervåking, Telegram-godkjenninger og mer.`,
          },
        },
        {
          title: { en: "Claude AI for email classification", no: "Claude AI for e-postklassifisering" },
          text: {
            en: `Incoming emails are processed through Claude AI, which classifies them into categories: new quote request, reply to existing thread, general inquiry, or spam. The AI doesn't just classify — it extracts relevant information for quote generation.`,
            no: `Innkommende e-poster behandles gjennom Claude AI, som klassifiserer dem i kategorier: ny tilbudsforespørsel, svar på eksisterende tråd, generell henvendelse eller spam. AI-en klassifiserer ikke bare — den trekker ut relevant informasjon for tilbudsgenerering.`,
          },
        },
        {
          title: { en: "Telegram bot as the command centre", no: "Telegram-bot som kommandosenter" },
          text: {
            en: `The broker controls everything through Telegram. Approval requests arrive as messages with inline buttons: Approve, Edit, Reject. No dashboard to log into. No desktop required. The broker manages the business from their phone.`,
            no: `Megleren kontrollerer alt gjennom Telegram. Godkjenningsforespørsler kommer som meldinger med innebygde knapper: Godkjenn, Rediger, Avvis. Ingen dashbord å logge inn på. Ingen desktop nødvendig. Megleren styrer virksomheten fra telefonen sin.`,
          },
        },
      ],
      theResult: {
        en: `Email processing that took hours happens automatically. The owner reviews and approves from Telegram. Deals are tracked properly. Follow-ups happen on time.

Processing time: reduced by 90%.
Missed follow-ups: eliminated.
Human oversight: maintained throughout.

The business scaled without adding headcount.`,
        no: `E-postbehandling som tok timer skjer automatisk. Eieren gjennomgår og godkjenner fra Telegram. Avtaler spores ordentlig. Oppfølginger skjer i tide.

Behandlingstid: redusert med 90%.
Tapte oppfølginger: eliminert.
Menneskelig tilsyn: opprettholdt hele veien.

Virksomheten skalerte uten å legge til flere ansatte.`,
      },
    },
    tags: ["Business Automation", "n8n", "Claude AI", "Telegram", "Supabase"],
  },

  "vestholm-dashboard": {
    title: "Vestholm Dashboard",
    subtitle: {
      en: "Executive AI Dashboard for Real-Time Business Intelligence",
      no: "Ledelses-AI-dashboard for sanntids forretningsintelligens",
    },
    category: { en: "AI Dashboard", no: "AI-Dashboard" },
    color: "#1E3A5F",
    date: { en: "March 2026", no: "Mars 2026" },
    readTime: { en: "5 min read", no: "5 min lesetid" },
    liveDemo: "http://localhost:4000",
    meta: {
      client: "Vestholm Group",
      industry: { en: "Investment / Finance", no: "Investering / Finans" },
      location: { en: "Norway", no: "Norge" },
    },
    content: {
      theClient: {
        en: `Vestholm Group is a Norwegian investment and holding company with interests across multiple sectors. The executive team needed a unified view of their portfolio companies, market conditions, and key performance indicators — all in one place.`,
        no: `Vestholm Group er et norsk investerings- og holdingselskap med interesser på tvers av flere sektorer. Ledelsesteamet trengte en samlet oversikt over porteføljeselskapene, markedsforhold og nøkkelindikatorer — alt på ett sted.`,
      },
      theProblem: {
        en: `Executive decision-making was slowed by fragmented data sources. Financial reports came from one system, market data from another, and portfolio updates via email. The leadership team spent more time gathering information than acting on it.

The solution needed to:
- Aggregate data from multiple sources in real-time
- Present complex information in an intuitive visual format
- Provide AI-powered insights and anomaly detection
- Work seamlessly across desktop and mobile devices`,
        no: `Beslutninger på ledernivå ble bremset av fragmenterte datakilder. Finansielle rapporter kom fra ett system, markedsdata fra et annet, og porteføljeoppdateringer via e-post. Ledelsesteamet brukte mer tid på å samle informasjon enn å handle på den.

Løsningen måtte:
- Aggregere data fra flere kilder i sanntid
- Presentere kompleks informasjon i et intuitivt visuelt format
- Tilby AI-drevne innsikter og anomalideteksjon
- Fungere sømløst på tvers av desktop og mobile enheter`,
      },
      whatWeImproved: [
        {
          title: { en: "Real-time data aggregation", no: "Sanntids dataaggregering" },
          text: {
            en: `The dashboard pulls data from financial APIs, internal databases, and third-party services. Updates flow in real-time, so the executive team always sees current information without manual refreshes.`,
            no: `Dashboardet henter data fra finansielle API-er, interne databaser og tredjepartstjenester. Oppdateringer strømmer inn i sanntid, så ledelsesteamet alltid ser gjeldende informasjon uten manuell oppdatering.`,
          },
        },
        {
          title: { en: "AI-powered insights", no: "AI-drevne innsikter" },
          text: {
            en: `Built-in AI analyzes patterns across the data, flagging anomalies and surfacing insights that might otherwise be missed. The system learns from historical data to provide increasingly relevant alerts.`,
            no: `Innebygd AI analyserer mønstre på tvers av dataene, flagger anomalier og fremhever innsikter som ellers kunne blitt oversett. Systemet lærer fra historiske data for å gi stadig mer relevante varsler.`,
          },
        },
        {
          title: { en: "Executive-focused design", no: "Ledelsesfokusert design" },
          text: {
            en: `The interface prioritizes clarity over complexity. Key metrics are visible at a glance. Drill-down capabilities exist for those who need detail, but the default view shows exactly what executives need to make decisions.`,
            no: `Grensesnittet prioriterer klarhet over kompleksitet. Nøkkeltall er synlige med et blikk. Detaljvisninger finnes for de som trenger detaljer, men standardvisningen viser nøyaktig det ledere trenger for å ta beslutninger.`,
          },
          colors: [
            { name: { en: "Deep Navy", no: "Dyp marineblå" }, hex: "#1E3A5F" },
            { name: { en: "Gold Accent", no: "Gullaksent" }, hex: "#C9A227" },
            { name: { en: "Success Green", no: "Suksess grønn" }, hex: "#22C55E" },
            { name: { en: "Alert Red", no: "Alarm rød" }, hex: "#EF4444" },
          ],
        },
      ],
      theResult: {
        en: `Vestholm Group's leadership now has a single source of truth for their entire portfolio. Decision-making is faster because the information is already there. The AI layer catches trends and anomalies that would have taken days to discover manually.

The dashboard has become the first thing executives check each morning — a testament to its utility and design.`,
        no: `Vestholm Groups ledelse har nå én enkelt kilde til sannhet for hele porteføljen. Beslutningstaking er raskere fordi informasjonen allerede er der. AI-laget fanger opp trender og anomalier som ville tatt dager å oppdage manuelt.

Dashboardet har blitt det første ledere sjekker hver morgen — et bevis på dets nytteverdi og design.`,
      },
    },
    tags: ["AI Dashboard", "Next.js", "React", "Real-time Analytics", "Norway"],
  },

  "fjordvind": {
    title: "FjordVind",
    subtitle: {
      en: "Brand Identity System for Norwegian Coastal Protection",
      no: "Merkevareidensitetssystem for norsk kystbeskyttelse",
    },
    category: { en: "Desktop Application", no: "Desktop-applikasjon" },
    color: "#1E3A5F",
    date: { en: "February 2026", no: "Februar 2026" },
    readTime: { en: "4 min read", no: "4 min lesetid" },
    screenshot: "/screenshots/fjordvind-mockup.png",
    meta: {
      client: "FjordVind Initiative",
      industry: { en: "Environmental / Maritime", no: "Miljø / Maritim" },
      location: { en: "Norway", no: "Norge" },
    },
    content: {
      theClient: {
        en: `FjordVind is a Norwegian coastal protection initiative. The name combines "fjord" — the iconic Norwegian coastal geography — with "vind" — wind, representing the natural forces that shape the coastline. Their mission: "Beskytter Norges kyst" — Protecting Norway's coast.`,
        no: `FjordVind er et norsk kystbeskyttelsesinitiativ. Navnet kombinerer "fjord" — den ikoniske norske kystgeografien — med "vind" — som representerer naturkreftene som former kystlinjen. Deres oppdrag: "Beskytter Norges kyst".`,
      },
      theProblem: {
        en: `The initiative needed a visual identity system that could work across digital and physical applications: websites, mobile apps, desktop software, printed materials, work clothing, and even boat markings. The identity needed to communicate Nordic design sensibility, environmental purpose, and professional authority.`,
        no: `Initiativet trengte et visuelt identitetssystem som kunne fungere på tvers av digitale og fysiske applikasjoner: nettsider, mobilapper, desktop-programvare, trykte materialer, arbeidsklær og til og med båtmerking. Identiteten måtte kommunisere nordisk designsensibilitet, miljøformål og profesjonell autoritet.`,
      },
      whatWeImproved: [
        {
          title: { en: "Logo mark inspired by coastline", no: "Logomerke inspirert av kystlinjen" },
          text: {
            en: `The primary mark abstracts Norway's dramatic coastline into three elements: a rising line representing mountains meeting the sea, two horizontal strokes suggesting water and horizon layers.`,
            no: `Hovedmerket abstraherer Norges dramatiske kystlinje i tre elementer: en stigende linje som representerer fjell som møter havet, to horisontale strøk som antyder vann- og horisontlag.`,
          },
        },
        {
          title: { en: "Nordic colour palette", no: "Nordisk fargepalett" },
          text: {
            en: `The colour system uses blues derived from Norwegian coastal tones: Primary #1e40af (deep fjord blue), Secondary #3b82f6 (clear water blue), Light #60a5fa (sky reflection), Accent #93c5fd (horizon mist).`,
            no: `Fargesystemet bruker blåtoner hentet fra norske kysttoner: Primær #1e40af (dyp fjordblå), Sekundær #3b82f6 (klart vannblå), Lys #60a5fa (himmelrefleksjon), Aksent #93c5fd (horisontdis).`,
          },
          colors: [
            { name: { en: "Deep Fjord Blue", no: "Dyp fjordblå" }, hex: "#1e40af" },
            { name: { en: "Clear Water Blue", no: "Klart vannblå" }, hex: "#3b82f6" },
            { name: { en: "Sky Reflection", no: "Himmelrefleksjon" }, hex: "#60a5fa" },
            { name: { en: "Horizon Mist", no: "Horisontdis" }, hex: "#93c5fd" },
          ],
        },
      ],
      theResult: {
        en: `A complete visual identity system ready for deployment across FjordVind's operations. The logo works at every scale from favicon to building signage. The desktop application serves as both a delivery mechanism and a demonstration of how the identity performs in software contexts.

Beskytter Norges kyst — with a visual identity to match the mission.`,
        no: `Et komplett visuelt identitetssystem klart for utrulling på tvers av FjordVinds operasjoner. Logoen fungerer i alle skalaer fra favicon til bygningsskilt. Desktop-applikasjonen fungerer både som leveringsmekanisme og demonstrasjon av hvordan identiteten presterer i programvarekontekster.

Beskytter Norges kyst — med en visuell identitet som matcher oppdraget.`,
      },
    },
    tags: ["Brand Identity", "Tauri", "Desktop", "Nordic Design", "Norway"],
  },

  "reko-produsent": {
    title: "REKO Produsent",
    subtitle: {
      en: "Dashboard & Mobile App for Norway's Local Food Network",
      no: "Dashboard og mobilapp for lokalmatleverandører i REKO-nettverket",
    },
    category: { en: "Dashboard & Mobile App", no: "Dashboard & Mobilapp" },
    color: "#22C55E",
    date: { en: "March 2026", no: "Mars 2026" },
    readTime: { en: "5 min read", no: "5 min lesetid" },
    video: "/videos/reko-produsent-demo.gif",
    mobileVideo: "/videos/reko-produsent-mobile.gif",
    videoType: "desktop",
    meta: {
      client: "REKO Producers",
      industry: { en: "Agriculture / Local Food", no: "Landbruk / Lokalmat" },
      location: { en: "Norway", no: "Norge" },
    },
    content: {
      theClient: {
        en: `REKO (Rejäl Konsumtion) is a Nordic direct sales network connecting local food producers directly with consumers. Started in Finland in 2013 and now active across Norway, Sweden, and beyond, REKO "rings" are Facebook groups where producers post their products and consumers pre-order before scheduled pickup events.

Norwegian producers range from small farms selling eggs and vegetables to artisanal cheese makers, honey producers, and meat farmers. They need tools that work both at home for planning and on-the-go at pickup events.`,
        no: `REKO (Rejäl Konsumtion) er et nordisk direktesalgsnettverk som kobler lokale matprodusenter direkte med forbrukere. Startet i Finland i 2013 og nå aktivt over hele Norge, Sverige og utover, er REKO-"ringer" Facebook-grupper der produsenter legger ut produktene sine og forbrukere forhåndsbestiller før planlagte hentearrangementer.

Norske produsenter varierer fra små gårder som selger egg og grønnsaker til håndverksostmakere, honningprodusenter og kjøttbønder. De trenger verktøy som fungerer både hjemme for planlegging og på farten ved hentearrangementer.`,
      },
      theProblem: {
        en: `REKO producers were managing their businesses with a chaotic mix of tools: Facebook Messenger for orders, spreadsheets for inventory, paper notes for delivery routes. Every week before a REKO pickup event, they'd spend hours manually compiling orders from message threads.

The problems compounded:
- Orders lost in Facebook message floods
- No way to track inventory across multiple REKO rings
- Manual calculation of what to bring to each pickup point
- No historical data for planning production

Producers needed a single system that could pull everything together — a dashboard for planning at home and a mobile app for managing orders at pickup events.`,
        no: `REKO-produsenter administrerte virksomhetene sine med en kaotisk blanding av verktøy: Facebook Messenger for bestillinger, regneark for lager, papirlapper for leveringsruter. Hver uke før et REKO-hentearrangement brukte de timer på å manuelt samle bestillinger fra meldingstråder.

Problemene hopet seg opp:
- Bestillinger tapt i Facebook-meldingsflommer
- Ingen måte å spore lager på tvers av flere REKO-ringer
- Manuell beregning av hva som skal bringes til hvert hentested
- Ingen historiske data for å planlegge produksjon

Produsenter trengte et enkelt system som kunne samle alt — et dashboard for planlegging hjemme og en mobilapp for ordrehåndtering på hentearrangementer.`,
      },
      whatWeImproved: [
        {
          title: { en: "Dashboard with real-time overview", no: "Dashboard med sanntidsoversikt" },
          text: {
            en: `The main dashboard shows everything at a glance: today's orders, weekly revenue, upcoming deliveries, and active REKO rings. Stock levels are color-coded — red for low, yellow for warning, green for healthy. Producers see their entire business state in one view.`,
            no: `Hoveddashboardet viser alt med et blikk: dagens bestillinger, ukens omsetning, kommende leveranser og aktive REKO-ringer. Lagernivåer er fargekodede — rødt for lavt, gult for advarsel, grønt for sunt. Produsenter ser hele forretningsstatusen i én visning.`,
          },
          colors: [
            { name: { en: "REKO Green", no: "REKO Grønn" }, hex: "#22C55E" },
            { name: { en: "Warning Yellow", no: "Advarsel Gul" }, hex: "#F59E0B" },
            { name: { en: "Alert Red", no: "Alarm Rød" }, hex: "#EF4444" },
            { name: { en: "Surface Dark", no: "Overflate Mørk" }, hex: "#1a1a2e" },
          ],
        },
        {
          title: { en: "Multi-ring order management", no: "Bestillingsbehandling for flere ringer" },
          text: {
            en: `Producers can manage orders across multiple REKO rings from one interface. Filter by ring, by date, by status. The system calculates totals automatically — how many eggs for Bergen REKO, how much cheese for Voss, what to pack for each delivery run.`,
            no: `Produsenter kan administrere bestillinger på tvers av flere REKO-ringer fra ett grensesnitt. Filtrer etter ring, dato, status. Systemet beregner totaler automatisk — hvor mange egg til Bergen REKO, hvor mye ost til Voss, hva som skal pakkes for hver leveransetur.`,
          },
        },
        {
          title: { en: "Mobile app for pickup events", no: "Mobilapp for hentearrangementer" },
          text: {
            en: `The React Native mobile app syncs with the dashboard in real-time via Supabase. At pickup events, producers check off orders as customers arrive, update stock on the fly, and see which orders are still outstanding. Push notifications alert them when new orders come in.`,
            no: `React Native-mobilappen synkroniseres med dashboardet i sanntid via Supabase. På hentearrangementer krysser produsenter av bestillinger når kunder ankommer, oppdaterer lager på farten, og ser hvilke bestillinger som fortsatt gjenstår. Push-varsler varsler dem når nye bestillinger kommer inn.`,
          },
        },
      ],
      decisions: [
        {
          title: { en: "Dashboard + mobile instead of desktop app", no: "Dashboard + mobil i stedet for desktop-app" },
          text: {
            en: `We chose a web dashboard with companion mobile app over a traditional desktop application. Producers plan orders on the dashboard at home, then use the mobile app at pickup events. No installation required for the dashboard — just open a browser.`,
            no: `Vi valgte et web-dashboard med tilhørende mobilapp fremfor en tradisjonell desktop-applikasjon. Produsenter planlegger bestillinger på dashboardet hjemme, og bruker så mobilappen på hentearrangementer. Ingen installasjon kreves for dashboardet — bare åpne en nettleser.`,
          },
        },
        {
          title: { en: "Norwegian-first interface", no: "Norsk-først grensesnitt" },
          text: {
            en: `The entire interface is in Norwegian. Buttons say "Ny bestilling" not "New order". Status badges show "Bekreftet" and "Levert". This isn't a translated app — it's built for Norwegian producers from the ground up.`,
            no: `Hele grensesnittet er på norsk. Knapper sier "Ny bestilling", ikke "New order". Statusmerker viser "Bekreftet" og "Levert". Dette er ikke en oversatt app — den er bygget for norske produsenter fra bunnen av.`,
          },
        },
      ],
      theResult: {
        en: `REKO producers now have a professional tool built specifically for their workflow. Order management that took hours happens in minutes. Inventory tracking is automatic. Delivery planning is visual and clear.

The dashboard handles planning at home, while the mobile app keeps producers in control at pickup events. Real-time sync means nothing falls through the cracks. No more lost orders in Facebook message threads. No more manual spreadsheet calculations.

Local food, local software — designed for how Norwegian producers actually work.`,
        no: `REKO-produsenter har nå et profesjonelt verktøy bygget spesielt for arbeidsflyten deres. Ordrebehandling som tok timer skjer på minutter. Lagersporing er automatisk. Leveranseplanlegging er visuell og tydelig.

Dashboardet håndterer planlegging hjemme, mens mobilappen holder produsenter i kontroll på hentearrangementer. Sanntidssynkronisering betyr at ingenting faller mellom sprekkene. Ingen flere tapte bestillinger i Facebook-meldingstråder. Ingen flere manuelle regnearksberegninger.

Lokal mat, lokal programvare — designet for hvordan norske produsenter faktisk jobber.`,
      },
    },
    tags: ["Dashboard", "Mobile App", "Next.js", "React Native", "Supabase", "Agriculture", "Norway"],
  },
};

const uiText = {
  en: {
    backToCases: "Back to Cases",
    client: "Client",
    industry: "Industry",
    location: "Location",
    liveSite: "Live site",
    viewSite: "View site",
    theClient: "The Client",
    theProblem: "The Problem",
    whatWeBuilt: "What We Built",
    decisions: "Decisions Worth Explaining",
    theResult: "The Result",
    seeItLive: "See it live",
    visitSite: "Visit the site to see the finished product.",
    interactiveDemo: "Interactive Demo",
    interactiveDemoDesc: "Try the application directly in your browser.",
  },
  no: {
    backToCases: "Tilbake til Cases",
    client: "Klient",
    industry: "Bransje",
    location: "Sted",
    liveSite: "Live side",
    viewSite: "Se side",
    theClient: "Klienten",
    theProblem: "Problemet",
    whatWeBuilt: "Hva vi bygde",
    decisions: "Beslutninger verdt å forklare",
    theResult: "Resultatet",
    seeItLive: "Se den live",
    visitSite: "Besøk siden for å se det ferdige produktet.",
    interactiveDemo: "Interaktiv Demo",
    interactiveDemoDesc: "Prøv applikasjonen direkte i nettleseren.",
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const { language } = useLanguage();
  const slug = params.slug as string;
  const caseStudy = caseStudies[slug];
  const ui = uiText[language];

  if (!caseStudy) {
    return (
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl mb-4" style={{ fontFamily: "Georgia, serif" }}>
            {language === "en" ? "Case not found" : "Case ikke funnet"}
          </h1>
          <Link href="/cases" className="text-gold hover:text-gold/80">
            {ui.backToCases}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 mb-12">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-foreground/40 hover:text-gold mb-8 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {ui.backToCases}
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 text-xs tracking-wider"
                style={{ backgroundColor: caseStudy.color, color: "#fff" }}
              >
                {caseStudy.category[language]}
              </span>
            </div>

            <h1
              className="text-3xl md:text-4xl mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {caseStudy.title}
            </h1>
            <p className="text-xl text-foreground/70 mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {caseStudy.subtitle[language]}
            </p>
            <p className="text-sm text-foreground/50">
              {caseStudy.date[language]} &middot; {caseStudy.readTime[language]}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Screenshot or Video */}
      {(caseStudy.screenshot || caseStudy.video) && (
        <section className="px-6 mb-16">
          <div className={caseStudy.mobileVideo || caseStudy.videoType === "desktop" ? "max-w-6xl mx-auto" : "max-w-3xl mx-auto"}>
            <FadeInSection>
              <div className={caseStudy.mobileVideo ? "flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12" : "flex justify-center"}>
                {/* Desktop video (MacBook mockup) */}
                {caseStudy.video && caseStudy.videoType === "desktop" && (
                  <div className="relative w-full max-w-3xl">
                    {/* Laptop screen */}
                    <div className="relative bg-[#1c1c1e] rounded-t-xl p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                      {/* Camera notch */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2a2a2a] rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full" />
                      </div>
                      {/* Screen */}
                      <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
                        {caseStudy.video.endsWith('.gif') ? (
                          <img
                            src={caseStudy.video}
                            alt={`${caseStudy.title} desktop demo`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            src={caseStudy.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                    {/* Laptop base/keyboard */}
                    <div className="relative">
                      <div className="h-4 bg-gradient-to-b from-[#2a2a2a] to-[#1c1c1e] rounded-b-lg" />
                      <div className="h-1 bg-[#1c1c1e] mx-auto w-1/4 rounded-b-lg" />
                    </div>
                  </div>
                )}

                {/* Mobile video (iPhone mockup) - shown alongside desktop or standalone */}
                {(caseStudy.mobileVideo || (caseStudy.video && caseStudy.videoType !== "desktop")) && (
                  <div className="relative flex-shrink-0">
                    {/* iPhone frame */}
                    <div
                      className="relative bg-[#1c1c1e] rounded-[55px] p-[14px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                      style={{ width: '320px' }}
                    >
                      {/* Side buttons */}
                      <div className="absolute -left-[3px] top-[90px] w-[3px] h-[22px] bg-[#1c1c1e] rounded-l-sm" />
                      <div className="absolute -left-[3px] top-[125px] w-[3px] h-[44px] bg-[#1c1c1e] rounded-l-sm" />
                      <div className="absolute -left-[3px] top-[176px] w-[3px] h-[44px] bg-[#1c1c1e] rounded-l-sm" />
                      <div className="absolute -right-[3px] top-[132px] w-[3px] h-[58px] bg-[#1c1c1e] rounded-r-sm" />

                      {/* Screen container */}
                      <div className="relative bg-black rounded-[41px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                        {/* Dynamic Island */}
                        <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[92px] h-[27px] bg-black rounded-full z-10 flex items-center justify-center">
                          <div className="w-[7px] h-[7px] bg-[#1c1c1e] rounded-full mr-[36px]" />
                        </div>

                        {/* Video or GIF */}
                        {(caseStudy.mobileVideo || caseStudy.video)?.endsWith('.gif') ? (
                          <img
                            src={caseStudy.mobileVideo || caseStudy.video}
                            alt={`${caseStudy.title} mobile demo`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            src={caseStudy.mobileVideo || caseStudy.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        )}

                        {/* Home indicator */}
                        <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[98px] h-[4px] bg-white/30 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Screenshot only (no video) */}
                {caseStudy.screenshot && !caseStudy.video && !caseStudy.mobileVideo && (
                  <div className="w-full">
                    <Image
                      src={caseStudy.screenshot}
                      alt={`${caseStudy.title} screenshot`}
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-lg border border-gold/20"
                    />
                  </div>
                )}
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Live Demo iframe */}
      {caseStudy.liveDemo && (
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <div className="border border-gold/20 rounded-lg overflow-hidden">
                <div className="bg-gold/5 px-6 py-4 border-b border-gold/20">
                  <h3 className="text-lg" style={{ fontFamily: "Georgia, serif" }}>
                    {ui.interactiveDemo}
                  </h3>
                  <p className="text-sm text-foreground/60">{ui.interactiveDemoDesc}</p>
                </div>
                <div className="relative bg-[#0a0a0f]" style={{ height: '700px' }}>
                  <iframe
                    src={caseStudy.liveDemo}
                    className="w-full h-full border-0"
                    title={`${caseStudy.title} demo`}
                    allow="clipboard-write"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Meta info box */}
      <section className="px-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="border border-gold/20 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-foreground/50 mb-1">{ui.client}</p>
                <p className="text-sm">{caseStudy.meta.client}</p>
              </div>
              <div>
                <p className="text-xs text-foreground/50 mb-1">{ui.industry}</p>
                <p className="text-sm">{caseStudy.meta.industry[language]}</p>
              </div>
              <div>
                <p className="text-xs text-foreground/50 mb-1">{ui.location}</p>
                <p className="text-sm">{caseStudy.meta.location[language]}</p>
              </div>
              {caseStudy.meta.liveUrl && (
                <div>
                  <p className="text-xs text-foreground/50 mb-1">{ui.liveSite}</p>
                  <a
                    href={caseStudy.meta.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold hover:text-gold/80"
                  >
                    {ui.viewSite} ↗
                  </a>
                </div>
              )}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* The Client */}
      <section className="px-6 mb-12">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-xl text-gold mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {ui.theClient}
            </h2>
            <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
              {caseStudy.content.theClient[language]}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 mb-12">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-xl text-gold mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {ui.theProblem}
            </h2>
            <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
              {caseStudy.content.theProblem[language]}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* What We Built */}
      <section className="px-6 mb-12">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-xl text-gold mb-6" style={{ fontFamily: "Georgia, serif" }}>
              {ui.whatWeBuilt}
            </h2>
            <div className="space-y-8">
              {caseStudy.content.whatWeImproved.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    {item.title[language]}
                  </h3>
                  <div className="text-foreground/70 leading-relaxed whitespace-pre-line">
                    {item.text[language]}
                  </div>
                  {item.colors && <ColorSwatch colors={item.colors} />}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Decisions */}
      {caseStudy.content.decisions && (
        <section className="px-6 mb-12 py-12 bg-gold/5">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <h2 className="text-xl text-gold mb-6" style={{ fontFamily: "Georgia, serif" }}>
                {ui.decisions}
              </h2>
              <div className="space-y-8">
                {caseStudy.content.decisions.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>
                      {item.title[language]}
                    </h3>
                    <div className="text-foreground/70 leading-relaxed whitespace-pre-line">
                      {item.text[language]}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* The Result */}
      <section className="px-6 mb-12">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-xl text-gold mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {ui.theResult}
            </h2>
            <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
              {caseStudy.content.theResult[language]}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Live site CTA */}
      {caseStudy.meta.liveUrl && (
        <section className="px-6 mb-16">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <div className="border border-gold/20 p-8 text-center">
                <h3 className="text-lg mb-4" style={{ fontFamily: "Georgia, serif" }}>
                  {ui.seeItLive}
                </h3>
                <p className="text-foreground/60 mb-6 text-sm">
                  {ui.visitSite}
                </p>
                <a
                  href={caseStudy.meta.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-midnight transition-all duration-300 text-sm"
                >
                  {ui.viewSite} ↗
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Tags */}
      <section className="px-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs border border-gold/20 text-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA - Book a meeting */}
      <section className="px-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="border border-gold/20 p-8 text-center bg-gold/[0.02] rounded-lg">
              <h3 className="text-xl mb-4" style={{ fontFamily: "Georgia, serif" }}>
                {language === "en" ? "Interested in a similar project?" : "Interessert i et lignende prosjekt?"}
              </h3>
              <p className="text-foreground/60 mb-6 text-sm">
                {language === "en"
                  ? "Let's discuss how we can help your business achieve similar results."
                  : "La oss diskutere hvordan vi kan hjelpe bedriften din med lignende resultater."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?type=meeting"
                  className="px-6 py-3 bg-gold text-midnight font-medium rounded-md hover:bg-gold/90 transition-all duration-300 text-sm"
                >
                  {language === "en" ? "Book a Free Consultation" : "Book en gratis samtale"}
                </Link>
                <Link
                  href="/contact?type=message"
                  className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-midnight transition-all duration-300 text-sm rounded-md"
                >
                  {language === "en" ? "Send a Message" : "Send en melding"}
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Back to cases */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {ui.backToCases}
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
