import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        className="w-96 h-96 bg-sky-400 rounded-full flex items-center justify-center shadow-xl"
        initial={{ scale: 0.5, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="text-center text-2xl text-red-800 font-bold p-4">
          Happy V-Day an alle Teilnehmer des Grundkurses der Informatik inkl. Grundlagen der Programmierung (30.01.2025 - 20.02.2025)
        </div>
      </motion.div>
    </div>
  );
};

export default App;
