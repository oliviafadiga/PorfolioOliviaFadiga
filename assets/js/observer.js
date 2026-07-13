const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(".hero-content,.hero-image,.section")
.forEach(el=>observer.observe(el));