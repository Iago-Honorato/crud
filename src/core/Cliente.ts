export default class Cliente { //classe que irá representar um cliente, será definido três atributos, usando o private 
    #id: string
    #nome: string
    #idade: number


    constructor(nome: string, idade: number, id: string = null) {  //ID vai  receber um valor padrão que é nulo, quando mandado para o firebase ele irá gerar o ID
        this.#nome = nome
        this.#idade = idade
        this.#id = id

    }

    static vazio() {//Metodo estático para gerar um cliente vazio
        return new Cliente('', 0)
    }

    get id() {
        return this.#id
    }


    get nome() {
        return this.#nome
    }


    get idade() {
        return this.#idade
    }

}