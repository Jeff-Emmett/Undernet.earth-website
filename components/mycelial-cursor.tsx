"use client"

import { useEffect, useRef, useCallback } from "react"

interface Thread {
  x: number
  y: number
  angle: number
  length: number
  maxLength: number
  speed: number
  opacity: number
  branches: Thread[]
  growing: boolean
  age: number
  maxAge: number
}

export function MycelialCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const threadsRef = useRef<Thread[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const lastSpawnRef = useRef(0)
  const animationRef = useRef<number>()

  const createThread = useCallback((x: number, y: number, angle?: number, isChild = false): Thread => {
    return {
      x,
      y,
      angle: angle ?? Math.random() * Math.PI * 2,
      length: 0,
      maxLength: isChild ? 15 + Math.random() * 25 : 30 + Math.random() * 50,
      speed: isChild ? 0.3 + Math.random() * 0.4 : 0.5 + Math.random() * 0.8,
      opacity: isChild ? 0.15 : 0.25,
      branches: [],
      growing: true,
      age: 0,
      maxAge: isChild ? 80 + Math.random() * 40 : 120 + Math.random() * 60,
    }
  }, [])

  const spawnThreads = useCallback((x: number, y: number) => {
    const count = 2 + Math.floor(Math.random() * 2)
    for (let i = 0; i < count; i++) {
      threadsRef.current.push(createThread(x, y))
    }
  }, [createThread])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      const now = Date.now()
      if (now - lastSpawnRef.current > 100) {
        spawnThreads(e.clientX, e.clientY)
        lastSpawnRef.current = now
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const threads = threadsRef.current

      for (let i = threads.length - 1; i >= 0; i--) {
        const thread = threads[i]
        thread.age++

        // Grow the thread
        if (thread.growing && thread.length < thread.maxLength) {
          thread.length += thread.speed

          // Chance to branch
          if (thread.length > 10 && Math.random() < 0.008 && thread.branches.length < 2) {
            const branchAngle = thread.angle + (Math.random() - 0.5) * 1.2
            const endX = thread.x + Math.cos(thread.angle) * thread.length
            const endY = thread.y + Math.sin(thread.angle) * thread.length
            thread.branches.push(createThread(endX, endY, branchAngle, true))
          }
        } else {
          thread.growing = false
        }

        // Fade out based on age
        const fadeStart = thread.maxAge * 0.5
        if (thread.age > fadeStart) {
          const fadeProgress = (thread.age - fadeStart) / (thread.maxAge - fadeStart)
          thread.opacity = Math.max(0, (thread.branches.length ? 0.15 : 0.25) * (1 - fadeProgress))
        }

        // Draw main thread
        if (thread.opacity > 0.01) {
          const endX = thread.x + Math.cos(thread.angle) * thread.length
          const endY = thread.y + Math.sin(thread.angle) * thread.length

          ctx.beginPath()
          ctx.moveTo(thread.x, thread.y)
          ctx.lineTo(endX, endY)
          ctx.strokeStyle = `rgba(139, 195, 74, ${thread.opacity})`
          ctx.lineWidth = 1
          ctx.stroke()

          // Draw node at end
          if (thread.growing) {
            ctx.beginPath()
            ctx.arc(endX, endY, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(139, 195, 74, ${thread.opacity * 1.5})`
            ctx.fill()
          }
        }

        // Process branches
        for (let j = thread.branches.length - 1; j >= 0; j--) {
          const branch = thread.branches[j]
          branch.age++

          if (branch.growing && branch.length < branch.maxLength) {
            branch.length += branch.speed
          } else {
            branch.growing = false
          }

          const branchFadeStart = branch.maxAge * 0.4
          if (branch.age > branchFadeStart) {
            const fadeProgress = (branch.age - branchFadeStart) / (branch.maxAge - branchFadeStart)
            branch.opacity = Math.max(0, 0.15 * (1 - fadeProgress))
          }

          if (branch.opacity > 0.01) {
            const branchEndX = branch.x + Math.cos(branch.angle) * branch.length
            const branchEndY = branch.y + Math.sin(branch.angle) * branch.length

            ctx.beginPath()
            ctx.moveTo(branch.x, branch.y)
            ctx.lineTo(branchEndX, branchEndY)
            ctx.strokeStyle = `rgba(139, 195, 74, ${branch.opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }

          if (branch.age > branch.maxAge) {
            thread.branches.splice(j, 1)
          }
        }

        // Remove dead threads
        if (thread.age > thread.maxAge && thread.branches.length === 0) {
          threads.splice(i, 1)
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [createThread, spawnThreads])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
