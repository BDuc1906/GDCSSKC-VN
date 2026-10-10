import BannerSlider from "@/components/home/BannerSlider";
import BentoSections from "@/components/home/BentoSections";
import ProgramsSection from "@/components/home/ProgramsSection";
import NewsPreviewSection from "@/components/home/NewsPreviewSection";
import EventsPreviewSection from "@/components/home/EventsPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import FaqSection from "@/components/home/FaqSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";

export default function HomePage() {
  return (
    <>
      <BannerSlider />
      <BentoSections />
      <ProgramsSection />
      <NewsPreviewSection />
      <EventsPreviewSection />
      <TestimonialsSection />
      <GalleryPreviewSection />
      <FaqSection />
      <NewsletterSection />
      <QuickLinksSection />
    </>
  );
}