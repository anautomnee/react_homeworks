import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: 0,
    questions: [{
        id: 0,
        title: "Students heading for Hogwarts board the train from London’s Paddington station.",
        chosen: null,
        correct: "false"
    }, 
    {
        id: 1,
        title: "To access the platform, students must tap a brick with their wand",
        chosen: null,
        correct: "false"
    }, 
    {
        id: 2,
        title: "Only first-year students cross the lake in boats to get to the castle on their first day.",
        chosen: null,
        correct: "true"
    }, 
    {
        id: 3,
        title:  "The rest of the students are taken to the castle in carriages pulled by dragons.",
        chosen: null,
        correct: "false"
    }, 
    {
        id: 4,
        title: "The Sorting Hat sings a different song every year.",
        chosen: null,
        correct: "true"
    }, 
    {
        id: 5,
        title: "The Hogwarts school song begins with the line: ‘Hogwarts, Hogwarts, Hoggy Warty Hogwarts’.",
        chosen: null,
        correct: "true"
    }, 
    ]
}

export const questionnaireSlice = createSlice({
    name: "questionnaire",
    initialState,
    reducers: {
        pickAnswer(state, action) {
            state.questions[action.payload.id].chosen = action.payload.option;
        },
        sendChoices(state) {
            state.result = 0;
            state.questions.forEach(question => question.chosen === question.correct ? state.result += 1 : state.result += 0 );
        },
    }
})

export default questionnaireSlice.reducer;
export const { pickAnswer, sendChoices } = questionnaireSlice.actions;