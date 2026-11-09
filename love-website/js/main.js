// header shadow on scroll
const header=document.querySelector('header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20),{passive:true});

// highlight current section in nav
const links=[...document.querySelectorAll('nav a')];
const map=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){links.forEach(l=>l.classList.remove('active'));map.get(e.target.id)?.classList.add('active')}
}),{rootMargin:'-40% 0px -55% 0px'});
map.forEach((_,id)=>{const el=document.getElementById(id);el&&io.observe(el)});
