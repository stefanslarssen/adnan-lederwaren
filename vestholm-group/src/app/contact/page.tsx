"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import FadeInSection from "@/components/FadeInSection";
import ProjectForm from "./ProjectForm";
import BookingForm from "./BookingForm";
import { useLanguage } from "@/components/LanguageProvider";

function ContactContent() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const [wantsMeeting, setWantsMeeting] = useState<boolean | null>(null);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "meeting") {
      setWantsMeeting(true);
    } else if (type === "message") {
      setWantsMeeting(false);
    }
  }, [searchParams]);

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInSection>
            <h1
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {language === "en" ? "Get in Touch" : "Ta Kontakt"}
            </h1>
            <p className="text-foreground/60 leading-relaxed">
              {language === "en"
                ? "We'd love to hear about your project. Choose how you'd like to connect with us."
                : "Vi vil gjerne høre om prosjektet ditt. Velg hvordan du vil ta kontakt med oss."}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Choice */}
      {wantsMeeting === null && (
        <section className="px-6 mb-12">
          <div className="max-w-2xl mx-auto">
            <FadeInSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Option 1: Book a meeting */}
                <button
                  onClick={() => setWantsMeeting(true)}
                  className="p-8 border border-gold/20 hover:border-gold/50 rounded-lg text-left transition-all duration-300 group"
                >
                  <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <h3
                    className="text-xl mb-2 group-hover:text-gold transition-colors"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {language === "en" ? "Book a Free Consultation" : "Book en gratis samtale"}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {language === "en"
                      ? "Schedule a phone or video call at a time that works for you. We'll discuss your project in detail."
                      : "Planlegg en telefon- eller videosamtale når det passer for deg. Vi diskuterer prosjektet ditt i detalj."}
                  </p>
                </button>

                {/* Option 2: Just send a message */}
                <button
                  onClick={() => setWantsMeeting(false)}
                  className="p-8 border border-gold/20 hover:border-gold/50 rounded-lg text-left transition-all duration-300 group"
                >
                  <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <h3
                    className="text-xl mb-2 group-hover:text-gold transition-colors"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {language === "en" ? "Send a Message" : "Send en melding"}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {language === "en"
                      ? "Tell us about your project and we'll get back to you within 24 hours."
                      : "Fortell oss om prosjektet ditt, så svarer vi innen 24 timer."}
                  </p>
                </button>
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Form based on choice */}
      {wantsMeeting !== null && (
        <section className="px-6 mb-12">
          <div className="max-w-2xl mx-auto">
            <FadeInSection>
              {/* Back button */}
              <button
                onClick={() => setWantsMeeting(null)}
                className="flex items-center gap-2 text-foreground/50 hover:text-gold mb-8 text-sm transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                {language === "en" ? "Back to options" : "Tilbake til valg"}
              </button>

              {/* Title based on choice */}
              <h2
                className="text-2xl mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {wantsMeeting
                  ? (language === "en" ? "Book a Free Consultation" : "Book en gratis samtale")
                  : (language === "en" ? "Send Us a Message" : "Send oss en melding")}
              </h2>
              <p className="text-foreground/60 mb-8">
                {wantsMeeting
                  ? (language === "en"
                      ? "Choose a date and time that works for you for a phone or video call. No obligation, just an honest conversation."
                      : "Velg en dato og tid som passer for deg for en telefon- eller videosamtale. Ingen forpliktelser, bare en ærlig samtale.")
                  : (language === "en"
                      ? "Tell us about your project and we'll get back to you within 24 hours."
                      : "Fortell oss om prosjektet ditt, så svarer vi innen 24 timer.")}
              </p>

              {/* Show appropriate form */}
              {wantsMeeting ? <BookingForm /> : <ProjectForm />}
            </FadeInSection>
          </div>
        </section>
      )}

      {/* Contact Info */}
      <section className="px-6 mt-16">
        <div className="max-w-4xl mx-auto">
          <FadeInSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-sm tracking-[0.15em] text-foreground/50 mb-3">
                  {t.contact.info.emailLabel}
                </h3>
                <a
                  href="mailto:hello@vestholm.com"
                  className="text-foreground/80 hover:text-gold transition-colors duration-300"
                >
                  {t.contact.info.email}
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.15em] text-foreground/50 mb-3">
                  {t.contact.info.locationLabel}
                </h3>
                <p className="text-foreground/80">
                  {t.contact.info.location}
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.15em] text-foreground/50 mb-3">
                  {t.contact.info.hoursLabel}
                </h3>
                <p className="text-foreground/80">
                  {t.contact.info.hours}<br />
                  {t.contact.info.hoursTime}
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-32 pb-20 text-center">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
