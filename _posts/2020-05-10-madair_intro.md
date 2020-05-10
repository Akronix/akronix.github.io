---
layout: post
title: ¿En qué consiste mi TFM?
categories: [Projects]
tags: [MadAir, primavera, redes neuronales, CUSL]
---

<center>
{% include image.html position="none" height="500px" url="/static/img/posts/flower_table.jpg" description="Mi centro de mesa para esta semana :D" %}
</center>

## Introducción primaveral

¡Hola!

Después de una de las primaveras más lluviosas de todos los tiempos en España, especialmente en Madrid, sumado al confinamiento social provocado por el corona virus. Nuestra [huerta de la Morera](https://huertalamoreradeofelia.wordpress.com/) se ha llenado de flamantes flores y exhuberante vegetación, por no hablar del jabalí salvaje que estuvo varias semanas instalado en y sirviéndose bien de nuestras huertas de la Dehesa de la Villa.

La desescalada del confinamiento sigue su curso y a las 8 de la tarde las calles están llenas de traseúntes enmascarillados o no, por todas partes. Tanto que a veces resulta difícil mantener el distanciamiento social. De modo que el momento más propicio para salir a la calle resulta ser cuando amanece y comienza el día, y así he hecho esta mañana soleada de domingo para acercarme al pequeño resquicio de la naturaleza que nos brinda nuestro huerto urbano en mitad de la ciudad.

No obstante, las temperaturas vuelven a bajar, el cielo a nublarse y a duchar la tierra, y la fase 1 de la desescalada se pospondrá en Madrid al menos una semana más. Todo esto resulta muy propicio para mi situación actual, pues apenas me quedan trece días para la fecha de la entrega más importante de mi TFM, consistente en el diseño y la implementación de mi proyecto sobre predicción de la calidad del aire: "MadAir".

[Ya escribí anunciando la aceptación de mi proyecto en el Concurso Universitario de Software Libre](/madair-aceptado.html) e [hice un primer avance de mis primeros pasos y de las tecnologías que estoy usando para el proyecto la semana pasada](/madair-update.html). Pero todavía no he explicado debidamente en qué exactamente consiste mi TFM, y creo que ya va siendo hora de que me ponga a ello.

## Motivación

Pero antes de meterme de lleno en el asunto, un poco de introducción a el porqué de este proyecto. Como quizás ya algunes de mis lectores sepan, yo venía de dos años trabajando en la universidad como ayudante de investigación entorno a comunidades colaborativas online (wikis). Es un tema que encuentro bonito y en el que no me hubiera sentido mal si hubiera acabado dedicándome por entero a él, [pero esta etapa se tenía que acabar y actualmente estoy --aún-- en tránsito hacia una nueva etapa con otra forma de vida y filosofía](/new-stage.html).

En efecto, mi motivación para hacer este máster en Ciencia de Datos era servirme como [vía de transformación, desde una ocupación más técnica (Ciencias de la computación), a otra que pudiera compaginar con una vida decrecentista, autogestionada y cerca de la naturaleza](/professional-future.html). Para terminar de cerrar el círculo, los temas sobre los que me quiero especializar en lo profesional deben tener que ver con aquello que, de alguna manera, forme parte de mi cotidianiedad y de mis pasiones. Es por eso que el TFM, la culminación de mis estudios de máster, tenía que tener como tema alguna cuestión relacionada con el medio ambiente.

## El tema del proyecto

Cuando llegó la hora de elegir el tema del proyecto, el proceso no fue inmediato. Explore varias opciones y tuve algunas dificultades para finalmente conseguir un tema y un tutor. Pasé por nada menos que tres posibles tutores, antes de finalmente y a última hora, cerrar el proyecto de predicción de la calidad del aire.

Lo cierto es que este tema me atañe personalmente puesto que desde siempre, pero especialmente en los últimos años y sobre todo cuando voy en bicicleta, la contaminación del aire en la ciudad donde vivo, Madrid, me resulta altamente molesta e incómoda, y diría que es de lo peor, sino lo peor, de ir en bici por la ciudad.

En mi caso, me he querido centrar únicamente en la ciudad de Madrid, que es la que mejor conozco. Los datos están ahí públicados en el [portal de datos abiertos del ayuntamiento de Madrid](https://datos.madrid.es/) y hay un [sitio web especifico que muestra los datos de cada estación en tiempo real](http://www.mambiente.madrid.es/sica/scripts/index.php). Y sí, existe un servicio de predicción de la calidad del aire que además da predicciones no solo de toda la península Ibérica, sino también de toda Europa, llamado [CALIOPE](http://www.bsc.es/caliope/es). CALIOPE es un sistema muy complejo que funciona en base a la modelización de los fenómenos meteorológicos, atmosféricos, químicos y termodinámicos para predecir los contaminantes en el aire para las próximas horas o días cercanos.

Aunque dicho sistema es útil para dar pronósticos de cualquier localización a cualquier resolución, un sistema de aprendizaje automático en base al histórico de los datos y a otras variables puede dar mejores resultados cuando se trata de hacer predicciones en aquellas localizaciones donde están ubicadas las estaciones que miden la contaminación en el aire[^1]. Y en eso básicamente consiste mi trabajo.

[^1]: No obstante, existen métodos estadísticos y otros de interpolación espacial mediante los cuales se podrían extender estas predicciones a cualquier punto de la ciudad y hacer estimaciones globales. Lamentablemente, aunque tengo los conocimientos necesarios para realizar esas técnicas, no creo que tenga tiempo material para llevarlos a cabo.

## Estado actual

Hasta ahora realmente lo que he estado haciendo es formándome, leyendo documentación y haciendo experimentos. Como resultado de lo anterior, lo que tengo ahora mismo es lo que he llamado "Prototipo 0", que es un modelo muy simple y un tanto alejado de lo que quiero conseguir finalmente, pero que ya trabaja con los datos históricos de calidad del aire y hace predicción en base a ellos.

Este prototipo 0 consiste básicamente en un modelo que predice el valor de contaminación de NO² que habrá en la siguiente hora, a partir de los valores registrados en las 23 horas anteriores. Para los que quieran más detalles técnicos, en la siguiente imagen tenéis un esquema de la implementación:

<center>
{% include image.html position="none" height="500px" url="/static/img/posts/MadAir_Prototipo0.png" description="Esquema Prototipo 0 MadAir" %}
</center>

Así pues, usando una red neuronal algo compleja (pero no mucho) y entrenándola con los datos de tres meses, consigo una tasa de error bastante aceptable. El modelo solamente da predicciones menos exactas cuando aparecen picos repentinos de contaminación, que difícilmente serían predecibles usando únicamente los datos anteriores.

## Imaginario futuro

A partir de lo anterior mis ambiciones de mejora son inmensas, pero se van mucho más allá de lo que puedo abarcar en un TFM y más aún considerando las restricciones de tiempo a las que estoy sometido.

Un paso que sí quiero hacer es pasar de predecir la contaminación para la siguiente hora a predecir la que habrá al día siguiente, es decir, a las 24 horas. Esto es un cambio de diseño sustancial y tendré que explorar y estudiar bien cómo hacerlo. Además, los valores elegidos para los hiperparámetros de la red neuronal o la longitud de la secuencia previa a tener en cuenta para tomar la predicción tendrá que ser reexplorados.

Esto hará que el modelo pierda mucha precisión, de modo que empezará a resultar intersante incluir más variables. Entre las variables que me gustaría incluir están algunas meteorológicas y las de intensidad de tráfico. De nuevo aquí hay implicaciones a nivel de diseño y decisiones que tomar, por ejemplo: ¿Debería tener en cuenta la meteorológica actual o el pronóstico para el día siguiente? ¿Me vale el tráfico actual o necesitaría hacer yo mismo una estimación del tráfico en 24 horas?

Y esto son solo algunos de las ideas, los detalles y no tan detalles que rondan por mi cabeza estos dias. Pero después de tener un modelo satisfactorio, que, conociendo mi ambición, dará trabajo; quiero poder mostrar de alguna manera los valores predichos en algo más amigable para un humano casual. Ojalá tenga tiempo, energías y el resultado así lo merezca, para mostrar en un mapa las predicciones que vaya haciendo mi pequeña invención. Si no, espero al menos poder deleitaros con alguna gráfica de los resultados.

El domingo toca a su fin y a partir de mañana comienza otra semana de duro trabajo. Seguiremos informando.

## Notas al pie
