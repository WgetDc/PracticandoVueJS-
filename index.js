new Vue({
    el: "#app",

    data(){
        return {
            name: 'Bitcoin',
            color: 'f2f2f2',
            dark: false,
            fuente: '2f2f2f',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            prices: [
                { day: 'Lunes', value: 8400},
                { day: 'Martes', value: 8452},
                { day: 'Miércoles', value: 7500},
                { day: 'Jueves', value: 9500 },
                { day: 'Viernes', value: 8460 },
                { day: 'Sabado', value: 9250 },
                { day: 'Domingo', value: 8420 }
            ],
            showPrices: false
        }
    },

    methods: {
        mostrarPrecios(){
            this.showPrices = !this.showPrices
        },
        darkMode(){
            this.color = this.color.split('').reverse().join('')
            this.dark = !this.dark
            this.fuente = this.fuente.split('').reverse().join('')
        }
    }
})