import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Opportunity } from "@/components/sections/Opportunity";
import { WhyBroadbrand } from "@/components/sections/WhyBroadbrand";
import { Competitors } from "@/components/sections/Competitors";
import { Strategy } from "@/components/sections/Strategy";
import { Creative } from "@/components/sections/Creative";
import { Budget } from "@/components/sections/Budget";
import { ContentCalendar } from "@/components/sections/ContentCalendar";
import { DSG } from "@/components/sections/DSG";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <Opportunity />
      <div className="divider" />
      <WhyBroadbrand />
      <div className="divider" />
      <Competitors />
      <div className="divider" />
      <Strategy />
      <div className="divider" />
      <Creative />
      <div className="divider" />
      <Budget />
      <div className="divider" />
      <ContentCalendar />
      <div className="divider" />
      <DSG />
      <div className="divider" />
      <CTA />
    </>
  );
}
