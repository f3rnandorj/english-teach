"use client";

import { Image } from "../Image";
import { buttonAssets } from "@/assets";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <motion.div whileHover={{ scale: 1.04 }}>
          <Image src={buttonAssets.buttonYear} alt="Checkout anual" />
        </motion.div>
      </Link>

      <Link href="https://pay.kiwify.com.br/a74GFBE?afid=3rBTNSBw">
        <motion.div whileHover={{ scale: 1.04 }}>
          <Image src={buttonAssets.buttonMonth} alt="Checkout mensal" />
        </motion.div>
      </Link>
    </div>
  );
}
