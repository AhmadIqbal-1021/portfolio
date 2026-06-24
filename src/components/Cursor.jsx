import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  const { cursorRef, ringRef } = useCursor()

  return (
    <>
      <div ref={cursorRef} id="cursor" />
      <div ref={ringRef} id="cursor-ring" />
    </>
  )
}
