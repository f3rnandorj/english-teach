import { Text } from "../Text";

export function Faq() {
  return (
    <div className="flex flex-col space-y-5 ">
      {faqDataToMap.map((faq) => (
        <FaqBox key={faq.title} {...faq} />
      ))}
    </div>
  );
}

interface FaqBoxProps {
  title: string;
  answers: string[];
}

function FaqBox({ title, answers }: FaqBoxProps) {
  return (
    <div className="">
      <Text id={title} tag="p" isBold>
        {title}
        <br />
        <br />
      </Text>

      <Text id={`${title} title`} tag="p" isBold>
        {answers.map((answer, index) => (
          <Text id={`${title} sub ${index}`} key={index}>
            {answer}
            <br />
            <br />
          </Text>
        ))}
      </Text>
    </div>
  );
}

const faqDataToMap: FaqBoxProps[] = [
  {
    title: "Como funciona o Curso de Inglês Teacher Murilo?",
    answers: [
      "O Curso funciona em formato “Netflix”, onde você paga uma assinatura mensal, e tem acesso a todo o conteúdo do Curso, de modo organizado e gradativo, com fácil visualização dos módulos e das aulas.",
      "O objetivo é dominar o Inglês da VIDA REAL, conduzindo cada pessoa a  aprender e praticar as principais estruturas do Inglês e principalmente desenvolver as 4 habilidades (ler, escrever, ouvir e falar).",
    ],
  },
  {
    title: "Como é a Metodologia do Curso?",
    answers: [
      "A metodologia foi construída para MERGULHAR no inglês através da IMERSÃO. Em cada aula, o aluno é conduzido a aprender Inglês, repetir, praticar e APLICAR. Construindo a familiarização com o idioma e      desenvolvendo a FALA com naturalidade e espontaneidade.",
      "O Objetivo é conduzir cada pessoa a dominar a comunicação essencial do Inglês com dezenas de exemplos da vida real. O mais próximo possível do que a pessoa vai enfrentar na prática. Aprendendo e imergindo     constantemente.",
    ],
  },
  {
    title: "Qual o dia e o horário das aulas?",
    answers: [
      "Após realizar a sua inscrição, você poderá acessar TODAS as aulas na Plataforma (como se fosse uma assinatura da Netflix).",
      "Você terá liberdade para acessar as aulas quando e onde quiser, podendo assim fazer o próprio ritmo de acordo com a própria disponibilidade.",
      "O Curso pode ser acessado de QUALQUER LUGAR DO MUNDO, independentemente do fuso horário, basta apenas ter acesso a internet.",
    ],
  },
  {
    title: "Como funciona o suporte pedagógico?",
    answers: [
      "Você fará parte de um grupo de estudos no WhatsApp e também no Telegram, onde lá estará o Teacher Murilo e outros Professores de seu time. Disponíveis para te dar suporte, tirar dúvidas e responder perguntas de segunda à sábado.",
      "Além disso, você poderá praticar Inglês com os alunos presentes no Grupo de Estudos (WhatsApp ou Telegram), com intuito em desenvolver a prática com mais pessoas que estarão na mesma jornada que você.",
      "Também fazemos encontros AO VIVO no Zoom para praticar Inglês e tirar dúvidas.",
    ],
  },
  {
    title: "Tem certificado?",
    answers: [
      "Sim, após concluir todas as aulas e tiver êxito nas atividades avaliativas.",
    ],
  },
  {
    title: "Tem garantia?",
    answers: [
      "Sim, você pode acessar a plataforma completa e testar por 7 dias.",
    ],
  },
  {
    title: "Como é o Bônus?",
    answers: [
      "São 4 livros digitais de Inglês com Filmes, para estudar analisando cenas de filmes e séries. Cada livro contém em torno de 200 páginas com centenas de frases da vida real. Incluindo transcrições fonéticas e transcrições aportuguesadas. Além de uma Biblioteca com mais de 50 livros em PDF para baixar e treinar leitura.",
    ],
  },
  {
    title: "Curso de Inglês com SHREK (Bônus)",
    answers: [
      "Um módulo especial analisando o filme completo do SHREK, frase por frase, palavra por palavra, do início ao fim. Mais de 6.000 palavras, um vasto vocabulário do dia-a-dia.",
    ],
  },
];
