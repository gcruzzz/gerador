var musicas = [
    "Melting - Kali Uchis",
	"Lover - Taylor Swift",
	"telepatía - Kali Uchis",
	"Halley's Comet - Billie Eilish",
	"Never Be the Same - Camila Cabello",
	"Squeeze - Fifth Harmony",
	"Porque Eu Te Amo - Anavitória",
	"Apaga a Luz - Glória Groove",
	"we fell in love in october - girl in red",
	"Partilhar - Rubel e Anavitória",
	"A Música Mais Triste do Ano - Luiz Lins",
	"Equalize - Pitty",
	"Fallin' All In Yoou - Shawn Mendes",
	"Gostasse, Mô? - Chapéu de Palha",
	"Until I Found You - Stephen Sanchez",
	"Explodir - Anavitória",
	"Just the Way You Are - Bruno Mars",
	"Sem Nome, Mas Com Endereço - Liniker",
	"I Wanna Be Yours - Arctic Monkeys",
	"Tua - Anavitória",
	"Vício - Glória Groove",
	"Eu Não Valho Nada - Lagum",
	"Dá pra ser? - Djonga",
	"Noite de Verão - Gabz",
	"Dezembro - Arthur Diniz",
	"N - Nando Reis",
	"Cor de Marte - Anavitória",
	"Apocalypse - Cigarettes After Sex",
	"Tenerife Sea - Ed Sheeran",
	"Dandelions - Ruth B.",
	"Calendário - Anavitória",
	"Those Eyes - New West",
	"Strong - One Direction",
	"They Don't Know About Us - One Direction",
	"Deixa Rolar - Day e Carol Biazin",
	"Enquanto a noite Cai - Luiz Lins",
	"Feliz Pra Cachorro - Pedro Viáfora",
	"A Gente Junto - Anavitória",
	"fallingforyou - The 1975",
	"Hoje Eu Quero Me Perder - Lagum",
	"Ai, amor - Anavitória",
	"Pensando Em Você - Paulinho Moska",
	"Jamoga - Selvagens à Procura da Lei, Roberta Campos",
	"Poemas Que Colori - Mariana Nolasco ",
	"Geleira do Tempo - Anavitória, Jorge e Mateus"
  ];
  
  // Função para gerar uma música aleatória
  function gerarMusica() {
    // Gerar um número aleatório entre 0 e o número de músicas no array
    var indice = Math.floor(Math.random() * musicas.length);
  
    // Exibir a música gerada na tela
    var musicaGerada = document.getElementById("musica-gerada");
    musicaGerada.textContent =  musicas[indice];
  }
  
  // Adicionar o evento de clique ao botão
  var btnGerar = document.getElementById("btn-gerar");
  btnGerar.addEventListener("click", gerarMusica);
  