class Animal{
    #nombre
    #edad
    #img
    #comentarios
    #sonido

    constructor(nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentarios = comentarios
        this.#sonido = sonido
    }

    get nombre(){
        return this.#nombre
    }

    get edad(){
        return this.#edad
    }

    get img(){
        return this.#img
    }

    set comentarios(comentario){
        this.#comentarios = comentario
    }

    get sonido(){
        return this.#sonido    }

}

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    rugir(){
        //Agregar sonido
    }

}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    aullar(){
        //Agregar sonido
    }

}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    gruñir(){
        //Agregar sonido
    }

}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    sisear(){
        //Agregar sonido
    }

}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    
    }

    chillar(){
        //Agregar sonido
    }

}

export {Leon, Lobo, Oso, Serpiente, Aguila}