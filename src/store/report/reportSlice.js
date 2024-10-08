import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: false,
    messageSaved: '',
    active: null,
    students: [
        {
            id: 10,
            studentName: 'Obi Wan',
            course:9,
            subject:['matemáticas'],
            body:['sabe sumar '],
            grade:[5],
            date: new Date().getTime(),
            studentPhotoURL:"/studentPhotos/Obi-Wan-Kenobi-obi-wan-kenobi-29218257-392-500.jpg",
        },
        {

            id: 11,
            studentName: 'Darth Vader',
            course:9,
            subject:['matemáticas'],
            body:['sabe sumar '],
            grade:[4.5],
            date: new Date().getTime(),
            studentPhotoURL:'/studentPhotos/darthvader.jpeg',//[] https://photodaniel.jpg
         },
         {

            id: 12,
            studentName: 'Cal Kestis',
            course:9,
            subject:['matemáticas'],
            body:['sabe sumar '],
            grade:[4],
            date: new Date().getTime(),
            studentPhotoURL:'/studentPhotos/cal.jpg',//[] https://photodaniel.jpg
         },
    ],
    title:'',
    notes:[''],
};

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        setActiveStudent: (state, action) => {
            state.active = state.students.find(student => student.id === action.payload);
        },
        addNewEmptyNote: (state, action) => {
            const { studentId, logro, grade } = action.payload;
            const student = state.students.find(student => student.id === studentId);
            if (student) {
                student.body.push(logro);
                student.grade.push(grade);
                state.active = student; // Asegurarse de que el estado activo se actualiza
            }
        },
        setActiveNote: (state, action) => {
            // state.active = action.payload;
            const student = state.students.find(student => student.id === action.payload.id);
            state.active = student || null; // Esto asegura que si no se encuentra el estudiante, active sea null
        },
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        setNotes: (state, action) => {
            
            state.notes=action.payload;
            
            state.isSaving = false;
        },
        updateNote: (state, action) => {
            const { studentId, noteIndex, newNote } = action.payload;
            const student = state.studentNotes.find(student => student.id === studentId);
            if (student) {
                student.body[noteIndex] = newNote.body;
                student.grade[noteIndex] = newNote.grade;
            }
        },
        deleteNote: (state, action) => {
            const { studentId, noteIndex } = action.payload;
            const student = state.studentNotes.find(student => student.id === studentId);
            if (student) {
                student.body.splice(noteIndex, 1);
                student.grade.splice(noteIndex, 1);
            }
        }
    }
});

export const {
    addNewEmptyNote,
    setActiveNote,
    savingNewNote,
    setNotes,
    updateNote,
    deleteNote,
    setActiveStudent
} = reportSlice.actions;

export default reportSlice.reducer;
