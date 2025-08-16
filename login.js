function entrar(){
    const email= 'lopes15@gmail.com';
    const senha= '1504';
    const user='Nathan';

    x=document.getElementById('email').value;
    y=document.getElementById('senha').value;
    z=document.getElementById('user').value;
    

    if (x==email && y==senha && z==user){
        window.location.href='home.html';
    } else if (x=='' && y=='' && z==''){
        alert('Os campos de preenchimento apresentam-se vazios, revise-os para prosseguir!')
    }  else {
        alert('Seus dados estão incorretos, revise-os para presseguir!');
    }  
}

