function carregar() {
    var mensagem = document.getElementById('msg');
    var imagem = document.getElementById('img');
    var data = new Date();
    //var hora = 13 ;
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var mili = data.getMilliseconds();
    var b = data.get
    mensagem.innerHTML = `Olá! Agora são ${hora} horas, ${minutos} minutos`;
    if (hora >= 0 && hora < 5) {
        imagem.src = 'Madrugada.png';
        document.body.style.background = '#778899';
        console.log("Boa Madrugada")
    } else if (hora >= 5 && hora < 12) {
        imagem.src = 'Manhã.png';
        document.body.style.background = '#e2cd9f';
        console.log("Bom dia")
    } else if (hora >= 12 && hora < 18){
        imagem.src = 'Tarde.jpg';
        document.body.style.background = '#FFB90F';
        console.log("Boa tarde")
    } else {
        imagem.src = 'Noite.png';
        document.body.style.background = '#4B0082';
        console.log("Boa Noite")
    }
} 

