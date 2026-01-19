
export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border border-white/60 p-4 ${className}`}>
        {children}
    </div>
  )
}
