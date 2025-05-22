import { forwardRef } from 'react';

// Recieving "ref" as a prop works on React v19 and later. Earlier versions reqire use of "forwardRef"
// which is used here for demonstration purposes, as it works on both current and older React versions.
// export default function ResultModal({ ref, result, targetTime }) {
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className='result-modal'>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds remaining.</strong>
      </p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
