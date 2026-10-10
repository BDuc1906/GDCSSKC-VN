import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import EventList from "@/components/events/EventList";
import { upcomingEvents } from "@/data/events";

export const metadata = { title: "Lịch sự kiện" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Lịch sự kiện"
        description="Các sự kiện, hội nghị, hội thảo sắp diễn ra của Hội."
      />
      <Section>
        <EventList events={upcomingEvents} />
      </Section>
    </>
  );
}