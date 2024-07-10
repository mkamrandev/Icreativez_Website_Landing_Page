document.querySelector('.menu-btn').addEventListener('click', function(){
   document.querySelector('.responsive-navbar').classList.add('open');
});
document.querySelector('.close-btn').addEventListener('click', function(){
    document.querySelector('.responsive-navbar').classList.remove('open');
 });
