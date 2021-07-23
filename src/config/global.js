export default {
  global: {
    componenteFormativo: 'Estrategias y análisis de mercados',
    descripcionCurso:
      'El análisis de mercado permite conocer a qué entorno se enfrenta la empresa, se debe hacer un estudio detallado a partir de la segmentación de los clientes, implementando herramientas y métodos de investigación con el fin de conocer sus expectativas y necesidades. La formulación de un plan de mercadeo dará respuesta a las necesidades del entorno a través del diseño y cuantificación de estrategias.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis del entorno',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diagnóstico',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fuentes de información',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan Estratégico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Cliente/consumidor',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Plan de mercado',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Informe de resultados',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Diseño del plan de mejora',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Acciones',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Puntos críticos de control',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Berenguer, Quintanilla & Gómez. (2014). Comportamiento del consumidor',
      link:
        'https://books.google.com.co/books?id=-hwDAwAAQBAJ&pg=PT58&hl=es&source=gbs_toc_r&cad=4#v=onepage&q&f=false',
    },
    {
      referencia:
        'Capdepón, M (2018). Técnicas en Investigación de Mercados - Fuentes de Información. [Archivo de video] YouTube',
      link: 'https://www.youtube.com/watch?v=22Edu6E9ibw',
    },
    {
      referencia: 'Ortiz, M. (2015). Marketing conceptos y aplicaciones',
      link:
        'https://es.scribd.com/read/293769909/Marketing-Conceptos-y-aplicaciones#__search-menu_842064',
    },
    {
      referencia: 'Sastre & Polo (2014). Entorno e información de mercados',
      link:
        'https://es.scribd.com/read/424097787/UF1779-Entorno-e-informacion-de-mercados',
    },
    {
      referencia: 'Sevilla, P. (2017). Pirámide de Maslow Economipedia.com',
      link: 'https://economipedia.com/definiciones/piramide-de-maslow.html',
    },
    {
      referencia: 'Zamarreño. (2020). Fundamentos de Marketing',
      link: 'https://es.scribd.com/read/476328868/Fundamentos-de-Marketing',
    },
  ],
  glosario: [
    {
      termino: 'Segmento',
      significado:
        'subgrupo de personas que muestran características similares entre ellos y comparten algunas necesidades y atributos en especial.',
    },
    {
      termino: 'Análisis FODA',
      significado:
        'es el análisis de cuatro variables (oportunidades, amenazas, fortalezas y debilidades). Permite analizar las características de la empresa en relación con el medio que la envuelve, compensando las oportunidades con las amenazas y las fortalezas con las debilidades.',
    },
    {
      termino: 'Información demográfica',
      significado:
        'información referente al tamaño y a las características de una población o público objetivo como el género, edad, nivel económico, preferencias personales, entre otros.',
    },
    {
      termino: 'SIM',
      significado:
        'acrónimo de Sistema de Investigación de Mercados, pero también de Sistema de Información de Mercados.',
    },
    {
      termino: 'Estrategia de mercado',
      significado:
        'diseño y creación de acciones que llevan al cumplimiento del objetivo trazado, logrando incrementar las ventas y una ventaja competitiva.',
    },
    {
      termino: 'Consumidor',
      significado:
        'se conoce también como cliente o usuario, es toda aquella persona natural o jurídica que realice un pago a cambio de recibir un beneficio.',
    },
  ],
  complementario: [
    {
      texto:
        'Minarro, M. (2020). Plan de marketing: qué es y cómo hacer uno paso a paso. Inboundcycle',
      tipo: 'Blog',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/que-es-un-plan-de-marketing-y-como-hacer-uno',
    },
    {
      texto:
        'Hoyos, E. & Henao, I. (2020). Propuesta de plan de mercadeo para una empresa agroavícola para el periodo 2020',
      tipo: 'Trabajo de Grados',
      descarga: '/downloads/PropuestaPlanDeMercadeo.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Avilan Lozano',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario la Granja - Regional Tolima',
      },
      {
        nombre: 'Lina Marcela Ocampo Henao',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario la Granja - Regional Tolima',
      },
      {
        nombre: 'Diana Marcela Luis Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de la Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
