---
layout: post
title: Actualización sobre MadAir
categories: [Projects]
tags: [MadAir]
---

Buenas.

Desde hace ya una semana estoy concentrado (o intentandolo) al 100% con mi proyecto [MadAir](/madair-aceptado.html).

Apenas tengo tres semanas hasta el 23 de Mayo para tener algo implementado que dé unos resultados decentes. Aunque más allá de eso tengo muchas ideas y mejoras posibles.

La semana pasada básicamente se me fue en conseguir un primer prototipo de modelo de red neuronal. Esto consistió en leer varios tutoriales similares, es decir, que se tratasen de predicción de series temporales y usasen para ello un modelo basado en redes LSTM. Esto me sirvió, por un lado, para realizar ya tareas de procesamiento y formateado de los datos. Por otro lado, también me sirvió para hacer mis primeros pasos con el framework de _deep learning_ que voy a usar, [keras](https://keras.io/). Después de toquetear varias combinaciones de los parámetros del modelo, conseguí algunos modelos con un RMSE de alrededor del 23μg/m³ (Otro día ya os hablaré de qué se significa este valor, pero por el momento os adelanto que no está nada mal para estar empezar). Este prototipo lo he estado realizando en la plataforma kaggle y [lo podéis inspeccionar en este notebook que acabo de hacer público](https://www.kaggle.com/abeserra/prototipo-0-2-predicci-n-1h-univariante).

Ayer lunes se me fue un poco de las manos y me pasé todo el día intentando instalar el driver privativo de NVIDIA para mi portátil "de sobremesa" que tiene una humilde tarjeta GPU 710M, la cual yo esperaba poder usar para poder hacer los experimientos y buena parte del desarrollo del proyecto en local. Pero después de instalar y reinstalar ubuntu 3 veces y de probar todo tipo de repositorios e instalaciones, resulta que mi tarjeta ya no está soportada por los últimos drivers y el último driver soportado (390), no soporta ya más allá de CUDA 9 (y tensorflow 2 requiere CUDA 10). Total que no voy a poder hacer el desarrollo en local y encima perdí todo un día de trabajo...

Para esta semana tengo previsto:
* Documentarme y formarme mejor en cuanto a diseño de modelos LSTM y de RNN en general.
* Leeré más el libro que compré titulado: [_"Deep Learning with Python"_](https://www.manning.com/books/deep-learning-with-python-second-edition), del creador de Keras.
* Haré algunos diagramas de los diseños que tengo actualmente y los posibles futuros.
* Buscaré los mejores parámetros para el modelo mediante herramientas de optimización de hiperparámetros como [Talos](https://github.com/autonomio/talos).
* Prepararé más datos para meter de entrada al modelo y buscaré cómo separar el tratamiento de los datos, del código únicamente relacionado con la red neuronal.
* ...Y más cosas que todavía no tengo tan claras como para escribir aquí


PD: Voy a intentar hacer un resumen en este blog todas las semanas de mis avances en el proyecto, aunque sé que me cuesta hacer algo así con tanta constancia y diligencia.También voy a intentar mantener un "resumen" de tareas y objetivos cumplidos diario, este último lo podéis encontrar en [este "Cuaderno de Bitácora" de un repositorio que he creado en Gitlab](https://gitlab.com/Akronix/tfm-cuaderno-bitacora/-/blob/master/Cuaderno_de_bitacora.md).
