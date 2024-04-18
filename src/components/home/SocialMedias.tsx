import { StaticImageData } from "next/image";
import { Image } from "../Image";
import { Text } from "../Text";
import { iconsAssets } from "@/assets";
import Link from "next/link";

export function SocialMedias() {
  return (
    <div className="flex flex-col">
      <Text
        className="italic rounded-full text-center
        lg:mb-16 md:mb-12 mb-4
        "
      >
        Me acompanhe nas redes sociais!
      </Text>

      <div className="flex flex-1 gap-20">
        {mediaDataToMap.map((media) => (
          <Media key={media.title} {...media} />
        ))}
      </div>
    </div>
  );
}

interface MediaProps {
  src: StaticImageData;
  title: string;
  link: string;
}

function Media({ src, title, link }: MediaProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      {/* TODO: */}
      <Link href={link}>
        <Image src={src} alt={title} />
      </Link>
      <Text
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-center"
      />
    </div>
  );
}

const mediaDataToMap: MediaProps[] = [
  {
    src: iconsAssets.telegram,
    title: `GRUPO NO <br />TELEGRAM`,
    link: "",
  },
  {
    src: iconsAssets.spotify,
    title: `PODCASTS NO <br />SPOTIFY`,
    link: "",
  },
  {
    src: iconsAssets.youtube,
    title: `CANAL NO <br /> YOUTUBE`,
    link: "",
  },
  {
    src: iconsAssets.instagram,
    title: `DICAS NO <br /> INSTAGRAM`,
    link: "",
  },
];
