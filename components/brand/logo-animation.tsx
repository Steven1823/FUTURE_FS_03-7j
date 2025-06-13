"use client"

import { useEffect, useState, useRef } from "react"

export default function LogoAnimation({ animate = true }) {
  const svgRef = useRef(null)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!animate) return

    const interval = setInterval(() => {
      setPhase((prev) => (prev + 0.1) % (Math.PI * 2))
    }, 50)

    return () => clearInterval(interval)
  }, [animate])

  const path1 = `M30,${65 + Math.sin(phase) * 5} Q50,${35 + Math.sin(phase + 1) * 5} 70,${65 + Math.sin(phase) * 5}`
  const path2 = `M25,${50 + Math.sin(phase + 0.5) * 5} Q50,${20 + Math.sin(phase + 1.5) * 5} 75,${50 + Math.sin(phase + 0.5) * 5}`
  const path3 = `M35,${35 + Math.sin(phase + 1) * 5} Q50,${50 + Math.sin(phase + 2) * 5} 65,${35 + Math.sin(phase + 1) * 5}`

  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1ED760]/30 to-[#0DCCFF]/30 rounded-full blur-xl"></div>
      <svg viewBox="0 0 100 100" className="w-full h-full" ref={svgRef}>
        <defs>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1ED760" />
            <stop offset="100%" stopColor="#0DCCFF" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="#121212" />
        <g className={animate ? "animate-[pulse_4s_ease-in-out_infinite]" : ""}>
          <path d={path1} stroke="url(#pulseGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path
            d={path2}
            stroke="url(#pulseGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d={path3}
            stroke="url(#pulseGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  )
}
