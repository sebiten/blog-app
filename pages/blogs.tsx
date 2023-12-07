import { NextPage } from "next";
import BlogCard from "../component/BlogCard";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
   
    <div className="p-5 mx-auto max-w-3xl">
      <BlogCard title="This is my blog" desc="lorem impsp suueo seobpa siedj" />
    </div>
  );
};

export default Blogs;
