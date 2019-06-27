function carregar() {
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('imagem');
    var data = new Date();
    hora = data.getHours();
    minuto = data.getMinutes();
    msg.innerHTML = `Agora são <strong>${hora}h${minuto}</strong>!`
    if (hora >= 0 && hora < 12) {
        imagem.src = "img/manha.png";
        document.body.style.background = '#fedda6'
    } else if (hora < 18) {
        imagem.src = "img/tarde.png";
        document.body.style.background = '#b2c6c8'
    } else {
        imagem.src = "img/noite.png";
        document.body.style.background = '#111312'
    }
}