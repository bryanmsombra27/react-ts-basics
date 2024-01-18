import { FC } from "react";
export interface BlogPost {
  id: number;
  title: string;
  text: string;
}

interface BlogPostsProps {
  posts: BlogPost[];
}
const BlogPosts: FC<BlogPostsProps> = ({ posts }) => {
  return (
    <div id="blog-posts">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
