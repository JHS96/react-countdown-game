export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className='challenge'>
      <h2>{title}</h2>
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : null}
      </p>
      <div>
        <button>Start Challenge</button>
      </div>
      <p className=''>Time is running... / Timer inactive</p>
    </section>
  );
}
