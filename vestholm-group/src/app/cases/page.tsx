"use client";

import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import { useLanguage } from "@/components/LanguageProvider";

const casesData = {
  en: {
    title: "Our Work",
    subtitle: "Real projects we've built for real clients. Click to see what we delivered.",
    cta: {
      title: "Have a project in mind?",
      desc: "Let's discuss how we can help bring your vision to life.",
      button: "START A CONVERSATION",
    },
  },
  no: {
    title: "Vårt Arbeid",
    subtitle: "Ekte prosjekter vi har bygget for ekte kunder. Klikk for å se hva vi leverte.",
    cta: {
      title: "Har du et prosjekt i tankene?",
      desc: "La oss diskutere hvordan vi kan hjelpe deg med å realisere visjonen din.",
      button: "START EN SAMTALE",
    },
  },
};

const cases = [
  {
    slug: "kfk-snickeri",
    title: "KFK Snickeri",
    category: { en: "Corporate Website", no: "Bedriftsnettside" },
    description: {
      en: "Portfolio website for Swedish carpentry company with Carl Malmsten-trained craftsmen.",
      no: "Porteføljenettside for svensk snekkerfirma med Carl Malmsten-utdannede håndverkere.",
    },
    tags: ["HTML/CSS", "Gallery", "Responsive"],
    color: "#8C6D4F",
    liveUrl: "https://stefanslarssen.github.io/kfk-snickeri/",
  },
  {
    slug: "muller-metall",
    title: "Müller Metallverarbeitung",
    category: { en: "Corporate Website", no: "Bedriftsnettside" },
    description: {
      en: "Modern React redesign replacing a broken 2005 static site for German metal processing company.",
      no: "Moderne React-redesign som erstattet en ødelagt 2005-side for tysk metallbearbeidingsbedrift.",
    },
    tags: ["React", "Vite", "Responsive"],
    color: "#B8860B",
    liveUrl: "https://stefanslarssen.github.io/muller-metallverarbeitung/",
  },
  {
    slug: "agrotop",
    title: "Agrotop Kaczmarek",
    category: { en: "Corporate Website", no: "Bedriftsnettside" },
    description: {
      en: "Website for Polish agricultural machinery and equipment dealer.",
      no: "Nettside for polsk forhandler av landbruksmaskiner og utstyr.",
    },
    tags: ["HTML/CSS", "Docker", "Product Catalog"],
    color: "#B91C1C",
    liveUrl: "https://stefanslarssen.github.io/Agrotop-Kaczmarek/",
  },
  {
    slug: "espi",
    title: "Amarrra",
    category: { en: "Mobile App", no: "Mobilapp" },
    description: {
      en: "Marina booking app for Norway with Vipps login, payment, and real-time availability. Pilot area: Espevær.",
      no: "Marinabooking-app for Norge med Vipps innlogging, betaling og sanntids tilgjengelighet. Pilotområde: Espevær.",
    },
    tags: ["React Native", "Expo", "Vipps", "Supabase"],
    color: "#0066CC",
  },
  {
    slug: "nabolagsappen",
    title: "Nabolagsappen",
    category: { en: "Mobile App", no: "Mobilapp" },
    description: {
      en: "Neighborhood community app connecting local residents with location-based features.",
      no: "Nabolagsapp som kobler lokale beboere med stedsbaserte funksjoner.",
    },
    tags: ["React Native", "Expo", "Geolocation"],
    color: "#6B46C1",
  },
  {
    slug: "vestholm-dashboard",
    title: "Vestholm Dashboard",
    category: { en: "AI Dashboard", no: "AI-Dashboard" },
    description: {
      en: "Executive AI dashboard for Vestholm Group with real-time analytics and intelligent insights.",
      no: "Ledelses-AI-dashboard for Vestholm Group med sanntidsanalyse og intelligente innsikter.",
    },
    tags: ["Next.js", "React", "AI", "Analytics"],
    color: "#1E3A5F",
  },
  {
    slug: "fjordvind",
    title: "FjordVind",
    category: { en: "Desktop Software", no: "Desktop-software" },
    description: {
      en: "Coastal protection monitoring system for Norway. Cross-platform desktop application.",
      no: "Kystbeskyttelse-overvåkingssystem for Norge. Kryssplattform desktop-applikasjon.",
    },
    tags: ["Tauri", "React", "Rust"],
    color: "#1E3A5F",
  },
  {
    slug: "reko-produsent",
    title: "REKO Produsent",
    category: { en: "Dashboard & Mobile App", no: "Dashboard & Mobilapp" },
    description: {
      en: "Order management dashboard and mobile app for local food producers in Norway's REKO network.",
      no: "Ordrehåndtering dashboard og mobilapp for lokalmatleverandører i REKO-nettverket.",
    },
    tags: ["Next.js", "React Native", "Supabase"],
    color: "#22C55E",
  },
];

export default function CasesPage() {
  const { language } = useLanguage();
  const t = casesData[language];

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
              {t.title}
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.subtitle}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <FadeInSection key={caseItem.slug} delay={index * 100}>
                <Link href={`/cases/${caseItem.slug}`}>
                  <div className="group border border-gold/20 hover:border-gold/50 transition-all duration-300 overflow-hidden cursor-pointer">
                    {/* Header with color accent */}
                    <div
                      className="h-2 w-full"
                      style={{ backgroundColor: caseItem.color }}
                    />

                    {/* Content */}
                    <div className="p-8">
                      <span className="text-xs tracking-[0.15em] text-gold/60">
                        {caseItem.category[language].toUpperCase()}
                      </span>

                      <h3
                        className="text-2xl text-foreground mt-2 mb-4 group-hover:text-gold transition-colors duration-300"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {caseItem.title}
                      </h3>

                      <p className="text-foreground/60 leading-relaxed mb-6">
                        {caseItem.description[language]}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs border border-gold/20 text-gold/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action links */}
                      <div className="mt-6 flex items-center gap-4">
                        <div className="flex items-center gap-2 text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>{language === "en" ? "View case study" : "Se case-studie"}</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Live site button - outside the main link */}
                {caseItem.liveUrl && (
                  <a
                    href={caseItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="block -mt-px border border-gold/20 border-t-0 p-4 text-center text-sm text-gold hover:bg-gold hover:text-midnight transition-all duration-300"
                  >
                    {language === "en" ? "Visit Live Site" : "Besøk Nettsiden"} ↗
                  </a>
                )}
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 mt-32">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="border border-gold/30 bg-gold/[0.03] p-12 md:p-16 text-center rounded-lg">
              <div className="w-16 h-16 border border-gold/40 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h2
                className="text-2xl md:text-3xl mb-4"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {t.cta.title}
              </h2>
              <p className="text-foreground/60 mb-10 max-w-lg mx-auto">
                {t.cta.desc}
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-gold text-midnight font-medium hover:bg-gold/90 transition-all duration-300 tracking-wider text-sm rounded-md"
              >
                {t.cta.button}
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
