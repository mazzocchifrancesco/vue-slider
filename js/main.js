const { createApp } = Vue;



const option = {
    data: function () {
        return {
            slides: [
                {
                    immagine: 'https://img.freepik.com/free-vector/welcome-pattern-different-languages_23-2147870141.jpg',
                    titolo: 'Benvenuti nel nostro sito',
                    testo: 'Esplora la nostra vasta gamma di prodotti e scopri offerte speciali.'
                },
                {
                    immagine: 'https://img.freepik.com/free-vector/spring-sale-instagram-post_23-2148849921.jpg',
                    titolo: 'Nuova collezione primavera',
                    testo: 'Scopri le ultime tendenze della moda con la nostra collezione primavera.'
                },
                {
                    immagine: 'https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg',
                    titolo: 'Offerte speciali',
                    testo: 'Approfitta delle nostre offerte speciali. Sconti incredibili solo per te!'
                }
            ],
            contatore: 0,
            autoClick:0
        }
    },

    methods: {
        avanti() {
            if (this.contatore<this.slides.length-1) {
                this.contatore++
            }
            else {
                this.contatore=0;

            }
        },

        indietro() {
            if (this.contatore>0) {
            this.contatore--

        }
        else {
            this.contatore=this.slides.length-1;
            }
        },

        seleziona(indice) {
            this.contatore=indice
        },
        autoplay() {
            if (this.autoClick==0) {
                autoInterval=setInterval(this.avanti, 3000);
                this.autoClick++
            }
        },
        stop() {
            clearInterval(autoInterval);
            this.autoClick=0;
        }

    }
}


createApp(option).mount('#app')