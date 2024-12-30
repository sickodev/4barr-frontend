import ContentCard from "@/components/common/content-card";
import PostCard from "@/components/common/post-card";
import LeftSidebar from "@/components/shared/home/left-sidebar";
import RightSidebar from "@/components/shared/home/right-sidebar";

const Main = () => {
  return (
    <section className="flex space-x-2 h-full">
      <div className="md:w-1/4">
        <LeftSidebar />
      </div>
      <main className="h-full w-full md:w-1/2 border p-2">
        <PostCard />
        <ContentCard />
      </main>
      <div className="md:w-1/4 relative">
        <RightSidebar />
      </div>
    </section>
  );
};

export default Main;
