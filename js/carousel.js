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

    static StartInterval() {
        Carousel._interval = setInterval(function () {
            Carousel.Next();
        }, 3000);
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.showElements()
                Carousel.StartInterval();
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static showElements() {
        let nomeDoArquivo = carouselArr[Carousel._sequence].nome;
        let descricaoDaImagem = carouselArr[Carousel._sequence].descricao;
        let link = carouselArr[Carousel._sequence].link;
        let imagemPromocional = document.getElementById('carousel');
        imagemPromocional.innerHTML = `<a href="/${link}"><img src="/img/${nomeDoArquivo}" alt=""></a>`;
        let descricaoPromocional = document.getElementById('carousel-title');
        descricaoPromocional.innerHTML = `<a href="/${link}">${descricaoDaImagem}</a>`;
    }


    static Next() {
        clearInterval(Carousel._interval);
        Carousel._sequence++;
        if (Carousel._sequence >= carouselArr.length) {
            Carousel._sequence = 0
        }
        Carousel.showElements();
        console.log(Carousel._sequence);
        Carousel.StartInterval();
    }

    static Previous() {
        clearInterval(Carousel._interval);
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = carouselArr.length - 1;
        }

        Carousel.showElements();
        console.log(Carousel._sequence);
        Carousel.StartInterval();
    }
};


carouselArr.push(new Carousel("imagem_1.jpg", "Esta é a nova Ranger Ford 2022. Verifique novidades.", "lancamento.html"));
carouselArr.push(new Carousel("imagem_2.jpg", "Ford a nossa história", "lancamento.html"));
carouselArr.push(new Carousel("imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html"));

Carousel.Start(carouselArr);