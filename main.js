var app = new Vue({
    el: "#app",
    data: {
        numQuadrado: 0,
    },
    methods: {
        tecla(letra){
            if (letra == '⌫' && this.numQuadrado > 0){
                quadradoAtual = document.getElementById(`quadrado${this.numQuadrado}`)
                quadradoAtual.textContent = ''
                --this.numQuadrado
            } else if (this.numQuadrado % 5 == 0 && this.numQuadrado > 0){
                return
            } else if (letra == '⌫' && this.numQuadrado == 0){
                return
            } else {
                ++this.numQuadrado
                quadradoAtual = document.getElementById(`quadrado${this.numQuadrado}`)
                console.log(this.numQuadrado)
                quadradoAtual.textContent = letra
            }
        }
    },
})
