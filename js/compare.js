
//car
let carArr = [];

class Car {
    nome;
    preco;
    alturaCacamba;
    alturaVeiculo;
    alturaSolo;
    capacidadeCarga;
    motor;
    potencia;
    volumeCacamba;
    roda;
    image;
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    const i = GetCarArrPosition(carArr, carClass);
    if (el.checked && carArr.length >= 2) {
        alert("Só é possível comparar 2 carros por vez.");
        el.checked = false;
        return;
    }

    if(carClass instanceof Car){       
        if(el.checked){
            carArr.push(carClass);
        } else {
            carArr.splice(i, 1)
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação.");
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    document.getElementById("compare_image_0").innerHTML = `<img src="${carArr[0].image}" alt="${carArr[0].nome}">`;
    document.getElementById("compare_image_1").innerHTML = `<img src="${carArr[1].image}" alt="${carArr[1].nome}">`;

    document.getElementById("compare_modelo_0").innerHTML = `<p>${carArr[0].nome}</p>`;
    document.getElementById("compare_modelo_1").innerHTML = `<p>${carArr[1].nome}</p>`;
    
    document.getElementById("compare_alturacacamba_0").innerHTML = `<p>${carArr[0].alturaCacamba}</p>`;
    document.getElementById("compare_alturacacamba_1").innerHTML = `<p>${carArr[1].alturaCacamba}</p>`; 

    document.getElementById("compare_alturaveiculo_0").innerHTML = `<p>${carArr[0].alturaVeiculo}</p>`;
    document.getElementById("compare_alturaveiculo_1").innerHTML = `<p>${carArr[1].alturaVeiculo}</p>`; 

    document.getElementById("compare_alturasolo_0").innerHTML = `<p>${carArr[0].alturaSolo}</p>`;
    document.getElementById("compare_alturasolo_1").innerHTML = `<p>${carArr[1].alturaSolo}</p>`;

    document.getElementById("compare_capacidadecarga_0").innerHTML = `<p>${carArr[0].capacidadeCarga}</p>`;
    document.getElementById("compare_capacidadecarga_1").innerHTML = `<p>${carArr[1].capacidadeCarga}</p>`;

    document.getElementById("compare_motor_0").innerHTML = `<p>${carArr[0].motor}</p>`;
    document.getElementById("compare_motor_1").innerHTML = `<p>${carArr[1].motor}</p>`;
    
    document.getElementById("compare_potencia_0").innerHTML = `<p>${carArr[0].potencia}</p>`;
    document.getElementById("compare_potencia_1").innerHTML = `<p>${carArr[1].potencia}</p>`;

    document.getElementById("compare_volumecacamba_0").innerHTML = `<p>${carArr[0].volumeCacamba}</p>`;
    document.getElementById("compare_volumecacamba_1").innerHTML = `<p>${carArr[1].volumeCacamba}</p>`;

    document.getElementById("compare_roda_0").innerHTML = `<p>${carArr[0].roda}</p>`;
    document.getElementById("compare_roda_1").innerHTML = `<p>${carArr[1].roda}</p>`;

    document.getElementById("compare_preco_0").innerHTML = `<p>${carArr[0].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`;
    document.getElementById("compare_preco_1").innerHTML = `<p>${carArr[1].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`;
}
