import BgBubble from "@/components/images/bubble";
import OnboardingForm from "@/components/onboarding/OnboardingForm";

export default function Onboarding({}) {
  return (
    <BgBubble
      items={[
        {
          size: `50vw`, // Random size
          top: `-30%`, // Random position Y-axis
          left: `-10%`, // Random position X-axis
        },
      ]}
    >
      <OnboardingForm />
    </BgBubble>
  );
}
