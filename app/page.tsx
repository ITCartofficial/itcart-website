import HomeTemplate from "@/app/(features)/page";
import { useHomeContext } from "./homeContext";

export default function Home() {
  return (
    <div>
      <HomeTemplate />
    </div>
  );
}
