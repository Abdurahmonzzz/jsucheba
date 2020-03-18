<<<<<<< HEAD
alert("testing");
=======
alert('hallo');
let password = prompt('Password?','');
let colorBack = document.body.id = ('body_color');
let textView = document.getElementById('text');
let background = document.getElementById('body_color');
let answer = 234;
let hello =  alert('Hallo');
if(password == answer){
    alert('Hallo');
    background.style.backgroundColor = 'aqua';
    textView.style.fontSize = '100px';
}else{
    alert('Wrong!');
    background.style.backgroundColor = '#FF6F61';
    textView.style.textAlign = 'center';
    textView.style.fontSize = '100px';
    let again = prompt('Again?','')
    setTimeout( function(){
        if(again == answer){
        alert('Hallo');
        background.style.backgroundColor = 'aqua';
        textView.style.fontSize = '100px';
        }
    }, 1000 );
    setTimeout(again,1500);
}
for (password; password == answer;){
    background.style.backgroundColor = 'blue';
    textView.style.fontSize = '100px';
}
console.log(password);
>>>>>>> da3a83f66838af5fcc35ff2cdcb97876be05978d
