<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Entorno

    p(data-aos="fade-up") Toda decisión de mercado viene derivada del análisis de información y de estudios previos aplicados en este. Para dar inicio al estudio de mercado se debe comprender el concepto de entorno, el cual está basado en todo lo que rodea a las empresas independiente del sector económico; a este lo componen diferentes variables externas que no pueden ser controladas por la empresa, pero que entregan información necesaria e importante para proyectar las estrategias y actividades a desarrollar.

    .bloque-texto-a.color-secundario.mt-5.caja_flotante_azul(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema1/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4.caja_escalada_hover
            p(data-aos="fade-up") Para comprender la manera en la que se debe manejar la información relacionada con el entorno de la empresa, a continuación, se describen las variables y la clasificación de este. Se debe tener en cuenta que cada variable que hace parte del entorno requiere ser analizada de manera independiente como de identificar la manera adecuada de abordarlas ya que como se nombra anteriormente no son controlables por la empresa.

    br
    br
    .titulo-segundo#t_1_1.mt-5
      h2 1.1  Análisis del entorno

    p(data-aos="fade-up") Las variables que componen el entorno, aunque no se pueden controlar, algunas tienen relación directa y cercana con las empresas, lo que permite que se pueda tener acceso a fuentes de información primaria; de allí la importancia de estudiar en detalle cada una de estas. #[strong El análisis del entorno puede clasificarse en 2 tipos:]

    .mt-5.p-5.caja_flotante_azul(style="background-color:#D2F6E6;border-radius:8px;")
      .col-md-3.m-auto
        h5.text-center(data-aos="fade-up" style="background-color:#17C878;border-radius:3px;padding: 12px 0px 12px 0px;") Macroentorno
      .col-md-10.mt-4.m-auto
        p.text-center.mt-3(data-aos="fade-up") Las variables que integran el macroentorno no tienen ninguna relación con la actividad económica de las empresas, pero son aquellas que las afectan de forma directa sin importar el sector económico, de esta manera, #[strong el macroentorno se puede dividir en varios de estos diferenciados, estos son:]

      br
      .col-md-4.m-auto.mt-5
        .row.indicador__container
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.left.html="macroentorno[0]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/2.svg" @click="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.right.html="macroentorno[1]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/3.svg" @click="mostrarIndicador = false")
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.left.html="macroentorno[2]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/4.svg" @click="mostrarIndicador = false")
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.right.html="macroentorno[3]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/5.svg" @click="mostrarIndicador = false")
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.left.html="macroentorno[4]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/6.svg" @click="mostrarIndicador = false")
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.right.html="macroentorno[5]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/7.svg" @click="mostrarIndicador = false")
          .col-md-6.m-auto
            button.button__1(v-b-popover.click.blur.left.html="macroentorno[6]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/8.svg" @click="mostrarIndicador = false")

    .mt-4.p-5.caja_flotante_rosada(style="background-color:#FFF7D0;border-radius:8px;")
      .col-md-3.m-auto
        h5.text-center(data-aos="fade-up" style="background-color:#F1D54E;border-radius:3px;padding: 12px 0px 12px 0px;") Microentorno
      .col-md-10.mt-4.m-auto
        p.text-center.mt-3(data-aos="fade-up") Cuando se habla del microentorno no se hace referencia a variables, sino a actores que se involucran en el proceso, que, aunque no dependen de la empresa sí tienen relación directa e impactan positiva o negativamente su funcionamiento. #[strong Estos actores son:]

      br
      .col-md-4.m-auto.mt-5
        .row.indicador__container
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.left.html="microentorno[0]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/9.svg" @click="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.right.html="microentorno[1]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/10.svg" @click="mostrarIndicador = false")
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.left.html="microentorno[2]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/11.svg" @click="mostrarIndicador = false")
          .col-md-6.mb-4
            button.button__1(v-b-popover.click.blur.right.html="microentorno[3]" variant="primary")
              figure
                img.image_floating.img__1(data-aos="fade-up" src="@/assets/curso/tema1/12.svg" @click="mostrarIndicador = false")

    br
    br
    .titulo-segundo#t_1_2.mt-5
      h2 1.2 Diagnóstico

    p(data-aos="fade-up") El diagnóstico es el elemento más importante para dar inicio a la formulación del plan de mercado, este elemento permite conocer la situación inicial de la empresa luego de realizar el análisis del entorno a partir de las variables identificadas en el macro y micro entorno, de esta manera, se puede anticipar la empresa en la identificación de oportunidades y amenazas existentes.

    .cajon.color-secundario.p-5.mt-5.caja_flotante_azul
      p(data-aos="fade-up") #[strong El diagnóstico involucra el análisis de las variables internas y externas donde deberá hacerse un levantamiento de información que, por ejemplo, involucra los siguientes aspectos:]

      .row.mt-5
        .col-md-8.mb-3
          ul.lista-ul.lista__1
            li(data-aos="fade-up")
              i.fas.fa-check
              |  Antecedentes del sector económico al cual se pertenece.
            li(data-aos="fade-up")
              i.fas.fa-check
              |  ¿Cómo es la distribución de los huevos?
            li(data-aos="fade-up")
              i.fas.fa-check
              |  ¿Cuáles son las instituciones que regulan las empresas del sector avícola como ICA e INVIMA?
            li(data-aos="fade-up")
              i.fas.fa-check
              |  ¿Qué decretos están vigentes?
            li(data-aos="fade-up")
              i.fas.fa-check
              |  ¿Qué reglamenta el Ministerio de Agricultura y Desarrollo Rural?
            li(data-aos="fade-up")
              i.fas.fa-check
              |  El comportamiento de la competencia.
            li(data-aos="fade-up")
              i.fas.fa-check
              |  ¿Cómo se establece el precio del huevo?
            li(data-aos="fade-up")
              i.fas.fa-check
              |  ¿Qué factores influyen en su distribución como el estado de las vías?
            li(data-aos="fade-up")
              i.fas.fa-check
              |  Situaciones de orden público, entre otras.
        .col-md-4
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/13.svg")

    h4.mt-5(data-aos="fade-up") Tipos

    p.mt-4(data-aos="fade-up") Un diagnóstico de mercado puede clasificarse según los objetivos que se busquen alcanzar a través de este. Las siguientes categorías abarcan los propósitos principales para elaborar el diagnóstico:

    br
    LineaTiempoD.color-secundario.mt-5.col-md-8.m-auto
      .row(numero="1" titulo="De medición")
        .col-md-7.mb-4.mb-md-0
          p.text-small Cuando se busca la obtención de datos del mercado, la cantidad de clientes potenciales, la frecuencia de compra del producto por cada comprador, el grado de notoriedad de la marca, entre otros. Dado que su enfoque es mayoritariamente estadístico, es recomendable que la población consultada sea considerable.
        .col-md-5
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/14.svg', alt='De medición')
      
      .row(numero="2" titulo="De entendimiento")
        .col-md-7.mb-4.mb-md-0
          p.text-small Tiene un enfoque cualitativo, se busca identificar comportamientos o motivaciones, valoraciones de los productos desde el punto de vista de satisfacción. 
        .col-md-5
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/15.svg', alt='De entendimiento')

      .row(numero="3" titulo="De apoyo")
        .col-md-7.mb-4.mb-md-0
          p.text-small Se consolida como una herramienta para la toma de decisiones estratégicas, que confronten diversas hipótesis para observar el comportamiento de la demanda. Por ejemplo, consultar con los consumidores del producto su opinión respecto a un cambio de imagen o un cambio de precio.
        .col-md-5
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/16.svg', alt='De apoyo')
    
    br
    h4.mt-5(data-aos="fade-up") Pasos para ejecutar

    p.mt-3(data-aos="fade-up") Para llevar a cabo el diagnóstico se recomienda seguir los siguientes pasos:

    PasosB.color-acento-contenido.mt-5.p-5(style="background-color:#E8FFF5")
      .row.p-5(titulo="Definir objetivo de estudio")
        .col-md-8.mb-4.mb-md-0
          h4.mt-4(data-aos="fade-up") Definir objetivo de estudio
          p.mt-3(data-aos="fade-up") El enfoque del diagnóstico puede cambiar según lo que se busque identificar. Si se trata de la implementación de un nuevo producto, pueden evaluarse factores como precio, competencia o productos sustitutos; mientras que para productos ya existentes pueden evaluarse opiniones y sugerencias para efectuar modificaciones.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/17.svg', alt='Definir objetivo de estudio')

      .row.p-5(titulo="Identificar el público")
        .col-md-8.mb-4.mb-md-0
          h4.mt-4(data-aos="fade-up") Identificar el público
          p.mt-3(data-aos="fade-up") Todos los productos apuntan a un público objetivo, en algunos casos las demografías pueden ser muy amplias, pero reducirlas permitirá crear estrategias más a la medida. Según las capacidades de distribución puede definirse el público objetivo a una localidad o municipio, dependiendo del tipo de producto, segmentado por género o edades e incluso por estratos si se trata de bienes o servicios de lujo.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/18.svg', alt='Identificar el público')

      .row.p-5(titulo="Recolectar información")
        .col-md-8.mb-4.mb-md-0
          h4.mt-4(data-aos="fade-up") Recolectar información
          p.mt-3(data-aos="fade-up")  La recolección de datos implica tener presentes aspectos propios de la empresa como su capacidad, la calidad del bien o los costos de producción. A su vez, factores externos como la demanda del producto, los ingresos per cápita de la población objetivo o los bienes ya disponibles en el mercado que cumplen la misma función y pueden dar un contexto más robusto. Se recomienda el uso de herramientas como las encuestas o entrevistas dirigidas al público objetivo para dotar de precisión la información.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/19.svg', alt='Recolectar información')

      .row.p-5(titulo="Análisis de datos")
        .col-md-8.mb-4.mb-md-0
          h4.mt-4(data-aos="fade-up") Análisis de datos
          p.mt-3(data-aos="fade-up") La información recolectada puede tabularse para su posterior análisis. Con ello se espera reconocer tendencias que otorguen elementos de juicio suficiente para tomar las decisiones y así satisfacer las exigencias de la mayor parte del público objetivo.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema1/20.svg', alt='Análisis de datos')


    br
    br
    .mt-5.col-md-10.m-auto.p-4.caja_flotante_rosada(style="background-color:rgb(241 213 78 / 25%);border-radius:4px;")
      .row
        .col-md-2
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/21.svg")
        .col-md-10
          p.mt-2(data-aos="fade-up") #[strong ¡ Importante !] A partir de las conclusiones alcanzadas con el diagnóstico de mercado, se contará con los fundamentos necesarios para iniciar con la formulación del plan de mercado y su posterior supervisión. Un correcto diagnóstico no solo facilita la toma de decisiones, sino que permite enfocarse en las estrategias más adecuadas para alcanzar los objetivos planteados en el menor tiempo posible.

    .col-md-7.m-auto.mt-5
      a.anexo.mb-4(href="https://www.questionpro.com/es/estudio-de-mercado.html#ejemplo_mercado" target="_blank" data-aos="fade-up")
        .anexo__icono
          img(src="@/assets/curso/tema1/22.svg")
        .anexo__texto
          h5(style="color:#12263F") Ejemplo de estudio de mercado
          p(style="color:#12263F") Para profundizar se recomienda revisar la siguiente página web. https://www.questionpro.com/es/estudio-de-mercado.html#ejemplo_mercado



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    macroentorno: [
      `<h4>Entorno demográfico</h4>
      <p class="mt-3">Se analiza todo lo relacionado con el país o la región donde se desarrolla la actividad económica y se tienen en cuenta para la segmentación del producto o el servicio: edad, sexo, densidad, población total.</p>
      `,
      `<h4>Entorno geográfico</h4>
      <p class="mt-3">Se realiza un análisis de los recursos disponibles en el país o región como, por ejemplo, recursos naturales, acceso a servicios, calidad de vías, entre otros.</p>
      `,
      `<h4>Entorno económico</h4>
      <p class="mt-3">Se analizan los indicadores más importantes y relevantes del país como la inflación, el PIB (Producto Interno Bruto) y el  PIB per cápita (por habitante).</p>
      `,
      `<h4>Entorno legal y político</h4>
      <p class="mt-3">Se revisa la legislación vigente, normas aplicables, resoluciones y todos los requisitos necesarios para el funcionamiento de la empresa.</p>
      `,
      `<h4>Entorno tecnológico</h4>
      <p class="mt-3">Se estudia y revisa el acceso a tecnología, conectividad en las diferentes regiones y posibilidades de innovación.</p>
      `,
      `<h4>Entorno cultural</h4>
      <p class="mt-3">El estudio de este entorno debe estar basado en todos los aspectos relacionados propios del consumidor o de la región a los cuales se pretende llegar, en especial la religión, ética, tradiciones propias.</p>
      `,
      `<h4>Entorno medioambiental</h4>
      <p class="mt-3">Se estudian los aspectos relacionados con la legislación ambiental, manejo de residuos, procesos ambientales y todos los componentes del medio natural donde está ubicada la empresa.</p>
      `,
    ],
    microentorno: [
      `<h4>Los clientes</h4>
      <p class="mt-3">Son los actores más importantes del entorno, quienes finalmente tienen la decisión de compra y es por ello que los estudios que se realicen deben estar enfocados en ellos.</p>
      `,
      `<h4>La competencia</h4>
      <p class="mt-3">Uno de los actores más importantes del microentorno, pues es la referencia de los clientes y con quienes se comparte la participación en el mercado. Esto hace que se deba estudiar con cuidado para poder contrarrestarla.</p>
      `,
      `<h4>Los proveedores</h4>
      <p class="mt-3">Se debe estudiar la calidad y cantidad disponibles en el mercado que responda a las necesidades de la empresa, teniendo en cuenta política de pagos, tiempos de entrega y calidad de productos.</p>
      `,
      `<h4>Canales de distribución</h4>
      <p class="mt-3">Debe ser estudiado desde la importancia de reconocer ¿cuál es el canal acertado para llegar al consumidor final? Teniendo en cuenta costos y tiempos de entrega.</p>`,
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
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
  filter: drop-shadow(19px 14px 5px rgba(0,0,0,.25))
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
</style>
