import {
    ranita,
    autoBlanco,
    moneda,
    perdiste,
    madrigueraLlena,
    tortuga,
    inicio,
    laser,
    meteorito,
    facil,
    mosquita,
    naveEspacial,
    ranitaBebe,
    serpiente,
    tronco,
    titulo,
    rio,
    pared,
    cuenta,
    tailwind,
    css,
    javascript,
    nodejs,
    reactjs,
    html
} from '../assets'

const navLinks = [
    {
        id:'',
        title: 'Home'
    },
    {
        id: 'documentacion',
        title: 'Documentación'
    },
    {
        id: 'descargas',
        title: 'Descargas'
    }
]

const reportLinks = [
    {
        id: 'escenarios',
        tabTitle: 'Escenarios'
    },
    {
        id: 'ranita',
        tabTitle: 'Ranita',
    },
    {
        id: 'vehiculo',
        tabTitle: 'Vehículo',
    },
    {
        id: 'tortuguita',
        tabTitle: 'Tortuguita',
    },
    {
        id: 'madriguera',
        tabTitle: 'Madriguera',
    },
    {
        id: 'bonus',
        tabTitle: 'Bonus',
    },
    {
        id: 'dificultades_inicio',
        tabTitle: 'Dificultades y Menú inicio',
    }
]

const reports = [
    {
        id: 'escenarios',
        text: ['A lo largo del desarrollo, no solo para interactuar entre los objetos, sino también para acciones dentro de los mismos objetos se utilizan mensajes, ya que notamos que al extender mucho un mismo bloque y generar muchas validaciones al mismo tiempo, perdíamos el paralelismo entre los procesos que se evalúan en los condicionales. Del mismo modo, la utilización de mensajes da un mayor orden y entendimiento de las acciones de los bloques en cuestión.',
        'Por ejemplo se utiliza el mensaje “Musica_Level2” para que al recibir, reproduzca la música que pertenece al nivel 2. Se realizó de esta manera ya que al introducir los bloques que ejecutan dicha acción en el lugar de la emisión del mensaje, este provocaba un bug que no permitía que se avance de nivel. Con mensajes se informó a cada objeto si deben o no participar de cada bloque, el menú, Lvl 1, 2, 3, pantalla de “ganaste” o “perdiste”, etc.',        
        'Para realizar el cambio entre niveles, como este requiere de que se oculten o muestran objetos, se reinicien variables y clones, se cambie de música, se cambie de escenario o obstáculos, optamos realizar este evento desde el escenario una vez que termina el nivel, es decir Cont Madriguera Llena = 6. Se creó un bloque que es común para todos los niveles, para simplificar las evaluaciones que se tengan que hacer al recibir el siguiente nivel.'],
        bgImg: perdiste
    },
    {
        id: 'ranita',
        text: ['Para realizar el movimiento evaluamos dos condiciones muy necesarias para restringir el movimiento de la rana. Se crean tres variables, “Vidas” (que corresponde a la cantidad de vidas de la rana), “Muerto” (variable que nos permite indicar si la rana tiene o no que moverse y en qué momento) y “En_Aire” (que simboliza cuando la rana está cambiando de disfraz). En todos los casos del movimiento la rana se desplaza 10 unidades en la dirección correspondiente, realiza la animación y se desplaza 10 unidades más.'],
        bgImg: ranita
    },
    {
        id: 'vehiculo',
        text: ['¿Sabias que son los clones en Scratch? Los clones son una funcionalidad de Scratch que nos permite crear indefinidas copias de un objeto y que cada una de ellas se comporte de forma diferente, como queramos en cada momento.',
        'Decidimos que en el recorrido de la calle, los distintos vehículos que salgan no sean iguales, para ello creamos 6 modelos de autos, 2 camiones y una moto para que pase entre los autos para aumentar la dificultad.',
        'El verdadero objeto “Vehículo” es uno solo, permanece oculto, los verdaderos objetos que visualizamos y que pueden matar a la ranita, son clones, que mediante un algoritmo, este adopta un color (en las posiciones que corresponden a los autos), un tipo de camión (en la posición que corresponde a los camiones) o que pase la moto, decidiendo qué disfraz corresponde.',
        'Color_auto es un algoritmo que decide qué color será el auto esta por salir. El bloque color adquiere valor en un bloque que agregamos para hacer surgir los vehículos en la posición inicial correspondiente, veremos esto luego de un comentario.',
        'Para el desarrollo del algoritmo Color_auto descubrimos la falta de una estructura selectiva múltiple en Scratch, entendemos que esto se debe a que no es precisamente un lenguaje de programación. Sin embargo hay formas más correctas de realizar este algoritmo, pero para la realización de este fin sería de mucha más utilidad.',
        'El algoritmo que define el color del vehículo se encuentra dentro de un bloque definido Posicioninicial_Tipo donde se definen las posiciones iniciales y el tipo de vehículo que aparecerá en esa posición.',
        'Por último todos los objetos que presenten movimientos, están ligados al valor que adquiere la variable V_Global_Der, esta variable es la que permite que la velocidad de los vehículos, troncos y tortugas aumenten su velocidad al elegir la dificultad del juego.'],
        bgImg: autoBlanco
    },
    {
        id: 'tortuguita',
        text: ['Llamamos este objeto metafóricamente como “La rebeldía de los clones” ya que fue el objeto que más dificultad presentó al momento de la creación de los clones, para alinearlos y que no se superpongan o separen, para que salgan con una frecuencia armoniosa y claro, no solo hay tortugas en las que saltar, sino también las llamadas “Tortugas trampa” que salen intercaladas entre las que sí aceptan transportar a la ranita.',
        'El movimiento de la tortuga se realiza de igual manera que el de los vehículos, pero aplicado a este objeto. En un inicio las tortugas no eran objetos individuales, sino que el disfraz estaba creado con las tortugas en fila, para ser programadas bajo el mismo objeto “Tronco”. El principal foco de duda ante esta situación se dio en que al observar el Frogger original, de Konami, se observó que al colisionar una tortuga el borde, al final de su recorrido, de forma armoniosa y equitativa, sale por el otro extremo ese mismo clon. Trabajar este objeto con un disfraz grande, no permite realizar de forma armoniosa ese recorrido.',
        'Otro foco de duda se dio por la incorporación de las tortugas trampa en el objeto “Troncos”, esto provocaría que se estén ejecutando muchas condiciones en múltiples variables en un mismo objeto, provocando bugs. Se creó el disfraz de la tortuga trampa, que es exactamente igual a la tortuga original, con el fin de identificar el grupo de tortugas que presentan la característica de ser “Trampa"'],
        bgImg: tortuga
    },
    {
        id: 'madriguera',
        text: ['Los disfraces de la madriguera, tanto en el nivel 3 (en el espacio) como en los niveles anteriores, fueron creados por nosotros.',
        'Las madrigueras se comportan de forma similar a los demas objetos, en sentido de que son clones, aunque su posición sea fija.',
        'Se utiliza una variable “Cont_Madriguera” para limitar la creación de clones y otra llamada “Cont_Madriguera_Llena” para contar la cantidad de ranitas que fueron ubicadas en una madriguera.'],
        bgImg: madrigueraLlena
    },
    {
        id: 'bonus',
        text: ['El bonus vida está programado partiendo de dos bloques principales, Bonus_Vida, con las características que este debe tener y Disfraz_Bonus_Vida que realiza una sutil animación que nos hace percibir que la moneda está rotando sobre su eje y. En este caso los disfraces de la moneda fueron descargados de Pinterest'],
        bgImg: moneda
    },
    {
        id: 'dificultades_inicio',
        text: ['El menú de inicio tiene por fondo uno que brinda Scratch dentro de su biblioteca y está compuesto por 3 objetos: La ranita, Título y Botones. Se decidió que el juego comience con un movimiento similar al del juego para llegar al bloque “Inicio”, con el fin de que el usuario se familiarice con los movimientos. Estos bloques también fueron diseñados por nosotros.',
        'Al momento de tener que implementar los niveles de dificultad del juego, nos encontramos con una gran dificultad, debíamos lograr que cada uno de los 3 niveles, se vuelva más difícil o más fácil, dependiendo la que elija el usuario. Por fortuna, al momento de plantear los objetos que van a ser los obstáculos de la ranita, creamos una variable global que mencionamos anteriormente, “V_Global_Der” y “V_Global_Izq”. De esta manera, planteamos que los niveles de dificultad, afecten el número de esa variable y provoque que los objetos se muevan más rápido o más lento.'],
        bgImg: inicio
    }
]

const downloadables = [
    {
        id: 0,
        img: autoBlanco,
        imgAlt: 'auto blanco pixelart descargable',
        desc: 'Incluye autos, camiones y moto',
        link: 'https://www.mediafire.com/file/64sjnxm88mkga2f/Veh%25C3%25ADculo.sprite3/file',
    },
    {
        id: 1,
        img: ranitaBebe,
        imgAlt: 'ranita bebe pixelart descargable',
        desc: 'Incluye el bonus "Ranita bebe"',
        link: 'https://www.mediafire.com/file/qo6il678gkmndgi/Ranita_Bebe.sprite3/file',
    },
    {
        id: 3,
        img: ranita,
        imgAlt: 'ranita pixelart descargable',
        desc: 'Incluye la ranita que controla el jugador',
        link: 'https://www.mediafire.com/file/58qyik8raeful6q/Ranita.sprite3/file',
    },
    {
        id: 4,
        img: madrigueraLlena,
        imgAlt: 'madriguera rana pixelart descargable',
        desc: 'Incluye la madriguera',
        link: 'https://www.mediafire.com/file/58qyik8raeful6q/Ranita.sprite3/file',
    },
    {
        id: 5,
        img: tronco,
        imgAlt: 'tronco pixelart descargable',
        desc: 'Incluye el tronco en sus tres tamaños',
        link: 'https://www.mediafire.com/file/761qogfoljutmnb/Tronco.sprite3/file',
    },
    {
        id: 6,
        img: tortuga,
        imgAlt: 'tortuga pixelart descargable',
        desc: 'Incluye la tortuga normal y la tortuga trampa',
        link: 'https://www.mediafire.com/file/tf7apnbwc33j0sy/Tortuga.sprite3/file',
    },
    {
        id: 7,
        img: titulo,
        imgAlt: 'frogger titulo pixelart descargable',
        desc: 'Incluye el titulo',
        link: 'https://www.mediafire.com/file/r91n9jnmi905e66/Titulo.sprite3/file',
    },
    {
        id: 8,
        img: naveEspacial,
        imgAlt: 'Nave espacial pixelart descargable',
        desc: 'Incluye la nave espacial',
        link: 'https://www.mediafire.com/file/zab38l4ca05nahl/nave_espacial-removebg-preview.sprite3/file',
    },
    {
        id: 9,
        img: serpiente,
        imgAlt: 'serpiente pixelart descargable',
        desc: 'Incluye la serpiente',
        link: 'https://www.mediafire.com/file/y01fx9utea8sieq/Serpiente.sprite3/file',
    },
    {
        id: 10,
        img: moneda,
        imgAlt: 'moneda de oro pixelart descargable',
        desc: 'Incluye el bonus "Moneda"',
        link: 'https://www.mediafire.com/file/kp7z8xi0a6669iz/Moneda_Bonus.sprite3/file',
    },
    {
        id: 11,
        img: madrigueraLlena,
        imgAlt: 'madriguera rana pixelart descargable',
        desc: 'Incluye la madriguera',
        link: 'https://www.mediafire.com/file/58qyik8raeful6q/Ranita.sprite3/file',
    },
    {
        id: 12,
        img: meteorito,
        imgAlt: 'meteorito pixelart descargable',
        desc: 'Incluye el meteorito',
        link: 'https://www.mediafire.com/file/h4txqfrdne95t61/Meteorito.sprite3/file',
    },
    {
        id: 13,
        img: inicio,
        imgAlt: 'boton de inicio pixelart descargable',
        desc: 'Incluye los botones del menu',
        link: 'https://www.mediafire.com/file/cbxbvzdu4rwl4aa/Botones.sprite3/file',
    },
    {
        id: 14,
        img: perdiste,
        imgAlt: 'Cartel de perdiste pixelart descargable',
        desc: 'Incluye el cartel que dice si perdiste o ganaste',
        link: 'https://www.mediafire.com/file/vxznabhyqnzwxbg/Perder_Ganar_Cartel.sprite3/file',
    },
    {
        id: 15,
        img: facil,
        imgAlt: 'cartel que dice facil pixelart descargable',
        desc: 'Incluye los carteles de elegir dificultad',
        link: 'https://www.mediafire.com/file/b17rlumbdkvqwdw/Elegir_Dificultad.sprite3/file',
    },
    {
        id: 16,
        img: mosquita,
        imgAlt: 'mosquita pixelart descargable',
        desc: 'Incluye el bonus "Mosquita"',
        link: 'https://www.mediafire.com/file/hw0nzqqdtao9wse/Mosquita.sprite3/file',
    },
    {
        id: 17,
        img: laser,
        imgAlt: 'lasers pixelart descargable',
        desc: 'Incluye el laser',
        link: 'https://www.mediafire.com/file/phi7ww1f7cmpvz3/laser.sprite3/file',
    },
    {
        id: 18,
        img: rio,
        imgAlt: 'rio pixelart descargable',
        desc: 'Incluye el rio',
        link: 'https://www.mediafire.com/file/crf08gul5lnrwh8/Rio.sprite3/file',
    },
    {
        id: 19,
        img: cuenta,
        imgAlt: 'numero uno pixelart descargable',
        desc: 'Incluye la cuenta regresiva',
        link: 'https://www.mediafire.com/file/568njx0ld0l1m19/Cuenta_Regresiva.sprite3/file',
    },
    {
        id: 20,
        img: pared,
        imgAlt: 'madriguera rana pixelart descargable',
        desc: 'Incluye la pared invisible de arriba',
        link: 'https://www.mediafire.com/file/rgwwfyrapr5xbnl/Pared.sprite3/file',
    }
]

const techUsed = [
    {
        imgAlt: 'html',
        img: html
    },
    {
        imgAlt: 'css',
        img: css
    },
    {
        imgAlt: 'tailwind',
        img: tailwind
    },
    {
        imgAlt: 'javascript',
        img: javascript
    },
    {
        imgAlt: 'nodeJs',
        img: nodejs
    },
    {
        imgAlt: 'reactJs',
        img: reactjs
    }
]

export { navLinks, reportLinks, reports, downloadables, techUsed }