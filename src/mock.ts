import {OptionValues} from "./components/ui/OptionContainer/OptionContainer.tsx";

type Quiz = {
    id:number,
    question:string,
    answers:{
      id:number,
      text:string,
      type:OptionValues
    }[],
    isCorrectSingle:boolean
}[]

export const quiz:Quiz = [
    {
        id:1,
        question:'Что должен знать фронтенд-разработчик? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'},
        ],
        isCorrectSingle : true
    },
    {
        id:2,
        question:'Что должен знать бекэнд-разработчик? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'},
            {id:4, text:'Введите своё значение', type:'shortText'}
        ],
        isCorrectSingle : false
    },
    {
        id:3,
        question:'Что должен знать фулстэк-разработчик? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'},
            {id:4, text:'Введите своё значение', type:'longText'}
        ],
        isCorrectSingle : true
    },
    {
        id:4,
        question:'Что должен знать дизайнер? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:5,
        question:'Что должен знать тимлид? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:6,
        question:'Что должен знать фронтенд-разработчик? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:7,
        question:'Что должен знать бекэнд-разработчик? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:8,
        question:'Что должен знать фулстэк-разработчик? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:9,
        question:'Что должен знать дизайнер? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:10,
        question:'Что должен знать тимлид? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:11,
        question:'Что должен знать фронтенд-разработчик? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:12,
        question:'Что должен знать бекэнд-разработчик? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:13,
        question:'Что должен знать фулстэк-разработчик? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:14,
        question:'Что должен знать дизайнер? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    },
    {
        id:15,
        question:'Что должен знать тимлид? Назовите три ключевых технологии',
        answers:[
            {id:1, text:'HTML, CSS, и Javascript', type:'single'},
            {id:2, text:'Kotlin, PHP и Javascript', type:'single'},
            {id:3, text:'PHP, HTML, и CSS', type:'single'}
        ],
        isCorrectSingle : true
    }
]

export const quizTime = 15 * 60 * 1000