const Counter = {
    data() {
        return {
            question:'',
            answer:'',
            category:'',
            flipped:false,
            Cards:[
                {
                    question:"What year was IUPUI founded?",
                    answer:"1969",
                    category:"history",
                    flipped:false
                },
                {
                    question:"What is 2+2?",
                    answer:"Fish",
                    category:"math",
                    flipped:false
                },
                {
                    question:"Is mayonnaise an instrument?",
                    answer:"No",
                    category:"science",
                    flipped:false
                },

            ]
        }
    },
    methods:{
        toggleCard(index){
            this.Cards[index].flipped=!this.Cards[index].flipped
        },
        add(){
            this.Cards[this.category].question=this.question;
            this.Cards[this.category].answer=this.answer;
            this.Cards[this.category].flipped=false;
            if(this.category=="0"){
                this.Cards[this.category].category="history";
            }
            else if(this.category=="1")
                this.Cards[this.category].category="math";
            else if(this.category=="2")
                this.Cards[this.category].category="science";
            this.question="";
            this.answer="";
            this.category=""
        }
    }
}

Vue.createApp(Counter).mount('#flashcards-app')








