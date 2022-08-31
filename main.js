var app = new Vue({
    el: "#app",
    data: {
        numQuadrado: 0,
        counter: 0,
        contadorDeBackspace: 0,
        chute: [],
        chuteFinal: undefined,
        palavraDoDia: 'OSSOS',
        contaQuadradosValidados: 1,
        letrasRestantes: [],
        letrasRestantesDoChute: [],
        quadradosErrados: [],
        contador: 0,
    },
    methods: {
        tecla(letra){
            if (this.numQuadrado >= 31){
                console.log('cabô')
                return
            }

            // Lógica do ENTER:
            if (letra == 'ENTER' && this.numQuadrado % 5 == 0 && this.numQuadrado > 0 && this.contadorDeBackspace > 0) {
                console.log(this.numQuadrado)
                ++this.numQuadrado
                ++this.counter
                this.contadorDeBackspace = 0
                console.log(this.numQuadrado)

                //Lógica do verde
                for (i=0; i<5; i++){
                    console.log(this.letrasRestantes[i])
                    quadradoASerValidado = document.getElementById(`quadrado${this.contaQuadradosValidados}`)
                    console.log(this.contaQuadradosValidados)
                    quadradoASerValidado.style = 'background: grey'
                    ++this.contaQuadradosValidados
                    console.log(quadradoASerValidado.textContent)
                    if (quadradoASerValidado.textContent == this.palavraDoDia[i]){
                        quadradoASerValidado.style = 'background: green'
                    } else {
                        this.letrasRestantes.push(this.palavraDoDia[i])
                        this.letrasRestantesDoChute.push(this.chute[i])
                        this.quadradosErrados.push(i+this.contador+1)
                    }
                }
                console.log(this.quadradosErrados)
                console.log(this.letrasRestantes)
                console.log(this.letrasRestantesDoChute)

                //Lógica do amarelo:
                for(i=0; i<this.quadradosErrados.length; i++){
                    for (j=0; j<this.letrasRestantes.length; j++){
                        if (this.letrasRestantes[i] == this.letrasRestantesDoChute[j]){
                            quadradoASerAmarelado = document.getElementById(`quadrado${this.quadradosErrados[j]}`)
                            quadradoASerAmarelado.style= 'background: yellow'
                            this.letrasRestantes.splice(i, '*')
                            this.letrasRestantesDoChute.splice(j, '*')
                            this.quadradosErrados.splice(j, '*')
                            console.log(this.quadradosErrados)
                            console.log(this.letrasRestantes)
                            console.log(this.letrasRestantesDoChute)
                            break
                        }
                    }
                }
                
                //Reset:
                this.letrasRestantes = []
                this.letrasRestantesDoChute = []
                this.contador += 5
                this.quadradosErrados = []

                //Lógica do chute:
                this.chuteFinal = this.chute.join('')
                console.log(this.chuteFinal)
                if (this.chuteFinal == this.palavraDoDia){
                    this.numQuadrado = 31
                    console.log('Parabains')
                } else {
                    this.chute = []
                    console.log('errrou')
                }
                return

            // Lógica do backspace:
            } else if (letra == '⌫' && (this.contadorDeBackspace > 0)){
                quadradoAtual = document.getElementById(`quadrado${this.numQuadrado}`)
                quadradoAtual.textContent = ''
                this.chute.pop()
                --this.contadorDeBackspace
                --this.numQuadrado
                console.log(this.numQuadrado)

            // Lógica pra não colocar mais letra depois da quinta:
            } else if (this.numQuadrado % 5 == 0 && this.numQuadrado > 0 && this.contadorDeBackspace > 0){
                return

            // Lógica das letras:
            } else {
                if (this.counter > 0){
                    --this.numQuadrado
                    --this.counter
                }
                if (5 > this.contadorDeBackspace > 0){
                    ++this.contadorDeBackspace
                }
                ++this.numQuadrado
                quadradoAtual = document.getElementById(`quadrado${this.numQuadrado}`)
                console.log(this.numQuadrado)
                quadradoAtual.textContent = letra
                this.chute.push(letra)
            }
            console.log("backs restantes = " + this.contadorDeBackspace)
            console.log(this.chute)
        }
    },
})
