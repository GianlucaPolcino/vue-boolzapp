const app = new Vue({
    el: '#app',

    data:{

        contacts:[
            {
                name: 'Michele',
                image: 'img/avatar_1.jpg',
                hidden: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
                data: '15/11/2021 20:30',
            },

            {
                name: 'Fabio',
                image: 'img/avatar_2.jpg',
                hidden: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
                data: '15/11/2021 20:30',
            },

            {
                name: 'Samuele',
                image: 'img/avatar_3.jpg',
                hidden: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
                data: '15/11/2021 20:30',
            },

            {
                name: 'Giuseppe',
                image: 'img/avatar_4.jpg',
                hidden: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
                data: '15/11/2021 20:30',
            },

            {
                name: 'Mauro',
                image: 'img/avatar_5.jpg',
                hidden: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
                data: '15/11/2021 20:30',
            },

            {
                name: 'Luisa',
                image: 'img/avatar_6.jpg',
                hidden: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
                data: '15/11/2021 20:30',
            },
        ],

        activeChat: 0,

        newMessage: {
            date: '',
            message: '',
            status: 'sent',
        }
    },

    methods:{
        showChat(index){
            this.activeChat = index;
            this.contacts.active = true;
        },

        truncate(string){
            if(string.length > 20){
                string = string.substring(0, 20) + "...";
            }
            return string;
        },

        pushMessage(user){
            this.contacts[user].messages.push(this.newMessage);
            this.newMessage = {
                date: this.getDate(),
                message: '',
                status: 'sent',
            };

            setTimeout( () => {

                const response = {
                   date: this.getDate(),
                   message: 'Okokok',
                   status: 'received'
                };
    
                this.contacts[user].messages.push(response);
    
             }, 1000);
        },

        getDate(){
            let date = new Date();
            return date.getUTCDate() + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        },
    },

})
