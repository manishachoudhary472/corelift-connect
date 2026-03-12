import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const EventsSection = () => {
  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="events" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8, bounce: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Participate in running, yoga, intense workouts, and more. Find your next challenge.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex gap-6 overflow-x-auto pb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[320px] bg-card rounded-2xl p-6 card-shadow animate-pulse h-72" />
            ))}
          </div>
        ) : (
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {events?.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, bounce: 0, delay: i * 0.1 }}
                className="min-w-[320px] bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 snap-start flex flex-col"
              >
                <span className="inline-block text-xs font-medium gradient-bg text-primary-foreground px-3 py-1 rounded-full w-fit mb-4">
                  {event.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{event.description}</p>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-5">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> {event.location}</span>
                  <span className="flex items-center gap-2"><Users size={14} /> {event.participants} joined</span>
                </div>

                <Button variant="hero" size="sm" className="w-full">
                  Join Event
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
