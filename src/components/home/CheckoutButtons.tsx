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
      <motion.div whileHover={{ scale: 1.04 }}>
        <Link href="https://pay.kiwify.com.br/9aPK7jH?afid=3rBTNSBw">
          <Image src={buttonAssets.buttonYear} alt="Checkout anual" />
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.04 }}>
        <Link href="https://pay.kiwify.com.br/a74GFBE?afid=3rBTNSBw">
          <Image src={buttonAssets.buttonMonth} alt="Checkout mensal" />
        </Link>
      </motion.div>
    </div>
  );
}
