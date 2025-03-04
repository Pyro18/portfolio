import React from 'react';
import {Header} from "@/components/header";
import {HeroSection} from "@/components/hero-section";
import {AboutSection} from "@/components/about-section";
import {SkillsSection} from "@/components/skills-section";
import {ProjectsSection} from "@/components/projects-section";
import {GithubStatsSection} from "@/components/github-stats-section";
import {ContactSection} from "@/components/contact-section";
import {Footer} from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <GithubStatsSection />
            <ContactSection />
        </main>
        <Footer />
    </div>
  );
}
