// Carrossel de projetos com rolagem infinita.
// Os cards são clonados (2 conjuntos antes e 2 depois). Ao terminar de rolar,
// a posição é "reposicionada" no conjunto do meio, sem que se perceba o salto.
(function () {
    var trilho = document.getElementById('cards-projetos');
    var prev = document.querySelector('.carrossel-prev');
    var next = document.querySelector('.carrossel-next');
    var dotsBox = document.querySelector('.carrossel-dots');
    var tracosBox = document.querySelector('.carrossel-tracos');
    if (!trilho || !prev || !next || !dotsBox) return;

    var originais = Array.prototype.slice.call(trilho.querySelectorAll('.card'));
    var n = originais.length;
    if (!n) return;

    var COPIAS = 2; // conjuntos de clones de cada lado

    function clonar() {
        var c = originais.map(function (card) {
            var clone = card.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            clone.setAttribute('inert', '');
            Array.prototype.forEach.call(clone.querySelectorAll('a, button'), function (el) {
                el.setAttribute('tabindex', '-1');
            });
            return clone;
        });
        return c;
    }

    var i, j, antes = [], depois = [];
    for (i = 0; i < COPIAS; i++) {
        antes = antes.concat(clonar());
        depois = depois.concat(clonar());
    }
    antes.forEach(function (c) { trilho.insertBefore(c, originais[0]); });
    depois.forEach(function (c) { trilho.appendChild(c); });

    var todos = Array.prototype.slice.call(trilho.querySelectorAll('.card'));

    // Pontinhos e tracinhos (um por projeto original)
    var dots = [];
    var tracos = [];
    originais.forEach(function (card, k) {
        var d = document.createElement('button');
        d.type = 'button';
        d.className = 'carrossel-dot';
        d.setAttribute('aria-label', 'Ir para o projeto ' + (k + 1));
        d.addEventListener('click', function () { irPara(k); });
        dotsBox.appendChild(d);
        dots.push(d);

        if (tracosBox) {
            var s = document.createElement('span');
            s.className = 'carrossel-traco';
            tracosBox.appendChild(s);
            tracos.push(s);
        }
    });

    function larguraConjunto() {
        return todos[n].offsetLeft - todos[0].offsetLeft;
    }

    function passo() {
        var gap = parseFloat(getComputedStyle(trilho).columnGap) || 0;
        return todos[0].offsetWidth + gap;
    }

    function irPara(k) {
        // escolhe a cópia do card k mais próxima da posição atual
        var melhor = null;
        for (var s = 0; s < 2 * COPIAS + 1; s++) {
            var pos = todos[s * n + k].offsetLeft - trilho.offsetLeft;
            if (melhor === null || Math.abs(pos - trilho.scrollLeft) < Math.abs(melhor - trilho.scrollLeft)) {
                melhor = pos;
            }
        }
        trilho.scrollTo({ left: melhor, behavior: 'smooth' });
    }

    // Mantém a rolagem sempre dentro do conjunto do meio
    function normalizar() {
        var w = larguraConjunto();
        var x = trilho.scrollLeft;
        if (x < COPIAS * w - w / 2 || x >= COPIAS * w + w / 2) {
            var rel = ((x % w) + w) % w;
            trilho.scrollLeft = COPIAS * w + rel;
        }
    }

    function atualizar() {
        var area = trilho.getBoundingClientRect();
        var ativos = originais.map(function () { return false; });
        todos.forEach(function (card, idx) {
            var r = card.getBoundingClientRect();
            var visivel = Math.min(r.right, area.right) - Math.max(r.left, area.left);
            if (visivel >= r.width * 0.6) ativos[idx % n] = true;
        });
        ativos.forEach(function (a, k) {
            dots[k].classList.toggle('ativo', a);
            if (tracos[k]) tracos[k].classList.toggle('ativo', a);
        });
    }

    var timer;
    function aoRolar() {
        atualizar();
        clearTimeout(timer);
        timer = setTimeout(normalizar, 120);
    }

    prev.addEventListener('click', function () {
        trilho.scrollBy({ left: -passo(), behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
        trilho.scrollBy({ left: passo(), behavior: 'smooth' });
    });
    trilho.addEventListener('scroll', aoRolar, { passive: true });

    var larguraAnterior = 0;
    function posicionarInicio() {
        var w = larguraConjunto();
        if (larguraAnterior) {
            // redimensionou: mantém a posição relativa dentro do conjunto
            var frac = (((trilho.scrollLeft % larguraAnterior) + larguraAnterior) % larguraAnterior) / larguraAnterior;
            trilho.scrollLeft = COPIAS * w + frac * w;
        } else {
            trilho.scrollLeft = COPIAS * w;
        }
        larguraAnterior = w;
        atualizar();
    }

    window.addEventListener('resize', posicionarInicio);
    posicionarInicio();
})();
