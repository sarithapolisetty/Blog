const QuizQuestions =

   [ {
        question: "It...alot in Britain?",
        id: "Britain",
        type: "radio",
        choices: [
            "is rain",
            "rains",
            "rain"
        ]
    },
    {
        question: "I...pizza very much?",
        id: "pizza",
        type: "radio",
        choices: [
            "is like",
            "like",
            "likes"
        ]
    },
    {
        question: "I...english very well?",
        id: "english",
        type: "radio",
        choices: [
            "don't speak",
            "not speak",
            "no speak"
        ]
    },
    {
        question: "They always...T.v in the evening?",
        id: "T.v",
        type : "radio",
        choices: [
            "watch",
            "watches",
            "are watch"
        ]
    },
    {
        question: "My sister...to the cinema very often?",
        id: "cinema",
        type: "radio",
        choices: [
            "doesn't go",
            "don't go",
            "goes not"
        ]
    },
    {
        question: "Which of the following are planets?",
        id: "planets",
        type: "checkbox",
        choices: [
            "Mars",
            "Moon",
            "Auto"
        ]
    },
    {
        question: "Which of the following provinces exist in Canada?",
        id: "province",
        type: "checkbox",
        choices: [
            "British Columbia",
             "Ontario", 
             "Washington"
        ]
    }
];
const QuizAnswers = [["rains"],["like"],["don't speak"],["watch"]
,["doesn't go"],
["Mars","Moon"],["British columbia","ontario"]];

module.exports = {QuizQuestions,QuizAnswers};
