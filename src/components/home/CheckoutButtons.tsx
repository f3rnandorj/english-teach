import { Image } from "../Image";
import { buttonAssets } from "@/assets";
import Link from "next/link";

export function CheckoutButtons() {
  //TODO:
  return (
    <div
      className="
      grid 
      lg:grid-cols-2 md:grid-cols-2 grid-cols-1
      "
    >
      <Link href="">
        <Image src={buttonAssets.buttonYear} alt="Checkout anual" />
      </Link>
      <Link href="">
        <Image src={buttonAssets.buttonMonth} alt="Checkout mensal" />
      </Link>
    </div>
  );
}
