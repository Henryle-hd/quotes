import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center mt-2 ">
      <div className="w-96 h-12 border border-l-0 border-r-0 flex justify-center items-center gap-5">
        <Link href={"/"} className="text-[#ff5400] underline">
          All
        </Link>
        <Link href={"/"}>loved</Link>
      </div>
    </nav>
  );
}
