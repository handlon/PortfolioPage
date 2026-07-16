import { useEffect, useRef } from 'react'

/**
 * Dev-side hero background: an animated square grid (ReactBits
 * "shape grid" style). The grid drifts diagonally at a slow speed and
 * the cell under the cursor lights up, fading out as a trail.
 */
export default function ShapeGrid({ speed = 0.1, cellSize = 48 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    let w = 0
    let h = 0
    let running = true
    let offset = 0
    const mouse = { x: -1, y: -1 }
    const trail = new Map() // "col,row" -> intensity 0..1

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const o = offset % cellSize

      // grid lines
      ctx.strokeStyle = 'rgba(242, 242, 240, 0.055)'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = -o; x <= w + cellSize; x += cellSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
      }
      for (let y = -o; y <= h + cellSize; y += cellSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
      }
      ctx.stroke()

      // hovered cell + fading trail
      if (mouse.x >= 0) {
        const col = Math.floor((mouse.x + o) / cellSize)
        const row = Math.floor((mouse.y + o) / cellSize)
        trail.set(`${col},${row}`, 1)
      }
      for (const [key, intensity] of trail) {
        const [col, row] = key.split(',').map(Number)
        const x = col * cellSize - o
        const y = row * cellSize - o
        ctx.fillStyle = `rgba(242, 242, 240, ${0.09 * intensity})`
        ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2)
        const next = intensity * 0.93
        if (next < 0.02) trail.delete(key)
        else trail.set(key, next)
      }

      // soft vignette so the grid recedes behind the headline
      const grad = ctx.createRadialGradient(w * 0.28, h * 0.55, 0, w * 0.28, h * 0.55, w * 0.75)
      grad.addColorStop(0, 'rgba(5, 5, 5, 0.55)')
      grad.addColorStop(1, 'rgba(5, 5, 5, 0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)
    }

    const loop = () => {
      if (running) {
        offset += speed
        draw()
      }
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      if (reduced) draw() // still respond to hover, just without drift
    }
    const onLeave = () => {
      mouse.x = -1
      mouse.y = -1
    }

    resize()
    draw() // paint a static frame right away (hidden tabs get no rAF)
    if (!reduced) {
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)

    const ro = new ResizeObserver(() => {
      resize()
      draw()
    })
    ro.observe(canvas)

    // don't burn frames while the hero is off screen
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
    })
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [speed, cellSize])

  return <canvas ref={canvasRef} className="shape-grid" aria-hidden="true" />
}
