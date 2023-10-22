// Modelo Enderecos
interface Enderecos {
    id: string;
    rua: string;
    numero: string;
    bairro: string;
    id_cidade: number;
    estado: string;
    cep: string;
    status: number;
    id_ponto_cultural?: string | null;
    id_evento?: string | null;
  }
  
  // Modelo Cidades
  interface Cidades {
    id: number;
    cidade: string;
  }
  
  // Modelo PontosCulturais
  interface PontosCulturais {
    id: string;
    nome: string;
    importancia: string;
    como_preservar?: string | null;
    referencia: string;
    hora_inicio: string;
    hora_fim: string;
    imagem: string;
    status: number;
  }
  
  // Modelo Eventos
  interface Eventos {
    nome: string;
    descricao: string;
    como_participar: string;
    data: Date;
    hora_inicio: string;
    hora_fim: string;
    imagem: string;
    ingresso_social: string;
    id_instituicao: string;
  }
  
  // Modelo sustentabilidadeXevento
  interface SustentabilidadeXEvento {
    id: string;
    id_sustentabilidade: string;
    id_evento: string;
  }
  
  // Modelo pontos_sustentabilidade
  interface PontosSustentabilidade {
    id: string;
    descricao: string;
  }
  
  // Modelo acessibilidadeXevento
  interface AcessibilidadeXEvento {
    id: string;
    id_acessibilidade: string;
    id_evento: string;
  }
  
  // Modelo pontos_acessibilidade
  interface PontosAcessibilidade {
    id: string;
    descricao: string;
  }
  
  // Modelo marcar_presenca
  interface MarcarPresenca {
    id: string;
    id_evento: string;
    id_usuario: string;
    comentario?: string | null;
    isFavorite: boolean;
  }


  interface Usuarios {
    id: string;
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
    senha: string;
    status: number;
    marcar_presenca: MarcarPresenca[];
  }
  
  export enum PerfilEmpresarial {
    InstituicaoPublica = "instituicao_publica",
    EcoFriendly = "eco_friendly",
    InclusaoSocial = "inclusao_social",
    RestauracaoAmbiental = "restauracao_ambiental",
  }
  
  // Modelo Instituicoes
  export interface Instituicoes {
    razao_social: string;
    descricao: string;
    perfil_empresarial: PerfilEmpresarial;
    email: string;
    senha: string;
  }
  
  // Exporte as interfaces
  export type { Enderecos, Cidades, PontosCulturais, Eventos, SustentabilidadeXEvento, PontosSustentabilidade, AcessibilidadeXEvento, PontosAcessibilidade, MarcarPresenca, Usuarios };
  