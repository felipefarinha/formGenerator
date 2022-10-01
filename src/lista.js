const Estrutura = [
  {
    title: 'A pergunta',
    Quest01: 'primeira respota',
    Quest02: 'segunda',
    Quest03: 'terceira',
    Quest04: 'quarta',
    Quest08: 'oitava e última respota',
    inputVertical: false,  //vertical ou horizontal
    // quando inputVertical é false, habilitade 2 novas opções: inputVerticalTextStart e inputVerticalTextEnd
    inputVerticalTextStart: 'Incício',
    inputVerticalTextEnd: 'Final',
    inputBoxtext: true, //habilta espaço <textArea> para receber texto 
    textToBoxtext: 'Texto que vai acima da caixa de texto', //texto passado acima do espaço inputBoxtext
    type: 'checkbox' //radio ou checkbox
  }
]

export const lista = [
  {
    title: 'Como tomou conhecimento do Geoportal?.',
    Quest01: 'Pesquisa na internet.',
    Quest02: 'Indicação dada por uma Instituição de Ensino ou Servidor Público.',
    Quest03: 'Site da SEDUH.',
    Quest04: 'Por e-mail institucional ou ambiente de trabalho.',
    Quest05: 'Pelas redes sociais.',
    Quest06: 'Outro.',
    type: 'radio',
    inputBoxtext: true,
    textToBoxtext: 'Outro',
    inputText: true,
    inputVertical: true
  },
  {
    title: 'Qual a principal finalidade do Geoportal para você?.',
    Quest01: 'Emitir documentos e certidões.',
    Quest02: 'Pesquisar normas, endereços e imóveis.',
    Quest03: 'Download de mapas.',
    Quest04: 'Pesquisas científicas e escolares.',
    Quest05: '',
    type: 'checkbox',
    textToBoxtext: '',
    inputText: false,
    inputVertical: true
  },
  {
    title: 'Com que frequência você utiliza os serviços do Geoportal?.',
    Quest01: 'Estou usando pela primeira vez.',
    Quest02: 'Poucas vezes.',
    Quest03: 'Diariamente.',
    Quest04: 'Frequentemente - fora do trabalho.',
    Quest05: 'Frequentemente no trabalho.',
    type: 'radio',
    textToBoxtext: '',
    inputText: false,
    inputVertical: true
  },
  {
    title: 'Costuma encontrar as informações que procura?.',
    Quest01: 'Não encontro.',
    Quest02: 'Não encontro todas as informações que procuro.',
    Quest03: 'Encontro, mas com dificuldade.',
    Quest04: 'Sempre encontro.',
    Quest05: '',
    type: 'radio',
    textToBoxtext: '',
    inputText: false,
    inputVertical: true
  },
  {
    title: 'Como você considera as informações disponíveis no Geoportal?',
    Quest01: 'Considero as informações complexas.',
    Quest02: 'Tenho dificuldades, mas consigo entendê-las. ',
    Quest03: 'Entendo o suficiente para as minhas pesquisas.',
    Quest04: 'Acho fácil de entender.',
    Quest05: '',
    type: 'radio',
    textToBoxtext: '',
    inputText: false,
    inputVertical: true
  },
  {
    title: 'Você já precisou usar o atendimento ao usuário? (Telefone e email)',
    Quest01: 'Nunca precisei usar, tem tudo no Geoportal.',
    Quest02: 'Sim, e não fiquei satisfeito.',
    Quest03: 'Sim, e fiquei parcialmente satisfeito.',
    Quest04: 'Sim, e fiquei totalmente satisfeito.',
    Quest05: 'Sim, e não fiquei satisfeito.',
    type: 'radio',
    inputBoxtext: true,
    textToBoxtext: 'Explique o motivo da insatisfação',
    inputText: true,
    inputVertical: true,

  },
  {
    title: 'Como você descreveria os serviços prestados pelo Geoportal? Selecione o que melhor condiz',
    Quest01: 'Inútil',
    Quest02: 'Pouco intuitivo',
    Quest03: 'Útil',
    Quest04: 'Intuitivo',
    Quest05: 'Confiável',
    Quest06: 'Não Confiável',
    Quest07: 'Essencial',
    Quest08: 'Irrelevante',
    type: 'radio',
    textToBoxtext: '',
    inputText: true,
    inputVertical: true
  },
  {
    title: 'Em uma escala de 1 (pouco) a 5 (Muito), quanto o Geoportal tem atendido e facilitado as suas necessidades do dia a dia?',
    Quest01: '1',
    Quest02: '2',
    Quest03: '3',
    Quest04: '4',
    Quest05: '5',
    type: 'radio',
    textToBoxtext: '',
    inputText: false,
    inputVertical: false,
    inputVerticalTextStart: 'Pouco provável',
    inputVerticalTextEnd: 'Muito provável'
  },
  {
    title: 'Você teria alguma sugestão de melhoria ao Geoportal? (Deixe seu comentário sobre nosso atendimento, nova ferramenta, mudanças, entre outros)',
    inputBoxtext: true,
    textToBoxtext: 'Aproveite o espaço abaixo para falar sobre nosso atendimento, sugestão de ferramenta e melhoria',
    inputVertical: true
  },
];