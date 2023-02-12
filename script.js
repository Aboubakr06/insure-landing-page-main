let MenuOp = document.querySelector(".menu-open");
let MenuCl = document.querySelector(".menu-close");
let MainEl = document.querySelector("main");
let FooterEl = document.querySelector("footer");
let MenuEl = document.querySelector(".menu");

MenuOp.addEventListener('click', function(){
      MenuCl.classList.remove('hidden');
      MenuEl.classList.remove('max-lg:hidden');
      MenuOp.classList.add('hidden');
      MainEl.classList.add('hidden');
      FooterEl.classList.add('hidden');
  });

  MenuCl.addEventListener('click', function(){
    MenuCl.classList.add('hidden');
    MenuEl.classList.add('max-lg:hidden');
    MenuOp.classList.remove('hidden');
    MainEl.classList.remove('hidden');
    FooterEl.classList.remove('hidden');
});