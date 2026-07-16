import { useEffect, useRef } from 'react'

/**
 * Music-side signature: a slow-breathing waveform, like a track
 * waiting to be pressed play. Amber on warm black.
 */
export default function Waveform({ bars = 96, color = '232,160,76' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    let w = 0
    let h = 0
    let running = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      const time = t * 0.001
      const barW = w / bars
      const mid = h / 2
      for (let i = 0; i < bars; i++) {
        const p = i / bars
        // layered sines → organic "audio" envelope
        const env =
          Math.sin(p * Math.PI) ** 0.6 *
          (0.35 +
            0.3 * Math.sin(p * 21 + time * 1.1) +
            0.2 * Math.sin(p * 47 - time * 0.7) +
            0.15 * Math.sin(p * 89 + time * 1.9))
        const bh = Math.max(2, Math.abs(env) * h * 0.9)
        const alpha = 0.25 + Math.abs(env) * 0.75
        ctx.fillStyle = `rgba(${color},${alpha})`
        ctx.fillRect(i * barW + barW * 0.25, mid - bh / 2, barW * 0.5, bh)
      }
    }

    const loop = (t) => {
      if (running) draw(t)
      raf = requestAnimationFrame(loop)
    }

    resize()
    draw(800) // paint a static frame right away (hidden tabs get no rAF)
    if (!reduced) {
      raf = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(() => {
      resize()
      draw(800)
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
    })
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [bars, color])

  return <canvas ref={canvasRef} className="waveform" aria-hidden="true" />
}
