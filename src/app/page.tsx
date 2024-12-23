import Introduction from "@/components/Introduction";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="my-[2.5rem] flex flex-col gap-y-[5rem]">
      <TechStack />
      <Introduction />
    </div>
  );
}
