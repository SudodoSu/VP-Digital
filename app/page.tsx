import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/dashboard"><button className="text-primary">Go To Dashboard</button></Link>
    </main>
  );
}
