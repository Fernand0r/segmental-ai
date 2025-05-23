'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problems from '@/components/Problems'
import Solution from '@/components/Solution'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(anchor.getAttribute('href') || '')
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
          })
        }
      })
    })

    // Intersection Observer for animations (avoids hydration issues)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all elements with fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up')
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Contact />
      <Footer />
    </>
  )
}
