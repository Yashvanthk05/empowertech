"use client";
import React, { useRef, useEffect } from 'react';
import Hero from '@/components/Hero';
import Themes from '@/components/Themes';
import Timeline from "@/components/TimelineComponent";
import Lenis from 'lenis';

const Page = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <Themes />
      <Timeline />
    </>
  );
}

export default Page;

