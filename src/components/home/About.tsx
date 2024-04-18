import { Image } from "../Image";
import { Text } from "../Text";
import { brandAssets } from "@/assets";

export function About() {
  return (
    <div
      className="
      flex 
      lg:flex-row md:flex-row flex-col
      items-center 
      pt-4 lg:h-[325px]  "
    >
      <Image
        src={brandAssets.youtubeRewards}
        height={325}
        width={250}
        alt=""
        className="lg:mr-5 
        lg:mb-0 md:mb-0 mb-5 
        h-[325px] w-[250px]"
      />

      <div className="text-justify">
        <Text tag="p">
          Um dos maiores professores do Brasil, tradutor e especialista em
          programação neurolinguística. <br />
          <br />
        </Text>

        <Text tag="p">
          Começou a aprender Inglês em 2001, se tornou Professor em 2012, ao
          longo de 10 anos dedicou-se profundamente ao estudo do comportamento
          humano, estudando os mais avançados métodos científicos para mudar
          crenças e como simplificar o modo de ensinar Inglês nos dias atuais.
          <br />
          <br />
        </Text>

        <Text tag="p">
          Atualmente possui o maior canal de Inglês com Filmes da América
          Latina, já impactou mais de 200 mil pessoas em mais de 60 países
          ensinando Inglês com Filmes e Séries no YouTube.
        </Text>
      </div>
    </div>
  );
}
