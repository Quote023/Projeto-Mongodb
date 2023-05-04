/* global use, db */

use('gdi');
db.dropDatabase()

db.diretores.insertMany([
  {_id: 01, nome: "TIM BURTON"},
  {_id: 02, nome: "GEORGE LUCAS"},
  {_id: 03, nome: "DAVID FINCHER"},
  {_id: 04, nome: "MICHAEL GRACEY"},
  {_id: 05, nome: "CHRISTOPHER NOLAN"},
  {_id: 06, nome: "TOM MCGRATH"},
  {_id: 07, nome: "ANDREW ADAMSON"},
  {_id: 08, nome: "PETER JACKSON"},
  {_id: 09, nome: "DENIS VILLENEUVE"},
  {_id: 10, nome: "DANIEL RIBEIRO"},
  {_id: 11, nome: "SHAWN LEVY"},
  {_id: 12, nome: "QUENTIN TARANTINO"},
  {_id: 13, nome: "JAMES CAMERON"},
  {_id: 14, nome: "DAMIEN CHAZELLE"},
  {_id: 15, nome: "JIM SHARMAN"},
  {_id: 16, nome: "MAMORU OSHII"},
  {_id: 17, nome: "ZACK SNYDER"},
  {_id: 18, nome: "RIDLEY SCOTT"},
  {_id: 19, nome: "WES ANDERSON"},
])

db.filmes.insertMany([
    {_id: 1,nome: "BATMAN",ano: 1989,faixa_etaria: 13,poster: "https://i.pinimg.com/originals/ab/8d/eb/ab8deb68ba4b53124a5a7f4ab9545aae.jpg",generos: ["ACÃO", "AVENTURA"],diretor_id: 01},
    {_id: 2,nome: "Edward Scissorhands",ano: 1990,faixa_etaria: 13,poster: "https://m.media-amazon.com/images/M/MV5BMWY2MGRkNjgtZDczNi00YWJjLTkwNmUtMTY0NTE5ZDhkZjgwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",generos: ["FANTASIA"],diretor_id: 01},
    {_id: 3,nome: "STAR WARS",ano: 1977,faixa_etaria: 13,poster: "https://i.pinimg.com/originals/07/4e/f4/074ef47606fac5a3e4607fbc8254538c.jpg",generos: ["ACÃO","AVENTURA","FANTASIA"],diretor_id: 02},
    {_id: 4,nome: "CLUBE DA LUTA",ano: 1999,faixa_etaria: 18,poster: "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg",generos: ["DRAMA"],diretor_id: 03},
    {_id: 5,nome: "THE GREATEST SHOWMAN",ano: 2017,faixa_etaria:"",poster: "https://img.elo7.com.br/product/original/1D04C3F/poster-o-rei-do-show-tamanho-90x-0-cm-lo00-poster-o-rei-do-show.jpg",generos: ["MUSICAL"],diretor_id: 04},
    {_id: 6,nome: "INTERESTELAR",ano: 2014,faixa_etaria: 10,poster: "https://cdn.ome.lt/legacy/images/galerias/Interstellar/Interstellar-poster-11ago2014-01.jpg",generos: ["AVENTURA"],diretor_id: 05},
    {_id: 7,nome: "MEGAMENTE",ano: 2010,faixa_etaria:0,poster: "http://2.bp.blogspot.com/_vqr586h0UZM/TPe6E1zt-LI/AAAAAAAAD4g/NTBR8-9H7g4/s1600/megamind_10.jpg",generos: ["ANIMAÇÃO"],diretor_id: 06},
    {_id: 8,nome: "SHREK",ano: 2001,faixa_etaria:0,poster: "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/91/54/04/20150812.jpg",generos: ["ANIMAÇÃO"],diretor_id: 07},
    {_id: 9,nome: "SENHOR DOS ANÉIS",ano: 2001,faixa_etaria: 12,poster: "https://img.elo7.com.br/product/main/2692717/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo02-90x60-cm-presente-geek.jpg",generos: ["FANTASIA"],diretor_id: 08},
    {_id: 10,nome: "DUNA",ano: 2021,faixa_etaria: 14,poster: "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/2/327420211103-uau-posters-dune-duna-filmes.jpg",generos: ["AÇÃO"],diretor_id: 09},
    {_id: 11,nome: "HOJE EU QUERO VOLTAR SOZINHO",ano: 2014,faixa_etaria: 12,poster: "https://http2.mlstatic.com/D_NQ_NP_664694-MLB31071691966_062019-O.jpg",generos: ["ROMANCE"],diretor_id: 10},
    {_id: 12,nome: "GIGANTES DE AÇO",ano: 2011,faixa_etaria: 12,poster: "https://www.themoviedb.org/t/p/original/mGE53t24Hkrs1Z5TFkYoapd0alK.jpg",generos: ["DRAMA", "AÇÃO"],diretor_id: 11},
    {_id: 13,nome: "DJANGO",ano: 2012,faixa_etaria: 18,poster: "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/4/049320140408-posters-filmes-tarantino-django.jpg",generos: ["DRAMA", "WESTERN"],diretor_id: 12},
    {_id: 14,nome: "AVATAR",ano: 2009,faixa_etaria: 14,poster: "https://http2.mlstatic.com/D_NQ_NP_13835-MLB4594260504_072013-O.jpg",generos: ["AVENTURA", "AÇÃO"],diretor_id: 13},
    {_id: 15,nome: "WHIPLASH",ano: 2014,faixa_etaria: 12,poster: "https://br.web.img3.acsta.net/r_1280_720/pictures/14/09/26/17/53/345974.jpg",generos: ["DRAMA"],diretor_id: 14},
    {_id: 16,nome: "THE ROCKY HORROR PICTURE SHOW",ano: 1975,faixa_etaria: 18,poster: "https://upload.wikimedia.org/wikipedia/pt/f/f0/The_rocky_horror_picture_show_poster.jpg",generos: ["MUSICAL", "TERROR"],diretor_id: 15},
    {_id: 17,nome: "GHOST IN THE SHELL",ano: 1995,faixa_etaria: 14,poster: "https://i.pinimg.com/originals/07/5d/9e/075d9e45a92de562a6af24afc85f5b7c.jpg",generos: ["ANIMAÇÃO", "AÇÃO"],diretor_id: 16},
    {_id: 18,nome: "A LENDA DOS GUARDIÕES",ano: 2010,faixa_etaria: 10,poster: "https://vejasp.abril.com.br/wp-content/uploads/2016/12/a-lenda-dos-guardic3b5es-poster-final-large.jpg",generos: ["ANIMAÇÃO", "AÇÃO"],diretor_id: 17},
    {_id: 19,nome: "ALIEN",ano: 1979,faixa_etaria: 14,poster: "https://images.photowall.com/products/59754/alien.jpg?h=699&q=85",generos: ["TERROR", "FICÇÃO"],diretor_id: 18},
    {_id: 20,nome: "THE FRENCH DISPATCH",ano: 2021,faixa_etaria: 14,poster: "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/02/poster-wen-anderson-french-dispatch.jpeg",generos: ["DRAMA", "COMEDIA"],diretor_id: 19}
]);


console.log("filmes lançados entre 2000 e 2010 (inclusivo)")
console.log(
  db.filmes.find({$and: [{ano: {$gt: 1999}},{ano: {$lt: 2011}}]} ).pretty()
);
console.log("Filmes de animação, ou que tenham 2 generos")
console.log(
  db.filmes.find({$or: [{generos:  "ANIMAÇÃO"}, { generos: { $size: 2} }]})
)
console.log("join de filmes e diretores")
console.log(
db.filmes.aggregate([
  {
      $lookup:
      {
          from: "diretores",
          localField: "diretor_id",
          foreignField: "_id",
          as: "diretor"
      }
  }
]).pretty())