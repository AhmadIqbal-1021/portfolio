import { useRef } from 'react'
import { useParticles } from '../hooks/useParticles'

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  useParticles(canvasRef)

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
    />
  )
}
