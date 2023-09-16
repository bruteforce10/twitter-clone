import React, { useEffect, useState } from "react";
import { onSnapshot, query, orderBy, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { HiOutlineSparkles } from "react-icons/hi2";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <section className="sm:ml-[81px] xl:ml-[340px] w-[600px] min-h-screen border-r border-gray-400 text-white py-2">
      <div className="sticky top-0 bg-black flex justify-between font-medium text-[20px] px-4 py-2">
        Home
        <HiOutlineSparkles />
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post.data()} />
      ))}
    </section>
  );
}
