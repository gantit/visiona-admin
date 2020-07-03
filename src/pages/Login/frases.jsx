
const randrange = (min, max) => (Math.floor(Math.random() * (+max - +min)) + +min);

const frases = [
  {
    "frase": "”Hay dos reglas para el éxito. 1) Nunca le digas todo lo que sabes”",
    "autor": "Roger H. Lincoln"
  },
  {
    "frase": "”El único lugar donde el éxito viene antes del trabajo es en el diccionario”",
    "autor": "Vidal Sassoon"
  },
  {
    "frase": "”Todas las personas que conozco que tienen éxito en lo que hacen,  lo tienen porque les encanta hacerlo”",
    "autor": "Joe Penna"
  },
  {
    "frase": "”Ser realista es el camino que conduce con mayor frecuencia a la mediocridad”",
    "autor": "Will Smith"
  },
  {
    "frase": "”Cada vez que un individuo o una empresa decide que el éxito se ha alcanzado, el progreso se detiene”",
    "autor": "Thomas J. Watson"
  },
  {
    "frase": "”Para tener éxito, hay que tener el corazón en su negocio, y su negocio en su corazón”",
    "autor": "Thomas J. Watson"
  },
  {
    "frase": "”El éxito es simplemente una cuestión de suerte. Es lo que le dirán si pregunta a cualquier fracaso”",
    "autor": "Earl Wilson"
  },
  {
    "frase": "”El camino al éxito está siempre “en construcción”",
    "autor": "Arnold Palmer"
  },
  {
    "frase": "”Cualquier cosa que la mente puede concebir e imaginar, se puede lograr”",
    "autor": "Napoleón Hill"
  },
  {
    "frase": "”La mayoría de las grandes personas han alcanzado su mayor éxito un paso más allá de su mayor fracaso”",
    "autor": "Napoleón Hill"
  },
  {
    "frase": "”Tanto si piensas que puedes o no puedes, tienes razón”",
    "autor": "Henry Ford "
  },
  {
    "frase": "”El fracaso derrota a los perdedores, el fracaso inspira ganadores.”",
    "autor": "Robert T. Kiyosaki"
  },
  {
    "frase": "”No he fracasado. Acabo de encontrar 10.000 maneras que no funcionan. ”",
    "autor": "Thomas Edison"
  },
  {
    "frase": "”Una vez que usted decide que va a conformarse con ser el segundo, eso es lo que te pasa en la vida”",
    "autor": "John F. Kennedy"
  },
  {
    "frase": "”Sinceramente, creo que es mejor ser un fracasado en algo que te gusta que tener éxito en algo que odias.”",
    "autor": "George Burns"
  },
  {
    "frase": "”Los líderes no obligan a las personas a seguirles, les invitan a un viaje”",
    "autor": "Charles S. Lauer"
  },
  {
    "frase": "”Ejemplo no es lo más importante para influir en otras personas; Es lo único”",
    "autor": "Abraham Lincoln"
  },
  {
    "frase": "”El liderazgo es hacer lo correcto cuando nadie está mirando”",
    "autor": "George Van Valkenburg"
  },
  {
    "frase": "”El liderazgo es el arte de conseguir que otra persona haga algo que quieres hacer porque quiere hacerlo”",
    "autor": "Dwight D. Eisenhower"
  },
  {
    "frase": "”La diferencia entre un jefe y un líder: un jefe dice, ‘Ve!’ -Un líder dice, ‘¡Vamos!'”",
    "autor": "EM Kelly"
  },
  {
    "frase": "”Tengo más miedo de un ejército de cien ovejas dirigido por un león que un ejército de cien leones dirigido por una oveja”",
    "autor": "Charles Maurice"
  },
  {
    "frase": "”Todo el problema con el mundo es que los tontos y los fanáticos están siempre tan seguros de sí mismos, mientras que la gente sabia está llena de dudas”",
    "autor": "Bertrand Russell"
  },
  {
    "frase": "”Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito”",
    "autor": "Aristóteles"
  },
  {
    "frase": "”Si uno no sabe a que puerto se dirige, ningún viento le es favorable”",
    "autor": "Lucio Anneo Séneca"
  },
  {
    "frase": "”La visión debe ser seguida por la empresa. No es suficiente para mirar por las escaleras. Debemos subir por las escaleras”",
    "autor": "Vance Hayner"
  },
  {
    "frase": "Dentro de veinte años estarás más decepcionado por lo que no hiciste que por lo que hiciste. Así que suelta las amarras, navega y aléjate del puerto seguro.",
    "autor": "Mark Twain"
  },
  {
    "frase": "”Un día tu vida pasará ante tus sus ojos. Asegúrate de que vale la pena verla”",
    "autor": "Mooie"
  },
  {
    "frase": "”Atrape un pescado, y usted puede venderlo a un hombre. Enseñe a un hombre a pescar, y arruinar una oportunidad de negocio maravilloso”",
    "autor": "Karl (tal vez Groucho) Marx"
  },
  {
    "frase": "”Trabajando fielmente ocho horas al día es posible que con el tiempo llegues a ser jefe y entonces trabajes doce horas al día”",
    "autor": "Robert Frost"
  },
  {
    "frase": "”Mi hijo es ahora un” ”empresario“. Eso es lo que se dice cuando no tiene un trabajo”",
    "autor": "Ted Turner"
  },
  {
    "frase": "”La educación formal le facilitará la vida. Educación para el autocontrol le generará una fortuna”",
    "autor": "Jim Rohn"
  },
  {
    "frase": "”La mayor recompensa de ser millonario no es la cantidad de dinero que usted gana. Es el tipo de persona que usted tiene que llegar a ser para convertirse en millonario”",
    "autor": "Jim Rohn"
  },
  {
    "frase": "”Si no estás aprendiendo mientras usted estas ganando, te estás engañando a ti mismo ya que es la mejor parte de su compensación.”",
    "autor": "Napoleón Hill"
  },
  {
    "frase": "”Una empresa que no hace nada más que dinero es un mal negocio.”",
    "autor": "Henry Ford"
  },
  {
    "frase": "”Después de cierto punto, el dinero no tiene sentido. Deja de ser el objetivo. El juego es lo que cuenta.”",
    "autor": "Aristóteles"
  },
  {
    "frase": "”No pago buenos salarios porque no tengo mucho dinero, tengo un montón de dinero porque tengo que pagar buenos salarios.”",
    "autor": "Robert Bosch"
  },
  {
    "frase": "”Préstale a tu amigo 20$ . Si no te paga no es tu amigo. Dinero bien gastado.”",
    "autor": "Ted Nicolas"
  },
  {
    "frase": "”El dinero y el éxito no cambian las personas. Ellos simplemente amplifican lo que ya está dentro de ellas”",
    "autor": "Will Smith"
  },
  {
    "frase": "”El secreto de salir adelante es comenzar”",
    "autor": "Agatha Christie"
  },
  {
    "frase": "”EEn la preparación para una batalla siempre he aprendido que los planes son inútiles, pero también que la planificación es indispensable.”",
    "autor": "Dwight D. Eisenhower"
  },
  {
    "frase": "”Tienes que dejar de hacer todas las cosas que la gente ha intentado, probado y que no funcionan”",
    "autor": "Michael Dunlop"
  },
  {
    "frase": "”Si no estás cometiendo errores, entonces no estás tomando decisiones”",
    "autor": "Catalina de Cook"
  },
  {
    "frase": "”Tus clientes  más insatisfechos son tu mayor fuente de aprendizaje”",
    "autor": "Bill Gates"
  },
  {
    "frase": "”Se puede conseguir cualquier cosa si uno está dispuesto a ayudar lo suficiente a otros a conseguir lo que ellos quieren”",
    "autor": "Zig Ziglar"
  },
  {
    "frase": "”Un empresario tiende a morder un poco más de lo que puede masticar con la esperanza de que va a aprender rápidamente cómo masticarlo”",
    "autor": "Roy Ceniza"
  },
  {
    "frase": "”El verdadero emprendedor es un “hacedor”, no un soñador”",
    "autor": "Nolan Bushnell"
  },
  {
    "frase": "”Si te preguntan si se puede hacer un trabajo, hay que decir, ‘¡Claro que puedo!’ Luego hay que ponerse a trabajar y encontrar la manera de hacerlo.”",
    "autor": "Theodore Roosevelt"
  },
  {
    "frase": "”Todo comenzó de la nada”",
    "autor": "Ben Weissenstein "
  },
  {
    "frase": "”Si comienzas con nada y terminas con nada, no hay nada perdido”",
    "autor": "Michael Dunlop"
  },
  {
    "frase": "”Comienza hoy, no mañana. En todo caso, deberías haber comenzado ayer”",
    "autor": "Emil Motycka"
  },
  {
    "frase": "”Haz que suceda ahora, no mañana. Mañana es la excusa de un perdedor.”",
    "autor": "Andrew Moda"
  },
  {
    "frase": "”Todos los días me levanto y miro la lista de Forbes con las personas más ricas de Estados Unidos. Si no estoy allí, me voy a trabajar”",
    "autor": "Robert Orben"
  },
  {
    "frase": "”El espíritu empresarial exige vivir unos años de tu vida como la mayoría de la gente no hará, para poder pasar el resto de tu vida como la mayoría de la gente no puede”",
    "autor": "Anónimo"
  },
  {
    "frase": "”La mejor manera de predecir el futuro es crearlo”",
    "autor": "Peter Drucker"
  },
  {
    "frase": "”Hay que modificar los sueños o ampliar nuestras habilidades”",
    "autor": "Jim Rohn"
  },
  {
    "frase": "”Mantente alejado de las personas que intentan menospreciar tus ambiciones. La gente sin latura de miras siempre hace eso, pero los realmente grandes te hacen sentir que tú también puedes llegar a ser grande”",
    "autor": "Mark Twain"
  },
  {
    "frase": "”Ni una sola persona cuyo nombre sea digno de recordar vivió una vida cómoda”",
    "autor": "Ryan P. Allis"
  },
  {
    "frase": "”Si piensas que vas a amar algo, date una oportunidad. Te vas a machacar el resto de tu vida si no lo haces”",
    "autor": "Joe Penna"
  },
  {
    "frase": "”El mejor momento para plantar un árbol fue hace veinte años. El segundo mejor momento es ahora”",
    "autor": "Proverbio Chino"
  },
  {
    "frase": "”Si quieres un año de prosperidad, cultiva cereales. Si quieres diez años de prosperidad, planta árboles. Si quieres cien años de prosperidad, cuida a las personas”",
    "autor": "Proverbio Chino"
  },
  {
    "frase": "”La visión sin acción es un sueño. La acción sin visión es una pesadilla”",
    "autor": "Proverbio japonés"
  },
  {
    "frase": "”Siembra un pensamiento y cosecharás una acción; siembra una acción y cosecharás un hábito; siembra un hábito y cosecharás un carácter. Siembra un carácter y cosecharás un destino”",
    "autor": "Proverbio Chino"
  },
  {
    "frase": "”Un mal trabajador culpa a sus herramientas”",
    "autor": "Proverbio Chino"
  },
  {
    "frase": "”Una caída en una zanja te hace más sabio”",
    "autor": "Proverbio Chino"
  },
  {
    "frase": "”Un viaje de mil millas comienza con un solo paso”",
    "autor": "Proverbio Chino"
  },
  {
    "frase": "”Las torres más altas se elevan desde el suelo”",
    "autor": "Proverbio Chino "
  },
  {
    "frase": "”La construcción de un castillo es difícil. La defensa y el mantenimiento es más difícil todavía”",
    "autor": "Proverbio Chino"
  },
  {
    "frase": "”A todos los gatos les encanta el pescado, pero temen mojar sus patas”",
    "autor": "Proverbio Chino"
  },
  {
    "frase": "”No planificar es planificar el fracaso”",
    "autor": "Proverbio Chino"
  },
  {
    "frase": "”Encuentra un trabajo que te gusta y no volverás a trabajar un día en el resto de tu vida”",
    "autor": "Confucio"
  }
];

const imgs = [
  "https://images.unsplash.com/photo-1532286171598-a09989a53b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1543333101-840e043d2a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1552599886-21da61fc664e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1517896662426-1bc6933c0144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1527345076281-3bb38ac4e6dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1421940943431-d392fcc1079f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1477764864052-f721644f01a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1477517787936-70ba786643fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1522198763288-96e9f39904af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1504780361545-d1ce834be3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1530939069691-adb779735408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1527090496-346715f0b28d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1503796627019-324e68809dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1521799022345-481a897e45ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1507209281643-9cddb381dcea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1498814217031-5a856f4a18ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1466779561253-0a08336ba2ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1489951150074-7a225b2a5170?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1461701204332-2aa3db5b20c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1581091870619-835cee86e759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1557176765-6ff878f911b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1557186814-b29c2b31d57c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1516907089318-f40b2d414772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1487537708572-3c850b5e856e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1493020258366-be3ead1b3027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1498479027114-6716e6dd46c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1519155031214-e8d583928bf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1516886635086-2b3c423c0947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1524283077247-2f14f280ebd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1531136398070-77815e4b2182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1509099408473-99215ef3535b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1451933371645-a3029668b979?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1462726609895-1a4312a128d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1482329033286-79a3d24413b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1500067803284-4304564c8655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1581090698407-7d93959da202?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1556216576-97cef34659df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1552197717-fdea1c70c5c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1533578733369-7219f1c25560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1527685216219-c7bee79b0089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1489257712451-3a66755ca19c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/1/work-stations-plus-espresso.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1482527784547-949d79e2cc8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1554412657-8c3cd76f9367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1526698905402-e13b880ad864?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1516635707594-6949bdca3538?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1525850799078-93b0fd68cbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1526232950894-e112ee9aca50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1533849569724-5eaca1aba9af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1520229534044-62d7cd4e9b0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1516554344860-089511650386?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1516611350064-481224e0cb0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1520441343724-5657517d7526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1500058504985-a3bbdb0a7781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/1/type-away-numero-dos.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1433704334812-6c45b0b8784d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1493235431945-90c060301e41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60"
];

const cita = frases[randrange(0, frases.length - 1)]
const bg = imgs[randrange(0, imgs.length - 1)]

export { frases, randrange, imgs }