// Destaca no menu o link da seção que está visível (scroll spy).
(function () {
    var links = Array.prototype.slice.call(document.querySelectorAll('#menu a[href^="#"]'));
    if (!links.length) return;

    var itens = links.map(function (a) {
        return { link: a, secao: document.querySelector(a.getAttribute('href')) };
    }).filter(function (i) { return i.secao; }).sort(function (a, b) {
        // ordem em que as seções aparecem na página (Sobre antes de Contato)
        return a.secao.compareDocumentPosition(b.secao) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });

    var pendente = false;

    function atualizar() {
        pendente = false;
        // linha de referência: 40% da altura da janela
        var ref = window.innerHeight * 0.4;
        var atual = null;

        itens.forEach(function (item) {
            var r = item.secao.getBoundingClientRect();
            // 1º item da lista cuja seção contém a linha de referência (empate = primeiro)
            if (!atual && r.top <= ref && r.bottom > ref) atual = item;
        });

        // chegou ao fim da página: ativa a última seção
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
            atual = itens.filter(function (i) { return i.secao.id === 'projetos'; })[0] || atual;
        }

        itens.forEach(function (item) {
            item.link.classList.toggle('ativo', item === atual);
        });
    }

    function pedir() {
        if (!pendente) {
            pendente = true;
            requestAnimationFrame(atualizar);
        }
    }

    window.addEventListener('scroll', pedir, { passive: true });
    window.addEventListener('resize', pedir);
    atualizar();
})();
