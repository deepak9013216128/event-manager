import Explore from "@/components/home/explore";
import Hero from "@/components/home/hero";
import LiveEvents from "@/components/home/live-events";
import Offering from "@/components/home/offering";
import Testmonials from "@/components/home/testimonials";
import { Toolbar } from "@mui/material";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <Offering />
      <Explore />
      <LiveEvents />
      <Testmonials />
      <Toolbar />
      <Toolbar />
    </main>
  );
}
