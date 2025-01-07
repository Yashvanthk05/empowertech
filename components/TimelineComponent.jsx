import React from "react";
import { Timeline } from "./Timeline";
import { motion } from "framer-motion";

const TimelineComponent = () => {
  return (
    <div className="py-16 bg-black text-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
      <h1 className="text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-4">
  SCHEDULE
</h1>
 
      <p className="text-lg text-purple-300">
          Dive into the event timeline and stay on track with all the exciting activities.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <Timeline />
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center mt-12"
      >
        <p className="text-purple-500 text-sm mb-4">
          Don’t miss out on any updates—be part of every moment!
        </p>
      </motion.div>
    </div>
  );
};

export default TimelineComponent;

