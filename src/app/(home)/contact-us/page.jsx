import ContactHero from "@/components/contact-us/hero";
import KeepInTouch from "@/components/contact-us/keep-in-touch";
import { Toolbar } from "@mui/material";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  return (
    <main>
      <ContactHero />
      <KeepInTouch />
    </main>
  );
}
