import Hero from "@/components/events/hero";
import LiveEvents from "@/components/events/live-events";
import MoreEvents from "@/components/events/more-events";
import { MapComponent } from "@/components/map/map.component";
import { MapProvider } from "@/components/map/map.provider";
import { Toolbar } from "@mui/material";

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  return (
    <main>
      <Hero />
      <MapProvider>
        <MapComponent height={"100vh"} />
      </MapProvider>
      <Toolbar />
      <LiveEvents />
      <MoreEvents />
    </main>
  );
}
