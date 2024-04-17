import { Image } from "../Image";
import { dashboardAssets } from "@/assets";

export function Dashboard() {
  return (
    <div
      className="grid 
      lg:grid-cols-2 md:grid-cols-2 
      gap-y-4 md:gap-y-14 md:gap-x-20"
    >
      <Image src={dashboardAssets.first} alt="Aprenda inglês" />
      <Image src={dashboardAssets.third} alt="Materiais em PDF" />
      <Image src={dashboardAssets.second} alt="Todas as aulas liberadas" />
      <Image src={dashboardAssets.fifth} alt="Desenvolvimento gradativo" />
      <Image src={dashboardAssets.tenth} alt="Conversação" />
      <Image src={dashboardAssets.fourth} alt="Certificado" />
      <Image src={dashboardAssets.seventh} alt="Inglês do cotidiano" />
      <Image
        src={dashboardAssets.ninth}
        alt="Destrave a fala e a compreensão"
      />
      <Image src={dashboardAssets.sixth} alt="Grupo de WhatsApp" />
      <Image src={dashboardAssets.eighth} alt="Jornada do zero a fluência" />
    </div>
  );
}
