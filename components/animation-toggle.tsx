"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export function AnimationToggle() {
  const [isAnimationPaused, setIsAnimationPaused] = React.useState(false)

  React.useEffect(() => {
    // Recuperar estado do localStorage
    const saved = localStorage.getItem("animationsPaused")
    if (saved === "true") {
      setIsAnimationPaused(true)
      document.body.classList.add("animations-paused")
    }
  }, [])

  const toggleAnimation = () => {
    const newState = !isAnimationPaused
    setIsAnimationPaused(newState)
    
    if (newState) {
      document.body.classList.add("animations-paused")
      localStorage.setItem("animationsPaused", "true")
    } else {
      document.body.classList.remove("animations-paused")
      localStorage.setItem("animationsPaused", "false")
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleAnimation}
      aria-label={isAnimationPaused ? "Iniciar animações" : "Parar animações"}
      title={isAnimationPaused ? "Iniciar animações do fundo" : "Parar animações do fundo"}
    >
      {isAnimationPaused ? (
        <Play className="h-4 w-4" />
      ) : (
        <Pause className="h-4 w-4" />
      )}
    </Button>
  )
}