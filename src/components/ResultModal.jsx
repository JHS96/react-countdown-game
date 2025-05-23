import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// Recieving "ref" as a prop works on React v19 and later. Earlier versions reqire use of "forwardRef"
// which is used here for demonstration purposes, as it works on both current and older React versions.
// export default function ResultModal({ ref, result, targetTime }) {
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className='result-modal' onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{formattedRemainingTime} seconds remaining.</strong>
      </p>
      <form method='dialog' onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
