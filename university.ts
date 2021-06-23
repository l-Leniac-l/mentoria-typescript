namespace Universidade {
  type Pessoa = {
    id: number;
    nome: string;
    idade: number;
  };

  type Aluno = Pessoa & {
    curso: string;
    dataMatricula: string;
    media: number;
  };

  type Professor = Pessoa & {
    area: string;
    cargo: string;
    funcao: string;
    cargaHoraria: string;
  };

  let Alunos: Aluno[] = [
    {
      id: 1,
      nome: "Mateus Israel",
      idade: 21,
      curso: "Sistemas de Informação",
      dataMatricula: "15/06/2018",
      media: 7.8,
    },
    {
      id: 2,
      nome: "Camila",
      idade: 20,
      curso: "Análise e Desenvolvimento de Sistemas",
      dataMatricula: "15/06/2017",
      media: 9.8,
    },
    {
      id: 3,
      nome: "Yasmin",
      idade: 20,
      curso: "Marketing",
      dataMatricula: "15/06/2017",
      media: 2.8,
    },
  ];

  let Professores: Professor[] = [
    {
      id: 1,
      nome: "Lenilson",
      idade: 26,
      area: "Exatas",
      cargo: "Titular",
      funcao: "Coordenador",
      cargaHoraria: "6 horas",
    },
    {
      id: 2,
      nome: "André",
      idade: 30,
      area: "Exatas",
      cargo: "Substituto",
      funcao: "Professor",
      cargaHoraria: "12 horas",
    },
  ];

  interface Repositorio<Type> {
    findAll(): Type[];
    create(t: Type): Type;
    update(t: Type): boolean;
    remove(t: Type): boolean;
  }

  export class AlunoRepositorio implements Repositorio<Aluno> {
    findAll() {
      return Alunos;
    }

    create(aluno: Aluno) {
      Alunos.push(aluno);
      return aluno;
    }

    update(aluno: Aluno) {
      const quemEuQueroEditar = Alunos.findIndex(
        (mancebo) => mancebo.id === aluno.id
      );
      if (quemEuQueroEditar) {
        Alunos[quemEuQueroEditar] = aluno;
        return true;
      }
      return false;
    }

    remove(aluno: Aluno) {
      Alunos = Alunos.filter((mancebo) => mancebo.id !== aluno.id);
      return true;
    }
  }

  export class ProfessorRepositorio implements Repositorio<Professor> {
    findAll() {
      return Professores;
    }

    create(professor: Professor) {
      Professores.push(professor);
      return professor;
    }

    update(professor: Professor) {
      const quemEuQueroEditar = Professores.findIndex(
        (mancebo) => mancebo.id === professor.id
      );
      if (quemEuQueroEditar) {
        Professores[quemEuQueroEditar] = professor;
        return true;
      }
      return false;
    }

    remove(professor: Professor) {
      Professores = Professores.filter(
        (mancebo) => mancebo.id !== professor.id
      );
      return true;
    }
  }
}

const alunoRespositorio = new Universidade.AlunoRepositorio();

const novoAluno = alunoRespositorio.remove({
  id: 3,
  nome: "Yasmin",
  idade: 20,
  curso: "Publicidade",
  dataMatricula: "12/12/2012",
  media: 8,
});

console.log("Todos os alunos", alunoRespositorio.findAll());
