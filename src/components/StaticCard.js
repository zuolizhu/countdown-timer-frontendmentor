export default function StaticCard({ position, number }) {
  return (
    <div className={`flip-clock__unit__static flip-clock__unit__static--${position}`}>
      <span className="t-clock">{number}</span>  
    </div>
  )
}
