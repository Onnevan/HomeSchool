'use strict';
const temarios = {
  "matematicas": [
    ["Números naturales y sistema decimal","Valor posicional, descomposición y cálculo con números naturales.",[3]],
    ["Potencias y raíces","Significado de las potencias, propiedades, raíces exactas y aproximadas.",[1,2,4,6,7]],
    ["Divisibilidad","Múltiplos, divisores, números primos y resolución de problemas con MCD y MCM.",["deberes"]],
    ["Números enteros y operaciones","Recta numérica, signos y orden de las operaciones.",[5]],
    ["Números decimales","Valor posicional, comparación y operaciones con decimales."],
    ["Medida y sistema sexagesimal","Unidades, conversiones, tiempo y grados.",[10]],
    ["Fracciones","Equivalencias, comparación y operaciones con fracciones."],
    ["Proporcionalidad y porcentajes","Razones, escalas y cálculo de porcentajes."],
    ["Lenguaje algebraico y ecuaciones","Patrones, expresiones y ecuaciones sencillas."],
    ["Geometría plana","Rectas, ángulos, polígonos y circunferencia.",[9]],
    ["Coordenadas, tablas y gráficas","Representación y lectura de relaciones entre cantidades."],
    ["Perímetros, áreas y cuerpos geométricos","Cálculo de superficies y reconocimiento de cuerpos.",[8]],
    ["Estadística y probabilidad","Tablas de frecuencias, gráficos, medidas de resumen y azar."]
  ],
  "biologia": [
    ["Investigar con el método científico","Preguntas, hipótesis, experimentos y comunicación de resultados."],
    ["Células y diversidad de los seres vivos","Funciones vitales, tipos de células, clasificación y biodiversidad."],
    ["Los microorganismos","Bacterias, protoctistas, hongos y su papel en la naturaleza y en nuestra vida."],
    ["Diversidad de las plantas","Nutrición, reproducción, grandes grupos y adaptaciones."],
    ["Animales invertebrados","Características y grupos principales de animales sin columna vertebral."],
    ["Animales vertebrados","Peces, anfibios, reptiles, aves y mamíferos."],
    ["Funcionamiento de los ecosistemas","Factores bióticos y abióticos, relaciones y flujos de energía."],
    ["La atmósfera","Aire, fenómenos meteorológicos, contaminación y efecto invernadero."],
    ["La hidrosfera","Distribución y ciclo del agua, usos y gestión sostenible."],
    ["La geosfera","Capas terrestres, minerales, rocas y recursos geológicos."]
  ],
  "lengua": [
    ["Comunicación y diversidad lingüística","Emisor, receptor, contexto y lenguas de España."],
    ["Comprensión y producción de textos","Ideas principales, planificación, revisión y exposición oral."],
    ["Textos narrativos, descriptivos y dialogados","Narrador, personajes, descripción y diálogo."],
    ["Textos expositivos y medios de comunicación","Explicación de ideas, noticias y verificación de fuentes."],
    ["Léxico y formación de palabras","Familias léxicas, prefijos, sufijos y relaciones de significado."],
    ["Clases de palabras","Sustantivos, adjetivos, determinantes, pronombres, verbos y palabras invariables."],
    ["La oración","Grupos de palabras, sujeto, predicado y concordancia."],
    ["Ortografía y puntuación","Acentuación, grafías y signos de puntuación."],
    ["Lectura y géneros literarios","Narrativa, poesía, teatro y creación literaria."]
  ],
  "geografia": [
    ["La Tierra y los mapas","Orientación, coordenadas, escala y lectura de mapas."],
    ["Relieve y aguas","Formas del relieve, ríos, mares y acción del agua."],
    ["Tiempo atmosférico y clima","Elementos del clima y lectura de climogramas."],
    ["Paisajes y relación con el medio","Ecosistemas, riesgos y sostenibilidad."],
    ["La Prehistoria","Paleolítico, Neolítico y Edad de los Metales."],
    ["Mesopotamia y Egipto","Primeras ciudades, escritura, poder y sociedad."],
    ["La antigua Grecia","Polis, ciudadanía, cultura y expansión."],
    ["Roma y la península ibérica","República, Imperio, Hispania y patrimonio."]
  ],
  "extranjera": [
    ["Introducción","Repaso de vocabulario y estructuras básicas del inglés."],
    ["Teen Life","Vida adolescente, instituto y rutinas diarias."],
    ["That’s Entertainment","Ocio y entretenimiento."],
    ["Where We Live","La casa, el barrio y los lugares de la ciudad."],
    ["Special Events","Acontecimientos deportivos y celebraciones."],
    ["Discovering Nature","Animales y entorno natural."],
    ["On the Go","Preparar un viaje y hablar de transportes."]
  ],
  "tecnologia": [
    ["La tecnología","Productos tecnológicos, proceso de diseño, fabricación y sostenibilidad."],
    ["Digitalización del entorno personal","Dispositivos, archivos, herramientas digitales y seguridad."],
    ["Iniciación al diseño CAD","Representar y diseñar piezas con herramientas digitales."],
    ["Materiales tecnológicos","Propiedades, selección, transformación y reciclaje de materiales."],
    ["Estructuras y mecanismos","Esfuerzos, estabilidad y transmisión del movimiento."],
    ["Electricidad y electrónica básica","Componentes, circuitos y magnitudes eléctricas."],
    ["Pensamiento computacional con Scratch y App Inventor","Algoritmos y programación visual para crear proyectos y aplicaciones."],
    ["Introducción a la robótica","Sensores, actuadores y control de robots."]
  ],
  "musica": [
    ["Sonido y escucha","Cualidades del sonido, silencio y escucha activa."],
    ["Ritmo y notación","Pulso, compás, figuras, pausas y tempo."],
    ["Melodía y escritura musical","Pentagrama, notas, intervalos y escalas básicas."],
    ["Voz e instrumentos","Familias instrumentales, agrupaciones y cuidado de la voz."],
    ["Textura, forma y expresión","Dinámica, repetición, contraste y estructura musical."],
    ["Interpretación y creación","Canto, movimiento, acompañamiento e improvisación."],
    ["Músicas y culturas","Patrimonio, estilos y herramientas digitales."]
  ],
  "educacion-fisica": [
    ["Actividad física y salud","Hábitos activos, calentamiento, descanso y bienestar."],
    ["Condición física y control corporal","Resistencia, fuerza, movilidad y coordinación."],
    ["Habilidades y juegos motores","Desplazamientos, saltos, lanzamientos y decisiones."],
    ["Deportes de cooperación y oposición","Reglas, tácticas básicas y juego limpio."],
    ["Expresión corporal y ritmo","Comunicación con el cuerpo y composiciones sencillas."],
    ["Actividad física en el entorno","Orientación, seguridad y respeto al medio."],
    ["Convivencia, inclusión y prevención","Trabajo en equipo y actuación ante accidentes."]
  ],
  "religion": [
    ["Identidad y dignidad personal","Religión católica · Persona, vínculos y sentido de la vida."],
    ["Biblia y tradiciones cristianas","Religión católica · Relatos, símbolos y contexto."],
    ["Jesús y la comunidad cristiana","Religión católica · Vida, mensaje y comunidad."],
    ["Patrimonio y diálogo interreligioso","Religión católica · Arte, celebraciones y convivencia."],
    ["Proyectos de atención educativa","Si se cursa esta opción · Lectura, resolución de problemas y proyectos colaborativos definidos por el centro."]
  ],
  "segunda-lengua": [
    ["Introducción","Primer contacto con los protagonistas y el francés del aula."],
    ["Salut !","Saludar, presentarse y preguntar datos personales."],
    ["J’adore","Expresar gustos y hablar de aficiones."],
    ["J’habite en Suisse","Hablar de dónde vives y describir lugares."],
    ["Ma famille","Presentar a la familia y describir a sus miembros."],
    ["Le collège","Hablar de las asignaturas y la vida en el instituto."],
    ["Ma semaine","Contar cómo transcurre la semana y hablar de rutinas."]
  ],
  "emprendimiento": [
    ["Iniciativa y trabajo en equipo","Autoconocimiento, creatividad y colaboración."],
    ["Ideas y proyectos","Detectar una necesidad, plantear soluciones y presentar una propuesta."],
    ["Economía doméstica","Ingresos, gastos, presupuesto y ahorro."],
    ["Decisiones de consumo","Necesidades, precios, publicidad y consumo responsable."]
  ],
  "artes": [
    ["Elementos visuales","Punto, línea, forma, textura y composición."],
    ["Color y luz","Mezclas, contrastes e intención expresiva."],
    ["Técnicas y materiales","Dibujo, collage, volumen y experimentación."],
    ["Imagen y comunicación","Lectura de imágenes, fotografía y secuencias."],
    ["Proyecto artístico","Investigar, bocetar, producir y presentar una pieza."]
  ],
  "proyecto": [
    ["Pregunta y objetivos","Tema de trabajo definido por el centro."],
    ["Investigación y planificación","Fuentes, método de trabajo y reparto de tareas."],
    ["Desarrollo y revisión","Crear, contrastar resultados y mejorar el proyecto."],
    ["Presentación y evaluación","Comunicar el proceso y valorar el resultado."]
  ]
};
const titulosMatematicas = ["La máquina de multiplicar","El constructor de cuadrados","Construye un número gigante","El taller de factores","La ruta de las operaciones","El cuadrado incompleto","El árbol que se multiplica","El arquitecto de cuadrados","Detectives de ángulos","La máquina del sesenta"];

const referenciasTemarios = {
  "matematicas": {
    "book": "Anaya · Operación Mundo · ISBN 9788414305287",
    "confirmed": [
      2,
      9
    ],
    "url": "https://centrosantabarbara.es/wp-content/uploads/2024/07/1o-ESO-MATEMATICAS-SISTEMA-RECUPERACION-24-25.pdf"
  },
  "biologia": {
    "book": "Oxford · GENiOX · ISBN 9780190530105",
    "url": "https://www.oup.es/wp-content/uploads/2024/07/Indice-BIOGEO-1ESO.pdf"
  },
  "lengua": {
    "book": "McGraw Hill · ISBN 9788448626075",
    "confirmed": []
  },
  "geografia": {
    "book": "SM · Revuela · ISBN 9788413927930",
    "confirmed": []
  },
  "extranjera": {
    "book": "Burlington · Options 1 · ISBN 9789925308941",
    "startsAtZero": true
  },
  "tecnologia": {
    "book": "McGraw Hill · Tecnología y Digitalización A · ISBN 9788448627591",
    "url": "https://www.blinklearning.com/coursePlayer/curso2.php?idcurso=4231794"
  },
  "segunda-lengua": {
    "book": "Macmillan · Les Blogueurs 1 A1.1 · ISBN 9788418907791",
    "startsAtZero": true,
    "url": "https://www.macmillaneducation.es/wp-content/uploads/2022/05/ODS_Les_Blogueurs.pdf"
  }
};
