import { StaticImageData } from "next/image";
import { Image } from "../Image";
import { Text } from "../Text";
import { iconsAssets } from "@/assets";
import Link from "next/link";

export function SocialMedias() {
  return (
    <div className="flex flex-col">
      <Text
        id="Me acompanhe nas redes sociais!"
        className="italic rounded-full text-center
        lg:mb-16 md:mb-12 mb-4
        "
      >
        Me acompanhe nas redes sociais!
      </Text>

      <div
        className="lg:flex lg:flex-1 lg:gap-20
          md:flex md:flex-1 md:gap-20
          grid grid-cols-2 gap-10"
      >
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
      <Link href={link}>
        <Image src={src} alt={title} />
      </Link>
      <Text
        id={title}
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
    link: "https://t.me/joinchat/R7MKpmH_Zig3l_He",
  },
  {
    src: iconsAssets.spotify,
    title: `PODCASTS NO <br />SPOTIFY`,
    link: "https://open.spotify.com/show/7alYXmxSM62DanbN6gVQ9S?si=1CG9dpFQReqsKMrlMt2XjQ",
  },
  {
    src: iconsAssets.youtube,
    title: `CANAL NO <br /> YOUTUBE`,
    link: "https://www.youtube.com/teachermurilo",
  },
  {
    src: iconsAssets.instagram,
    title: `DICAS NO <br /> INSTAGRAM`,
    link: "https://www.instagram.com/teacher.murilo/",
  },
];
