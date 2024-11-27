import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh] font-poppins">
      <h2 className="font-alfa">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="border-b-2">
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
