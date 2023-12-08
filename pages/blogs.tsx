import { NextPage } from "next";
import BlogCard from "../component/BlogCard";
import { useEffect, useState } from "react";

interface Props {}

const Blogs: NextPage<Props> = () => {
  const [posts, setPosts] = useState<
    {
      title: string;
      slug: string;
      meta: string;
    }[]
  >([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts").then((data) => data.json());
    setPosts(res.postsInfo);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-5 mx-auto max-w-3xl">
      {posts.map((post) => (
        <BlogCard key={post.slug} title={post.title} desc={post.meta} />
      ))}
    </div>
  );
};

export default Blogs;
