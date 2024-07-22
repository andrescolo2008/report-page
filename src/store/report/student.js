

export const courses=['6', '7', '8','9', '10', '11', '12']

export const subjects=['matematicas', 'ciencias', 'fisica', 'quimica']

export const students =[
        {

    id: 10,
    studentName: 'Obi Wan',
    course:courses[0],
    subject:subjects[0],
    body:['sabe sumar '],
    grade:[5],
    date: new Date().getTime(),
    studentPhotoURL:"/studentPhotos/Obi-Wan-Kenobi-obi-wan-kenobi-29218257-392-500.jpg",//[] https://photodaniel.jpg
 },

 {

    id: 11,
    studentName: 'Darth Vader',
    course:courses[0],
    subject:subjects[0],
    body:'entiende la tabla periódica ',
    grade:4.5,
    date: new Date().getTime(),
    studentPhotoURL:'/studentPhotos/darthvader.jpeg',//[] https://photodaniel.jpg
 },

 {

    id: 12,
    studentName: 'Cal Kestis',
    course:courses[0],
    subject:subjects[0],
    body:'entiende la tabla periódica ',
    grade:4,
    date: new Date().getTime(),
    studentPhotoURL:'/studentPhotos/cal.jpg',//[] https://photodaniel.jpg
 },

]