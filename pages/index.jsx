import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import Login from "@/components/auth/Login";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Feed from "@/components/Feed";
import { useContext } from "react";
import { AppContext } from "@/lib/contexts/AppContext";
import Modal from "@/components/Modal";
import Trending from "@/components/Trending";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  const [appContext] = useContext(AppContext);

  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Twitter-Clone</title>
        <meta
          name="description"
          content="Twitter Clone 2.0 By Firdi Audi Putra"
        />
      </Head>
      <main className="relative max-w-[1400px] mx-auto">
        <Sidebar />
        <div className="flex gap-6">
          <Feed />
          {appContext?.isModalOpen && <Modal />}
          <Trending />
        </div>
      </main>
    </div>
  );
}
