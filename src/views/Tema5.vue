<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Plan de mejora

    .bloque-texto-a.color-secundario.mt-5.caja_flotante_azul(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema5/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4.caja_escalada_hover
            p(data-aos="fade-up") El plan de mejora se aplica posterior a la evaluación a las diferentes estrategias del plan de mercado. Su objetivo es corregir los errores identificados en el control concurrente y en el de retroalimentación con el fin de que la formulación del plan para el nuevo año no incurra de nuevo en estos errores y garantice el cumplimiento del 100% de los objetivos trazados en la planeación y diseño del nuevo plan de mercado.

    p.mt-5(data-aos="fade-up") Dando continuidad a los resultados planteados a modo de ejemplo en el informe comparativo de ventas de la sección anterior, el nulo rendimiento sobre la inversión evidenció que las estrategias planteadas no generaron los resultados esperados. Esta conclusión se constituye como una causal para ejecutar un plan de mejora que cambie el panorama en la implementación de futuros planes de mercado.

    br
    .titulo-segundo#t_5_1.mt-5
      h2 5.1 Diseño del plan de mejora

    p(data-aos="fade-up") El plan de mejora debe soportar la evaluación aplicada y entregada en el informe final, por ende, se debe diseñar un nuevo cronograma donde se evidencian aquellas estrategias que no lograron cumplir los objetivos iniciales, este plan genera un proceso de revisión, nuevas propuestas en algunos de los casos luego de analizados y nuevas fechas de entrega; como  resultado del plan de mejora es importante generar una matriz que recoja esta información, teniendo en cuenta que lo anterior hace parte del informe de resultados.

    h5.mt-5(data-aos="fade-up") Para la elaboración de la matriz es necesario seguir unos pasos que permitan plantear las acciones de mejora, a continuación, se describe cada uno de ellos:

    TabsA.color-acento-contenido.mt-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Equipo de trabajo")
        .row
          .col-md-7.mb-3
            h4 Equipo de trabajo
            p.mt-4 Para conformar el equipo se debe evaluar quiénes son los profesionales o colaboradores que cumplen con el perfil para surtir la etapa de revisión, se recomienda que el equipo de trabajo esté compuesto por un líder de área y colaboradores de esta.

          .col-md-5
            figure
              img.imagen_flotante_animada(src="@/assets/curso/tema5/2.svg")

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Revisión")
        .row
          .col-md-7.mb-3
            h4 Revisión
            p.mt-4 Es relevante revisar el alcance de las estrategias en el plan implementado, el equipo de trabajo realiza una lluvia de ideas o utiliza alguna herramienta de preferencia,  con el fin de revisar las posibles causas que generaron el incumplimiento de los objetivos trazados al inicio. En este momento, las estrategias revisadas pueden ser modificadas o rediseñadas.

          .col-md-5
            figure
              img.imagen_flotante_animada(src="@/assets/curso/tema5/3.svg")

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Propuesta")
        .row
          .col-md-7.mb-3
            h4 Propuesta
            p.mt-4 Es un documento escrito donde se hace una relación a las causas que generaron el no cumplimiento de los objetivos, el diseño de nuevas estrategias de ser necesario y la matriz de actividades, responsables y fechas de entrega. 

          .col-md-5
            figure
              img.imagen_flotante_animada(src="@/assets/curso/tema5/4.svg")

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Matriz")
        .row
          .col-md-7.mb-3
            h4 Matriz
            p.mt-4 Es la hoja de ruta para desarrollar el plan de mejora, de esta manera, es importante relacionar los objetivos de mercado y las estrategias para alcanzarlo. Se debe tener en cuenta que no es necesario modificar todas las estrategias, sólo aquellas en las que el equipo encuentre errores a corregir o requieran ser rediseñadas, en caso de ser modificada se formulará en la matriz las nuevas estrategias, si no hay modificación no se relaciona la nueva estrategia. 

          .col-md-5
            figure
              img.imagen_flotante_animada(src="@/assets/curso/tema5/5.svg")

    p.mt-5(data-aos="fade-up") A continuación, se muestra un esquema del diseño de la matriz, esta nos muestra inicialmente el planteamiento de los objetivos, si un objetivo tuvo porcentaje de cumplimiento del 100% no se requiere relacionarlo en esta, posteriormente, se hace referencia a la estrategia de la cual la revisión determina si se debe modificar o no en ese momento, lo único a realizar es marcar si tuvo cambios o no, en caso de presentar algún cambio, se menciona la nueva estrategia y las actividades a desarrollar para cumplir el objetivo, es importante conocer que las estrategias y actividades a ejecutar pueden variar de 1 a 3 por cada objetivo, esto lo decide el equipo de trabajo y no es regla cumplir con el máximo de estas. Para finalizar se relaciona el responsable, las fechas de inicio y finalización, y el porcentaje de cumplimiento respecto al punto de partida luego de la evaluación.

    p.mt-5(data-aos="fade-up" style="padding-left:10px;border-left:4px #F1D54E solid;") #[strong Tabla 8] Matriz plan de mejora

    .mt-5
      .tabla-a.color-acento-botones.mt-5 
        table.tabla__1(style="min-width:100%;" data-aos="fade-up")
          caption Nota. Tomado de “Propuesta plan de mercadeo para una empresa agro avícola”. Hoyos y Henao, (2020).
          thead(style="border:none;")
            tr
              th(rowspan="2").text-center Objetivo
              th(rowspan="2").text-center Estrategia
              th(colspan="2").text-center Evaluación de #[br] estrategia
              th(rowspan="2").text-center Nueva estrategia
              th(rowspan="2").text-center Actividades #[br] a realizar
              th(rowspan="2" style="width: 12%;").text-center Responsables
              th(colspan="2").text-center Fechas de #[br] desarrollo
              th(colspan="2").text-center % cumplimiento #[br] objetivo
            tr(style="background-color:#F6F6F6")
              th.text-center Modificada
              th.text-center No modificada
              th.text-center Fecha inicio
              th.text-center Fecha final
              th.text-center Inicial
              th.text-center Final
          tbody
            tr
              td.text-center(rowspan="2") #[h4.mt-3 1]
              td.text-center 1.
              td.text-center X
              td.text-center
              td.text-center #[h5 1]
              td.text-center 1. #[br] 2.
              td.text-center Líder #[br] de #[br] área
              td.text-center
              td.text-center
              td.text-center #[h5 15%]
              td.text-center #[h5 55%]
            tr
              td.text-center 2.
              td.text-center 
              td.text-center X
              td.text-center #[h5 N.A]
              td.text-center 1. #[br] 2.
              td.text-center Colaboradores
              td.text-center
              td.text-center
              td.text-center #[h5 60%]
              td.text-center #[h5 95%]
            tr(style="background-color:#F6F6F6")
              td.text-center #[h4.mt-3 2]
              td.text-center 1
              td.text-center 
              td.text-center
              td.text-center 
              td.text-center 
              td.text-center 
              td.text-center
              td.text-center
              td.text-center 
              td.text-center
            tr
              td.text-center(rowspan="2") #[h4.mt-3 3]
              td.text-center 1.
              td.text-center 
              td.text-center
              td.text-center 
              td.text-center 
              td.text-center 
              td.text-center
              td.text-center
              td.text-center 
              td.text-center 
            tr
              td.text-center 2.
              td.text-center 
              td.text-center 
              td.text-center 
              td.text-center 
              td.text-center 
              td.text-center
              td.text-center
              td.text-center 
              td.text-center

    .mt-5.col-md-10.m-auto.p-4.caja_flotante_rosada(style="background-color:rgb(241 213 78 / 25%);border-radius:4px;")
      .row
        .col-md-2
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/21.svg" style="max-width: 100px;margin: 0 auto;")
        .col-md-10
          p.mt-2(data-aos="fade-up") #[strong ¡ Importante !] Posterior al diseño de la matriz, se implementa con el equipo de trabajo lo planeado en ella, esta información hace parte del siguiente plan de mercadeo, entendiendo que estas estrategias ajustadas serán el punto de partida para el nuevo año, esto no quiere decir que solo se enfocarán los esfuerzos en cumplir con el plan de mejora, pero sí que estas deben ser priorizadas para nivelar los objetivos que están incompletos, de este modo,  se espera que el plan de mejora subsane los retrasos presentados y el nuevo plan se cumpla según lo planeado.

    br
    br
    .titulo-segundo#t_5_2.mt-5
      h2 5.2 Acciones

    p(data-aos="fade-up") Las acciones del plan de mejora son actividades enfocadas en mejorar la eficiencia de las estrategias consideradas fallidas en el informe de resultados. Deben aplicarse según una priorización que obedece a criterios específicos como la ventana de tiempo en las que pueden considerarse oportunas o el impacto que podrán tener sobre los resultados a obtener.

    p.mt-4(data-aos="fade-up") Su proceso comprende una formulación inicial donde se definen las tareas y los responsables, seguido de una ejecución donde se ejecuta lo propuesto y finaliza con una evaluación que puede dar como resultado la finalización de la acción dado que se cumplió con su objetivo, la modificación si no se dieron los resultados esperados o la replicación si procede.

    .cajon.color-secundario.p-5.mt-5.caja_flotante_azul
      p(data-aos="fade-up") #[strong A modo de ejemplo se plantea la siguiente situación]

      p(data-aos="fade-up") Una campaña publicitaria centrada en redes sociales buscaba incrementar las ventas de presas de pollo de una granja avícola ubicada en un municipio intermedio. Sin embargo, el volumen de ventas no sufrió variaciones significativas que se pudieran asociar a la estrategia.

      p(data-aos="fade-up") #[strong La siguiente secuencia de pasos otorga una orientación sobre cómo llevar a cabo el proceso de las acciones de mejora frente a esta situación:]

    PasosB.color-acento-contenido.mt-5.p-5(style="background-color:#E8FFF5")
      .row.p-5(titulo="Plantear la acción")
        .col-md-8.mb-4.mb-md-0
          h4(data-aos="fade-up") Plantear la acción
          p.mt-3(data-aos="fade-up") Detallar la actividad y el personal involucrado. El gerente comercial asume el liderato del proceso e involucra al asesor de redes sociales. La tarea a realizar por este último será evaluar la demografía alcanzada con la campaña para identificar patrones que se asocien con la compra de comida.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema5/6.svg', alt='Plantear la acción')

      .row.p-5(titulo="Analizar la causa")
        .col-md-8.mb-4.mb-md-0
          h4(data-aos="fade-up") Analizar la causa
          p.mt-3(data-aos="fade-up") En este punto debe detallarse la problemática y proponer las posibles causas que desencadenaron en los malos resultados. Retomando el ejemplo, se observó que el público alcanzado correspondía a otras locaciones donde no se ofrecían las presas de pollo, la campaña llegó a municipios principales, donde existe una competencia muy bien posicionada.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema5/7.svg', alt='Analizar la causa')

      .row.p-5(titulo="Programación de tareas")
        .col-md-8.mb-4.mb-md-0
          h4(data-aos="fade-up") Programación de tareas
          p.mt-3(data-aos="fade-up") Se debe proponer una secuencia de actividades con períodos de tiempo específicos para ejecutar las tareas que apliquen a la situación.  El gerente comercial designa al asesor de redes sociales la tarea de parametrizar una nueva campaña publicitaria delimitando el alcance al municipio y sus zonas aledañas. Debe repetir esta acción en cada una de las plataformas en las que se espera publicitar los productos y configurar un plan que garantice que los anuncios lleguen a una porción significativa del público objetivo.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema5/8.svg', alt='Programación de tareas')

      .row.p-5(titulo="Registro de datos")
        .col-md-8.mb-4.mb-md-0
          h4(data-aos="fade-up") Registro de datos
          p.mt-3(data-aos="fade-up") Se recolecta la información asociada a la aplicación de las tareas, su costo y desarrollo. En el caso en desarrollo, el asesor de redes puede presentar un informe de los gastos que surgieron, la cantidad de tiempo necesario para llevar a cabo la correcta segmentación y los pormenores que pudieran surgir, como condiciones poco favorables de algunas plataformas o su falta de opciones para filtrar la población objetivo.
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema5/9.svg', alt='Registro de datos')

      .row.p-5(titulo="Evaluación de las acciones")
        .col-md-8.mb-4.mb-md-0
          h4(data-aos="fade-up") Evaluación de las acciones
          p.mt-3(data-aos="fade-up") En este punto se miden los resultados obtenidos en comparación al escenario previo a la implementación de las acciones. Funciona de manera muy similar al informe de ejecución, puesto que mide la efectividad de las tareas asignadas. Si en el caso de ejemplo, las ventas se ven incrementadas, esto significa que la correcta segmentación de mercado y su parametrización respectiva en las redes a utilizar para la publicidad, tuvieron un impacto significativo sobre el plan de mercado. 
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema5/10.svg', alt='Evaluación de las acciones')

      .row.p-5(titulo="Documentación")
        .col-md-8.mb-4.mb-md-0
          h4(data-aos="fade-up") Documentación
          p.mt-3(data-aos="fade-up") Dejar registro de las conclusiones alcanzadas garantiza que las acciones efectivas se repliquen en escenarios similares, de tal forma que se logren mayores retornos de inversión a futuro. 
      
        .col-md-4
          figure
            img.imagen_flotante_animada(src='@/assets/curso/tema5/11.svg', alt='Documentación')

    br
    br
    .titulo-segundo#t_5_3.mt-5
      h2 5.3 Puntos críticos de control

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
import $ from 'jquery'
export default {
  name: 'Tema5',
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
  word-break: break-word
  padding: 0.75rem 0.1em
.tabla__1 td
  border: none
  border-right: 1px #A5A5A5 solid
  word-break: break-word
  padding: 0.75rem 0.1em
.tabla__1 tr th:last-child,.tabla__1 tr td:last-child
  border: none !important
.tabs-a__tab
  background-color: #E8E8E8
.tarjeta.color-acento-contenido--borde
  background-color: #F4FFFA
  border: solid 2px #5CD8A0
</style>
