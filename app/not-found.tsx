import Link from "next/link";
export default function GlobalNotFound() {
  return (
    <div className="">
      <h1 className="text-5xl capitalize ">page link is incorrect</h1>
      <Link href={"/"}>
        <p className="capitalize">go back to home</p>
      </Link>
    </div>
  );
}
