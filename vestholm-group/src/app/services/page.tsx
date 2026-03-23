"use client";

import { useState } from "react";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import { useLanguage } from "@/components/LanguageProvider";

const serviceCategories = ["websites", "apps", "dashboards", "software"] as const;

const servicesData = {
  en: {
    title: "Our Services",
    subtitle: "From simple websites to complex web applications, we deliver digital solutions that drive results.",
    categories: {
      websites: "Website Development",
      apps: "Mobile/Web Apps",
      dashboards: "Custom Dashboards",
      software: "Software",
    },
    sections: [
      {
        id: "websites",
        num: "01",
        title: "Website Development",
        description: "We create custom websites that are visually stunning, fast-loading, and optimized for conversions. Whether you need a simple landing page or a complex multi-page website, we build it from scratch to match your brand and goals — fully responsive, SEO-friendly, and designed with your users in mind.",
        tags: ["Responsive Design", "SEO Optimization", "Fast Loading", "CMS Integration", "Analytics Setup"],
        subServices: [
          {
            title: "E-commerce",
            desc: "Online stores with product management, secure payments, inventory tracking, and order management.",
          },
          {
            title: "Maintenance & Support",
            desc: "Ongoing updates, security patches, performance optimization, and bug fixes so you can focus on your business.",
          },
          {
            title: "Hosting & Deployment",
            desc: "Secure, fast hosting with CI/CD pipelines, SSL certificates, domain management, and uptime monitoring.",
          },
        ],
        cases: [
          { name: "KFK Snickeri", type: "Corporate Website", client: "Swedish carpentry company with gallery-focused design.", slug: "kfk-snickeri" },
          { name: "Müller Metallverarbeitung", type: "Corporate Website", client: "German metal processing company. Modern React/Vite redesign of legacy site.", slug: "muller-metall" },
          { name: "Agrotop Kaczmarek", type: "Corporate Website", client: "Polish agricultural machinery and equipment dealer.", slug: "agrotop" },
        ],
        casesTitle: "Websites we have delivered",
      },
      {
        id: "apps",
        num: "02",
        title: "Mobile/Web Apps",
        description: "Need more than a website? We build powerful web applications and mobile experiences that handle complex business logic, user authentication, real-time updates, and scale with your growth. From SaaS platforms to internal operations tools — fully custom, production-ready.",
        tags: ["React / Vue / Next.js", "User Authentication", "Real-time Features", "Cloud Deployment"],
        subServices: [
          {
            title: "SaaS Platforms",
            desc: "Multi-user platforms with role-based access, subscription billing, team management, and the full feature set your customers expect from a modern SaaS product.",
          },
          {
            title: "Real-time Applications",
            desc: "Live data feeds, WebSockets, collaborative editing, instant notifications — we build the reactive layer that makes your application feel immediate and responsive.",
          },
        ],
        cases: [
          { name: "Amarrra", type: "Mobile App · iOS & Android", client: "Marina booking app for Norway with Vipps login/payment and real-time availability.", slug: "espi" },
          { name: "Nabolagsappen", type: "Mobile App · React Native", client: "Neighborhood community app connecting local residents with location-based features.", slug: "nabolagsappen" },
        ],
        casesTitle: "Apps we have built",
      },
      {
        id: "dashboards",
        num: "03",
        title: "Custom Dashboards",
        description: "We design and build data dashboards that turn raw numbers into clear, actionable insight. Sales analytics, operational monitoring, customer metrics — all in one place, always up to date.",
        tags: ["Real-time Data", "Custom KPIs", "SQL / NoSQL", "Data Visualization"],
        subServices: [
          {
            title: "Analytics Dashboards",
            desc: "Intuitive interfaces displaying your key metrics and KPIs in real-time. We design for clarity — the right chart, the right layout, zero clutter.",
          },
          {
            title: "Database Solutions",
            desc: "We design and implement database solutions that keep your data organized, secure, and accessible — SQL or NoSQL depending on your requirements.",
          },
        ],
        cases: [
          { name: "Vestholm Dashboard", type: "AI Dashboard", client: "Executive AI dashboard with real-time analytics and intelligent insights for investment portfolio.", slug: "vestholm-dashboard" },
          { name: "REKO Produsent", type: "Dashboard & Mobile App", client: "Order management system for local food producers in Norway's REKO network.", slug: "reko-produsent" },
        ],
        casesTitle: "Dashboards we have built",
      },
      {
        id: "software",
        num: "04",
        title: "Software",
        description: "We build software — from standalone desktop tools and AI integrations to the APIs that power your applications. Everything custom, everything production-ready.",
        tags: ["Desktop Apps", "API Development", "AI Integration", "Automation"],
        subServices: [
          {
            title: "Software Products",
            desc: "Beyond client work, we build our own tools to solve real workflow problems.",
          },
          {
            title: "API Development & Integration",
            desc: "RESTful and GraphQL APIs that connect your systems and automate workflows. Third-party integrations, payment processors, CRMs — we handle the plumbing.",
          },
        ],
        cases: [
          { name: "FjordVind", type: "Desktop App · Tauri", client: "Coastal protection monitoring system for Norway. Cross-platform desktop application.", slug: "fjordvind" },
        ],
        casesTitle: "Software we have made",
      },
    ],
  },
  no: {
    title: "Våre Tjenester",
    subtitle: "Fra enkle nettsider til komplekse webapplikasjoner, vi leverer digitale løsninger som gir resultater.",
    categories: {
      websites: "Nettside-utvikling",
      apps: "Mobil/Web-apper",
      dashboards: "Dashboards",
      software: "Software",
    },
    sections: [
      {
        id: "websites",
        num: "01",
        title: "Nettside-utvikling",
        description: "Vi lager skreddersydde nettsider som er visuelt imponerende, raske og optimalisert for konvertering. Enten du trenger en enkel landingsside eller en kompleks flersidenettsted, bygger vi det fra bunnen av for å matche merkevaren din — fullt responsivt, SEO-vennlig og designet med brukerne i tankene.",
        tags: ["Responsivt Design", "SEO-optimalisering", "Rask Lasting", "CMS-integrasjon", "Analyse-oppsett"],
        subServices: [
          {
            title: "Nettbutikk",
            desc: "Nettbutikker med produkthåndtering, sikker betaling, lagerstyring og ordrebehandling.",
          },
          {
            title: "Vedlikehold & Support",
            desc: "Løpende oppdateringer, sikkerhetsoppdateringer, ytelsesoptimalisering og feilrettinger slik at du kan fokusere på virksomheten din.",
          },
          {
            title: "Hosting & Utrulling",
            desc: "Sikker, rask hosting med CI/CD-pipelines, SSL-sertifikater, domeneadministrasjon og oppetidsovervåking.",
          },
        ],
        cases: [
          { name: "KFK Snickeri", type: "Bedriftsnettside", client: "Svensk snekkerfirma med galleri-fokusert design.", slug: "kfk-snickeri" },
          { name: "Müller Metallverarbeitung", type: "Bedriftsnettside", client: "Tysk metallbearbeidingsbedrift. Moderne React/Vite-redesign av gammel side.", slug: "muller-metall" },
          { name: "Agrotop Kaczmarek", type: "Bedriftsnettside", client: "Polsk forhandler av landbruksmaskiner og utstyr.", slug: "agrotop" },
        ],
        casesTitle: "Nettsider vi har levert",
      },
      {
        id: "apps",
        num: "02",
        title: "Mobil/Web-apper",
        description: "Trenger du mer enn en nettside? Vi bygger kraftige webapplikasjoner og mobilopplevelser som håndterer kompleks forretningslogikk, brukerautentisering, sanntidsoppdateringer og skalerer med veksten din. Fra SaaS-plattformer til interne driftsverktøy — fullt tilpasset, produksjonsklart.",
        tags: ["React / Vue / Next.js", "Brukerautentisering", "Sanntidsfunksjoner", "Sky-utrulling"],
        subServices: [
          {
            title: "SaaS-plattformer",
            desc: "Flerbrukerplattformer med rollebasert tilgang, abonnementsfakturering, teamadministrasjon og det fulle funksjonssettet kundene dine forventer av et moderne SaaS-produkt.",
          },
          {
            title: "Sanntidsapplikasjoner",
            desc: "Live datastrømmer, WebSockets, samarbeidende redigering, umiddelbare varsler — vi bygger det reaktive laget som gjør applikasjonen din umiddelbar og responsiv.",
          },
        ],
        cases: [
          { name: "Amarrra", type: "Mobilapp · iOS & Android", client: "Marinabooking-app for Norge med Vipps innlogging/betaling og sanntids tilgjengelighet.", slug: "espi" },
          { name: "Nabolagsappen", type: "Mobilapp · React Native", client: "Nabolagsapp som kobler lokale beboere med stedsbaserte funksjoner.", slug: "nabolagsappen" },
        ],
        casesTitle: "Apper vi har bygget",
      },
      {
        id: "dashboards",
        num: "03",
        title: "Dashboards",
        description: "Vi designer og bygger datadashboards som gjør rådata til klar, handlingsdyktig innsikt. Salgsanalyse, driftsovervåking, kundemålinger — alt på ett sted, alltid oppdatert.",
        tags: ["Sanntidsdata", "Tilpassede KPIer", "SQL / NoSQL", "Datavisualisering"],
        subServices: [
          {
            title: "Analyse-dashboards",
            desc: "Intuitive grensesnitt som viser nøkkeltallene og KPIene dine i sanntid. Vi designer for klarhet — riktig diagram, riktig layout, null rot.",
          },
          {
            title: "Databaseløsninger",
            desc: "Vi designer og implementerer databaseløsninger som holder dataene dine organisert, sikre og tilgjengelige — SQL eller NoSQL avhengig av kravene dine.",
          },
        ],
        cases: [
          { name: "Vestholm Dashboard", type: "AI-Dashboard", client: "Ledelses-AI-dashboard med sanntidsanalyse og intelligente innsikter for investeringsportefølje.", slug: "vestholm-dashboard" },
          { name: "REKO Produsent", type: "Dashboard & Mobilapp", client: "Ordrehåndteringssystem for lokalmatleverandører i REKO-nettverket.", slug: "reko-produsent" },
        ],
        casesTitle: "Dashboards vi har bygget",
      },
      {
        id: "software",
        num: "04",
        title: "Software",
        description: "Vi bygger software — fra frittstående desktop-verktøy og AI-integrasjoner til APIene som driver applikasjonene dine. Alt skreddersydd, alt produksjonsklart.",
        tags: ["Desktop-apper", "API-utvikling", "AI-integrasjon", "Automatisering"],
        subServices: [
          {
            title: "Software-produkter",
            desc: "Utover klientarbeid bygger vi våre egne verktøy for å løse reelle arbeidsflytproblemer.",
          },
          {
            title: "API-utvikling & Integrasjon",
            desc: "RESTful og GraphQL APIer som kobler systemene dine og automatiserer arbeidsflyter. Tredjepartsintegrasjoner, betalingsprosessorer, CRM-systemer — vi håndterer rørleggingen.",
          },
        ],
        cases: [
          { name: "FjordVind", type: "Desktop-app · Tauri", client: "Kystbeskyttelse-overvåkingssystem for Norge. Kryssplattform desktop-applikasjon.", slug: "fjordvind" },
        ],
        casesTitle: "Software vi har laget",
      },
    ],
  },
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const data = servicesData[language];
  const [activeCategory, setActiveCategory] = useState<typeof serviceCategories[number]>("websites");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {data.title}
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <p className="text-lg text-foreground/70 leading-relaxed">
              {data.subtitle}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-6 mb-16 sticky top-20 z-40 bg-background/95 backdrop-blur-sm py-4 border-b border-gold/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  scrollToSection(cat);
                }}
                className={`px-4 py-2 text-sm tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? "border-gold bg-gold text-midnight"
                    : "border-gold/30 text-foreground/70 hover:border-gold hover:text-gold"
                }`}
              >
                {data.categories[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <div className="px-6">
        <div className="max-w-5xl mx-auto space-y-32">
          {data.sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="scroll-mt-40">
              <FadeInSection>
                {/* Section Header */}
                <div className="mb-8">
                    <h2
                      className="text-3xl md:text-4xl text-gold mb-4"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {section.title}
                    </h2>
                    <p className="text-foreground/70 leading-relaxed max-w-3xl">
                      {section.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {section.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs tracking-wider border border-gold/30 text-gold/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Sub-services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {section.subServices.map((sub) => (
                    <div
                      key={sub.title}
                      className="p-6 border border-gold/20 hover:border-gold/40 transition-colors duration-300"
                    >
                      <h3
                        className="text-lg text-gold mb-3"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {sub.title}
                      </h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Cases */}
                <div>
                  <h4 className="text-sm tracking-[0.15em] text-foreground/50 mb-6">
                    {section.casesTitle.toUpperCase()}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.cases.map((caseItem) => (
                      <Link
                        key={caseItem.name}
                        href={`/cases/${caseItem.slug}`}
                        className="group p-5 bg-gold/5 border border-gold/10 hover:border-gold/30 transition-all duration-300 block"
                      >
                        <span className="text-xs text-gold/60 tracking-wider">
                          {caseItem.type}
                        </span>
                        <h5
                          className="text-lg text-foreground mt-1 mb-2 group-hover:text-gold transition-colors"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {caseItem.name}
                        </h5>
                        <p className="text-xs text-foreground/50">
                          {caseItem.client}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </section>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="px-6 mt-32">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {language === "en" ? "Ready to start your project?" : "Klar til å starte prosjektet ditt?"}
            </h2>
            <p className="text-foreground/70 mb-8">
              {language === "en"
                ? "Let's discuss how we can help bring your vision to life."
                : "La oss diskutere hvordan vi kan hjelpe deg med å realisere visjonen din."}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-midnight transition-all duration-300 tracking-wider text-sm"
            >
              {language === "en" ? "GET IN TOUCH" : "TA KONTAKT"}
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
