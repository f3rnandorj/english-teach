import { Dashboard, Header, IframeVideo, Image } from "@/components";
import { buttonAssets } from "@/assets";
import { CheckoutButtons } from "@/components/home/CheckoutButtons";

export default function Home() {
  return (
    <main
      className="
        flex min-h-screen flex-col items-center justify-center  
        lg:space-y-16 md:space-y-12 space-y-4"
    >
      <Header />

      <IframeVideo
        src="https://www.youtube.com/embed/NZl_pCIdmyY"
        height={452}
        width={803}
        className="
        w-full lg:w-auto
        lg:aspect-video
        h-56 md:h-96 lg:h-[28.25rem]
        "
      />

      <Dashboard />

      <div className="flex flex-col justify-center items-center">
        <Image src={buttonAssets.realLife} alt="" />

        <CheckoutButtons />
      </div>
    </main>
  );
}
