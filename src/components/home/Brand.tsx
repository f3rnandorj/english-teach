import { Image } from "../Image";
import { brandAssets } from "@/assets";

export function Brand() {
  return (
    <div className="flex flex-col space-y-4 pb-4">
      <Image src={brandAssets.first} alt="" />
      <Image src={brandAssets.second} alt="" />
      <Image src={brandAssets.third} alt="" />
      <Image src={brandAssets.fourth} alt="" />
      <Image src={brandAssets.fifth} alt="" />
      <Image src={brandAssets.sixth} alt="" />
    </div>
  );
}
