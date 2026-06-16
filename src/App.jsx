import { useState, useEffect, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import profilePhoto from './assets/profile.jpeg'

// Helper functions for profile color extraction and theme generation
function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  }
}

function hslToRgb(h, s, l) {
  s /= 100
  l /= 100
  const k = n => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))
  return [
    Math.round(255 * f(0)),
    Math.round(255 * f(8)),
    Math.round(255 * f(4))
  ]
}

const clamp = (val, min, max) => Math.max(min, Math.min(max, val))

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })
  const [profileColor, setProfileColor] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  // Extract color from profile image dynamically on mount
  useEffect(() => {
    const img = new Image()
    img.src = profilePhoto
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = 16
        canvas.height = 16
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, 16, 16)
        const imageData = ctx.getImageData(0, 0, 16, 16).data
        
        let bestColor = null
        let maxScore = -1
        
        let totalR = 0, totalG = 0, totalB = 0, activeCount = 0

        for (let i = 0; i < imageData.length; i += 4) {
          const r = imageData[i]
          const g = imageData[i + 1]
          const b = imageData[i + 2]
          const a = imageData[i + 3]
          
          if (a < 128) continue
          
          totalR += r
          totalG += g
          totalB += b
          activeCount++

          const hsl = rgbToHsl(r, g, b)
          
          // Calculate vibrancy score:
          // Prefer colors with high saturation and mid lightness.
          const lDist = Math.abs(hsl.l - 50)
          const lFactor = (50 - lDist) / 50 // 0 to 1.0 (peaks at 50% lightness)
          
          let score = hsl.s * lFactor
          
          // Downweight skin-like tones (Hue 10-35) slightly to prefer background/clothing colors
          if (hsl.h >= 10 && hsl.h <= 35) {
            score *= 0.5
          }
          
          // Downweight yellow-greens (Hue 60-90) slightly to avoid muddy shades
          if (hsl.h >= 60 && hsl.h <= 90) {
            score *= 0.75
          }

          if (score > maxScore) {
            maxScore = score
            bestColor = hsl
          }
        }
        
        if (bestColor && maxScore > 8) {
          setProfileColor(bestColor)
        } else if (activeCount > 0) {
          const avgR = Math.round(totalR / activeCount)
          const avgG = Math.round(totalG / activeCount)
          const avgB = Math.round(totalB / activeCount)
          setProfileColor(rgbToHsl(avgR, avgG, avgB))
        }
      } catch (e) {
        console.error("Failed to extract color from profile image:", e)
      }
    }
  }, [])

  // Apply HSL colors to CSS variables dynamically based on theme mode
  useEffect(() => {
    if (!profileColor) return
    let { h, s, l } = profileColor
    const root = document.documentElement

    // Polish hue to look extremely premium:
    // If it's a warm yellow/green-yellow (45 to 80), shift it slightly towards golden/amber (42)
    if (h >= 45 && h <= 80) {
      h = 42
      s = Math.max(s, 65) // Ensure luxury gold vibrancy
    }

    // Helper functions to convert HSL to RGB (needed for rgb CSS variables)
    const hslToRgb = (h, s, l) => {
      s /= 100
      l /= 100
      const k = n => (n + h / 30) % 12
      const a = s * Math.min(l, 1 - l)
      const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))
      return [
        Math.round(255 * f(0)),
        Math.round(255 * f(8)),
        Math.round(255 * f(4))
      ]
    }

    if (darkMode) {
      // Dark theme: Sleek midnight slate tinted with photo color, glassmorphic surfaces
      const bgS = clamp(s * 0.2, 7, 11) // extremely muted, modern slate background
      const bgL = 7 // rich deep pitch
      
      const surfS = clamp(s * 0.18, 7, 9)
      const surfL = 11
      
      const cardS = clamp(s * 0.15, 6, 8)
      const cardL = 14
      
      const bgRgb = hslToRgb(h, bgS, bgL)
      const surfRgb = hslToRgb(h, surfS, surfL)
      const cardRgb = hslToRgb(h, cardS, cardL)
      
      const cyanS = clamp(s * 1.3, 75, 92) // punchy dynamic accent
      const cyanL = 62 // glowing readable text
      const cyanDimS = clamp(s * 1.1, 55, 75)
      const cyanDimL = 44
      
      root.style.setProperty('--color-bg-rgb', bgRgb.join(', '))
      root.style.setProperty('--color-bg', `rgb(${bgRgb.join(', ')})`)
      
      root.style.setProperty('--color-surface-rgb', surfRgb.join(', '))
      root.style.setProperty('--color-surface', `rgb(${surfRgb.join(', ')})`)
      
      root.style.setProperty('--color-card-rgb', cardRgb.join(', '))
      root.style.setProperty('--color-card', `rgb(${cardRgb.join(', ')})`)
      
      root.style.setProperty('--color-border', `rgba(${hslToRgb(h, 20, 80).join(', ')}, 0.08)`)
      
      const cyanRgb = hslToRgb(h, cyanS, cyanL)
      const cyanDimRgb = hslToRgb(h, cyanDimS, cyanDimL)
      
      root.style.setProperty('--color-cyan', `rgb(${cyanRgb.join(', ')})`)
      root.style.setProperty('--color-cyan-dim', `rgb(${cyanDimRgb.join(', ')})`)
      root.style.setProperty('--color-blue', `rgb(${cyanRgb.join(', ')})`)
    } else {
      // Light theme: Crisp minimal layout, clean pure-white cards, dark legible typography
      const bgS = clamp(s * 0.12, 5, 8)
      const bgL = 98.5 // crisp paper
      
      const surfS = clamp(s * 0.1, 4, 6)
      const surfL = 94.5
      
      const bgRgb = hslToRgb(h, bgS, bgL)
      const surfRgb = hslToRgb(h, surfS, surfL)
      const cardRgb = [255, 255, 255] // pristine white card contrast
      
      const cyanS = clamp(s * 1.1, 65, 85)
      const cyanL = 33 // deep professional text contrast
      const cyanDimS = clamp(s, 50, 70)
      const cyanDimL = 48
      
      root.style.setProperty('--color-bg-rgb', bgRgb.join(', '))
      root.style.setProperty('--color-bg', `rgb(${bgRgb.join(', ')})`)
      
      root.style.setProperty('--color-surface-rgb', surfRgb.join(', '))
      root.style.setProperty('--color-surface', `rgb(${surfRgb.join(', ')})`)
      
      root.style.setProperty('--color-card-rgb', cardRgb.join(', '))
      root.style.setProperty('--color-card', `rgb(${cardRgb.join(', ')})`)
      
      root.style.setProperty('--color-border', `rgba(${hslToRgb(h, 20, 40).join(', ')}, 0.07)`)
      
      const cyanRgb = hslToRgb(h, cyanS, cyanL)
      const cyanDimRgb = hslToRgb(h, cyanDimS, cyanDimL)
      
      root.style.setProperty('--color-cyan', `rgb(${cyanRgb.join(', ')})`)
      root.style.setProperty('--color-cyan-dim', `rgb(${cyanDimRgb.join(', ')})`)
      root.style.setProperty('--color-blue', `rgb(${cyanRgb.join(', ')})`)
    }
  }, [profileColor, darkMode])

  if (loading) return <Loader />

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans text-gray-900 dark:text-white relative overflow-x-hidden">
      {/* Global Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-blue-400/10 dark:bg-blue-600/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[5%] w-[35%] h-[35%] rounded-full bg-indigo-400/10 dark:bg-indigo-600/5 blur-[120px]"
        />
      </div>

      <div className="relative z-10">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App
