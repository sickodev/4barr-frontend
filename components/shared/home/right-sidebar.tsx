import { PaperclipIcon } from "lucide-react";

const articles: { title: string; subtitle: string }[] = [
  {
    title:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero id omnis et molestiae dignissimos repellat harum",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt molestias sed deserunt aspernatur perferendis ducimus voluptates commodi ab, eos maxime similique accusamus facilis necessitatibus! Accusamus modi beatae eum quis sit!",
  },
  {
    title:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero id omnis et molestiae dignissimos repellat harum",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt molestias sed deserunt aspernatur perferendis ducimus voluptates commodi ab, eos maxime similique accusamus facilis necessitatibus! Accusamus modi beatae eum quis sit!",
  },
  {
    title:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero id omnis et molestiae dignissimos repellat harum",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt molestias sed deserunt aspernatur perferendis ducimus voluptates commodi ab, eos maxime similique accusamus facilis necessitatibus! Accusamus modi beatae eum quis sit!",
  },
  {
    title:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero id omnis et molestiae dignissimos repellat harum",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt molestias sed deserunt aspernatur perferendis ducimus voluptates commodi ab, eos maxime similique accusamus facilis necessitatibus! Accusamus modi beatae eum quis sit!",
  },
  {
    title:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero id omnis et molestiae dignissimos repellat harum",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt molestias sed deserunt aspernatur perferendis ducimus voluptates commodi ab, eos maxime similique accusamus facilis necessitatibus! Accusamus modi beatae eum quis sit!",
  },
];

const RightSidebar = () => {
  return (
    <nav className="w-full h-fit hidden md:block py-2 px-1 rounded-xl space-y-3 bg-primary-foreground filter drop-shadow-xl sticky top-0">
      <nav className="p-2">
        <p className="text-lg font-bold border-b p-1 flex items-center space-x-3">
            <PaperclipIcon className="size-5 opacity-60"/>
            <span>Top Stories</span>
        </p>
      </nav>
      <div className="space-y-4">
        {articles.map((article, idx) => (
          <div key={idx} className="border-b p-1 hover:bg-secondary transition ease-linear">
            <a href="" className="">
              <p className="truncate">{article.title}</p>
              <p className="truncate opacity-70">{article.subtitle}</p>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default RightSidebar;
