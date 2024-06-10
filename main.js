const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho{
    if(tamanhoSenha <1){
        tamanhoSenha--;
    }
numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho{
    if(tamanhoSenha <20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

for (i=0 i<checkbox.length;++){
    checkbox[i].onclick = geraSenha;
}

const letrasMauísculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMínusculas = 'abcdefghijklmnopqrstuvwxyz';
const números = '0123456789';
const símbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha()
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
}

  numeroSenha.textContent = tamanhoSenha;
  geraSenha();

}  

function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
   } else if (tamanhoSenha > 5 && tamanhoSenha < 12 ) {
    forcaSenha.classList.add('media');
   } else if (tamanhoSenha<= 5) {
    forcaSenha.classList.add('fraca');
   }

}