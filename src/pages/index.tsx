import { ReactElement } from "react";
import Link from "next/link";

function Home() {
  return (
    <main className="p-4">
      <Link href={"/admin"} className="text-black">
        admin
      </Link>
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Home;
