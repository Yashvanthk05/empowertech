"use client";
import React, { useRef } from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Themes from '@/components/Themes'
import Timeline from "@/components/TimelineComponent"

import { useEffect } from 'react'


import Lenis from 'lenis'
const page = () => {
  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <>
    <Hero/>
    <Themes/>
    <Timeline/>
    </>
  )
}

export default page
