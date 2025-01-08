"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Code2,
  Flag,
  Lightbulb,
  Presentation,
  Utensils,
  Moon,
  Coffee,
  Trophy,
} from "lucide-react";
import {TimelineEvent}  from "./TimelineEvent"

const timelineData = [
  {
    title: "Opening Ceremony & Guest Speech",
    time: "Day 1 - 3:00 PM",
    description: "Welcome address and guest speech to kick off the hackathon",
    icon: Presentation,
    color: "bg-purple-500",
  },
  {
    title: "Hack Begins",
    time: "Day 1 - 4:00 PM",
    description: "Teams start working on their projects",
    icon: Code2,
    color: "bg-red-500",
  },
  {
    title: "Dinner",
    time: "Day 1 - 8:30 PM to 9:30 PM",
    description: "Break for dinner and refreshments",
    icon: Utensils,
    color: "bg-yellow-500",
  },
  {
    title: "Overnight Work",
    time: "Day 1 - 9:30 PM to 12:00 AM",
    description: "Teams continue working overnight",
    icon: Moon,
    color: "bg-blue-500",
  },
  {
    title: "Overnight Hacking",
    time: "Day 2 - 12:00 AM to 8:00 AM",
    description: "Hacking continues through the night",
    icon: Clock,
    color: "bg-indigo-500",
  },
  {
    title: "Breakfast",
    time: "Day 2 - 8:00 AM to 9:00 AM",
    description: "Morning break with breakfast served",
    icon: Coffee,
    color: "bg-green-500",
  },
  {
    title: "Hackathon Continues",
    time: "Day 2 - 9:00 AM to 12:00 PM",
    description: "Teams refine and finalize their projects",
    icon: Code2,
    color: "bg-red-500",
  },
  {
    title: "Lunch",
    time: "Day 2 - 12:00 PM to 1:00 PM",
    description: "Break for lunch",
    icon: Utensils,
    color: "bg-yellow-500",
  },
  {
    title: "Hackathon Ends",
    time: "Day 2 - 1:00 PM to 3:00 PM",
    description: "Final touches and project submissions",
    icon: Flag,
    color: "bg-orange-500",
  },
  {
    title: "Evaluation & Pitching",
    time: "Day 2 - 3:00 PM to 4:00 PM",
    description: "Teams present their projects for evaluation",
    icon: Lightbulb,
    color: "bg-pink-500",
  },
  {
    title: "Awards Ceremony & Closing Remarks",
    time: "Day 2 - 4:30 PM to 5:30 PM",
    description: "Winners announced and closing remarks",
    icon: Trophy,
    color: "bg-orange-500",
  },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = eventRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { root: scrollRef.current, threshold: 0.5 }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Scroll Buttons */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all"
      >
        <motion.div
          whileHover={{ x: -3 }}
          className="w-6 h-6 border-l-2 border-t-2 border-white transform -rotate-45"
        />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all"
      >
        <motion.div
          whileHover={{ x: 3 }}
          className="w-6 h-6 border-r-2 border-t-2 border-white transform rotate-45"
        />
      </button>

      {/* Timeline Container */}
      <div ref={scrollRef} className="overflow-x-auto hide-scrollbar relative py-12">
        <div className="flex gap-8 px-16">
          {timelineData.map((event, index) => (
            <TimelineEvent
              key={index}
              {...event}
              index={index}
              isActive={activeIndex === index}
              ref={(el) => (eventRefs.current[index] = el)}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

