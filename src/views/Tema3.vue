<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Plan Estratégico

    .bloque-texto-a.color-secundario.mt-5.caja_flotante_azul(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema3/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4.caja_escalada_hover
            p(data-aos="fade-up") El plan estratégico de marketing o el plan de mercadeo están enfocados a cumplir los mismos objetivos, los cuales están encaminados a diseñar estrategias para poder captar la atención de clientes, consumidores finales y futuros para así ganar participación en el mercado. Es importante conocer al consumidor al que se quiere llegar, identificar las características, atributos y cualidades que debe tener el cliente para formular un buen plan de mercado, de lo contrario no servirá de nada el trabajo que se realice.

    br
    br
    .titulo-segundo#t_3_1.mt-5
      h2 3.1 Cliente/consumidor

    p(data-aos="fade-up") El cliente es cualquier persona natural o jurídica que compra un producto o recibe un servicio por parte de la empresa, lo que hace que las partes mantengan una relación comercial y que la empresa dirija sus esfuerzos a satisfacer sus necesidades al diseñar e implementar estrategias para lograr una compra habitual.

    br
    br
    .mt-5.p-5(style="background-color:#D2F6E6")
      figure.text-center
        img.imagen_flotante_animada(src="@/assets/curso/tema3/2.svg" style="display:inline;width:150px;margin-top: -7rem;")
      .col-md-5.m-auto.mt-3
        .p-3(style="background-color:#17C878;border-radius:5px;" data-aos="fade-up")
          h4.text-white.text-center.mb-0 Comportamiento del consumidor

      p.mt-4(data-aos="fade-up") La toma de decisión de compra del cliente o consumidor viene influenciada por un deseo, un impulso o una necesidad, siendo esta última la más común al momento de influir en la decisión final. El mercadeo se encarga de investigar las motivaciones y necesidades de los clientes para traducir los deseos de estos y poder identificar qué es exactamente lo que buscan.

      .cajon.color-secundario.p-5.mt-5.caja_flotante_azul
        p(data-aos="fade-up") Teniendo en cuenta lo anterior no se puede seguir adelante sin hacer referencia a la pirámide de las necesidades de Abraham Maslow quien desde su primera aparición en 1943 hizo el esfuerzo para hacer entender que las necesidades del ser humano están jerarquizadas en distintos niveles en los cuales se va avanzando a medida que se suple el nivel anterior. De esta manera, el sector productivo concentra sus esfuerzos en las personas que logran cubrir las necesidades sociales, ya que son aquellos que por poder adquisitivo podrán tomar una decisión de compra o no.

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Figura 2] Pirámide de las necesidades Maslow

    figure.mt-5
      img.image_floating(src="@/assets/curso/tema3/3.svg" data-aos="fade-up")
      figcaption.mt-4.col-md-6 Nota. Tomado de “Pirámide de Maslow”. Economipedia. Sevilla, (2017).

    p.mt-5(data-aos="fade-up") La pirámide de Maslow muestra las necesidades del ser humano por niveles siendo los 2 primeros las necesidades básicas y que por naturaleza deben ser cubiertas. Cuando se pasa al tercer nivel (necesidades sociales), el mercadeo empieza a centrar sus esfuerzos en el diseño de estrategias para que el cliente sienta la necesidad de compra, de esta manera, la adquisición de bienes o servicios hará que se sienta satisfecho y se generen las necesidades de los 2 últimos niveles, creando un proceso cíclico donde las estrategias se vuelven el elemento fundamental para incitar al proceso de compra por parte de los consumidores.

    .col-md-7.m-auto.mt-5
      a.anexo.mb-4(href="https://economipedia.com/definiciones/piramide-de-maslow.html" target="_blank" data-aos="fade-up")
        .anexo__icono
          img(src="@/assets/curso/tema1/22.svg")
        .anexo__texto
          h5(style="color:#12263F") Pirámide de Maslow
          p(style="color:#12263F") Para profundizar se recomienda revisar la siguiente página web.

    Separador

    br
    br
    .mt-5.p-5(style="background-color:#D2F6E6")
      figure.text-center
        img.imagen_flotante_animada(src="@/assets/curso/tema3/4.svg" style="display:inline;width:150px;margin-top: -7rem;")
      .col-md-5.m-auto.mt-3
        .p-3(style="background-color:#17C878;border-radius:5px;" data-aos="fade-up")
          h4.text-white.text-center.mb-0 Influencias del consumidor

      p.mt-4(data-aos="fade-up") Las variables que influencian la decisión del consumidor son vistas desde un punto de vista psicológico que ayuda al mercadeo a generar estrategias para que finalmente se realice el proceso de compra, por ello, la referencia anterior de la pirámide de Maslow, sin embargo, estas no son las únicas variables que influyen, existen otras que intervienen en el proceso, estas son:

      .row.mt-5.col-md-10.m-auto
        .col-md-6.caja_escalada_hover(style="background-color:#5CD8A0;border-top-left-radius: 10px;border-bottom-left-radius: 10px;")
          .p-5
            figure.text-center
              img.imagen_flotante_animada(src="@/assets/curso/tema3/5.svg" style="display:inline;width:150px;")
            h4.text-center.mt-4(data-aos="fade-up") El entorno

            p.mt-4(data-aos="fade-up") Influenciadas por las tradiciones familiares, los gustos de los grupos sociales (amigos, trabajo, estudio) que frecuenta la cultura a la cual pertenece y los líderes de opinión que siga según sus gustos.

        .col-md-6.caja_escalada_hover(style="background-color:#FFE566;border-top-right-radius: 10px;border-bottom-right-radius: 10px;")
          .p-5
            figure.text-center
              img.imagen_flotante_animada(src="@/assets/curso/tema3/6.svg" style="display:inline;width:150px;")
            h4.text-center.mt-4(data-aos="fade-up") Preferencias individuales

            p.mt-4(data-aos="fade-up") La forma como ha crecido cada ser humano influye en las decisiones que toma a lo largo de la vida, por ello, para el mercadeo no debe ser ajeno conocer a su cliente o consumidor desde aspectos como la personalidad, las creencias, los valores y su estilo de vida.

    Separador

    .mt-5.p-5(style="background-color:#D2F6E6")
      figure.text-center
        img.imagen_flotante_animada(src="@/assets/curso/tema3/7.svg" style="display:inline;width:150px;margin-top: -7rem;")
      .col-md-5.m-auto.mt-3
        .p-3(style="background-color:#17C878;border-radius:5px;" data-aos="fade-up")
          h4.text-white.text-center.mb-0 Conducta de compra

      p.mt-4(data-aos="fade-up") Al identificar los factores que influencian el comportamiento de compra, se debe hacer referencia al proceso de la decisión final para pagar por el bien o servicio deseado. Para esto se hace necesario comprender que actualmente los clientes o consumidores compran más que un objeto o servicio, pues ahora la decisión se basa en la experiencia que se pueda generar, el valor agregado que entreguen las empresas del mercado y la manera en que se presta atención al cliente. Con el acceso a la tecnología e información, actualmente se suelen hacer comparativos para poder decidir a quién comprar y a quién no.

      .cajon.color-secundario.p-5.mt-5.caja_flotante_azul
        p(data-aos="fade-up") Lo primero que hace el cliente es identificar la necesidad que tiene, buscar información respecto a las empresas posibles de suplir la necesidad, comparar quien ofrece una experiencia significativa y diferente, y tomar la decisión de compra. Es importante resaltar que esta puede ser de manera inmediata o postergada según el interés del cliente. Para finalizar el proceso de compra se debe generar un acompañamiento por la empresa para conocer la percepción del cliente en cuanto al nivel de satisfacción.

        p.mt-4(data-aos="fade-up") Un cliente satisfecho generará un proceso de recompra y la llegada de más clientes, un cliente insatisfecho hará que se pierda su fidelización y la de algunos clientes más.

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Figura 3]  Proceso decisión de compra

    .col-md-7.m-auto.mt-5
      figure
        img.image_floating(src="@/assets/curso/tema3/8.svg" data-aos="fade-up")

    br
    br
    .mt-5.col-md-10.m-auto.p-4.caja_flotante_rosada(style="background-color:rgb(241 213 78 / 25%);border-radius:4px;")
      .row
        .col-md-2
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/21.svg")
        .col-md-10
          p.mt-2(data-aos="fade-up") A partir del análisis realizado, las empresas deben segmentar el mercado potencial para diseñar el plan de mercadeo con estrategias claras que le permitan llegar finalmente a su nicho de mercado (clientes reales), siendo este el que tomará la decisión de compra y en el que se deberán centrar todos los esfuerzos para fidelizar.

    Separador

    br
    br
    .mt-5.p-5(style="background-color:#D2F6E6")
      figure.text-center
        img.imagen_flotante_animada(src="@/assets/curso/tema3/9.svg" style="display:inline;width:150px;margin-top: -7rem;")
      .col-md-5.m-auto.mt-3
        .p-3(style="background-color:#17C878;border-radius:5px;" data-aos="fade-up")
          h4.text-white.text-center.mb-0 Segmento de mercado

      p.mt-4(data-aos="fade-up") La segmentación de mercado es la división de este en grupos homogéneos respecto a algunos criterios como la edad, género, gustos, ubicación geográfica, entre otros, con el fin de implementar posteriormente una investigación de mercado para conocer sus preferencias y gustos a la hora de tomar la decisión de compra para finalizar con el diseño de un plan de mercadeo.

      .cajon.color-secundario.p-5.mt-5.caja_flotante_azul
        p(data-aos="fade-up") Aplicar la investigación al segmento de mercado definido por la empresa permite que las estrategias planteadas a desarrollar puedan satisfacer las necesidades de los clientes y del consumidor final. Ahora bien, se debe tener en cuenta que en la actualidad los clientes no satisfacen sus necesidades únicamente con los atributos del producto o calidad del servicio, sino que buscan vivir una experiencia, encontrar valor agregado e identificar los beneficios y ventajas que ofrecen las empresas del sector. En palabras de Kotler y otros (2006).

        p.mt-4(data-aos="fade-up") La puesta en práctica de la segmentación del mercado supone el desarrollo de un proceso que consta de tres fases fundamentales:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Segmentación de mercado propiamente dicha")
        .col-md-8.mb-4.mb-md-0
          p Etapa en la que se identifican criterios y variables que permiten dividir el mercado en grupos o segmentos de consumidores y definir el perfil de cada uno de estos grupos. Por ejemplo, una empresa productora de embutidos podría definir en este paso si quiere enfocar su producto a la población de una localidad o al municipio.
      
        .col-md-4
          figure
            img.image_floating(src='@/assets/curso/tema3/10.svg', alt='Segmentación de mercado propiamente dicha')

      .row(titulo="Definición del público objetivo")
        .col-md-8.mb-4.mb-md-0
          p Posterior a la segmentación, se realiza una valoración de cada segmento, se selecciona aquel al cual se va a dirigir y decide la estrategia para este. La elección puede obedecer a diferentes criterios, pero siempre se parte del bien a ofrecer; siguiendo con el ejemplo anterior, en este punto puede definirse si la venta estará dirigida a los pequeños comercios como tiendas o minimercados o se hará distribución directa a los consumidores finales.
      
        .col-md-4
          figure
            img.image_floating(src='@/assets/curso/tema3/11.svg', alt='Definición del público objetivo')

      .row(titulo="Posicionamiento del producto en el mercado")
        .col-md-8.mb-4.mb-md-0
          p Finalmente, la empresa decide cuál es el posicionamiento adecuado para el producto del mercado objetivo elegido y diseña el plan de mercadeo con el que lo comercializará.  Si en el caso anteriormente expuesto se define vender a las tiendas y minimercados, en este punto se determina si se abordará con una estrategia publicitaria agresiva, como la contratación de impulsadores u ofreciendo muestras gratuitas; o, por el contrario, se buscará un posicionamiento más orgánico y lento que permita cubrir la demanda del producto con la capacidad de producción disponible.
      
        .col-md-4
          figure
            img.image_floating(src='@/assets/curso/tema3/12.svg', alt='Posicionamiento del producto en el mercado')

    Separador

    .titulo-segundo#t_3_2.mt-5
      h2 3.2 Plan de mercado

    p(data-aos="fade-up") Lo primero a saber es que un plan de mercado es un documento donde es necesario plasmar cuáles son los objetivos que persigue la empresa, las acciones o estrategias a implementar y el presupuesto para poder llevarlas a cabo. La utilidad de este plan es que la meta se establece desde el inicio de forma clara y debe ser alcanzable y las estrategias como el camino para lograrla. El plan está pensado para funcionar de forma anual; cada año nuevo trae consigo su nuevo plan.

    .cajon.color-secundario.p-5.mt-5.caja_flotante_azul
      p(data-aos="fade-up") El plan de mercado es vital en el funcionamiento de la empresa ya que conlleva consigo una medición de las actividades desarrolladas, la satisfacción del cliente y la planeación de actividades para responder a las necesidades actuales del mercado y la comunicación con clientes, consumidores y clientes futuros.

    .col-md-7.m-auto.mt-5
      a.anexo.mb-4(href="https://www.youtube.com/watch?v=YpcxMRGtR0I" target="_blank" data-aos="fade-up")
        .anexo__icono
          img(src="@/assets/curso/tema1/22.svg")
        .anexo__texto
          h5(style="color:#12263F") Plan de marketing: qué es y cómo hacer uno paso a paso
          p(style="color:#12263F") Para profundizar el diseño de plan de mercadeo se sugiere revisar el siguiente video.

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Figura 4] Importancia y objetivos del plan de mercado

    figure.mt-5
      img.image_floating(data-aos="fade-up" src="@/assets/curso/tema3/13.svg")

    Separador

    h4.mt-5(data-aos="fade-up") Estructura plan de mercado

    p.mt-4(data-aos="fade-up") Para que el plan de mercado pueda desarrollarse de manera correcta se considera la siguiente estructura, la cual está dividida en 3 grandes áreas, así será más fácil el cumplimiento de los objetivos:

    .cajon.color-acento-botones.p-5.mt-4.caja_flotante_rosada
      h4(data-aos="fade-up") Marketing analítico
      p.mt-4(data-aos="fade-up") Es indispensable hacer la investigación y análisis de información de la empresa, el mercado y la competencia. La investigación se basa en 4 grupos, los cuales son análisis interno, externo, estudio de mercado y FODA.

    TabsB.color-acento-contenido.mt-4
      .py-4.py-md-5(titulo="Análisis interno y externo" :icono="require('@/assets/curso/tema3/14.svg')")
        .row.p-5
          .col-md-7.mb-4.mb-md-0.mt-5
            h4 Análisis interno y externo
            p.mt-4 Se analizan las variables que influyen en el desarrollo de la actividad comercial, como capacidad financiera (interno) o análisis de los consumidores (externo).
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema3/17.svg', alt='Análisis interno y externo')

      .py-4.py-md-5(titulo="Estudio de mercado" :icono="require('@/assets/curso/tema3/15.svg')")
        .row.p-5
          .col-md-7.mb-4.mb-md-0.mt-5
            h4 Estudio de mercado
            p.mt-4 Se debe identificar las necesidades reales del mercado, de esta manera, se definen los atributos del producto, el valor agregado, experiencia que genera; se define estrategia para definir el precio, se hace la definición de estrategias para ingresar al mercado competidor y se establece el canal de distribución con el cual llegarán al consumidor final.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema3/18.svg', alt='Estudio de mercado')

      .py-4.py-md-5(titulo="FODA (Fortalezas, Oportunidades, Debilidades y Amenazas)" :icono="require('@/assets/curso/tema3/16.svg')")
        .row.p-5
          .col-md-7.mb-4.mb-md-0.mt-5
            h4 FODA (Fortalezas, Oportunidades, Debilidades y Amenazas)
            p.mt-4 La implementación de la matriz hace un ejercicio para poder identificar las #[strong fortalezas] y #[strong debilidades] de la empresa de manera interna, en este análisis se deben tener en cuenta variables que son controlables por la organización como la disponibilidad de recursos económicos, personal capacitado, calidad del producto o servicio, capacidad de endeudamiento o acceso a tecnología.  Así mismo, se identifican las #[strong oportunidades] y #[strong amenazas] del mercado que no se pueden controlar, entre estas variables se encuentran las condiciones climáticas para el desarrollo de algún proceso, situación de orden público, impuestos, alza de precios de materia prima, estrategias de la competencia, entre otros.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema3/19.svg', alt='FODA (Fortalezas, Oportunidades, Debilidades y Amenazas)')

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Figura 5]   Componentes marketing analítico

    figure.mt-5
      img.image_floating(data-aos="fade-up" src="@/assets/curso/tema3/20.svg")

    br
    br
    .mt-5.col-md-10.m-auto.p-4.caja_flotante_rosada(style="background-color:rgb(241 213 78 / 25%);border-radius:4px;")
      .row
        .col-md-2
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/21.svg" style="max-width: 100px;margin: 0 auto;")
        .col-md-10
          p.mt-2(data-aos="fade-up") #[strong ¡ Importante !] Este primer paso del estudio de mercado es el más importante, ya que entrega información clara y objetiva de la situación actual de la empresa en el mercado respecto a la competencia, a la situación socioeconómica y demarca la intención de los objetivos a cumplir.

    .cajon.color-acento-botones.p-5.mt-5.caja_flotante_rosada
      h4(data-aos="fade-up") Marketing estratégico
      p.mt-4(data-aos="fade-up") Para desarrollar este paso del estudio de mercado se tiene en cuenta que no será siempre lo mismo para todas las empresas; poder plasmar las estrategias depende de la naturaleza de las empresas y del objetivo que se quiera alcanzar. 

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Figura 6]  Paso a paso del marketing estratégico

    figure.mt-5
      img.image_floating(data-aos="fade-up" src="@/assets/curso/tema3/21.svg")

    Separador

    .cajon.color-acento-botones.p-5.mt-4.caja_flotante_rosada
      h4(data-aos="fade-up") Marketing operativo
      p.mt-4(data-aos="fade-up") En este punto se desarrolla el grueso del plan, aquí se deben concentrar el diseño, implementación y costo de las estrategias para lograr lo que se planteó al inicio de este. Se identifican las necesidades de recursos y se determina si debe existir financiación externa.

      p.mt-4(data-aos="fade-up") El marketing operativo se desarrolla en 4 pasos donde se recogen todos los elementos analizados del marketing analítico y estratégico, es el momento de actuar y decidir la implementación del plan. #[strong Los 4 pasos son los siguientes:]

    PasosB.color-acento-contenido.mt-5.p-5(style="background-color:#E8FFF5")
      .row.p-5(titulo="4P")
        .col-md-8.mb-4.mb-md-0
          h4.mt-4(data-aos="fade-up") 4P
          p.mt-3(data-aos="fade-up") La empresa define la forma de cómo llegar a los clientes, para ello, debe implementar el marketing mix que es la mezcla de #[strong P]roducto, #[strong P]recio, #[strong P]laza y #[strong P]romoción. Define los atributos del producto, en qué lugar estará ubicado para llegar a los clientes definidos en la segmentación, cuál será el precio de venta de los productos o servicios y las estrategias para promocionarlos.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema3/22.svg', alt='4P')

        p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;opacity:0") #[strong Tabla 4] Diseño cronograma de actividades

        .col-md-12.mt-4(style="opacity:0;")
            .tabla-a.color-acento-botones.mb-5(data-aos="fade-up")
              table
                caption Nota. Tomado de “Propuesta plan de mercadeo para una empresa agro avícola”. Hoyos y Henao, (2020). 
                thead
                  tr
                    th Objetivo no marcado
                    th Estrategia
                    th Acción a realizar
                    th Responsable
                    th Tiempo de ejecución
                    th Fecha de inicio
                    th Fecha de finalizacion
                tbody
                  tr
                    td #[strong Incrementar las ventas del canal de distribución en la regional occidente.]
                    td Desarrollo de mercados.
                    td Promocionar la marca a traves de participación en eventos agricolas a nivel regional y nacional.
                    td Mercadeo. #[br] #[br] (se pueden definir por área, cargo o nombre propio)
                    td 3 meses
                    td 15 de marzo
                    td 15 de junio

      .row.p-5(titulo="Comunicación")
        .col-md-8.mb-4.mb-md-0
          h4.mt-4(data-aos="fade-up") Comunicación
          p.mt-3(data-aos="fade-up") La empresa define los medios por los cuales comunicará la estrategia diseñada, debe tener clara cuál será la forma de llegar a sus clientes, estas pueden ser el mercadeo tradicional como pautas, promociones, patrocinios, o mercadeo digital como marketing web, social media y móvil.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema3/23.svg', alt='Comunicación')

        p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;opacity:0") #[strong Tabla 4] Diseño cronograma de actividades

        .col-md-12.mt-4(style="opacity:0;")
          .tabla-a.color-acento-botones.mb-5(data-aos="fade-up")
            table
              caption Nota. Tomado de “Propuesta plan de mercadeo para una empresa agro avícola”. Hoyos y Henao, (2020). 
              thead
                tr
                  th Objetivo no marcado
                  th Estrategia
                  th Acción a realizar
                  th Responsable
                  th Tiempo de ejecución
                  th Fecha de inicio
                  th Fecha de finalizacion
              tbody
                tr
                  td #[strong Incrementar las ventas del canal de distribución en la regional occidente.]
                  td Desarrollo de mercados.
                  td Promocionar la marca a traves de participación en eventos agricolas a nivel regional y nacional.
                  td Mercadeo. #[br] #[br] (se pueden definir por área, cargo o nombre propio)
                  td 3 meses
                  td 15 de marzo
                  td 15 de junio

      .row.p-5(titulo="Puesta en marcha")
        .col-md-8.mb-4.mb-md-0
          h4.mt-4(data-aos="fade-up") Puesta en marcha
          p.mt-3(data-aos="fade-up") Se debe generar un cronograma de actividades según cada uno de los objetivos, este debe ser anual y tener fecha de inicio, de finalización y responsables, así mismo, es indispensable definir cada una de las estrategias planteadas de manera clara, medible y relacionadas con cada objetivo a cumplir. Un ejemplo de la manera de cómo organizar el cronograma se muestra a continuación:
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema3/24.svg', alt='Puesta en marcha')

        p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Tabla 4] Diseño cronograma de actividades

        .col-md-12.mt-4
          .tabla-a.color-acento-botones.mb-5(data-aos="fade-up")
            table
              caption Nota. Tomado de “Propuesta plan de mercadeo para una empresa agro avícola”. Hoyos y Henao, (2020). 
              thead
                tr
                  th Objetivo no marcado
                  th Estrategia
                  th Acción a realizar
                  th Responsable
                  th Tiempo de ejecución
                  th Fecha de inicio
                  th Fecha de finalizacion
              tbody
                tr
                  td #[strong Incrementar las ventas del canal de distribución en la regional occidente.]
                  td Desarrollo de mercados.
                  td Promocionar la marca a traves de participación en eventos agricolas a nivel regional y nacional.
                  td Mercadeo. #[br] #[br] (se pueden definir por área, cargo o nombre propio)
                  td 3 meses
                  td 15 de marzo
                  td 15 de junio

      .row.p-5(titulo="Presupuesto")
        .col-md-8.mb-4.mb-md-0
          h4.mt-4(data-aos="fade-up") Presupuesto
          p.mt-3(data-aos="fade-up") Todo lo que se planee en el cronograma de actividades deberá tener asignado un presupuesto, esto debe quedar establecido desde la planeación, de tal manera que si no se cuenta con los recursos la empresa pueda buscar fuentes de financiación antes de la puesta en marcha, si esto no se logra los procesos quedarán inconclusos y no se cumplirán los objetivos. La dirección y área de mercadeo deben ser muy cuidadosos a definir las actividades, las cuales son la recopilación de todo el trabajo hecho del marketing estratégico hacia atrás, pues cualquier detalle que quede por fuera es una representación monetaria que puede tener un impacto muy grande y negativo en la organización. 
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema3/25.svg', alt='Presupuesto')

        p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;opacity:0") #[strong Tabla 4] Diseño cronograma de actividades

        .col-md-12.mt-4(style="opacity:0;")
          .tabla-a.color-acento-botones.mb-5(data-aos="fade-up")
            table
              caption Nota. Tomado de “Propuesta plan de mercadeo para una empresa agro avícola”. Hoyos y Henao, (2020). 
              thead
                tr
                  th Objetivo no marcado
                  th Estrategia
                  th Acción a realizar
                  th Responsable
                  th Tiempo de ejecución
                  th Fecha de inicio
                  th Fecha de finalizacion
              tbody
                tr
                  td #[strong Incrementar las ventas del canal de distribución en la regional occidente.]
                  td Desarrollo de mercados.
                  td Promocionar la marca a traves de participación en eventos agricolas a nivel regional y nacional.
                  td Mercadeo. #[br] #[br] (se pueden definir por área, cargo o nombre propio)
                  td 3 meses
                  td 15 de marzo
                  td 15 de junio

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Figura 7] Paso a paso de un marketing operativo

    .tarjeta.text-white.p-3.mt-5.caja_flotante_azul.col-md-9.m-auto(data-aos="fade-up" style="background: linear-gradient(#15ac68, rgb(0 76 48));")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/tema3/32.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h2.mb-0 Paso a paso de un marketing operativo
            .col-sm-auto
              a.boton.boton--b.color-acento-contenido(:href="obtenerLink('downloads/MarketingOperativo.pdf')" target="_blank")
                span(style="color: #12263F !important;") Descargar
                i.fas.fa-file-download(style="color: #12263F !important;")

    .cajon.color-acento-botones.p-5.mt-5.caja_flotante_rosada
      h5(data-aos="fade-up") Evaluación y seguimiento:
      p.mt-4(data-aos="fade-up") El plan de mercado debe tener un cronograma de actividades según lo establecen los pasos del marketing operativo, en él se define tiempo de inicio, finalización y responsables, de este modo, el mismo plan se convierte en la hoja de ruta para hacer la evaluación; algunos autores reconocen este proceso como auditoria de marketing. Esta auditoría permite hacer una evaluación amplia y sistemática de los objetivos, las estrategias y actividades implementadas, además de proporcionar datos a tener en cuenta para elaborar el plan del año siguiente.

      p.mt-3(data-aos="fade-up") #[strong Por ello, se hace necesario definir los mecanismos de control, los cuales se clasifican en 3 tipos de controles básicos y un plan de contingencia:]

    .mt-5.p-5.caja_flotante_azul(style="background-color:#E8FFF5;border-radius:8px;")
      .col-md-4.m-auto.mt-4
        .row.indicador__container
          .col-md-12.mb-4.text-center
            button.button__1(v-b-popover.click.blur.right.html="info_1[0]" variant="primary")
              figure.text-center
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema3/26.svg" @click="mostrarIndicador = false" style="display:inline;")
              .indicador--click(v-if="mostrarIndicador")
          .col-md-12.mb-4.text-center
            button.button__1(v-b-popover.click.blur.left.html="info_1[1]" variant="primary")
              figure.text-center
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema3/27.svg" @click="mostrarIndicador = false" style="display:inline;")
              .indicador--click(v-if="mostrarIndicador")
          .col-md-12.mb-4.text-center
            button.button__1(v-b-popover.click.blur.right.html="info_1[2]" variant="primary")
              figure.text-center
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema3/28.svg" @click="mostrarIndicador = false" style="display:inline;")
              .indicador--click(v-if="mostrarIndicador")
          .col-md-12.mb-4.text-center
            button.button__1(v-b-popover.click.blur.left.html="info_1[3]" variant="primary")
              figure.text-center
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema3/29.svg" @click="mostrarIndicador = false" style="display:inline;")
              .indicador--click(v-if="mostrarIndicador")

    .cajon.color-acento-botones.p-5.mt-5.caja_flotante_rosada
      h4(data-aos="fade-up") Indicadores de gestión
      p.mt-4(data-aos="fade-up") La manera en la que se debe evaluar y medir si la empresa está cumpliendo las metas y objetivos propuestos es a través de los KPI (indicadores de gestión o indicadores de desempeño). Los KPI se convierten en los instrumentos de evaluación que darán paso a la toma de decisiones correctas respecto a la implementación de las estrategias.

      p.mt-3(data-aos="fade-up") #[strong Los KPI de marketing son necesarios para la empresa ya que permiten conocer si las estrategias diseñadas en el plan de mercado son las correctas junto con la adquisición de nuevos clientes y la interacción con los futuros clientes, estos indicadores están divididos en 4 categorías:]

    .mt-5.p-5.caja_flotante_azul(style="background-color:#E8FFF5;border-radius:8px;padding-bottom:10rem !important;")
      .col-md-5.m-auto.mt-4
        .row
          figure
            img(data-aos="fade-up" src="@/assets/curso/tema3/30.svg")
        .row.indicador__container(style="margin-top:-7rem;")
          .col-md-3.mb-5.text-center
            span.boton_caja_1.boton_caja.image_floating.caja__activa(data-aos="fade-up" @click="mostrarIndicador = false") 1
            .indicador--click(v-if="mostrarIndicador")
          .col-md-3.mb-5.text-center
            span.boton_caja_2.boton_caja.image_floating(data-aos="fade-up" @click="mostrarIndicador = false") 2
          .col-md-3.mb-5.text-center
            span.boton_caja_3.boton_caja.image_floating(data-aos="fade-up" @click="mostrarIndicador = false") 3
          .col-md-3.mb-5.text-center
            span.boton_caja_4.boton_caja.image_floating(data-aos="fade-up" @click="mostrarIndicador = false") 4
      
      .row
        .col-md-2
          figure.mt-5
            img.image__2(data-aos="fade-left" src="@/assets/curso/tema3/31.svg" style="height: 22rem;position: absolute;left: -25rem;")
        .col-md-8.mt-5
          .p-5.bg-white.caja_flotante_azul(style="border-radius:8px;" data-aos="fade-up")
            .info_caja_1
              h4 Indicadores por campaña
              p.mt-4 Estos indicadores miden el comportamiento del público objetivo respecto a la campaña diseñada por la empresa, ejemplo: costo por lead o prospecto, es decir, este es un cliente potencial del cual se ha obtenido el contacto.

            .info_caja_2(style="display:none;")
              h4 Indicadores de producto
              p.mt-4 Este indicador muestra la aceptación de un producto o servicio de la empresa respecto a la competencia, el indicador más utilizado es el porcentaje de participación del producto en el mercado.

            .info_caja_3(style="display:none;")
              h4 Indicadores de marketing digital
              p.mt-4 La tendencia actual es realizar inversión en estrategias de marketing digital con el fin de tener presencia en la web y poder atraer nuevos clientes por este canal de comunicación. Entre los indicadores más utilizados de esta categoría están: porcentaje de clientes influenciados por marketing, alcance de las redes sociales, entre otros.

            .info_caja_4(style="display:none;")
              h4 Indicadores generales
              p.mt-4 Estos indicadores se centran en medir la relación que existe entre el esfuerzo de la empresa y la inversión respecto a la adquisición de clientes, por ejemplo: costo de adquisición de un nuevo cliente e índice de satisfacción de los clientes con la marca.

    p.mt-5(data-aos="fade-up") A continuación, se muestra un ejemplo de 2 indicadores de un plan de mercado de granjas avícolas:

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Tabla 5] Indicadores de evaluación plan de mercado

    .tabla-a.color-acento-botones.mt-5 
      table.tabla__1
        caption Nota. Tomado de “Propuesta plan de mercadeo para una empresa agro avícola”. Hoyos y Henao, (2020).
        thead(style="border:none;")
          tr
            th Indicador
            th Descripción
            th Ecuación
            th Grado de cumplimiento del objetivo
        tbody
          tr(style="background-color:#F6F6F6")
            td Asistencia a eventos agrícolas 
            td Conocer el porcentaje de la población del sector que pertenece a la base de datos de clientes.
            td Clientes potenciales que asistieron al evento / #[br] total de personas asistentes al evento.
            td 30% de cumplimiento esperado.
          tr
            td Cobertura de mercado
            td Conocer cuál es el incremento porcentual de clientes nuevos en las zonas del Putumayo y del Chocó, partiendo del censo de distribuidoras agropecuarias de cada zona, evidenciando la gestión del equipo comercial.
            td # clientes vinculados al mes por cada zona   / #[br]  # de clientes censados por cada zona.
            td 50% de cobertura al final del año.

</template>

<script>
import $ from 'jquery'
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    info_1: [
      `<h4>Control preventivo</h4>
      <p class="mt-3">Se realiza antes del desarrollo de las actividades, anticipándose de alguna manera a futuros problemas.</p>
      `,
      `<h4>Control concurrente</h4>
      <p class="mt-3">Se realiza en el momento que se está desarrollando la actividad, permite corregir los errores de forma inmediata antes de que tengan un impacto negativo.</p>
      `,
      `<h4>Control de retroalimentación</h4>
      <p class="mt-3">Se realiza luego de finalizada la actividad, en este caso ya no se puede hacer ningún cambio ni corregir los problemas presentados, pero abre la puerta para implementar un plan de mejora para el desarrollo de actividades futuras.</p>
      `,
      `<h4>Plan de contingencia</h4>
      <p class="mt-3">Dentro de la evaluación y seguimiento como parte del control se sugiere diseñar un plan de contingencia, también conocido como plan de emergencia. El diseño de este plan permitirá reaccionar de forma inmediata ante imprevistos que se presenten en la ejecución del plan de mercado y que pueden afectar en gran medida a la empresa de manera negativa.</p>
      `,
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    }),
      $('.boton_caja_1').click(function() {
        $('.info_caja_2').hide()
        $('.info_caja_3').hide()
        $('.info_caja_4').hide()
        $('.info_caja_1').show()
        $('.boton_caja_3').removeClass('caja__activa')
        $('.boton_caja_2').removeClass('caja__activa')
        $('.boton_caja_4').removeClass('caja__activa')
        $('.boton_caja_1').addClass('caja__activa')
      }),
      $('.boton_caja_2').click(function() {
        $('.info_caja_1').hide()
        $('.info_caja_3').hide()
        $('.info_caja_4').hide()
        $('.info_caja_2').show()
        $('.boton_caja_3').removeClass('caja__activa')
        $('.boton_caja_1').removeClass('caja__activa')
        $('.boton_caja_4').removeClass('caja__activa')
        $('.boton_caja_2').addClass('caja__activa')
      }),
      $('.boton_caja_3').click(function() {
        $('.info_caja_2').hide()
        $('.info_caja_1').hide()
        $('.info_caja_4').hide()
        $('.info_caja_3').show()
        $('.boton_caja_1').removeClass('caja__activa')
        $('.boton_caja_2').removeClass('caja__activa')
        $('.boton_caja_4').removeClass('caja__activa')
        $('.boton_caja_3').addClass('caja__activa')
      }),
      $('.boton_caja_4').click(function() {
        $('.info_caja_2').hide()
        $('.info_caja_3').hide()
        $('.info_caja_1').hide()
        $('.info_caja_4').show()
        $('.boton_caja_3').removeClass('caja__activa')
        $('.boton_caja_2').removeClass('caja__activa')
        $('.boton_caja_1').removeClass('caja__activa')
        $('.boton_caja_4').addClass('caja__activa')
      })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {},
}
</script>

<style lang="sass">
.image_floating
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,.25))
.titulo-principal__numero span
  color: #31326F !important
.titulo-principal__numero
  background-color: #FFCA28 !important
@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(0 25px 15px rgba(0,0,0,0.1))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.bloque-texto-a.color-secundario
  background-color: #D2F6E6 !important
.title__tab_1 .pre
  background-color: #FFCA28
  padding: 1rem 1.5rem 1rem 1.5rem
  border-radius: 50%
  color: inherit
  font-weight: bold
  font-size: 1.3rem
  position: relative
  left: calc(100% - 147%)
  top: 2.3rem
.title__tab_1 .title
 background-color: #4DD0E1
 padding: 1rem 1rem 1rem 2rem
 border-radius: 30px
.title__tab_1
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.title__tab_1:hover
  transition: transform .4s ease
  transform: scale(1.1)
.nav-link
  border: none !important
.nav-link.active .title__tab_1 .pre

.nav-link.active .title__tab_1 .title
  color: white
  background-color: #1565C0
.bloque-texto-a.color-secundario:before
  background-color: #17C878
.img__1
  cursor: pointer
.img__1:hover
  opacity: .7 !important
.button__1
  background-color: transparent !important
  border: none !important
  padding: 0px !important
  appearance: none
.popover-body
  padding: 1rem 1rem !important
.cajon.color-secundario
  background-color: #E8FFF5
.cajon.color-secundario:before
  background-color: #5CD8A0
.lista__1 li i
  color: #17C878
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .tarjeta
  background-color: #E8FFF5
.pasos-b__header__item__dot
  border: 3px solid #5cd8a0
.imagen__1:hover
  opacity: .8
  cursor: pointer
.caja__activa
  transform: scale(1.2) !important
.caja__activa:hover
  transform: scale(1.2) !important
.tarjeta--azul
  background-color: #e8e8e8 !important
.tabs-b.color-acento-contenido .tabs-b__tab--active
  border-top-color: #5cd8a0 !important
.tabs-b__tab
  border-color: #B5FCDC !important
.boton_caja
  padding: 1rem 1.5rem 1rem 1.5rem
  border: 2px #0A5936 solid
  background-color: white
  color: #0A5936
  font-size: 2rem
  font-weight: bold
  border-radius: 50%
  cursor: pointer
.boton_caja:hover
  opacity: .8
.caja__activa
  background-color: #0A5936 !important
  color: white !important
@media (max-width: 800px)
  .image__2
    position: inherit !important
.tabla__1 th
  background-color: #F1D54E
.tabla__1 th
  border: none
  border-right: 1px #A5A5A5 solid
.tabla__1 td
  border: none
  border-right: 1px #A5A5A5 solid
.tabla__1 tr th:last-child,.tabla__1 tr td:last-child
  border: none !important
</style>
