import LeftSidebar from "@/components/shared/home/left-sidebar";

const Main = () => {
  return (
    <section className="flex space-x-2 h-full p-2">
      <div className="w-1/4">
        <LeftSidebar />
      </div>
      <main className="h-full w-1/2"></main>
      {/* Right Sidebar */}
    </section>
  );
};

export default Main;
