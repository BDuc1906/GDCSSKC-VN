import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import EventList from "@/components/events/EventList";
import { upcomingEvents } from "@/data/events";

export default function EventsPreviewSection() {
  const events = upcomingEvents.slice(0, 3);

  return (
    <Section>
      <div className="flex items-end justify-between gap-4">
        <SectionTitle subtitle="Các sự kiện, hội thảo, hội nghị sắp diễn ra.">
          Lịch sự kiện
        </SectionTitle>
        <Button
          href="/events"
          variant="outline"
          className="hidden md:inline-flex"
        >
          Xem tất cả
        </Button>
      </div>
      <EventList events={events} />
    </Section>
  );
}