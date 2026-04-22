let scrollBtn = document.getElementById('scrollToTop');

window.onscroll = function() {
    if(document.body.scrollTop > 150 || document.documentElement.scroolTop > 100) {
        scrollBtn.style.display = "block";
    }

    else {
        scrollBtn.style.display = "none";
    }
}


scrollBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}