<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Informe de resultados 

    .bloque-texto-a.color-secundario.mt-5.caja_flotante_azul(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema4/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4.caja_escalada_hover
            p(data-aos="fade-up") El informe de resultados de plan de mercado se debe presentar a manera de informe ejecutivo (informe escrito con resultados y recomendaciones de manera específica) respecto al desarrollo del plan de mercado, este debe mantener la proporción de cumplimiento entre las metas propuestas y las alcanzadas, las actividades realizadas y la explicación o justificación respecto a los objetivos inconclusos.

    h5.mt-5(data-aos="fade-up") Algunas de las métricas que se recomienda tener presentes para determinar el nivel de cumplimiento del plan de mercado son las siguientes:

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Clientes nuevos" :icono="require('@/assets/curso/tema4/2.svg')")
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h4 Clientes nuevos
            p.mt-4 Se busca determinar cuántos clientes nuevos surgieron a partir de las estrategias implantadas. El indicador más importante para determinar si el plan funcionó es el crecimiento de las ventas. Esta métrica es más sencilla de medir cuando los productos o servicios vendidos no se adquieren de manera continua, por ejemplo, una empresa que vende vehículos o inmuebles sabe que el incremento en ventas obedecerá en gran medida a clientes nuevos y no a mayor volumen de compra de los clientes ya fidelizados.
        
          .col-md-5
            figure
              img.imagen_flotante_animada(src='@/assets/curso/tema4/6.svg', alt='Clientes nuevos')

      .py-4.py-md-5(titulo="Contribución al canal de ventas" :icono="require('@/assets/curso/tema4/3.svg')")
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h4 Contribución al canal de ventas
            p.mt-4 Las campañas de mercadeo suelen apostar por la consecución de nuevos clientes, pero otro indicador de éxito es el crecimiento de la base de datos con clientes potenciales; en muchas ocasiones se realizan ventas a ellos tras un periodo de tiempo, por lo que su consecución será, en cierta medida, producto del plan de mercadeo.
        
          .col-md-5
            figure
              img.imagen_flotante_animada(src='@/assets/curso/tema4/7.svg', alt='Contribución al canal de ventas')

      .py-4.py-md-5(titulo="Retorno de la inversión" :icono="require('@/assets/curso/tema4/4.svg')")
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h4 Retorno de la inversión
            p.mt-4 Una comparativa entre el dinero invertido en la implementación de las estrategias y el incremento de ingresos obtenido, es uno de los elementos de juicio más importantes para determinar si resultó productivo el plan de mercado. No solo basta con un resultado positivo, la diferencia debe ser lo suficiente para compensar los riesgos asumidos y el trabajo adicional realizado.
        
          .col-md-5
            figure
              img.imagen_flotante_animada(src='@/assets/curso/tema4/8.svg', alt='Retorno de la inversión')

      .py-4.py-md-5(titulo="Percepción de la marca" :icono="require('@/assets/curso/tema4/5.svg')")
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h4 Percepción de la marca
            p.mt-4 A diferencia de las métricas anteriores, esta se centra en un aspecto meramente cualitativo. La forma en la que las personas ven el producto puede posibilitar la transición e inclusión de clientes nuevos. El posicionamiento de los productos puede ser un factor de gran relevancia al plantear estrategias que involucren incursión en nuevos mercados o la oferta de una referencia nueva.
        
          .col-md-5
            figure
              img.imagen_flotante_animada(src='@/assets/curso/tema4/9.svg', alt='Percepción de la marca')

    .mt-5.col-md-10.m-auto.p-4.caja_flotante_rosada(style="background-color:rgb(241 213 78 / 25%);border-radius:4px;")
      .row
        .col-md-2
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/21.svg")
        .col-md-10
          p.mt-2(data-aos="fade-up") Como se mencionó previamente, la evolución de las ventas se constituye como el factor más importante a la hora de medir la efectividad de las estrategias aplicadas. El análisis comparativo dota de contexto la evolución de las ventas, al enfrentarla a los resultados previos a la ejecución de las medidas propuestas.

    h5.mt-5(data-aos="fade-up") El diseño de un informe comparativo para este propósito puede tomar la siguiente forma:

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Tabla 6] Informe histórico de ventas

    .col-md-8.m-auto.mt-5
      .tabla-a.color-acento-botones.mt-5 
        table.tabla__1(style="min-width:100%;" data-aos="fade-up")
          thead(style="border:none;")
            tr
              th(colspan="5").text-center Informe histórico de ventas
          tbody
            tr(style="background-color:#F6F6F6")
              td.text-center(rowspan="2") 
              td.text-center(rowspan="2")  #[h6  Año 20x1]
              td.text-center(rowspan="2")  #[h6 Año 20x0]
              td.text-center(colspan="2")  #[h6 Variación]
            tr(style="background-color:#F6F6F6")
              td.text-center #[h6 $]
              td.text-center #[h6 %]
            tr
              td Producto A
              td 15.000
              td 13.000
              td 2000
              td 15,4%
            tr(style="background-color:#F6F6F6")
              td Producto B
              td 2.500
              td 2.200
              td 300
              td 13,6%
            tr
              td Producto C
              td 3.000
              td 3.200
              td -200
              td -6,3%
            tr(style="background-color:#F6F6F6")
              td #[h6 Total]
              td #[h6 20.500]
              td #[h6 18.400]
              td #[h6 2.100]
              td #[h6 11,4%]

    p.mt-5(data-aos="fade-up") Las variaciones negativas implican una disminución en las ventas, mientras que las positivas un crecimiento. La comparativa puede ampliarse tanto como los analistas lo consideren necesario. Puede revisarse la evolución histórica abarcando más años, o segmentar las comparativas por regiones o centros de distribución. Es por ello, que el informe se plantea a la medida de las necesidades, enfocado a funcionarios en específico para una retroalimentación posterior, o a nivel global para la toma de decisiones transversales.

    p.mt-4(data-aos="fade-up") #[strong Si dentro de las metas del plan de mercado se establecieron unos valores estimados a alcanzar, la tabla podría complementarse con indicadores de cumplimiento así:]

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Tabla 7] Informe de ejecución

    .col-md-8.m-auto.mt-5
      .tabla-a.color-acento-botones.mt-5 
        table.tabla__1(style="min-width:100%;" data-aos="fade-up")
          thead(style="border:none;")
            tr
              th(colspan="4").text-center Informe de ejecución
          tbody
            tr(style="background-color:#F6F6F6")
              td.text-center
              td.text-center #[h6 Incremento obtenido]
              td.text-center #[h6 Incremento proyectado]
              td.text-center #[h6 Cumplimiento]
            tr
              td Producto A
              td 2.000
              td 2.000
              td 100%
            tr(style="background-color:#F6F6F6")
              td Producto B
              td 300
              td 800
              td 38%
            tr
              td Producto C
              td -200
              td 1000
              td -20%
            tr(style="background-color:#F6F6F6")
              td #[h6 Total]
              td #[h6 2.100]
              td #[h6 3.800]
              td #[h6 55%]

    p.mt-5(data-aos="fade-up") Para determinar el nivel de cumplimiento debe dividirse el incremento obtenido sobre el proyectado. Cualquier cifra que se acerque o supere el #[strong(style="background-color:#FFEA99;padding:5px") 100%] puede considerarse positiva. En el caso del producto A, se lograron las metas propuestas, en el caso del producto B la efectividad no alcanzó ni la mitad de la esperada, y en el caso del producto C, las estrategias no tuvieron ningún efecto, o incluso, tuvieron uno negativo.

    p.mt-4(data-aos="fade-up") Para el análisis es importante tener en cuenta factores adicionales como políticas económicas o variaciones de precio producto de la inflación. Para ello, pueden contrastarse las comparativas de ingresos con las de unidades vendidas, si el incremento obedece mayoritariamente al incremento del valor de los productos, propio de todos los años, es evidente que las estrategias no han resultado fructíferas. Por tal razón, cada tabla debe ir acompañada de un contexto que le otorgue al analista todos los elementos para hacer un juicio acertado.

    p.mt-4(data-aos="fade-up") Como se recomendó previamente, estas variaciones, según las expuestas en la figura anterior sobre el paso a paso de un marketing operativo, es necesario compararlas con las inversiones efectuadas para llevar a cabo las estrategias. Por ejemplo, si para alcanzar esos resultados se invirtieron #[strong(style="background-color:#FFEA99;padding:5px") $2.500] en contrataciones y campañas publicitarias, las estrategias no funcionaron, puesto que el beneficio generado fue de #[strong(style="background-color:#FFEA99;padding:5px") $2.100] lo que se traduce en una pérdida neta de #[strong(style="background-color:#FFEA99;padding:5px") $400].

    p.mt-5 #[strong A partir de estas observaciones se plantean las acciones de mejora para reformular el plan de mercado e identificar #[br] aquellas medidas que sí generen impactos positivos.]



</template>

<script>
import $ from 'jquery'
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
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
.tabla__1 th,td
  border: none
  border-right: 1px #A5A5A5 solid
.tabla__1 tr th:last-child,.tabla__1 tr td:last-child
  border: none !important
</style>
