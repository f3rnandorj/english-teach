import { Text } from "../Text";

export function Header() {
  return (
    <div
      className="
            text-center 
            lg:space-y-14 md:space-y-12 space-y-3
            lg:pb-16 md:pb-12 pb-4
            "
    >
      <Text
        id="O CAMINHO PARA APRENDER"
        preset="heading"
        isBold
        isInitialVisible
      >
        O CAMINHO PARA APRENDER <br />
      </Text>

      <Text
        id="INGLÊS"
        preset="heading"
        isBold
        className="text-red-700"
        isInitialVisible
      >
        <Text
          id="DA VIDA REAL"
          preset="heading"
          isBold
          className="text-gray-950"
          isInitialVisible
        >
          O
        </Text>{" "}
        INGLÊS DA VIDA REAL
      </Text>

      <Text id="Conheça o" tag="p" className="italic " isInitialVisible>
        Conheça o{" "}
        <Text
          id="CURSO DE INGLÊS TEACHER MURILO"
          isMedium
          className="italic"
          isInitialVisible
        >
          CURSO DE INGLÊS TEACHER MURILO
        </Text>
      </Text>
    </div>
  );
}
