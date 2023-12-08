import React from "react";

interface Props {
  title: string;
  desc: string;
}

const BlogCard = ({ title, desc }: Props) => (
  <div className={`bg-green-100 p-2 rounded`}>
    <h1 className={`text-gray-100 font-bold text-xl`}>{title}</h1>
    <p className={`text-red-400 text-xl`}>{desc}</p>
  </div>
);

export default BlogCard;
