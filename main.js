
// Dichiaro la Vue app che si interfaccia con il DOM

const app = new Vue({
    el: '#app',

    data:{

        // Array di contatti
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
                        message: 'Si dai, ho appena dato buca a Fabio, si può fare!',
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
                        message: 'Mi piacerebbe ma non mi sento molto bene.',
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
                        message: 'Certo che lo so, è la mia...',
                        status: 'received'
                    }
                ],
                data: '15/11/2021 20:30',
            },
        ],
        
        // Elemento che indica la chat selezionata
        activeChat: 0,

        // Nuovo messaggio scritto dall utente che si aggiungerà agli array
        newMessage: {
            date: '',
            message: '',
            status: 'sent',
        },

        // Elemento interconnesso con l'input di ricerca chat
        searchContact: '',

        // BONUS (menù al click sul messaggio)
        messageMenu: '',
        messageOn: false,

    },

    
    methods:{

        // Indico quale sia la chat selezionata al click rendendo la chat attiva corrispondente all'indice selezionato
        showChat(index){
            this.activeChat = index;
            this.contacts.active = true;
        },

        // Tronco la preview del messaggio a 20 lettere massime
        truncate(string){
            if(string.length > 20){
                string = string.substring(0, 20) + "...";
            }
            return string;
        },

        // Immetto il nuovo messaggio nell'array corrisponondente alla chat
        pushMessage(user){

            if(this.newMessage.message.length > 0){

                this.newMessage.date = dayjs().format('DD/MM/YYYY HH:mm:ss'),
    
                this.contacts[user].messages.push(this.newMessage);
                this.newMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: '',
                    status: 'sent',
                };
                
                // Creo la risposta automatica a tre secondi dall'invio del nuovo messaggio
                setTimeout( () => {
    
                    const response = {
                       date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                       message: 'Okokok',
                       status: 'received'
                    };
        
                    this.contacts[user].messages.push(response);
        
                 }, 3000);
            }
        },

        // Rendo la stinga minuscola in modo da poterla cercare nell'input
        toLower(object){
            return object.name.toLowerCase();
        },

        deleteMsg(index){
            this.contacts[this.activeChat].messages.splice(index, 1,);
            
        },

    },

})
