enum Genero {
  MASCULINO,
  FEMININO,
  OUTRO,
}

type Aluno = {
  nome: string;
  dataNascimento?: Date;
  numeroMatricula: number;
  estaMatriculado: boolean;
  genero: Genero;
};

const dalianny: Aluno = {
  nome: "Dali",
  numeroMatricula: 5896854,
  estaMatriculado: true,
  genero: Genero.OUTRO,
};

interface IAluno {
  nome: string;
  getIdade: () => number;
}

interface Model {
  get: () => void;
  create: () => void;
  update: () => void;
  delete: () => void;
}

class AlunoModel implements Model {}

class ProfessorModel implements Model {}

type Escola = {
  alunos: Aluno[];
  arrDeStr: string[];
  arrAny: any[];
  arrStrOrAluno: string[] | Aluno[];
};

/*
 * União e Interseção de tipos
 * Popularmente conhecido como OR e AND
 */

type AlunoMestrado = Aluno & {
  projetoCientifico: boolean;
  matriculaMestrado: number;
};

const Cicero: AlunoMestrado = {
  nome: "Cicin",
  numeroMatricula: 5897654,
  estaMatriculado: true,
  genero: Genero.MASCULINO,
  projetoCientifico: true,
  matriculaMestrado: 45648979,
};

type Doutorando = {
  tesePhd: boolean;
};

type AlunoDoutorado = Omit<AlunoMestrado, "matriculaMestrado"> & Doutorando;

const Camila: AlunoDoutorado = {
  nome: "Cicin",
  numeroMatricula: 5897654,
  estaMatriculado: true,
  genero: Genero.MASCULINO,
  projetoCientifico: true,
  matriculaMestrado: 45648979, // erro porque mandei omitir mastriculaMestrado
  tesePhd: true,
};

type Qualquer = Escola | Aluno;

const Evelyn: Qualquer = {
  nome: "Evelyn",
  numeroMatricula: 154894516,
  estaMatriculado: false,
  genero: Genero.FEMININO,
};

type AlunoOuvinteMestrado = Omit<
  AlunoMestrado,
  "numeroMatricula" | "projetoCientifico" | "matriculaMestrado"
>;

const Lenny: AlunoOuvinteMestrado = {
  nome: "Lenny",
  estaMatriculado: false,
  genero: Genero.OUTRO,
};

type AlunoOuvinte = Pick<Aluno, "nome" | "dataNascimento" | "genero">;

const Lenny2: AlunoOuvinte = {
  nome: "Lenny",
  genero: Genero.OUTRO,
};
