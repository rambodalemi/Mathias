"use client"

import { useEffect, useRef, useState } from "react"

interface UseInViewOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0, triggerOnce = false, rootMargin = "0px" } = options
  const [inView, setInView] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)
        setInView(entry.isIntersecting)

        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, triggerOnce, rootMargin])

  return { ref, inView, entry }
}
