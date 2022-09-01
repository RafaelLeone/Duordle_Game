var app = new Vue({
    el: "#app",
    data: {
        numQuadrado: 0,
        numQuadradoDois: 0,
        counter: 0,
        contadorDeBackspace: 0,
        chute: [],
        chuteDois: [],
        chuteFinal: undefined,
        chuteFinalDois: undefined,
        palavraDoDia: 'OSSOS',
        palavraDoDiaDois: 'MISSA',
        contaQuadradosValidados: 1,
        contaQuadradosValidadosDois: 1,
        letrasRestantes: [],
        letrasRestantesDoChute: [],
        quadradosErrados: [],
        letrasRestantesDois: [],
        letrasRestantesDoChuteDois: [],
        quadradosErradosDois: [],
        contador: 0,
        contadorDois: 0,
        teclasCertas: [],
    },
    methods: {
        tecla(letra){
            if (this.numQuadrado >= 31 && this.numQuadradoDois >= 31){
                return
            }

            // Lógica do ENTER:
            if (letra == 'ENTER' && this.numQuadrado % 5 == 0 && this.numQuadrado > 0 && this.contadorDeBackspace > 0) {
                ++this.numQuadrado
                ++this.numQuadradoDois
                ++this.counter
                this.contadorDeBackspace = 0

                //Lógica do verde
                for (i=0; i<5; i++){
                    if (this.numQuadrado < 31){
                        quadradoASerValidado = document.getElementById(`quadrado${this.contaQuadradosValidados}`)
                    }
                    if (this.numQuadradoDois < 31){
                        quadradoASerValidadob = document.getElementById(`quadradob${this.contaQuadradosValidados}`)
                    }
                    quadradoASerValidado.style = 'background: grey'
                    quadradoASerValidadob.style = 'background: grey'
                    ++this.contaQuadradosValidados
                    ++this.contaQuadradosValidadosDois
                    if (quadradoASerValidado.textContent == this.palavraDoDia[i]){
                        quadradoASerValidado.style = 'background: green'
                    } else {
                        this.letrasRestantes.push(this.palavraDoDia[i])
                        this.letrasRestantesDoChute.push(this.chute[i])
                        this.quadradosErrados.push(i+this.contador+1)
                    }
                    if (quadradoASerValidadob.textContent == this.palavraDoDiaDois[i]){
                        quadradoASerValidadob.style = 'background: green'
                    } else {
                        this.letrasRestantesDois.push(this.palavraDoDiaDois[i])
                        this.letrasRestantesDoChuteDois.push(this.chuteDois[i])
                        this.quadradosErradosDois.push(i+this.contadorDois+1)
                    }
                }

                //Lógica do amarelo:
                for(i=0; i<this.quadradosErrados.length; i++){
                    for (j=0; j<this.letrasRestantes.length; j++){
                        if (this.letrasRestantes[i] == this.letrasRestantesDoChute[j]){
                            if (this.numQuadrado < 31){
                                quadradoASerAmarelado = document.getElementById(`quadrado${this.quadradosErrados[j]}`)
                                quadradoASerAmarelado.style= 'background: yellow'
                            }
                            this.letrasRestantes.splice(i, '*')
                            this.letrasRestantesDoChute.splice(j, '*')
                            this.quadradosErrados.splice(j, '*')
                            break
                        }
                    }
                }
                // for(i=0; i<this.quadradosErradosDois.length; i++){
                //     for (j=0; j<this.letrasRestantesDois.length; j++){
                //         if (this.letrasRestantesDois[i] == this.letrasRestantesDoChuteDois[j]){
                //             if (this.numQuadradoDois < 31){
                //                 quadradoASerAmareladob = document.getElementById(`quadradob${this.quadradosErrados[j]}`)
                //                 quadradoASerAmareladob.style= 'background: yellow'
                //             }
                //             this.letrasRestantesDois.splice(i, '*')
                //             this.letrasRestantesDoChuteDois.splice(j, '*')
                //             this.quadradosErradosDois.splice(j, '*')
                //             break
                //         }
                //     }
                // }
                
                //Reset:
                this.letrasRestantes = []
                this.letrasRestantesDoChute = []
                this.contador += 5
                this.quadradosErrados = []

                this.pintaTecla(this.chute)

                //Lógica do chute:
                this.chuteFinal = this.chute.join('')
                if (this.chuteFinal == this.palavraDoDia){
                    this.numQuadrado = 31
                } else {
                    this.chute = []
                }
                
                this.chuteFinalDois = this.chuteDois.join('')
                if (this.chuteFinalDois == this.palavraDoDiaDois){
                    this.numQuadradoDois = 31
                } else {
                    this.chuteDois = []
                }

            // Lógica do backspace:
            } else if (letra == '⌫' && (this.contadorDeBackspace > 0)){
                if (this.numQuadrado < 31){
                    quadradoAtual = document.getElementById(`quadrado${this.numQuadrado}`)
                    quadradoAtual.textContent = ''
                }
                if (this.numQuadradoDois < 31){
                    quadradoAtualb = document.getElementById(`quadradob${this.numQuadradoDois}`)
                    quadradoAtualb.textContent = ''
                }
                this.chute.pop()
                this.chuteDois.pop()
                --this.contadorDeBackspace
                --this.numQuadrado
                --this.numQuadradoDois

            // Lógica pra não colocar mais letra depois da quinta:
            } else if (this.numQuadrado % 5 == 0 && this.numQuadrado > 0 && this.contadorDeBackspace > 0){
                return

            // Lógica das letras:
            } else {
                if (this.counter > 0){
                    --this.numQuadrado
                    --this.numQuadradoDois
                    --this.counter
                }
                if (5 > this.contadorDeBackspace > 0){
                    ++this.contadorDeBackspace
                }
                ++this.numQuadrado
                ++this.numQuadradoDois
                if (this.numQuadrado < 31){
                    quadradoAtual = document.getElementById(`quadrado${this.numQuadrado}`)
                    quadradoAtual.textContent = letra
                }
                if (this.numQuadradoDois < 31){
                    quadradoAtualb = document.getElementById(`quadradob${this.numQuadradoDois}`)
                    quadradoAtualb.textContent = letra
                }
                this.chute.push(letra)
                this.chuteDois.push(letra)
            }
        },
        pintaTecla(letras){
            for (indice in letras){
                tecla = document.getElementById(letras[indice])
                if(this.palavraDoDia[indice] == letras[indice]){
                    tecla.style = 'background: green'
                    this.teclasCertas.push(letras[indice])
                } else if (this.palavraDoDia.includes(letras[indice]) && !this.teclasCertas.includes(letras[indice])){
                    tecla.style = 'background: yellow'
                } else if (!this.teclasCertas.includes(letras[indice])){
                    tecla.style = 'background: grey'
                }
            }
        }
    },
})
