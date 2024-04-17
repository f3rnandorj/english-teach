import { Image } from "../Image";
import { evidenceAssets } from "@/assets";

export function Evidences() {
  return (
    <div>
      <Image src={evidenceAssets.evidenceBrand} alt="" />

      <div
        className="grid pt-4 place-items-center   
        lg:grid-cols-2 md:grid-cols-2     
        gap-y-4 md:gap-y-14 md:gap-x-20
        "
      >
        <Image className="" src={evidenceAssets.evidence1} alt="" />

        <Image src={evidenceAssets.evidence2} alt="" />
      </div>
    </div>
  );
}
