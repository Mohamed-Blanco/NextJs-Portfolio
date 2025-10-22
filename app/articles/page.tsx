import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import { Meteors } from "@/components/ui/meteors";

export default function Projects() {
  return (
    <div className="">
      <div className="py-40  flex justify-center flex-col gap-20 items-center overflow-y-auto min-h-screen bg-[#16181C]  text-[#BDB5AA]">
        <Meteors number={30} className="bg-white " />
        <p className="font-bold text-xl sm:text-2xl text-center px-4">
          Latest Articles
        </p>
        <div className="10">
          <ExpandableCardDemo></ExpandableCardDemo>
        </div>
      </div>
    </div>
  );
}
