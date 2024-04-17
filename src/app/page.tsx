import {
  Dashboard,
  Header,
  IframeVideo,
  Image,
  Text,
  Brand,
  CheckoutButtons,
  Evidences,
} from "@/components";
import { buttonAssets } from "@/assets";
import { EvidenceVideos } from "@/components/home/EvidenceVideos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Header />

      <IframeVideo
        src="https://www.youtube.com/embed/NZl_pCIdmyY"
        height={452}
        width={803}
        title="INSCRIÇÕES ABERTAS"
        className="
        w-full lg:w-auto
        lg:aspect-video
        h-56 md:h-96 lg:h-[30rem]
        lg:pb-16 md:pb-12 pb-4
        "
      />

      <Dashboard />

      <div className="flex flex-col justify-center items-center">
        <Image src={buttonAssets.realLife} alt="" />

        <CheckoutButtons />
      </div>

      <Text preset="heading" isMedium className="text-center">
        COMO É DENTRO DA PLATAFORMA
      </Text>

      <Image src={buttonAssets.netflix} alt="" />

      <Brand />

      <CheckoutButtons />

      <Evidences />

      <EvidenceVideos />

      <Image
        src={buttonAssets.realLife}
        alt=""
        className="lg:pt-16 md:pt-12 pt-8"
      />
    </main>
  );
}
