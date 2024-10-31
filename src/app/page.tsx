import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const config = require("../../next.config.js");

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const basePath = config.basePath || "";

  return (
    <main>
      <div>
        <p>Example Content</p>
        <img src={`${basePath}/assets/blog/preview/cover.jpg`} alt="cover" />
      </div>
    </main>
  );
}
