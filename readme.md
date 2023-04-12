Descrição do código: 

Esse código primeiro obtém as divs filhas do elemento #swiper-sponsors .swiper-wrapper, embaralha suas ordens usando o método sort com Math.random(), remove as divs originais da div pai usando empty, adiciona as divs embaralhadas usando append, e então cria uma nova instância do swiper com a ordem embaralhada. 

Isso garante que as divs sejam embaralhadas apenas uma vez quando a página é carregada. 