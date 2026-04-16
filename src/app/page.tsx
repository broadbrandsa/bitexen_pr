import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Objective } from "@/components/sections/Objective";
import { Leadership } from "@/components/sections/Leadership";
import { ContentIdeas } from "@/components/sections/ContentIdeas";
import { ContentCalendar } from "@/components/sections/ContentCalendar";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <Objective />
      <div className="divider" />
      <Leadership />
      <div className="divider" />
      <ContentIdeas />
      <div className="divider" />
      <ContentCalendar />
      <div className="divider" />
      <CTA />
    </>
  );
}
