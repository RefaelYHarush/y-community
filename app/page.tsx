import {
  Hero,
  Branches,
  Features,
  MoreFromCommunity,
  CTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Main Landing */}
      <Hero />

      {/* Branches Section - All Community Branches */}
      <Branches />

      {/* Features Section - Why Y Community */}
      <Features />

      {/* More From Community - Book & Personal Site */}
      <MoreFromCommunity />

      {/* CTA Section - Final Call to Action */}
      <CTA />
    </>
  );
}
