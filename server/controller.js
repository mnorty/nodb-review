let pokemon = [
  {name:'Pikachu',
  image: 'https://static.giantbomb.com/uploads/original/0/6087/2437349-pikachu.png',
  id: 0},
  {name: 'Jigglypuff',
  image: 'https://i.ebayimg.com/images/g/UHoAAOSwEKpb2-fH/s-l300.jpg',
  id:1},
  {name: 'Psyduck',
  image:'https://i.pinimg.com/originals/10/15/a0/1015a0200841ada662639a4840778f86.jpg',
  id:2}
]

module.exports = {
  getPokemon: (req,res) => {
    res.status(200).send(pokemon)
  }
}