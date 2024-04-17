import { pageAssets } from "@/assets";

export function NavBar() {
  return (
    <nav
      className="w-full bg-no-repeat h-[15rem] md:h-[20rem] lg:h-[31rem] bg-cover bg-center "
      style={{ backgroundImage: `url(${pageAssets.nav.src})` }}
    />
  );
}
