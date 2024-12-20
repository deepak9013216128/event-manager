import Explore from "@/components/home/explore";
import Hero from "@/components/home/hero";
import Offering from "@/components/home/offering";
import { Toolbar } from "@mui/material";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <Offering />
      <Explore />
      <Toolbar />
      <Toolbar />
      <Toolbar />
    </main>
  );
}
