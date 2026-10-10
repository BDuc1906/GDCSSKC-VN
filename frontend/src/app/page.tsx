export const instant = false;
import BannerSlider from "@/components/home/BannerSlider";
import StatsSection from "@/components/home/StatsSection";
import IntroSection from "@/components/home/IntroSection";
import NewsPreviewSection from "@/components/home/NewsPreviewSection";
import EventsPreviewSection from "@/components/home/EventsPreviewSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";

export default function HomePage() {
  return (
    <>
      <BannerSlider />
      <StatsSection />
      <IntroSection />
      <NewsPreviewSection />
      <EventsPreviewSection />
      <GalleryPreviewSection />
      <QuickLinksSection />
    </>
  );
}