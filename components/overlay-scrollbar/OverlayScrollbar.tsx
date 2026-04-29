'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import s from './OverlayScrollbar.module.css'

const HIDE_DELAY = 900
const HOVER_ZONE = 20

export default function OverlayScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const draggingRef = useRef(false)
  const dragOffsetRef = useRef(0)
  const [active, setActive] = useState(false)

  const updateThumb = useCallback(() => {
    const thumb = thumbRef.current
    if (!thumb) return
    const winH = window.innerHeight
    const docH = document.documentElement.scrollHeight
    if (docH <= winH + 1) {
      thumb.style.opacity = '0'
      thumb.style.height = '0px'
      return
    }
    const ratio = winH / docH
    const height = Math.max(winH * ratio, 36)
    const maxThumbTop = winH - height
    const maxScroll = docH - winH
    const top = (window.scrollY / maxScroll) * maxThumbTop
    thumb.style.height = `${height}px`
    thumb.style.transform = `translateY(${top}px)`
  }, [])

  const reveal = useCallback(() => {
    setActive(true)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      if (!draggingRef.current) setActive(false)
    }, HIDE_DELAY)
  }, [])

  useEffect(() => {
    updateThumb()

    const onScroll = () => {
      updateThumb()
      reveal()
    }
    const onResize = () => updateThumb()
    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth - e.clientX <= HOVER_ZONE) reveal()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    const ro = new ResizeObserver(updateThumb)
    ro.observe(document.documentElement)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      ro.disconnect()
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [reveal, updateThumb])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return
      const winH = window.innerHeight
      const docH = document.documentElement.scrollHeight
      const thumb = thumbRef.current
      if (!thumb) return
      const height = thumb.getBoundingClientRect().height
      const maxThumbTop = winH - height
      const maxScroll = docH - winH
      const newTop = Math.max(
        0,
        Math.min(e.clientY - dragOffsetRef.current, maxThumbTop),
      )
      window.scrollTo({ top: (newTop / maxThumbTop) * maxScroll })
    }
    const onMouseUp = () => {
      if (!draggingRef.current) return
      draggingRef.current = false
      document.body.style.userSelect = ''
      reveal()
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [reveal])

  const onThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    const rect = thumbRef.current?.getBoundingClientRect()
    if (!rect) return
    draggingRef.current = true
    dragOffsetRef.current = e.clientY - rect.top
    document.body.style.userSelect = 'none'
    setActive(true)
  }

  const onTrackMouseDown = (e: React.MouseEvent) => {
    if (e.target === thumbRef.current) return
    const winH = window.innerHeight
    const docH = document.documentElement.scrollHeight
    const thumb = thumbRef.current
    if (!thumb) return
    const height = thumb.getBoundingClientRect().height
    const maxScroll = docH - winH
    const maxThumbTop = winH - height
    const targetTop = Math.max(
      0,
      Math.min(e.clientY - height / 2, maxThumbTop),
    )
    window.scrollTo({
      top: (targetTop / maxThumbTop) * maxScroll,
      behavior: 'smooth',
    })
  }

  return (
    <div
      ref={trackRef}
      className={`${s.track} ${active ? s.active : ''}`}
      onMouseEnter={reveal}
      onMouseDown={onTrackMouseDown}
      aria-hidden="true"
    >
      <div
        ref={thumbRef}
        className={s.thumb}
        onMouseDown={onThumbMouseDown}
      />
    </div>
  )
}
