const avanca = document.querySelectorAll('btn-proximo');
avanca.forEach(button => {
    
    button.addEventListener('click', function () {
        const atual = document.querySelector('ativo');
        const proximoPasso = 'passo-' + this.getAtributeById('data-proximo');
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.remove('ativo');
    });
});