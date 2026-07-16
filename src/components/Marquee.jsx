/**
 * Infinite ticker strip. Pure CSS animation (respects reduced motion via
 * the global media query). Items are duplicated to create the loop.
 */
export default function Marquee({ items, className = '' }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
