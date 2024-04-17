import { Text } from "../Text";

export function Header() {
  return (
    <div
      className="
            text-center 
            lg:space-y-14 md:space-y-12 space-y-3"
    >
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
  );
}
