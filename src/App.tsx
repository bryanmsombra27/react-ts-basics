import { useEffect, useState } from "react";
import "./fetchingData/index.css";
import { get } from "./fetchingData/http";
import BlogPosts, { BlogPost } from "./fetchingData/BlogPosts";
import ErrorMessage from "./fetchingData/ErrorMessage";

interface RawDataBlogPosts {
  id: number;
  title: string;

  body: string;
  userId: number;
}

function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsFetching(true);
    const fetchingData = async () => {
      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawDataBlogPosts[];

        const blogPosts = data.map((item) => {
          return {
            id: item.id,
            text: item.body,
            title: item.title,
          };
        });

        setPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsFetching(false);
    };

    fetchingData();
  }, []);

  if (error) {
    return <ErrorMessage text={error} />;
  }

  return (
    <>
      <main>
        {isFetching ? (
          <p id="loading-fallback">Fetching posts...</p>
        ) : (
          <BlogPosts posts={posts} />
        )}
      </main>
    </>
  );
}

export default App;
