import {
  Dashboard,
  Header,
  IframeVideo,
  Image,
  Text,
  Brand,
  CheckoutButtons,
  Evidences,
  About,
  EvidenceVideos,
  Faq,
  SocialMedias,
} from "@/components";
import { brandAssets, buttonAssets } from "@/assets";

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
        <Image isToScroll src={buttonAssets.realLife} alt="" />

        <CheckoutButtons id="checkout" />
      </div>

      <Text preset="heading" isMedium className="text-center">
        COMO É DENTRO DA PLATAFORMA?
      </Text>

      <Image src={buttonAssets.netflix} alt="" />

      <Brand />

      <CheckoutButtons />

      <Evidences />

      <EvidenceVideos />

      <Image
        isToScroll
        src={buttonAssets.realLife}
        alt=""
        className="lg:pt-16 md:pt-12 pt-8"
      />

      <About />

      <Image
        src={buttonAssets.faq}
        alt=""
        className="lg:pt-16 md:pt-12 pt-0
          lg:pb-16 md:pb-12 pb-0"
      />

      <Faq />

      <Image src={buttonAssets.wantToUnlock} alt="" isToScroll />

      <Text className="italic text-justify">
        &ldquo;Por trás de qualquer pessoa FLUENTE, há milhares de horas de
        envolvimento com a língua. Sem IMERSÃO, é impossível.&rdquo;
      </Text>

      <br />

      <Text className="italic">by Teacher Murilo</Text>

      <Image
        src={brandAssets.authorImage}
        alt=""
        className="lg:mt-16 md:mt-12 mt-4
          lg:mb-16 md:mb-12 mb-4
          rounded-full"
      />

      <SocialMedias />

      <Text
        preset="small"
        className="italic
        lg:mt-16 md:mt-12 mt-4"
      >
        Copyright © 2023 - Teacher Murilo
      </Text>
    </main>
  );
}
