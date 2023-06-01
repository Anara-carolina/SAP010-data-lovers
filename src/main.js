const container = document.querySelector('#cardContainer');

// Array de objetos com as informações para cada card
const cardData = [

    {
      "type": "maior",
      "name_short": "ar01",
      "name": "O Mago",
      "value": 1,
      "meaning_up":  "Habilidade, diplomacia, destreza, sutileza; doença, dor, perda, desastre, armadilhas de inimigos; autoconfiança, vontade; o Consultante, se for homem.",
      "meaning_rev": "Médico, Mago, doença mental, desgraça, inquietação.",
      "desc":"Uma figura jovem vestida como um mágico, com o semblante do divino Apolo, com um sorriso de confiança e olhos brilhantes. Acima de sua cabeça está o sinal misterioso do Espírito Santo, o sinal da vida, como uma corda sem fim, formando o número 8 na posição horizontal. Em torno de sua cintura está um cinto de serpente, parecendo devorar sua própria cauda. Isso é familiar para a maioria como um símbolo convencional da eternidade, mas aqui indica especialmente a eternidade do alcance no espírito. Na mão direita do Mago há uma varinha levantada em direção ao céu, enquanto a mão esquerda está apontando para a terra. Este sinal duplo é conhecido nos graus mais elevados dos Mistérios Instituídos; ele mostra a descida da graça, virtude e luz, extraídas das coisas acima e transmitidas às coisas abaixo. A sugestão em todo o caso é, portanto, a posse e comunicação dos Poderes e Dons do Espírito. Sobre a mesa na frente do Mago estão os símbolos dos quatro naipes do Tarô, significando os elementos da vida natural, que estão como contadores diante do adepto, e ele os adapta como desejar. Abaixo estão rosas e lírios, o flos campi e lilium convallium, transformados em flores de jardim, para mostrar o cultivo da aspiração. Este arcano significa o motivo divino no homem, refletindo Deus, a vontade na libertação de sua união com o que está acima. Também é a unidade do ser individual em todos os planos, e em um sentido muito elevado, é o pensamento, na fixação do mesmo. Com referência ao que chamei de sinal da vida e sua conexão com o número 8, pode-se lembrar que o Gnosticismo cristão fala do renascimento em Cristo como uma mudança para a Ogdóade. O número místico é chamado Jerusalém acima, a Terra que mana Leite e Mel, o Espírito Santo e a Terra do Senhor. De acordo com o Martinismo, 8 é o número de Cristo.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar02",
      "name": "A Sacerdotisa",
      "value": 2,
      "meaning_up": "Segredos, mistério, o futuro ainda não revelado; a mulher que interessa ao Consultante, se for homem; o próprio Consultante, se for mulher; silêncio, tenacidade; mistério, sabedoria, ciência.",
      "meaning_rev": "Paixão, ardor moral ou físico, vaidade, conhecimento superficial.",
      "desc": "Ela tem a lua crescente aos seus pés, uma diadema com chifres em sua cabeça, com um globo no lugar central, e uma grande cruz solar em seu peito. O pergaminho em suas mãos está inscrito com a palavra Tora, significando a Lei Maior, a Lei Secreta e o segundo sentido da Palavra. Ele está parcialmente coberto por seu manto, para mostrar que algumas coisas são implícitas e outras são faladas. Ela está sentada entre as colunas branca e preta - J. e B. - do Templo místico, e o véu do Templo está atrás dela: ele é bordado com palmas e romãs. As vestimentas são fluidas e translúcidas, e o manto sugere luz - um brilho radiante. Ela tem sido chamada de Ciência oculta no limiar do Santuário de Ísis, mas ela é realmente a Igreja Secreta, a Casa que é de Deus e do homem. Ela representa também o Segundo Casamento do Príncipe que já não é deste mundo; ela é a Noiva e Mãe espiritual, a filha das estrelas e do Jardim do Éden Superior. Ela é, em suma, a Rainha da luz emprestada, mas esta é a luz de todos. Ela é a Lua nutrida pelo leite da Mãe Suprema. De certa forma, ela também é a Própria Mãe Suprema - isto é, ela é o reflexo brilhante. É nesse sentido de reflexão que seu nome mais verdadeiro e elevado no simbolismo é Shekinah - a glória co-habitante. De acordo com a Cabala, há uma Shekinah tanto acima como abaixo. No mundo superior, é chamada Binah, a Compreensão Suprema que reflete as emanações que estão abaixo. No mundo inferior, é MaIkuth - sendo entendido, para este propósito, como um Reino abençoado, sendo com o qual ele é abençoado, a Glória Habitante. Falando misticamente, a Shekinah é a Noiva Espiritual do homem justo, e quando ele lê a Lei, ela dá o significado Divino. Há alguns aspectos em que este arcano é o mais elevado e sagrado dos Arcanos Maiores.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/590px-RWS_Tarot_02_High_Priestess.jpg"      
    },
    {
      "type": "maior",
      "name_short": "ar03",
      "name": "A Imperatriz",
      "value": 3,
      "meaning_up": "Fertilidade, ação, iniciativa, longevidade; o desconhecido, clandestino; também dificuldade, dúvida, ignorância.",
      "meaning_rev": "Luz, verdade, a revelação de assuntos complexos, celebrações públicas; de acordo com outra interpretação, vacilação.",
      "desc": "Uma figura majestosa, sentada, vestida com roupas luxuosas e aspecto real, como uma filha do céu e da terra. Sua diadema é composta por doze estrelas, agrupadas em um conjunto. O símbolo de Vênus está presente no escudo que repousa próximo a ela. Um campo de milho está amadurecendo em frente a ela, e além disso há uma queda de água. O cetro que ela segura é coroado pelo globo deste mundo. Ela é o Jardim do Éden inferior, o Paraíso Terrestre, tudo o que é simbolizado pela casa visível do homem. Ela não é a Regina coeli, mas ela ainda é o refúgio dos pecadores, a mãe fecunda de milhares. Também há certos aspectos nos quais ela foi descrita corretamente como desejo e suas asas, como a mulher vestida com o sol, como Gloria Mundi e o véu do Sanctum Sanctorum; mas ela não é, eu posso acrescentar, a alma que alcançou asas, a menos que todo o simbolismo seja contado de outra forma e incomum. Ela é acima de tudo a fecundidade universal e o sentido exterior da Palavra. Isso é óbvio, porque não há mensagem direta que tenha sido dada ao homem como a que é carregada pela mulher; mas ela mesma não carrega sua interpretação.\nEm outra ordem de ideias, a carta da Imperatriz significa a porta ou portão através dos quais se obtém a entrada nesta vida, como no Jardim de Vênus; e então o caminho que leva além disso, para o que está além, é o segredo conhecido pela Alta Sacerdotisa: ele é comunicado por ela aos eleitos. A maioria das antigas atribuições desta carta estão completamente erradas em relação ao simbolismo - como, por exemplo, sua identificação com a Palavra, Natureza Divina, a Tríade e assim por diante.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar04",
      "name":  "O Imperador",
      "value": 4,
      "meaning_up": "Estabilidade, poder, proteção, realização; uma pessoa importante; ajuda, razão, convicção; também autoridade e vontade.",
      "meaning_rev": "Benevolência, compaixão, crédito; também confusão aos inimigos, obstrução, imaturidade.",
      "desc":  "Ele tem uma forma da Crux ansata como seu cetro e um globo em sua mão esquerda. Ele é um monarca coroado - comandante, imponente, sentado em um trono, cujos braços são encimados por cabeças de carneiros. Ele é o executivo e a realização, o poder deste mundo, aqui revestido de seus mais elevados atributos naturais. Ele é ocasionalmente representado sentado em uma pedra cúbica, o que, no entanto, confunde alguns dos temas. Ele é o poder viril, ao qual a Imperatriz responde, e nesse sentido ele é aquele que busca remover o Véu de Ísis; no entanto, ela permanece virgo intacta.\nDeve-se entender que esta carta e a da Imperatriz não representam precisamente a condição da vida conjugal, embora esse estado esteja implícito. Superficialmente, como indiquei, eles representam a realeza mundana, exaltada nos assentos dos poderosos; mas acima disso há a sugestão de outra presença. Eles também significam - e a figura masculina em especial - a realeza superior, ocupando o trono intelectual. Trata-se do senhorio do pensamento, mais do que do mundo animal. Ambas as personalidades, cada uma à sua maneira, estão cheias de estranha experiência, mas a delas não é conscientemente a sabedoria que provém de um mundo superior. O Imperador já foi descrito como (a) vontade em sua forma encarnada, mas isso é apenas uma de suas aplicações, e (b) como uma expressão das virtualidades contidas no Ser Absoluto - mas isso é fantasia.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar05",
      "name": "O Hierofante",
      "value": 5,
      "meaning_up": "Casamento, aliança, cativeiro, servidão; segundo outra interpretação, misericórdia e bondade; inspiração; o homem a quem o Consultante recorre.",
      "meaning_rev": "Sociedade, boa compreensão, concórdia, excesso de bondade, fraqueza.",
      "desc":  "Ele usa a tríplice coroa e está sentado entre duas colunas, mas não são as do Templo que são guardadas pela Suma Sacerdotisa. Em sua mão esquerda, ele segura um cetro terminando na cruz tripla, e com sua mão direita, ele faz o conhecido sinal eclesiástico chamado de esoterismo, distinguindo entre a parte manifesta e oculta da doutrina. É notável, nesse contexto, que a Suma Sacerdotisa não faz nenhum sinal. Aos seus pés estão as chaves cruzadas, e dois ministros sacerdotais ajoelham-se diante dele. Ele tem sido usualmente chamado de Papa, o que é uma aplicação particular do cargo mais geral que ele simboliza. Ele é o poder governante da religião externa, enquanto a Suma Sacerdotisa é o gênio predominante do poder esotérico e retirado. Os significados adequados desta carta sofreram uma mistura lamentável de quase todas as mãos. O Grande Oriente diz corretamente que o Hierofante é o poder das chaves, a doutrina exotérica ortodoxa e o lado externo da vida que leva à doutrina; mas ele certamente não é o príncipe da doutrina oculta, como sugeriu outro comentador.\nEle é antes a summa totius theologiæ, quando esta passou para a máxima rigidez de expressão; mas ele simboliza também todas as coisas que são justas e sagradas no lado manifesto. Como tal, ele é o canal da graça pertencente ao mundo da instituição, distinto do mundo da Natureza, e ele é o líder da salvação para a raça humana em geral. Ele é a ordem e a cabeça da hierarquia reconhecida, que é o reflexo de uma outra e maior ordem hierárquica; mas pode acontecer que o pontífice esqueça o significado de seu estado simbólico e aja como se contivesse dentro de suas próprias medidas tudo o que seu signo significa ou seu símbolo busca mostrar. Ele não é, como se pensava, a filosofia - exceto no lado teológico; ele não é inspiração; e ele não é religião, embora seja uma forma de sua expressão.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar06",
      "name": "Os Amantes",
      "value": 6,
      "meaning_up": "Atração, amor, beleza, superação de desafios.",
      "meaning_rev":  "Fracasso, planos tolos. Outra interpretação fala de casamento frustrado e contrariedades de todos os tipos.",
      "desc":  "O sol brilha no zênite e abaixo está uma grande figura alada com os braços estendidos, derramando influências. No primeiro plano, há duas figuras humanas, masculina e feminina, desveladas uma diante da outra, como se fossem Adão e Eva quando ocuparam pela primeira vez o paraíso do corpo terreno. Atrás do homem está a Árvore da Vida, que carrega doze frutos, e a Árvore do Conhecimento do Bem e do Mal está atrás da mulher; a serpente está se enrolando nela. As figuras sugerem juventude, virgindade, inocência e amor antes de serem contaminados pelo desejo material grosseiro. Este é, com toda a simplicidade, o arcano do amor humano, aqui exibido como parte do caminho, da verdade e da vida. Ele substitui, recorrendo aos primeiros princípios, o antigo arcano do casamento, que descrevi anteriormente, e as posteriores tolices que representavam o homem entre o vício e a virtude. Em um sentido muito elevado, o arcano é um mistério da Aliança e do Sábado.\nA sugestão em relação à mulher é que ela representa a atração para a vida sensível, que traz consigo a ideia da Queda do Homem, mas ela é mais o resultado de uma Lei Secreta da Providência do que uma tentadora disposta e consciente. É por meio de sua suposta queda que o homem se erguerá no final e apenas por meio dela ele pode se completar. O arcano é, portanto, de certa forma, outra indicação sobre o grande mistério da feminilidade. Os antigos significados se desfazem necessariamente com as antigas imagens, mas mesmo como interpretações destas últimas, alguns deles eram do tipo banal e outros falsos em simbolismo.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg"
    },
    {
      
     "type": "maior",
     "name_short": "ar07",
     "name": "A Carruagem",
     "value": 7,
     "meaning_up": "Auxílio, providência, guerra, triunfo, presunção, vingança, problemas.",
     "meaning_rev": "Distúrbio, briga, disputa, litígio, derrota.",
    "desc": "Uma figura ereta e principesca carregando uma espada desembainhada, correspondendo, em linhas gerais, à descrição tradicional que forneci na primeira parte. Sobre os ombros do herói vitorioso, supõe-se que estejam as Urim e Tumins. Ele tem liderado a captividade cativa; ele é conquista em todos os planos - na mente, na ciência, no progresso, em certas provas de iniciação. Ele assim respondeu à esfinge, e é por isso que aceitei a variação de Éliphas Lévi; duas esfinges puxam seu carro. Acima de tudo, ele é triunfo na mente.\nDeve-se entender por essa razão: (a) que a pergunta da esfinge diz respeito a um Mistério da Natureza e não ao mundo da Graça, para o qual o cocheiro não poderia oferecer resposta; (b) que os planos de sua conquista são manifestos ou externos e não dentro dele; (c) que a libertação que ele efetua pode deixá-lo em servidão do entendimento lógico; (d) que as provas de iniciação pelas quais ele passou em triunfo devem ser entendidas fisicamente ou racionalmente; e (e) que se ele chegasse às colunas desse Templo entre as quais a Alta Sacerdotisa está sentada, ele não poderia abrir o pergaminho chamado Tora, nem se ela o questionasse ele poderia responder. Ele não é realeza hereditária e não é sacerdócio.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar08",
      "name":  "A Fortaleza",
      "value": 8,
      "meaning_up": "Poder, energia, ação, coragem, magnanimidade; também sucesso completo e honras.",
      "meaning_rev":  "Despotismo, abuso de poder, fraqueza, discórdia, às vezes até mesmo desgraça.",
      "desc":  "Uma mulher, sobre cuja cabeça paira o mesmo símbolo da vida que vimos na carta do Mago, está fechando as mandíbulas de um leão. O único ponto em que esse desenho difere das apresentações convencionais é que sua fortaleza benéfica já subjugou o leão, que está sendo conduzido por uma corrente de flores. Por razões que me satisfazem, esta carta foi trocada com a da Justiça, que normalmente é numerada como oito. Como a variação não traz consigo nada que vá significar para o leitor, não há necessidade de explicação. A Fortaleza, em um de seus aspectos mais elevados, está relacionada com o Mistério Divino da União; a virtude, é claro, opera em todos os planos e, portanto, atrai todos em seu simbolismo. Ela também se relaciona com a inocência inviolada e com a força que reside na contemplação.Esses significados mais elevados são, no entanto, assuntos de inferência, e não sugiro que eles sejam transparentes na superfície da carta. Eles são insinuados de maneira oculta pela corrente de flores, que significa, entre muitas outras coisas, o doce jugo e a leve carga da Lei Divina, quando ela foi levada ao coração dos corações. A carta não tem nada a ver com autoconfiança no sentido comum, embora isso tenha sido sugerido, mas diz respeito à confiança daqueles cuja força é Deus, que encontraram seu refúgio Nele. Há um aspecto em que o leão significa as paixões, e aquela que é chamada Fortaleza é a natureza superior em sua libertação. Ela pisou na víbora e no basilisco e pisou no leão e no dragão.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar09",
      "name": "O Eremita",
      "value": 9,
      "meaning_up": "Prudência, circunspecção; também e especialmente traição, dissimulação, malandragem, corrupção.",
      "meaning_rev": "Ocultação, disfarce, estratégia, medo, cautela irracional.",
      "desc": "A variação dos modelos convencionais nesta carta é apenas que a lâmpada não está parcialmente envolta no manto de seu portador, que mescla a ideia do Ancião dos Dias com a Luz do Mundo. É uma estrela que brilha na lanterna. Eu disse que esta é uma carta de conquista, e para estender essa concepção, a figura é vista segurando seu farol em uma eminência. Portanto, o Eremita não é, como Court de Gebelin explicou, um sábio em busca da verdade e da justiça; nem é ele, como uma explicação posterior propõe, um exemplo especial de experiência. Seu farol intima que onde eu estou, você também pode estar.É ainda uma carta que é compreendida de forma bastante incorreta quando está relacionada à ideia de isolamento oculto, como proteção do magnetismo pessoal contra a mistura. Esta é uma das interpretações frívolas que devemos a Éliphas Lévi. Ela foi adotada pela Ordem Martinista Francesa e alguns de nós ouvimos falar muito da Filosofia Silenciosa e Desconhecida envolta por seu manto, do conhecimento dos profanos. No verdadeiro Martinismo, o significado do termo Philosophe inconnu era de outra ordem. Ele não se referia ao ocultamento pretendido dos Mistérios Instituídos, muito menos de seus substitutos, mas - assim como a própria carta - à verdade de que os Mistérios Divinos garantem sua própria proteção daqueles que não estão preparados.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/586px-RWS_Tarot_09_Hermit.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar10",
      "name":"A Roda da Fortuna",
      "value": 10,
      "meaning_up":"Destino, fortuna, sucesso, elevação, sorte, felicidade.",
      "meaning_rev":  "Aumento, abundância, superfluidade.",
      "desc":  "Neste símbolo, eu mais uma vez segui a reconstrução de Éliphas Lévi, que forneceu várias variantes. É legítimo - como eu insinuei - usar simbolismo egípcio quando isso serve ao nosso propósito, desde que nenhuma teoria de origem seja implicada. No entanto, eu apresentei Tifão em sua forma de serpente. O simbolismo é, é claro, não exclusivamente egípcio, já que as quatro Criaturas Viventes de Ezequiel ocupam os ângulos da carta, e a própria roda segue outras indicações de Lévi em relação à visão de Ezequiel, como ilustração da chave do Tarô particular. Com o ocultista francês, e no próprio design, a imagem simbólica representa o movimento perpétuo de um universo fluídico e o fluxo da vida humana. A Esfinge é o equilíbrio dentro dele. A transliteração de Taro como Rota está inscrita na roda, alternada com as letras do Nome Divino - para mostrar que a Providência está implícita em tudo. Mas essa é a intenção Divina interna, e a intenção semelhante externa é exemplificada pelas quatro Criaturas Viventes. Às vezes, a esfinge é representada deitada em um pedestal acima, o que frauda o simbolismo, ao estultificar a ideia essencial de estabilidade em meio ao movimento.\nPor trás da noção geral expressa no símbolo, está a negação do acaso e da fatalidade implícita nele. Pode-se acrescentar que, desde os dias de Lévi em diante, as explicações ocultas desta carta são - mesmo para o ocultismo em si - de uma espécie singularmente fatua. Já foi dito que ela significa princípio, fecundidade, honra viril, autoridade governante, etc. Os resultados da leitura comum de sorte são melhores do que isso em seu próprio plano.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar11",
      "name": "Justiça",
      "value": 11,
      "meaning_up":  "Equidade, retidão, probidade, execução; triunfo do lado merecedor na lei.",
      "meaning_rev":  "Lei em todos os seus departamentos, complicações legais, intolerância, preconceito, severidade excessiva.",
      "desc": "Como esta carta segue o simbolismo tradicional e carrega acima de tudo seus significados óbvios, há pouco a dizer a respeito dela fora das poucas considerações coletadas na primeira parte, à qual o leitor é referido.\nSerá visto, no entanto, que a figura está sentada entre pilares, como a Alta Sacerdotisa, e por essa razão parece desejável indicar que o princípio moral que trata cada pessoa de acordo com suas obras - embora, é claro, esteja em estrita analogia com coisas mais elevadas; - difere em sua essência da justiça espiritual que está envolvida na ideia de eleição. Esta última pertence a uma ordem misteriosa da Providência, em virtude da qual é possível para certos homens conceberem a ideia de dedicação às coisas mais altas. A operação disso é como a respiração do Espírito onde quer que queira, e não temos nenhum cânon de crítica ou fundamento de explicação sobre isso. É análogo à posse dos dons das fadas e dos dons elevados e dos dons graciosos do poeta: temos ou não temos, e sua presença é tanto um mistério quanto sua ausência. No entanto, a lei da Justiça não é envolvida por qualquer uma dessas alternativas. Em conclusão, os pilares da Justiça se abrem para um mundo e os pilares da Alta Sacerdotisa para outro.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar12",
      "name": "O Enforcado",
      "value": 12,
      "meaning_up": "Sabedoria, circunspecção, discernimento, provações, sacrifício, intuição, adivinhação, profecia.",
      "meaning_rev": "Egoísmo, a multidão, o corpo político.",
      "desc": "A forca na qual ele está suspenso forma uma cruz Tau, enquanto a figura - pela posição das pernas - forma uma cruz gamada. Há um nimbo ao redor da cabeça do suposto mártir. Deve ser observado: (1) que a árvore do sacrifício é madeira viva, com folhas; (2) que o rosto expressa profunda enlevo, não sofrimento; (3) que a figura, como um todo, sugere vida em suspensão, mas vida e não morte. É uma carta de significado profundo, mas todo o significado está velado. Um de seus editores sugere que Éliphas Lévi não conhecia o significado, o que é inquestionável, assim como o editor em si. Tem sido chamada falsamente de carta de martírio, uma carta de prudência, uma carta da Grande Obra, uma carta do dever; mas podemos esgotar todas as interpretações publicadas e encontrar apenas vaidade. Direi muito simplesmente, por minha própria parte, que ela expressa a relação, em um de seus aspectos, entre o Divino e o Universo.\nAquele que pode compreender que a história de sua natureza superior está inserida nesse simbolismo receberá indicações sobre um grande despertar que é possível e saberá que, após o Sagrado Mistério da Morte, há um Glorioso Mistério da Ressurreição.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar13",
      "name": "A Morte",
      "value": 13,
      "meaning_up": "Fim, mortalidade, destruição, corrupção; também, para um homem, a perda de um benfeitor; para uma mulher, muitas contrariedades; para uma jovem, fracasso nos projetos matrimoniais.",
      "meaning_rev":  "Inércia, sono, letargia, petrificação, sonambulismo; esperança destruída.",
      "desc": "O véu ou máscara da vida é perpetuado na mudança, transformação e passagem do inferior para o superior, e isso é representado de maneira mais adequada no Tarô retificado por uma das visões apocalípticas do que pela noção crua da caveira ceifadora. Por trás disso está todo o mundo da ascensão no espírito. O misterioso cavaleiro se move lentamente, carregando uma bandeira negra com a Rosa Mística, que significa vida. Entre duas colunas no limite do horizonte brilha o sol da imortalidade. O cavaleiro não carrega arma visível, mas rei, criança e donzela caem diante dele, enquanto um prelado de mãos postas aguarda o seu fim.\nNão há necessidade de salientar que a sugestão de morte que fiz em relação à carta anterior deve ser entendida misticamente, mas esse não é o caso na presente instância. O trânsito natural do homem para a próxima etapa de seu ser pode ser uma forma de seu progresso, mas a entrada exótica e quase desconhecida, ainda nesta vida, no estado de morte mística é uma mudança na forma de consciência e a passagem para um estado no qual a morte comum não é nem o caminho nem a porta. As explicações ocultas existentes sobre a carta 13 são, em geral, melhores do que o habitual: renascimento, criação, destino, renovação e outros.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar14",
      "name": "Temperança",
      "value": 14,
      "meaning_up":  "Economia, moderação, frugalidade, gerenciamento, acomodação.",
      "meaning_rev": "Coisas relacionadas a igrejas, religiões, seitas, o clero, às vezes até o padre que irá casar-se com o consulente; também desunião, combinações infelizes, interesses concorrentes.",
      "desc": "Um anjo alado, com o sinal do sol na testa e sobre o peito o quadrado e o triângulo do setenário. Falo dele no sentido masculino, mas a figura não é nem masculina nem feminina. Acredita-se que ele está derramando as essências da vida de cálice para cálice. Ele tem um pé na terra e um na água, ilustrando assim a natureza das essências. Um caminho direto sobe até certas alturas na linha do horizonte, e acima há uma grande luz, através da qual uma coroa é vagamente vista. Aqui está parte do Segredo da Vida Eterna, como é possível para o homem em sua encarnação. Todos os emblemas convencionais são renunciados aqui.\nAssim também são os significados convencionais, que se referem a mudanças nas estações, movimento perpétuo da vida e até mesmo a combinação de ideias. É, além disso, inverídico dizer que a figura simboliza o gênio do sol, embora seja a analogia da luz solar, realizada na terceira parte de nossa tríplice natureza humana. Ela é chamada de Temperança de forma fantasiosa, porque, quando sua regra prevalece em nossa consciência, ela tempera, combina e harmoniza as naturezas psíquica e material. Sob essa regra, conhecemos em nossa parte racional algo de onde viemos e para onde estamos indo.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar15",
      "name":  "O Diabo",
      "value": 15,
      "meaning_up":  "Ravage, violência, veemência, esforços extraordinários, força, fatalidade; aquilo que é predestinado, mas não é, por esse motivo, maléfico.",
      "meaning_rev":  "Fatalidade maligna, fraqueza, pequenez, cegueira.",
      "desc": "O desenho é uma acomodação, meio-termo ou harmonia, entre vários motivos mencionados na primeira parte. O Bode Cornífero de Mendes, com asas como as de um morcego, está em pé sobre um altar. No centro do estômago, há o sinal de Mercúrio. A mão direita está erguida e estendida, sendo o oposto da bênção que é concedida pelo Hierofante no quinto arcano. Na mão esquerda, há uma grande tocha acesa, invertida em direção à terra. Um pentagrama invertido está na testa. Há um anel na frente do altar, de onde duas correntes são levadas aos pescoços de duas figuras, masculina e feminina. Estas são análogas às do quinto arcano, como se fossem Adão e Eva depois da Queda. Aqui está a corrente e a fatalidade da vida material.\nAs figuras têm cauda, para significar a natureza animal, mas há inteligência humana nos rostos, e aquele que está exaltado acima deles não será o seu mestre para sempre. Mesmo agora, ele também é um escravo, sustentado pelo mal que está nele e cego para a liberdade do serviço. Com mais do que seu habitual desprezo pelas artes que ele fingia respeitar e interpretar como mestre nelas, Éliphas Lévi afirma que a figura bafomética é a ciência oculta e a magia. Outro comentador diz que, no mundo Divino, ela significa predestinação, mas não há correspondência naquele mundo com as coisas que aqui embaixo são brutais. O que ela realmente significa é o Morador do Limiar fora do Jardim Místico, quando aqueles que comeram do fruto proibido são expulsos dali.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar16",
      "name": "A Torre",
      "value": 16,
      "meaning_up":  "Miséria, angústia, indigência, adversidade, calamidade, desgraça, decepção, ruína. É um arcano em particular de catástrofe imprevista.",
      "meaning_rev":  "De acordo com uma versão, o mesmo em menor grau, também opressão, aprisionamento, tirania.",
      "desc": "As explicações ocultas associadas a esta carta são escassas e em sua maioria desconcertantes. É inútil indicar que ela retrata a torre em todos os seus aspectos, pois isso é evidente na superfície. Diz-se ainda que ela contém a primeira alusão a uma construção material, mas não concebo que a Torre seja mais ou menos material do que as colunas que encontramos em três casos anteriores. Não vejo nada que justifique Papus em supor que ela seja literalmente a queda de Adão, mas há mais a favor de sua alternativa - que ela significa a materialização da palavra espiritual. O bibliógrafo Christian imagina que seja a queda da mente, buscando penetrar o mistério de Deus. Concordo mais com o Grande Oriente, que é a ruína da Casa do Eu, quando o mal prevaleceu nela, e acima de tudo que é a destruição de uma Casa de Doutrina. Entendo que a referência é, no entanto, a uma Casa da Falsidade. Ilustra também de forma abrangente a antiga verdade de que se o Senhor não construir a casa, em vão trabalham os que a constroem. Há um sentido em que a catástrofe é um reflexo do arcano anterior, mas não no lado do simbolismo que tentei indicar ali. É mais corretamente uma questão de analogia; um está relacionado com a queda no estado material e animal, enquanto o outro significa destruição no lado intelectual. A Torre foi mencionada como o castigo do orgulho e do intelecto, subjugados na tentativa de penetrar o Mistério de Deus; mas, em nenhum dos casos, essas explicações explicam as duas pessoas que são as vítimas vivas. Um é a palavra literal tornada nula e o outro a sua falsa interpretação. Em um sentido ainda mais profundo, pode também significar o fim de uma dispensação, mas não há possibilidade aqui de considerar essa questão complexa.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar17",
      "name": "A Estrela",
      "value": 17,
      "meaning_up":  "Perda, roubo, privação, abandono; outra interpretação diz - esperança e perspectivas brilhantes.",
      "meaning_rev":  "Arrogância, altivez, impotência.",
      "desc": "Uma grande estrela radiante de oito raios, rodeada por sete estrelas menores - também de oito raios. A figura feminina em primeiro plano está completamente nua. Seu joelho esquerdo está na terra e seu pé direito sobre a água. Ela derrama a Água da Vida de duas grandes ânforas, irrigando o mar e a terra. Atrás dela há um terreno elevado e à direita um arbusto ou árvore, onde um pássaro pousa. A figura expressa juventude eterna e beleza. A estrela é l'étoile flamboyante, que aparece no simbolismo maçônico, mas tem sido confundida nele. O que a figura comunica à cena viva é a substância dos céus e dos elementos. Foi dito com razão que os lemas desta carta são Águas da Vida em abundância e Dons do Espírito.\nO resumo de várias explicações insignificantes diz que é uma carta de esperança. Em outros planos, foi certificado como imortalidade e luz interior. Para a maioria das mentes preparadas, a figura aparecerá como o tipo de Verdade desvelada, gloriosa em beleza imperecível, derramando nas águas da alma uma parte e medida de seu precioso tesouro. Mas ela é na realidade a Grande Mãe na Sephira Binah da Cabala, que é o Entendimento supremo, que comunica às Sephiroth que estão abaixo na medida em que podem receber sua influência.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar18",
      "name": "A Lua",
      "value": 18,
      "meaning_up":  "Inimigos ocultos, perigo, calúnia, escuridão, terror, engano, forças ocultas, erro.",
      "meaning_rev": "Instabilidade, inconstância, silêncio, graus menores de engano e erro.",
      "desc": "A distinção entre esta carta e alguns dos tipos convencionais é que a lua está em fase crescente no que é chamado de lado da misericórdia, à direita do observador. Ela tem dezesseis raios principais e dezesseis secundários. A carta representa a vida da imaginação separada da vida do espírito. O caminho entre as torres é a passagem para o desconhecido. O cão e o lobo são os medos da mente natural na presença desse lugar de saída, quando há apenas luz refletida para guiá-la.\nA última referência é uma chave para outra forma de simbolismo. A luz intelectual é um reflexo e além dela está o mistério desconhecido que ela não pode revelar. Ela ilumina nossa natureza animal, cujos tipos são representados abaixo - o cão, o lobo e o que emerge das profundezas, a tendência sem nome e horrenda que é inferior à fera selvagem. Ela se esforça para se manifestar, simbolizada rastejando do abismo da água para a terra, mas geralmente afunda de onde veio. O rosto da mente dirige um olhar tranquilo sobre a inquietação abaixo; o orvalho do pensamento cai; a mensagem é: Paz, acalme-se; e pode ser que venha a se acalmar a natureza animal, enquanto o abismo abaixo deixará de dar forma.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar19",
      "name": "O Sol",
      "value": 19,
      "meaning_up":  "Felicidade material, casamento feliz, contentamento.",
      "meaning_rev": "O mesmo em sentido menor.",
      "desc":"A criança nua montada em um cavalo branco e exibindo um estandarte vermelho já foi mencionada como o melhor simbolismo associado a esta carta. É o destino do Leste Sobrenatural e a grande e santa luz que vai adiante da interminável procissão da humanidade, saindo do jardim murado da vida sensível e seguindo a jornada de volta para casa. A carta significa, portanto, a transição da luz manifesta deste mundo, representada pelo glorioso sol da terra, para a luz do mundo vindouro, que vai adiante da aspiração e é simbolizada pelo coração de uma criança.\nMas a última alusão é novamente a chave para uma forma ou aspecto diferente do simbolismo. O sol é o da consciência no espírito - o direto como a antítese da luz refletida. O tipo característico da humanidade tornou-se um pequeno filho ali - uma criança no sentido de simplicidade e inocência no sentido de sabedoria. Nessa simplicidade, ele carrega o selo da Natureza e da Arte; nessa inocência, ele significa o mundo restaurado. Quando o espírito que se conhece a si mesmo despertou na consciência acima da mente natural, essa mente, em sua renovação, conduz a natureza animal em um estado de perfeita conformidade.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar20",
      "name":  "O Último Julgamento",
      "value": 20,
      "meaning_up": "Mudança de posição, renovação, resultado. Outra interpretação especifica perda total por meio de processo judicial.",
      "meaning_rev":  "Fraqueza, pusilanimidade, simplicidade; também deliberação, decisão, sentença.",
      "desc":"Eu disse que esse símbolo é essencialmente invariável em todos os baralhos de Tarô, ou pelo menos as variações não alteram seu caráter. O grande anjo aqui está envolto em nuvens, mas ele sopra sua trombeta com estandarte, e a cruz, como de costume, é exibida no estandarte. Os mortos estão se levantando de suas tumbas - uma mulher à direita, um homem à esquerda e entre eles seu filho, cuja parte de trás está virada. Mas nesta carta há mais do que três que estão sendo restaurados, e achou-se que valia a pena fazer essa variação para ilustrar a insuficiência das explicações atuais. Deve-se observar que todas as figuras estão unidas no assombro, adoração e êxtase expressos por suas atitudes. Esta é a carta que registra a realização do grande trabalho de transformação em resposta ao chamado do Supremo - chamado este que é ouvido e respondido de dentro.\nAqui está a indicação de um significado que não pode ser desenvolvido mais profundamente no presente local. O que há dentro de nós que toca uma trombeta e tudo o que é inferior em nossa natureza se eleva em resposta - quase num instante, quase no piscar de olhos? Que a carta continue a retratar, para aqueles que não podem ver além, o Último Julgamento e a ressurreição no corpo natural; mas que aqueles que têm olhos interiores olhem e descubram junto com isso. Eles entenderão que ela foi chamada verdadeiramente no passado de uma carta de vida eterna, e por esse motivo pode ser comparada àquela que é conhecida como Temperança.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar00",
      "name": "O Louco",
      "value": 0,
      "meaning_up": "Loucura, mania, extravagância, intoxicação, delírio, frenesi, revelação.",
      "meaning_rev":  "Negligência, ausência, dispersão, descuido, apatia, nulidade, vaidade.",
      "desc": "Com passos leves, como se a Terra e seus empecilhos tivessem pouco poder para detê-lo, um jovem com vestes magníficas pausa à beira de um precipício entre as grandes alturas do mundo; ele observa a distância azul diante dele - a vastidão do céu mais do que a perspectiva abaixo. Seu ato de caminhar ansiosamente ainda é indicado, embora esteja parado no momento dado; seu cachorro ainda está pulando. A borda que se abre para a profundidade não tem terror; é como se anjos estivessem esperando para ampará-lo, caso ele saltasse da altura. Seu semblante transborda inteligência e sonhos expectantes. Ele tem uma rosa em uma mão e, na outra, uma vara valiosa, da qual depende sobre seu ombro direito uma bolsa curiosamente bordada. Ele é um príncipe do outro mundo em suas viagens por este - tudo em meio à glória da manhã, no ar puro. O sol, que brilha atrás dele, sabe de onde ele veio, para onde está indo e como ele retornará por outro caminho após muitos dias. Ele é o espírito em busca de experiência. Muitos símbolos dos Mistérios Instituídos estão resumidos nesta carta, que reverte, sob altas garantias, todas as confusões que a precederam.\nEm seu Manual de Cartomancia, Grand Orient faz uma sugestão curiosa sobre o papel do Bobo Místico, como parte de seu processo em adivinhação superior; mas pode ser necessário mais do que dons comuns para colocá-lo em operação. Veremos como a carta se sai de acordo com as artes comuns de adivinhação e será um exemplo, para aqueles que podem discernir, do fato, de outra forma tão evidente, de que os Arcanos Maiores não tinham originalmente lugar nas artes do jogo psíquico, quando cartas são usadas como contadores e pretextos. No entanto, sabemos muito pouco sobre as circunstâncias em que essa arte surgiu. As explicações convencionais dizem que o Bobo significa a carne, a vida sensível, e, por uma sátira peculiar, seu nome subsidiário era, em certa época, o alquimista, como retrato da loucura no estágio mais insensato.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg"
    },
    {
      "type": "maior",
      "name_short": "ar21",
      "name": "O Mundo",
      "value": 21,
      "meaning_up": "Sucesso garantido, recompensa, viagem, rota, emigração, fuga, mudança de lugar.",
      "meaning_rev":  "Inércia, estabilidade, estagnação, permanência.",
      "desc":  "Como esta mensagem final dos Arcanos Maiores é inalterada - e de fato inalterável - em relação ao seu design, ela já foi parcialmente descrita em relação ao seu sentido mais profundo. Ela representa também a perfeição e o fim do Cosmos, o segredo que está dentro dele, o êxtase do universo quando ele se compreende em Deus. É também o estado da alma na consciência da Visão Divina, refletida a partir do espírito que se conhece. Mas esses significados não prejudicam o que eu disse sobre ela no lado material.\nEla tem mais de uma mensagem no lado macrocósmico e é, por exemplo, o estado do mundo restaurado quando a lei de manifestação tiver atingido o mais alto grau de perfeição natural. Mas é talvez mais especialmente uma história do passado, referindo-se àquele dia em que tudo foi declarado bom, quando as estrelas da manhã cantavam juntas e todos os Filhos de Deus gritavam de alegria. Uma das piores explicações a seu respeito é que a figura simboliza o Mago quando ele atingiu o mais alto grau de iniciação; outra conta diz que representa o absoluto, o que é ridículo. Diz-se que a figura representa a Verdade, o que, no entanto, é mais adequadamente atribuído à décima sétima carta. Por fim, ela foi chamada de Coroa dos Magos.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg"
    },
    
  ]

  // Adicione mais objetos com as informações para os outros cards
  // ...


// Criar os cards e adicionar ao container
for (let i = 0; i < cardData.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card', 'card-item');
  
  const nameElement = document.createElement('h2');
  nameElement.textContent = cardData[i].name;
  
  const meaningElement = document.createElement('p');
  meaningElement.textContent = cardData[i].meaning_up;
  
  card.appendChild(nameElement);
  card.appendChild(meaningElement);
  
  container.appendChild(card);
}