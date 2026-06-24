import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMove)

    // Smooth ring follow
    let animId
    const animRing = () => {
      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * 0.12
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * 0.12
      ring.style.left = ringPosRef.current.x + 'px'
      ring.style.top = ringPosRef.current.y + 'px'
      animId = requestAnimationFrame(animRing)
    }
    animRing()

    // Hover effects on interactive elements
    const interactiveSelector = 'a, button, .project-card, .skill-card, .contact-item, .highlight-item'
    const addHover = () => {
      cursor.classList.add('hover')
      ring.classList.add('hover')
    }
    const removeHover = () => {
      cursor.classList.remove('hover')
      ring.classList.remove('hover')
    }

    const observer = new MutationObserver(() => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Initial attach
    document.querySelectorAll(interactiveSelector).forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return { cursorRef, ringRef }
}
