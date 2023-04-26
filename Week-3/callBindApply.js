let pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

let pokemonName = function () {
  console.log(this === pokemon);
  console.log(this.getPokeName() + "I choose you!");
};

// let logPokemonWithGlobalThis = pokemonName(); //this === global in nodejs or window in browser
let logPokemon = pokemonName.bind(pokemon); // bind creates another function, this === pokemon

logPokemon();

let pokemonNames = function (snack, hobby) {
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

pokemonNames.call(pokemon, "sushi", "algorithms"); // Here it is passed as arguments
pokemonNames.apply(pokemon, ["sushi", "algorithms"]); // Here it is passed as array, it can be used when we have dynamic arguments
