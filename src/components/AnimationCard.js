export default function AnimationCard({ animation, number }) {
  return (
    <div className={`flip-clock__unit__flip flip-clock__unit__flip--${animation}`}>
      <span className="t-clock">{number}</span>  
    </div>
  )
}
