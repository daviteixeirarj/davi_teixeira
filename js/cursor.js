// Brilho suave que acompanha o cursor (só em dispositivos com mouse).
(function () {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);

    var alvoX = window.innerWidth / 2, alvoY = window.innerHeight / 2;
    var x = alvoX, y = alvoY;
    var rodando = false;

    function animar() {
        // easing: o brilho "persegue" o cursor com um pequeno atraso
        x += (alvoX - x) * 0.15;
        y += (alvoY - y) * 0.15;
        glow.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) translate(-50%,-50%)';
        if (Math.abs(alvoX - x) > 0.1 || Math.abs(alvoY - y) > 0.1) {
            requestAnimationFrame(animar);
        } else {
            rodando = false;
        }
    }

    document.addEventListener('mousemove', function (e) {
        alvoX = e.clientX;
        alvoY = e.clientY;
        glow.classList.add('visivel');
        if (!rodando) {
            rodando = true;
            requestAnimationFrame(animar);
        }
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
        glow.classList.remove('visivel');
    });
})();
