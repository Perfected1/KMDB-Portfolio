import { useEffect, useRef, useState } from 'react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const buttonRef = useRef(null)
  const dragStart = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })
  const hasMoved = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    if (hasMoved.current) {
      hasMoved.current = false
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handlePointerDown = (event) => {
    if (window.innerWidth > 576) {
      return
    }

    const button = buttonRef.current

    if (!button) {
      return
    }

    setIsDragging(true)

    hasMoved.current = false

    dragStart.current = {
      x: event.clientX - position.current.x,
      y: event.clientY - position.current.y,
    }

    button.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (!isDragging) {
      return
    }

    const button = buttonRef.current

    if (!button) {
      return
    }

    const newX = event.clientX - dragStart.current.x
    const newY = event.clientY - dragStart.current.y

    if (Math.abs(newX - position.current.x) > 5 ||
        Math.abs(newY - position.current.y) > 5) {
      hasMoved.current = true
    }

    position.current = {
      x: newX,
      y: newY,
    }

    button.style.transform = `translate(${newX}px, ${newY}px) scale(1.08)`
  }

  const handlePointerUp = () => {
    if (!isDragging) {
      return
    }

    setIsDragging(false)

    position.current = {
      x: 0,
      y: 0,
    }

    const button = buttonRef.current

    if (button) {
      button.style.transform = 'translate(0, 0) scale(1)'
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`scroll-to-top ${isDragging ? 'is-dragging' : ''}`}
      onClick={scrollToTop}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  )
}

export default ScrollToTop