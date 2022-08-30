var app = new Vue({
    el: "#app",
    data: {
        numQuadrado: 0,
        counter: 0,
        contadorDeBackspace: 0,
    },
    methods: {
        tecla(letra){
            if (letra == 'ENTER' && this.numQuadrado % 5 == 0 && this.numQuadrado > 0 && this.contadorDeBackspace > 0) {
                console.log(this.numQuadrado)
                ++this.numQuadrado
                ++this.counter
                this.contadorDeBackspace = 0
                console.log(this.numQuadrado)
                return
            } else if (letra == 'ENTER'){
                return
            } else if (letra == '⌫' && (this.contadorDeBackspace > 0)){
                quadradoAtual = document.getElementById(`quadrado${this.numQuadrado}`)
                quadradoAtual.textContent = ''
                
                --this.contadorDeBackspace
                --this.numQuadrado
                console.log(this.numQuadrado)

            } else if (this.numQuadrado % 5 == 0 && this.numQuadrado > 0 && this.contadorDeBackspace > 0){
                return
            } else if ((letra == '⌫' && this.contadorDeBackspace == 5) || (letra == '⌫' && this.contadorDeBackspace == 0)){
                console.log('entrei')
                console.log(this.contadorDeBackspace)
                return
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
            }
            console.log("back = " + this.contadorDeBackspace)
        }
    },
})
