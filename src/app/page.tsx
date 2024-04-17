import { Text, Video } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  space-y-14">
      <div className="text-center space-y-14">
        <Text preset="heading" isBold>
          O CAMINHO PARA APRENDER <br />
        </Text>

        <Text tag="span" preset="heading" isBold className="text-red-700">
          <Text tag="span" preset="heading" isBold className="text-gray-950">
            O
          </Text>{" "}
          INGLÊS DA VIDA REAL
        </Text>

        <Text tag="p" className="italic ">
          Conheça o{" "}
          <Text tag="span" isMedium className="italic ">
            CURSO DE INGLÊS TEACHER MURILO
          </Text>
        </Text>
      </div>

      <Video
        src="https://www.youtube.com/embed/NZl_pCIdmyY"
        height={452}
        width={803}
      />
    </main>
  );
}
