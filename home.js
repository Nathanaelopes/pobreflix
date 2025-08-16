
  function hahaha(){
    window.location.href='sinopse.html';
  }

function direita(){
    doc= document.getElementById('esquerda').style;

    doc.display='none';
    doc.transition='3s';


}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function teste(){
  
  x=document.getElementById('text').value;
  

  if(x=='o exorcista'){
    alert('você será direcionado para a o livro digitado!')
    window.location.href='sinopse2.html';
  }
   else if (x==''){
    alert('Campo vazio!');
  }
else{
    alert('Livro não encontrado!\r\nDica: Observe se o livro está digitado corretamente');
  }

}