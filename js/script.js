//* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue(
    {
        el: '#app',
        data: {
            mail:[],
            num: []
        },

        mounted(){
            // ciclo 10 volte il generatore di e-mail...
            for(let i = 0; i < 10; i++){
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(result => {
                        // ...e lo pusho nell'array "mail"
                        this.mail.push(result.data.response);
                        // console.log(this.mail);
                    });
            };

            axios
                .get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=10&items=10')
                .then(arrNum => {
                    this.num = arrNum.data.response;
                });

            
        },
    }
);