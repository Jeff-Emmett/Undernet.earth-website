"use client"

import { useEffect, useRef, useCallback } from "react"

interface Point {
  x: number
  y: number
}

interface Thread {
  points: Point[]
  angle: number
  maxLength: number
  speed: number
  opacity: number
  baseOpacity: number
  branches: Thread[]
  growing: boolean
  age: number
  maxAge: number
  wanderStrength: number
}

export function MycelialCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const threadsRef = useRef<Thread[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const lastSpawnRef = useRef(0)
  const animationRef = useRef<number>()
  const isHoldingRef = useRef(false)
  const holdStartRef = useRef(0)
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const createThread = useCallback((x: number, y: number, angle?: number, isChild = false): Thread => {
    const baseOpacity = isChild ? 0.12 : 0.2
    return {
      points: [{ x, y }],
      angle: angle ?? Math.random() * Math.PI * 2,
      maxLength: isChild ? 20 + Math.random() * 35 : 40 + Math.random() * 70,
      speed: isChild ? 1.2 + Math.random() * 0.8 : 1.5 + Math.random() * 1,
      opacity: baseOpacity,
      baseOpacity,
      branches: [],
      growing: true,
      age: 0,
      maxAge: isChild ? 100 + Math.random() * 50 : 150 + Math.random() * 80,
      wanderStrength: isChild ? 0.15 + Math.random() * 0.1 : 0.12 + Math.random() * 0.08,
    }
  }, [])

  const spawnThreads = useCallback((x: number, y: number, densityMultiplier = 1) => {
    const baseCount = 2 + Math.floor(Math.random() * 2)
    const count = Math.min(Math.floor(baseCount * densityMultiplier), 8)
    for (let i = 0; i < count; i++) {
      threadsRef.current.push(createThread(x, y))
    }
  }, [createThread])

  const getDensityFromHoldTime = useCallback(() => {
    if (!isHoldingRef.current) return 1
    const holdDuration = Date.now() - holdStartRef.current
    // Density increases over 3 seconds of holding, max 4x density
    return 1 + Math.min(holdDuration / 1000, 3)
  }, [])

  const getThreadLength = (points: Point[]): number => {
    let length = 0
    for (let i = 1; i < points.length; i++) {
      const dx = points[i].x - points[i - 1].x
      const dy = points[i].y - points[i - 1].y
      length += Math.sqrt(dx * dx + dy * dy)
    }
    return length
  }

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
      if (now - lastSpawnRef.current > 80) {
        spawnThreads(e.clientX, e.clientY, getDensityFromHoldTime())
        lastSpawnRef.current = now
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      isHoldingRef.current = true
      holdStartRef.current = Date.now()

      // Initial spawn on click
      spawnThreads(e.clientX, e.clientY)

      // Continuous spawning while holding
      holdIntervalRef.current = setInterval(() => {
        if (isHoldingRef.current) {
          const density = getDensityFromHoldTime()
          spawnThreads(mouseRef.current.x, mouseRef.current.y, density)
        }
      }, 60) // Spawn every 60ms while holding
    }

    const handleMouseUp = () => {
      isHoldingRef.current = false
      if (holdIntervalRef.current) {
        clearInterval(holdIntervalRef.current)
        holdIntervalRef.current = null
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    const growThread = (thread: Thread) => {
      if (!thread.growing) return

      const currentLength = getThreadLength(thread.points)
      if (currentLength >= thread.maxLength) {
        thread.growing = false
        return
      }

      const lastPoint = thread.points[thread.points.length - 1]

      // Random walk - adjust angle with some randomness
      thread.angle += (Math.random() - 0.5) * thread.wanderStrength * 2

      // Add new point
      const newX = lastPoint.x + Math.cos(thread.angle) * thread.speed
      const newY = lastPoint.y + Math.sin(thread.angle) * thread.speed
      thread.points.push({ x: newX, y: newY })

      // Chance to branch
      if (currentLength > 15 && Math.random() < 0.012 && thread.branches.length < 3) {
        const branchAngle = thread.angle + (Math.random() - 0.5) * 1.5
        thread.branches.push(createThread(newX, newY, branchAngle, true))
      }
    }

    const drawThread = (thread: Thread, ctx: CanvasRenderingContext2D) => {
      if (thread.points.length < 2 || thread.opacity < 0.01) return

      ctx.beginPath()
      ctx.moveTo(thread.points[0].x, thread.points[0].y)

      // Draw smooth curve through points
      for (let i = 1; i < thread.points.length; i++) {
        const point = thread.points[i]
        const prevPoint = thread.points[i - 1]

        // Simple line for performance, but could use quadratic curves for smoother look
        ctx.lineTo(point.x, point.y)
      }

      ctx.strokeStyle = `rgba(139, 195, 74, ${thread.opacity})`
      ctx.lineWidth = thread.branches.length > 0 ? 1 : 0.8
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.stroke()

      // Draw growing tip
      if (thread.growing && thread.points.length > 0) {
        const tip = thread.points[thread.points.length - 1]
        ctx.beginPath()
        ctx.arc(tip.x, tip.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 195, 74, ${thread.opacity * 1.8})`
        ctx.fill()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const threads = threadsRef.current

      for (let i = threads.length - 1; i >= 0; i--) {
        const thread = threads[i]
        thread.age++

        // Grow the thread
        growThread(thread)

        // Fade out based on age
        const fadeStart = thread.maxAge * 0.4
        if (thread.age > fadeStart) {
          const fadeProgress = (thread.age - fadeStart) / (thread.maxAge - fadeStart)
          thread.opacity = Math.max(0, thread.baseOpacity * (1 - fadeProgress))
        }

        // Draw main thread
        drawThread(thread, ctx)

        // Process branches
        for (let j = thread.branches.length - 1; j >= 0; j--) {
          const branch = thread.branches[j]
          branch.age++

          growThread(branch)

          const branchFadeStart = branch.maxAge * 0.35
          if (branch.age > branchFadeStart) {
            const fadeProgress = (branch.age - branchFadeStart) / (branch.maxAge - branchFadeStart)
            branch.opacity = Math.max(0, branch.baseOpacity * (1 - fadeProgress))
          }

          drawThread(branch, ctx)

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
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (holdIntervalRef.current) {
        clearInterval(holdIntervalRef.current)
      }
    }
  }, [createThread, spawnThreads, getDensityFromHoldTime])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
