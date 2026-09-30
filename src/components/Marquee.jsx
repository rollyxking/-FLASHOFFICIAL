const WORDS = [
  '$FLASHOFFICIAL',
  'BAG SECURED',
  'NO FACE NO CASE',
  'FLASH OR NOTHING',
  'DYOR',
  'DEGENS WELCOME',
]

export function Marquee() {
  const line = WORDS.concat(WORDS)
  return (
    <div className="marquee">
      <div className="marquee-track">
        {line.map((word, i) => (
          <span key={i}>{word} •</span>
        ))}
      </div>
    </div>
  )
}
