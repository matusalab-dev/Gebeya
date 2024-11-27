export default function ModalContent({ onClose }) {
  return (
    <div className="modal bg-light_black text-background">
      <div>Order placed successfully!</div>
      <button onClick={onClose} className="">
        Close
      </button>
    </div>
  );
}
