// class Carga{
//     function rastrearCarga(codigoRastreio){


//     }}

//     const statusCargas = {
// "BR12345": "Em trânsito para o centro de distribuição",
// "BR67890": "Entregue ao destinatário",
// "BR54321": "Aguardando retirada na agência"
// };

/////////////


// class ItemEstoque { 

//      constructor(codigo, descrição, localização) { 

//         this.codigo = codigo

//         this.descrição = descrição

//         this. localização = localização

//     } 

//    obertLocalização() { 

//         return `O item está em: ${this.localização} `

//     } 
//     atualizarLocalizacao(novaLocalizacao){
//       return `O item agora está: ${this.localização = novaLocalizacao}`
//     }

//  } 
 

// const produto1 = new ItemEstoque("0612", "É bonito", "Corredor G, Prateleira 3") 


//  console.log(`O codigo do produto é: ${produto1.codigo}; a sua descrição: ${produto1.descrição}; e sua localização é ${produto1.obertLocalização()}`) 
// console.log(produto1.atualizarLocalizacao("Corredor J, Prateleira 6"))
 
/////////////

//  class Rota { 
//     constructor( codigo, veiculo, endereços) { 
//         this.codigo = codigo

//         this.veiculo = veiculo

//         this. endereços = endereços

//     } 

//    obertdestino() { 

//         return ` ${this.endereços} `

//     } 
//     NovoDestino(DestinoAtual){
//       return `Trocamos para ${this.endereços = DestinoAtual}`
//     }

//  } 
 

// const rota1 = new Rota("1206", "Eclipsi", "Rua Santo Daniel") 


//  console.log(`O codigo da viagem é: ${rota1.codigo}; o seu veiculo é: ${rota1.veiculo}; e para onde vamos é ${rota1.obertdestino()}`) 

// console.log(rota1.NovoDestino("Rua Gabriel Assunção Dutra"))


/////////


 class Embalagem { 

    constructor(id, pesoMaximo) { 

        this.id = id

        this.pesoMaximo = pesoMaximo

    } 

} 

class Caixa extends Embalagem { 

    constructor(id, pesoMaximo, L, h, profundidade ) { 

        super(id, pesoMaximo) 

        this.L = L
        this.h = h
        this.profundidade = profundidade

    } 


} 

class Palete extends Embalagem { 

    constructor(id, pesoMaximo, material ) { 

         super(id, pesoMaximo) 

        this.material = material 

    } 

} 

const caixa1 = new Caixa(6789, 25, 10, 10, 10) 

const palete1 = new Palete(12345, 1000, "Madeira") 

console.log(`Caixa | ID: ${Caixa.id}, Peso: ${Caixa.pesoMaximo}, Largura: ${Caixa.L}, Altura: ${Caixa.h}, Profundidade: ${Caixa.profundidade}  `) 

console.log(`Palete | ID: ${Palete.id}, Peso: ${Palete.pesoMaximo}, Material ${Palete.material}`) 
 

////////////////////////


class Tarefa {
  constructor(descricao, responsavel) {
    this.descricao = descricao;
    this.responsavel = responsavel;
  }

  calcularTempoEstimado() {
   
    return 0;
  }
}

class SepararPedido extends Tarefa {
  constructor(descricao, responsavel, quantidadeItens) {
    super(descricao, responsavel);
    this.quantidadeItens = quantidadeItens;
  }

  calcularTempoEstimado() {
    return this.quantidadeItens * 5;
  }
}

class ConferirCarga extends Tarefa {
  constructor(descricao, responsavel) {
    super(descricao, responsavel);
  }

  calcularTempoEstimado() {
    return 60;
  }
}

const tarefas = [
  new SepararPedido("Separar", "João", 10),
  new ConferirCarga("Conferir carga do caminhão", "Maria"),
  new SepararPedido("Separar", "Ana", 5),
];




