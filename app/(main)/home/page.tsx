import LeftSidebar from "@/components/shared/home/left-sidebar"

const Main = () => {
  return (
    <section className="flex space-x-2 h-full p-2">
      <LeftSidebar/>
      <main className="h-full w-3/5"></main>
      {/* Right Sidebar */}
    </section>
  )
}

export default Main