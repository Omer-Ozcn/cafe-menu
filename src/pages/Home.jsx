import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import TeaserSection from '../components/home/TeaserSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <TeaserSection />
    </>
  );
}