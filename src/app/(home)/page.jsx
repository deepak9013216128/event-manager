import Explore from "@/components/home/explore";
import Hero from "@/components/home/hero";
import LiveEvents from "@/components/home/live-events";
import Offering from "@/components/home/offering";
import Testmonials from "@/components/home/testimonials";
import { MapComponent } from "@/components/map/map.component";
import { MapProvider } from "@/components/map/map.provider";
import { Toolbar } from "@mui/material";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <Offering />
      <Explore />
      <LiveEvents />
      <MapProvider>
        <MapComponent />
      </MapProvider>
      <Testmonials />
      <Toolbar />
      <Toolbar />
    </main>
  );
}
