import { Image } from "../Image";
import { buttonAssets } from "@/assets";
import Link from "next/link";

interface Props {
  id?: string;
}

export function CheckoutButtons({ id }: Props) {
  return (
    <div
      className="
      grid 
      lg:grid-cols-2 md:grid-cols-2 grid-cols-1
      "
      id={id}
    >
      <Link href="https://pay.kiwify.com.br/9aPK7jH?afid=3rBTNSBw">
        <Image src={buttonAssets.buttonYear} alt="Checkout anual" />
      </Link>
      <Link href="https://pay.kiwify.com.br/a74GFBE?afid=3rBTNSBw">
        <Image src={buttonAssets.buttonMonth} alt="Checkout mensal" />
      </Link>
    </div>
  );
}
