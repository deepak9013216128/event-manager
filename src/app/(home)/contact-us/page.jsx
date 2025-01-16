import ContactHero from "@/components/contact-us/hero";
import KeepInTouch from "@/components/contact-us/keep-in-touch";
import { MapComponent } from "@/components/map/map.component";
import { MapProvider } from "@/components/map/map.provider";
import { Toolbar } from "@mui/material";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  return (
    <main>
      <ContactHero />
      <KeepInTouch />
      <MapProvider>
        <MapComponent />
      </MapProvider>
    </main>
  );
}
