import { Text } from "@/components";

export default function Loading() {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-gray-200 bg-opacity-50 z-50 flex justify-center items-center }`}
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-t-4 border-zinc-900 rounded-full animate-spin"></div>
        <Text
          preset="heading"
          isBold
          id="Carregando"
          className="mt-2 text-gray-800"
        >
          Carregando...
        </Text>
      </div>
    </div>
  );
}
