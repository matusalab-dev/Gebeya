import Link from "next/link";
import CloseIcon from "../../assets/icons/close-icon";

export default function ModalContent({ onClose }) {
  return (
    <Link href="/" className="px-10 py-16 modal bg-light_black text-background">
      <p className="text-xl">Order placed successfully!</p>
    </Link>
  );
}
