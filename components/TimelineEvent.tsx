"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface TimelineEventProps {
  title: string;
  time: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function TimelineEvent({
  title,
  time,
  description,
  icon: Icon,
  color,
  index,
  isActive,
  onClick,
}: TimelineEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="min-w-[300px] relative"
      onClick={onClick}
    >
      <div
        className={`
          relative p-6 rounded-xl h-[250px] backdrop-blur-xl border border-white/10
          ${isActive ? "bg-white/15" : "bg-white/5"}
          transition-all duration-500 ease-in hover:bg-white/20 cursor-pointer
        `}
      >
        <div
          className={`${color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-sm text-blue-200 mb-2">{time}</p>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <div
        className={`absolute -bottom-2 left-1/2 w-4 h-4 rounded-full ${color} transform -translate-x-1/2`}
      />
    </motion.div>
  );
}

