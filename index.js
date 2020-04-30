new Vue({
    el: "#app",

    data(){
        return {
            name: 'Bitcoin',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            prices: [
                { day: 'Lunes', value: 8400},
                { day: 'Martes', value: 8452},
                { day: 'Miércoles', value: 7500},
                { day: 'Jueves', value: 9500 },
                { day: 'Viernes', value: 8460 },
                { day: 'Sabado', value: 9250 },
                { day: 'Domingo', value: 8420 }
            ]
        }
    }
})