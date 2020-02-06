function favMovie(movie = 'The Room', name = 'Hallie') {
    console.log(`My name is ${name} and my favorite movie is ${movie}!`);
};

favMovie();


let func = (name, movie) => console.log(`My name is ${name} and my favorite movie is ${movie}!`)

func('Hallie', 'Moulin Rouge');






let getFirstName = (name) => {
    console.log(name.split(' ', 1))
}

let getFirstNameConcise = (name) => console.log(name.split(' ', 1))

getFirstName('Hallie Damber')
getFirstNameConcise('TJ Hackett')





let para = (name, location, favFood) => {
    console.log(`${name}, ${location}, ${favFood}`)
}
array = ['Hallie', 'Birmingham', 'Japanese Food']

para(...array);


let name = 'Hallie'




let hotdog = (bun) => {
    let mustard = [...bun];
    console.log(mustard)

    for(i = 0; i < mustard.length; i++){
        console.log(mustard[i])
    }
}
hotdog('i will be the ketchup to your hotdog')




