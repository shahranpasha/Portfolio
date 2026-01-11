import Hyperspeed from "./Hyperspeed";
import { hyperspeedPresets } from "./preset";

const HyperspeedUsage = () => {
  return (
    <div className="w-full h-full">
      <Hyperspeed effectOptions={hyperspeedPresets.one} />
    </div>
  );
};

export default HyperspeedUsage;
