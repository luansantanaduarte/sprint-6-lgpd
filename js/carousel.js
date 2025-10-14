// carrossel 
// array para armazenamento das imagens, descrições e links
let carouselArr = [];

//objeto carrossel
class Carousel {
    nome
    descricao
    link
    constructor(nome, descricao, link) {
        this.nome = nome;
        this.descricao = descricao;
        this.link = link;
    }

    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },3000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    static Next() {
        let nomeDoArquivo = carouselArr[Carousel._sequence].nome;
        let descricaoDaImagem = carouselArr[Carousel._sequence].descricao;
        let link = carouselArr[Carousel._sequence].link;
        let imagemPromocional = document.getElementById('carousel');
        imagemPromocional.innerHTML = `<a href="/${link}"><img src="/img/${nomeDoArquivo}" alt=""></a>`;
        let descricaoPromocional = document.getElementById('carousel-title');
        descricaoPromocional.innerHTML = `<a href="/${link}">${descricaoDaImagem}</a>`;

        Carousel._sequence++;
        if(Carousel._sequence >= carouselArr.length) {
            Carousel._sequence = 0
        }
    }
};
