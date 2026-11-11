import { Article } from '../types';

export const ARTICLES_ES: Article[] = [
  // 1. CARDIAC ARREST & CPR
  {
    id: 'cpr-cardiac-arrest',
    slug: 'cardiac-arrest-cpr',
    title: 'Paro Cardíaco en Adultos y RCP Solo con las Manos',
    shortDescription: 'Cómo reconocer un paro cardíaco repentino y aplicar compresiones torácicas inmediatas que salvan vidas.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Comité Internacional de Consenso en Resucitación y Emergencias',
    summary: 'Cuando una persona se desploma, pierde la conciencia y no respira con normalidad, cada segundo cuenta. Iniciar RCP de inmediato duplica o triplica sus probabilidades de supervivencia.',
    whatIsIt: 'El paro cardíaco ocurre cuando el corazón deja repentinamente de bombear sangre al organismo debido a un fallo eléctrico. Es distinto a un ataque cardíaco (infarto), aunque un infarto puede desencadenarlo. Sin flujo de sangre oxigenada, la muerte cerebral comienza entre los 3 y 5 minutos.',
    howToRecognize: [
      'La persona cae o se desploma repentinamente y no responde al sacudirla suavemente de los hombros.',
      'No respira, o solo emite jadeos o boqueos aislados (el jadeo o "gasping" NO es respiración normal).',
      'No reacciona ante preguntas en voz alta ni estímulos firmes.',
      'Tono de piel pálido, azulado o grisáceo, en especial alrededor de los labios y uñas.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Verificar Seguridad y Respuesta',
        description: 'Asegúrate de que el lugar sea seguro para ti. Toca firmemente a la persona en ambos hombros y pregúntale fuerte: "¿Estás bien?". Si no responde, actúa de inmediato.',
        warning: 'No tardes más de 10 segundos en comprobar si responde y si respira con normalidad.'
      },
      {
        step: 2,
        title: 'Llamar a Emergencias y Pedir un Desfibrilador (DEA)',
        description: 'Llama al número de emergencias local (ej. 911, 107, 112). Pon el teléfono en altavoz. Señala a una persona específica y dile: "¡Tú, llama a emergencias y trae un Desfibrilador Externo Automático (DEA) ahora mismo!".'
      },
      {
        step: 3,
        title: 'Posicionar las Manos en el Centro del Pecho',
        description: 'Apoya el talón de una mano en el centro del pecho desnudo (mitad inferior del esternón). Coloca el talón de la otra mano encima y entrelaza los dedos. Mantén los codos rectos y los hombros directamente sobre tus manos.'
      },
      {
        step: 4,
        title: 'Realizar Compresiones Fuertes y Rápidas',
        description: 'Presiona hacia abajo al menos 5 a 6 cm de profundidad a un ritmo de 100 a 120 compresiones por minuto (al ritmo de la canción "Stayin\' Alive"). Permite que el pecho regrese por completo a su posición inicial tras cada compresión.',
        warning: 'No te apoyes constantemente sobre el pecho entre compresiones; permitir que suba permite que el corazón se llene de sangre.'
      },
      {
        step: 5,
        title: 'Continuar hasta que Llegue Ayuda o el DEA esté Listo',
        description: 'No interrumpas las compresiones a menos que la persona despierte claramente y respire normal, el DEA indique pausar para analizar/dar descarga, o el personal de emergencias tome el control. Si hay varios rescatistas, túrnense cada 2 minutos para evitar el agotamiento.'
      }
    ],
    whatNotToDo: [
      'NO dudes en actuar por temor a lastimar; las costillas fisuradas se curan, la muerte es irreversible.',
      'NO pierdas tiempo buscando el pulso en el cuello si no eres personal médico entrenado.',
      'NO interpretes ruidos de jadeo, ronquido o boqueo agónico como si fueran respiración normal.',
      'NO dejes sola a la persona salvo que debas buscar un teléfono o DEA y no haya nadie más cerca.',
      'NO introduzcas líquidos, alimentos ni medicamentos en la boca de una persona inconsciente.'
    ],
    whenToSeekMedicalHelp: [
      'El paro cardíaco es la máxima emergencia médica; la ambulancia debe ser convocada en el Paso 1 de inmediato.',
      'Incluso si la persona recupera la conciencia antes de la llegada de los médicos, debe ser trasladada de urgencia a una unidad de cuidados intensivos.'
    ],
    sources: [
      { name: 'Guías de RCP y ACE de la American Heart Association (AHA)', year: '2023' },
      { name: 'Consejo Europeo de Resucitación (ERC)', year: '2023' },
      { name: 'Organización Mundial de la Salud (OMS)', year: '2022' }
    ],
    relatedArticles: ['aed-basics', 'stroke-recognition', 'choking-adult-child'],
    searchKeywords: ['rcp', 'paro cardiaco', 'paro', 'corazon detenido', 'inconsciente', 'compresiones', 'resucitacion', 'stayin alive', 'desmayo', 'colapso']
  },

  // 2. AED BASICS
  {
    id: 'aed-basics',
    slug: 'aed-basics',
    title: 'Guía de Uso del Desfibrilador Externo Automático (DEA)',
    shortDescription: 'Cómo cualquier persona puede usar con seguridad un DEA público para restablecer el ritmo cardíaco.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 3,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Comité Internacional de Consenso en Resucitación',
    summary: 'Un Desfibrilador Externo Automático (DEA) es un aparato portátil que analiza el ritmo del corazón y administra una descarga eléctrica controlada si es necesario. Da instrucciones de voz paso a paso y nunca dará una descarga si la persona no la necesita.',
    whatIsIt: 'Durante un paro cardíaco, el corazón suele entrar en un ritmo desorganizado llamado fibrilación ventricular. Una descarga eléctrica reinicia este caos, permitiendo que el marcapasos natural del corazón recupere los latidos coordinados.',
    howToRecognize: [
      'Los gabinetes de DEA públicos suelen tener un símbolo de corazón verde o rojo con un rayo eléctrico.',
      'Debe usarse de inmediato ante cualquier persona que no responda y no respire normalmente.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Encender el DEA',
        description: 'Abre la tapa o presiona el botón de encendido. El equipo comenzará a dar instrucciones en voz alta de inmediato.'
      },
      {
        step: 2,
        title: 'Descubrir el Pecho y Pegar los Parches',
        description: 'Retira la ropa del pecho del paciente. Despega el protector de los parches adhesivos y pégalos como indican los dibujos: uno en la parte superior derecha del pecho (debajo de la clavícula) y otro en el costado izquierdo (debajo de la axila).',
        warning: 'Seca el pecho rápidamente con un paño si está mojado o muy sudado antes de colocar los parches.'
      },
      {
        step: 3,
        title: 'Apartarse para el Análisis del Ritmo',
        description: 'Cuando el DEA diga: "Analizando el ritmo cardíaco, no toque al paciente", retrocede y grita con fuerza: "¡Atrás todos!". Asegúrate de que nadie toque el cuerpo de la víctima.'
      },
      {
        step: 4,
        title: 'Administrar la Descarga si se Indica',
        description: 'Si el DEA indica "Se aconseja descarga", verifica que nadie esté tocando al paciente y presiona el botón parpadeante de descarga. Si el modelo es totalmente automático, emitirá una cuenta regresiva y disparará solo.'
      },
      {
        step: 5,
        title: 'Reanudar Compresiones de Inmediato',
        description: 'Inmediatamente después de la descarga (o si dice "no se aconseja descarga"), retoma las compresiones de RCP sin retirar los parches. El DEA cronometrará 2 minutos y volverá a analizar automáticamente.'
      }
    ],
    whatNotToDo: [
      'NO toques a la persona mientras el DEA esté analizando o administrando una descarga.',
      'NO quites los parches adhesivos aunque la persona despierte; deben permanecer colocados hasta que lleguen los médicos.',
      'NO coloques los parches directamente sobre un marcapasos implantado visible (bulto bajo la piel) ni sobre parches de medicación (retíralos y limpia la piel primero).'
    ],
    whenToSeekMedicalHelp: [
      'La llamada a emergencias debe realizarse antes o en simultáneo con la búsqueda del DEA.'
    ],
    sources: [
      { name: 'International Liaison Committee on Resuscitation (ILCOR)', year: '2023' },
      { name: 'European Resuscitation Council (ERC)', year: '2023' }
    ],
    relatedArticles: ['cardiac-arrest-cpr', 'stroke-recognition'],
    searchKeywords: ['dea', 'desfibrilador', 'descarga electrica', 'parches dea', 'reanimacion', 'aed']
  },

  // 3. CHOKING
  {
    id: 'choking-adult-child',
    slug: 'choking-adult-child',
    title: 'Primeros Auxilios ante Atragantamiento (Adultos y Niños)',
    shortDescription: 'Cómo desobstruir la vía aérea mediante golpes en la espalda y compresiones abdominales (Heimlich).',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Panel Asesor Global de Primeros Auxilios',
    summary: 'El atragantamiento ocurre cuando comida u objetos extraños bloquean la garganta e impiden el paso de aire. Identificar si la obstrucción es leve o grave es la clave para actuar sin perder tiempo.',
    whatIsIt: 'La asfixia por obstrucción priva de oxígeno a los pulmones y al cerebro. Si la obstrucción es leve, la persona puede toser. Si es total, no puede emitir sonido alguno y perderá el conocimiento en pocos minutos.',
    howToRecognize: [
      'La señal universal de asfixia: llevarse una o ambas manos desesperadamente al cuello.',
      'Incapacidad para hablar, llorar o respirar.',
      'Tos débil, ineficaz o intentos de toser completamente mudos.',
      'Silbido agudo al intentar tomar aire (estridor).',
      'Labios, orejas o uñas que se tornan morados o azulados (cianosis).'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Evaluar Severidad: Estimular la Tos si es Leve',
        description: 'Pregunta: "¿Te estás atragantando?". Si la persona puede hablar, toser con fuerza o respirar, NO des golpes en la espalda. Anímala a que siga tosiendo intensamente.'
      },
      {
        step: 2,
        title: 'Dar 5 Golpes Firmes en la Espalda',
        description: 'Si la persona no puede hablar ni toser, párate a su lado y sostén su pecho con una mano, inclinándola bien hacia adelante. Con el talón de tu otra mano, aplica hasta 5 golpes secos y firmes entre los omóplatos.'
      },
      {
        step: 3,
        title: 'Dar 5 Compresiones Abdominales (Maniobra de Heimlich)',
        description: 'Si los golpes no expulsan el objeto, párate detrás de la persona. Rodea su cintura con tus brazos. Cierra un puño y coloca el lado del pulgar justo por encima del ombligo (lejos de las costillas). Sujeta tu puño con la otra mano y presiona con un movimiento rápido hacia adentro y hacia arriba.',
        warning: 'En personas embarazadas o con obesidad marcada, haz compresiones en el centro del pecho (esternón) en vez de en el abdomen.'
      },
      {
        step: 4,
        title: 'Alternar 5 Golpes y 5 Compresiones',
        description: 'Continúa intercalando 5 golpes en la espalda con 5 compresiones abdominales hasta que el objeto sea expulsado o la persona quede inconsciente.'
      },
      {
        step: 5,
        title: 'Si la Persona Pierde el Conocimiento: Iniciar RCP',
        description: 'Acuéstala con cuidado en el piso boca arriba. Llama a emergencias de inmediato. Comienza 30 compresiones de pecho. Antes de dar aire, mira dentro de la boca y retira el objeto solo si está suelto y claramente visible.',
        warning: 'Nunca hagas barridos a ciegas con el dedo dentro de la garganta, ya que podrías empujar el objeto más profundo.'
      }
    ],
    whatNotToDo: [
      'NO golpees la espalda si la persona está erguida sin inclinar hacia adelante, ya que la gravedad puede hundir más el objeto.',
      'NO ofrezcas agua de beber a quien se atraganta; no disuelve la comida y aumenta el riesgo de aspiración pulmonar.',
      'NO introduzcas los dedos a ciegas en la garganta.',
      'NO apliques la maniobra de Heimlich abdominal en bebés menores de 1 año (usa golpes interescapulares y compresiones torácicas con 2 dedos).'
    ],
    whenToSeekMedicalHelp: [
      'Cualquier persona que haya recibido compresiones de Heimlich o haya perdido el conocimiento debe ser evaluada por un médico para descartar lesiones internas en el abdomen o laringe.'
    ],
    sources: [
      { name: 'Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja (IFRC)', year: '2023' },
      { name: 'Consejo Europeo de Resucitación (ERC)', year: '2022' }
    ],
    relatedArticles: ['cardiac-arrest-cpr', 'aed-basics'],
    searchKeywords: ['atragantamiento', 'heimlich', 'asfixia', 'ahogo', 'comida atorada', 'garganta', 'bloqueo respiratorio']
  },

  // 4. STROKE RECOGNITION
  {
    id: 'stroke-recognition',
    slug: 'stroke-recognition',
    title: 'Reconocimiento del Accidente Cerebrovascular (ACV): Protocolo BE-FAST',
    shortDescription: 'Identifica los síntomas súbitos de un ACV y actúa a tiempo para preservar la función cerebral.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 3,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Guías de la Organización Mundial del Accidente Cerebrovascular',
    summary: 'Un ACV ocurre cuando se interrumpe el flujo sanguíneo hacia una parte del cerebro. "El tiempo es cerebro": por cada minuto sin tratamiento, mueren cerca de 2 millones de neuronas. La atención médica rápida permite aplicar tratamientos que disuelven los coágulos.',
    whatIsIt: 'Los ACV son isquémicos (un coágulo tapa una arteria cerebral) o hemorrágicos (un vaso sanguíneo se rompe y sangra en el tejido cerebral). Ambos causan déficits neurológicos repentinos.',
    howToRecognize: [
      'B (Balance / Equilibrio): Pérdida súbita del equilibrio, mareo extremo o dificultad para caminar.',
      'E (Eyes / Ojos): Pérdida repentina de la visión en uno o ambos ojos, o visión doble.',
      'F (Face / Rostro): Un lado de la cara se cae o adormece. Pídele a la persona que sonría: ¿la sonrisa está torcida?',
      'A (Arms / Brazos): Debilidad o falta de fuerza repentina en un brazo o pierna. Pídele que levante ambos brazos: ¿uno de ellos cae?',
      'S (Speech / Habla): Dificultad para hablar, palabras arrastradas o incapacidad para comprender oraciones sencillas.',
      'T (Time / Tiempo): Llama inmediatamente a emergencias si notas CUALQUIERA de estos signos.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Llamar a Emergencias de Inmediato',
        description: 'Dile al operador: "Sospecho que esta persona está sufriendo un ACV". Anota la hora exacta en la que comenzaron los síntomas o cuándo fue vista normal por última vez.'
      },
      {
        step: 2,
        title: 'Mantener a la Persona Cómoda y en Reposo',
        description: 'Recuéstala boca arriba con la cabeza y hombros ligeramente elevados (unos 30 grados) con almohadas para disminuir la presión intracraneal.'
      },
      {
        step: 3,
        title: 'Aflojar Ropa Ajustada',
        description: 'Desabotona cuellos, corbatas, cinturones o prendas ajustadas para facilitar la respiración.'
      },
      {
        step: 4,
        title: 'Monitorear la Respiración y Conciencia',
        description: 'Si la persona vomita o se desvanece, colócala suavemente de costado en posición lateral de seguridad para evitar que se asfixie con su vómito o saliva.'
      }
    ],
    whatNotToDo: [
      'NO des aspirina ni analgésicos; si el ACV es por sangrado (hemorrágico), la aspirina puede empeorar la hemorragia de forma letal.',
      'NO ofrezcas comida ni agua; el ACV suele paralizar los reflejos de deglución y provocar asfixia.',
      'NO permitas que la persona se duerma o espere a "ver si se le pasa".',
      'NO la lleves en tu vehículo si hay servicio de ambulancia disponible; el personal de emergencias inicia protocolos neurológicos en camino.'
    ],
    whenToSeekMedicalHelp: [
      'El ACV es una emergencia absoluta; llama a emergencias ante el primer síntoma observado.'
    ],
    sources: [
      { name: 'World Stroke Organization (WSO)', year: '2023' },
      { name: 'American Heart Association / American Stroke Association', year: '2023' }
    ],
    relatedArticles: ['cardiac-arrest-cpr', 'seizures-first-aid'],
    searchKeywords: ['acv', 'ictus', 'derrame cerebral', 'embolia', 'cara torcida', 'debilidad brazo', 'dificultad para hablar', 'be-fast', 'fast']
  },

  // 5. SEIZURES
  {
    id: 'seizures-first-aid',
    slug: 'seizures-first-aid',
    title: 'Primeros Auxilios ante Convulsiones y Crisis Epilépticas',
    shortDescription: 'Cómo proteger a una persona durante una convulsión y qué errores críticos evitar.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Liga Internacional contra la Epilepsia (ILAE)',
    summary: 'Las convulsiones son episodios repentinos de actividad eléctrica cerebral anormal. Durante una crisis tónico-clónica, el objetivo principal del rescatista es evitar que la persona se lesione con su entorno.',
    whatIsIt: 'Una crisis convulsiva puede causar pérdida de conciencia, rigidez muscular y sacudidas corporales violentas. La gran mayoría de las convulsiones ceden por sí solas en 1 a 3 minutos.',
    howToRecognize: [
      'Caída repentina al suelo con pérdida de conciencia.',
      'Rigidez muscular seguida de espasmos y sacudidas rítmicas de brazos y piernas.',
      'Respiración ruidosa, babeo o espuma en la boca.',
      'Ojos en blanco o mirada perdida.',
      'Confusión profunda, fatiga y somnolencia tras finalizar la crisis (estado postictal).'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Proteger a la Persona de Golpes',
        description: 'Aleja muebles, objetos duros, filosos o calientes alrededor de la persona. Coloca una prenda doblada o una almohada suave debajo de su cabeza para protegerla de impactos contra el suelo.'
      },
      {
        step: 2,
        title: 'Cronometrar la Duración de la Crisis',
        description: 'Mira tu reloj. Si la convulsión dura más de 5 minutos continuos, llama a emergencias sin demora.'
      },
      {
        step: 3,
        title: 'Aflojar Prendas Ajustadas en el Cuello',
        description: 'Afloja corbatas, bufandas, camisas o anteojos para no entorpecer la respiración.'
      },
      {
        step: 4,
        title: 'Colocar de Costado al Finalizar la Crisis',
        description: 'Apenas cesen las sacudidas, gira con suavidad a la persona hacia un lado (posición lateral de seguridad) para mantener despejada su vía respiratoria y permitir que drene la saliva o vómito.'
      },
      {
        step: 5,
        title: 'Acompañar con Calma Durante la Recuperación',
        description: 'Quédate a su lado hasta que recupere la conciencia por completo. Explícale con calma lo sucedido, ya que se sentirá confundida y agotada.'
      }
    ],
    whatNotToDo: [
      'NUNCA coloques objetos, dedos ni cucharas dentro de su boca; es un mito peligroso que puedan tragarse la lengua y solo causarás fracturas de dientes o mordeduras graves.',
      'NO intentes sujetar con fuerza a la persona para detener las sacudidas; podrías provocarle luxaciones o fracturas óseas.',
      'NO le des agua, comida ni medicamentos hasta que esté completamente despierta y orientada.'
    ],
    whenToSeekMedicalHelp: [
      'Llama a emergencias de inmediato si: la convulsión dura más de 5 minutos, se repite una segunda crisis sin recuperar la conciencia, es la primera convulsión en su vida, la persona está embarazada, tiene diabetes o se golpeó fuertemente la cabeza al caer.'
    ],
    sources: [
      { name: 'Epilepsy Foundation / International League Against Epilepsy', year: '2023' },
      { name: 'Centers for Disease Control and Prevention (CDC)', year: '2023' }
    ],
    relatedArticles: ['stroke-recognition', 'head-injuries-concussion'],
    searchKeywords: ['convulsion', 'epilepsia', 'ataque epileptico', 'espasmos', 'temblores', 'rigidez', 'perdida de conciencia']
  },

  // 6. BURNS
  {
    id: 'burns-first-aid',
    slug: 'burns-first-aid',
    title: 'Primeros Auxilios ante Quemaduras y Escaldaduras',
    shortDescription: 'Protocolo inmediato de enfriamiento para quemaduras térmicas y qué hacer con ampollas.',
    category: 'accidents',
    urgency: 'urgent',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Sociedad Internacional de Quemaduras (ISBI)',
    summary: 'Las quemaduras por líquidos calientes, fuego o vapor requieren enfriamiento inmediato bajo agua corriente durante 20 minutos completos para detener el daño en los tejidos profundos.',
    whatIsIt: 'El calor destruye las capas de la piel. Las quemaduras de primer grado afectan solo la epidermis (enrojecimiento); las de segundo grado causan ampollas dolorosas; las de tercer grado comprometen todo el espesor de la piel y son una emergencia hospitalaria.',
    howToRecognize: [
      'Primer grado: Piel roja, caliente y con dolor al tacto, sin ampollas.',
      'Segundo grado: Ampollas con líquido claro, dolor intenso, piel roja y húmeda.',
      'Tercer grado: Piel blanca nacarada, marrón o carbonizada; paradójicamente puede no doler por destrucción de las terminaciones nerviosas.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Enfriar con Agua Corriente Limpia durante 20 Minutos',
        description: 'Coloca la zona quemada bajo agua corriente fresca (no helada) inmediatamente durante 20 minutos completos. Esto frena el avance del daño por calor en capas profundas.'
      },
      {
        step: 2,
        title: 'Retirar Joyas y Ropa Suelta con Cuidado',
        description: 'Quita anillos, pulseras y prendas cerca de la zona antes de que comience a hincharse. Si la ropa está pegada a la quemadura, NO la arranques; corta la tela alrededor con tijeras.'
      },
      {
        step: 3,
        title: 'Cubrir con Plástico Film o Gasas Limpias',
        description: 'Cubre la quemadura holgadamente con papel film transparente o gasas estériles sin apretar. Esto previene infecciones y calma el dolor al aislar el aire.'
      },
      {
        step: 4,
        title: 'Mantener a la Persona Abrigada',
        description: 'Enfriar zonas grandes del cuerpo puede causar hipotermia. Cubre las partes del cuerpo no afectadas con mantas secas.'
      }
    ],
    whatNotToDo: [
      'NUNCA apliques hielo, agua congelada ni manteca, pasta dental o aceites; queman más el tejido y causan infecciones graves.',
      'NUNCA revientes las ampollas; la piel de la ampolla es la mejor barrera natural estéril contra bacterias.',
      'NO arranques ropa adherida a la quemadura.'
    ],
    whenToSeekMedicalHelp: [
      'Busca atención médica de urgencia si la quemadura afecta cara, manos, articulaciones o genitales, si tiene ampollas grandes (mayores a una moneda), es de tercer grado, o si fue causada por electricidad o químicos.'
    ],
    sources: [
      { name: 'British Burn Association / International Society for Burn Injuries', year: '2023' },
      { name: 'World Health Organization (WHO) Burns Management Guidelines', year: '2022' }
    ],
    relatedArticles: ['severe-bleeding-wounds', 'first-aid-kit-checklist'],
    searchKeywords: ['quemadura', 'agua hirviendo', 'escaldadura', 'fuego', 'ampollas', 'piel quemada', 'enfriamiento quemaduras']
  },

  // 7. SEVERE BLEEDING
  {
    id: 'severe-bleeding-wounds',
    slug: 'severe-bleeding-wounds',
    title: 'Control de Hemorragias Graves y Heridas Abiertas',
    shortDescription: 'Cómo detener un sangrado que pone en riesgo la vida mediante presión firme directa.',
    category: 'accidents',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Campaña Global Stop the Bleed y Guías de Trauma IFRC',
    summary: 'Una hemorragia profusa descontrolada puede provocar shock hipovolémico y muerte en menos de 5 minutos. La presión directa firme y constante salva vidas.',
    whatIsIt: 'Las hemorragias arteriales brotan con fuerza a borbotones con cada latido; las venosas fluyen de forma constante. Detener el flujo de inmediato evita el colapso del sistema circulatorio.',
    howToRecognize: [
      'Sangre que brota a chorros o mana de forma continua sin detenerse.',
      'Ropa o vendas completamente empapadas en sangre en pocos segundos.',
      'Palidez extrema, sudor frío, respiración rápida, mareo o desvanecimiento (signos de shock).'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Llamar a Emergencias de Inmediato',
        description: 'Si la sangre brota con fuerza o empapa la ropa, solicita una ambulancia sin perder tiempo.'
      },
      {
        step: 2,
        title: 'Aplicar Presión Firme y Directa',
        description: 'Toma una gasa estéril, apósito o paño limpio y colócalo directamente sobre la herida. Apoya ambas manos y empuja con todo el peso de tu cuerpo con fuerza continua.'
      },
      {
        step: 3,
        title: 'NO Retirar el Primer Apósito',
        description: 'Si la sangre atraviesa la gasa, NO la retires (destruirías los coágulos que se están formando). Coloca más gasas o apósitos encima y continúa presionando con más fuerza.'
      },
      {
        step: 4,
        title: 'Fijar con un Vendaje Compresivo Firme',
        description: 'Envuelve la herida firmemente con una venda elástica o de gasa manteniendo la presión sobre el sitio del sangrado. Asegúrate de que los dedos conserven calor y color (no cortar del todo la circulación).'
      }
    ],
    whatNotToDo: [
      'NO retires apósitos empapados; agrega capas por encima.',
      'NO laves una herida que sangra profusamente; la prioridad absoluta es contener la hemorragia, no desinfectar.',
      'NO retires objetos clavados profundamente (cuchillos, vidrios); inmovilízalos y coloca apósitos alrededor.'
    ],
    whenToSeekMedicalHelp: [
      'Cualquier herida con sangrado pulsátil, que no cede tras 10 minutos de presión continua o con bordes abiertos requiere sutura médica inmediata.'
    ],
    sources: [
      { name: 'American College of Surgeons / Stop the Bleed', year: '2023' },
      { name: 'International Federation of Red Cross (IFRC)', year: '2023' }
    ],
    relatedArticles: ['burns-first-aid', 'first-aid-kit-checklist'],
    searchKeywords: ['sangrado', 'hemorragia', 'corte profundo', 'presion directa', 'torniquete', 'herida abierta', 'perder sangre']
  },

  // 8. FIRST AID KIT
  {
    id: 'first-aid-kit-checklist',
    slug: 'first-aid-kit-checklist',
    title: 'Cómo Armar y Mantener un Botiquín de Primeros Auxilios',
    shortDescription: 'Insumos esenciales para el hogar y el auto, y qué medicamentos guardar con seguridad.',
    category: 'home-health',
    urgency: 'precautionary',
    readingTimeMinutes: 5,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Comisión Médica de Salud en el Hogar',
    summary: 'Tener un botiquín bien equipado y ordenado en casa permite actuar rápidamente ante cualquier accidente menor o estabilizar una emergencia mientras llega el auxilio.',
    whatIsIt: 'Un botiquín es un conjunto de apósitos, herramientas y antisépticos organizados en una caja hermética, limpia e identificable, fuera del alcance de niños pero accesible para adultos.',
    howToRecognize: [
      'Debe estar guardado en un lugar fresco y seco (evitar el baño por la humedad).',
      'Debe revisarse cada 6 meses para reemplazar insumos vencidos.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Curaciones y Apósitos',
        description: 'Incluye gasas estériles, vendas elásticas de 5 y 10 cm, apósitos adhesivos (curitas) de varios tamaños y cinta médica microporosa.'
      },
      {
        step: 2,
        title: 'Herramientas Básicas',
        description: 'Guarda tijeras de trauma de punta roma, pinzas para espinas, guantes descartables de nitrilo y un termómetro digital confiable.'
      },
      {
        step: 3,
        title: 'Limpieza y Desinfección',
        description: 'Solución fisiológica en monodosis para lavar ojos y heridas, jabón neutro y antiséptico como clorhexidina o povidona yodada.'
      },
      {
        step: 4,
        title: 'Hoja de Contactos de Emergencia',
        description: 'Incluye una tarjeta plastificada con números de emergencias médicas, bomberos, toxicología y contactos familiares directos.'
      }
    ],
    whatNotToDo: [
      'NO guardes medicamentos recetados vencidos o sin prospecto/caja original.',
      'NO dejes el botiquín al alcance de niños pequeños.',
      'NO guardes antibióticos sobrantes para "automedicarse".'
    ],
    whenToSeekMedicalHelp: [
      'Si necesitas usar insumos por una herida profunda, sospecha de fractura o quemadura grave, acude a un centro de salud de inmediato.'
    ],
    sources: [
      { name: 'American Red Cross First Aid Supplies Guidelines', year: '2023' },
      { name: 'NHS Home First Aid Kit Recommendations', year: '2023' }
    ],
    relatedArticles: ['severe-bleeding-wounds', 'burns-first-aid'],
    searchKeywords: ['botiquin', 'primeros auxilios', 'gasas', 'vendas', 'alcohol', 'insumos medicos', 'armar botiquin']
  },

  // 9. POISONING
  {
    id: 'household-poisoning-prevention',
    slug: 'household-poisoning-prevention',
    title: 'Intoxicaciones Domésticas e Ingesta de Químicos',
    shortDescription: 'Acciones clave ante ingesta accidental de productos de limpieza, venenos o sobredosis.',
    category: 'home-health',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Centro Internacional de Toxicología',
    summary: 'La ingestión de lavandina, desengrasantes, medicamentos o pesticidas exige comunicarse de inmediato con un centro toxicológico. Inducir el vómito puede causar quemaduras mortales en el esófago.',
    whatIsIt: 'Las sustancias tóxicas dañan las mucosas, los pulmones y órganos vitales si entran en contacto con la boca, piel o vías respiratorias.',
    howToRecognize: [
      'Quemaduras, ampollas o enrojecimiento alrededor de los labios o boca.',
      'Olor a químicos en el aliento o en la ropa.',
      'Dificultad para respirar, babeo excesivo o vómitos.',
      'Somnolencia profunda, confusión o pérdida de conciencia súbita.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Verificar Seguridad y Alejar el Producto',
        description: 'Retira el envase de las manos o boca de la persona. Conserva el frasco y la etiqueta intactos para mostrárselos a los médicos.'
      },
      {
        step: 2,
        title: 'Llamar de Inmediato al Centro de Toxicología o Emergencias',
        description: 'Comunícate de inmediato con el número de toxicología de tu país o a la central de emergencias. Describe el producto exacto, cuánto consumió y la hora aproximada.'
      },
      {
        step: 3,
        title: 'Limpiar la Boca y la Piel',
        description: 'Lava la boca suavemente con un paño húmedo. Si el químico salpicó los ojos o piel, enjuaga con abundante agua corriente durante 15 minutos.'
      }
    ],
    whatNotToDo: [
      'NUNCA provoques el vómito; si el producto es cáustico (lavandina, ácidos, soda cáustica), volverá a quemar el esófago y la garganta al salir.',
      'NO des leche, vinagre ni aceite para "cortar el veneno"; es un mito peligroso que empeora la absorción del químico.'
    ],
    whenToSeekMedicalHelp: [
      'Cualquier ingesta de productos de limpieza, pesticidas o medicamentos fuera de indicación exige consulta médica urgente.'
    ],
    sources: [
      { name: 'World Health Organization (WHO) Guidelines for Poisoning', year: '2023' },
      { name: 'American Association of Poison Control Centers', year: '2023' }
    ],
    relatedArticles: ['first-aid-kit-checklist', 'dehydration-warning-signs'],
    searchKeywords: ['veneno', 'intoxicacion', 'lavandina', 'quimicos de limpieza', 'sobredosis', 'trago lavandina', 'toxicologia']
  },

  // 10. DEHYDRATION
  {
    id: 'dehydration-warning-signs',
    slug: 'dehydration-warning-signs',
    title: 'Señales de Alerta de Deshidratación Grave en Niños y Adultos',
    shortDescription: 'Cómo reconocer la falta peligrosa de líquidos por diarrea, vómitos o calor extremo.',
    category: 'warning-signs',
    urgency: 'urgent',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Comisión Internacional de Salud Infantil y Adulta',
    summary: 'La deshidratación grave compromete la función renal y la circulación sanguínea. En bebés y adultos mayores, puede volverse crítica en cuestión de pocas horas.',
    whatIsIt: 'Ocurre cuando el cuerpo pierde más agua y sales minerales de las que ingiere, alterando el equilibrio electrolítico necesario para el funcionamiento celular.',
    howToRecognize: [
      'Boca seca, labios agrietados y ausencia total de lágrimas al llorar.',
      'Orina escasa, oscura o ausencia de pañales mojados por más de 6 a 8 horas.',
      'Ojos hundidos y fontanela (mollera) deprimida en lactantes.',
      'Letargo, debilidad extrema, confusión o irritabilidad inusual.',
      'Piel que no recupera su forma normal al pellizcarla suavemente (signo del pliegue cutáneo).'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Ofrecer Sales de Rehidratación Oral (SRO)',
        description: 'Prepara sobres de sales de rehidratación oral según las indicaciones del envase con agua potable o hervida. Ofrece sorbos pequeños y frecuentes cada 5 minutos.'
      },
      {
        step: 2,
        title: 'Mantener la Lactancia Materna',
        description: 'Si es un bebé lactante, continúa ofreciendo el pecho con mayor frecuencia que la habitual.'
      },
      {
        step: 3,
        title: 'Descansar en un Lugar Fresco',
        description: 'Coloca a la persona en un ambiente ventilado y con sombra para evitar pérdidas adicionales de agua por transpiración.'
      }
    ],
    whatNotToDo: [
      'NO des gaseosas, jugos industriales ni bebidas energéticas; su alto contenido de azúcar empeora la diarrea y la pérdida de agua.',
      'NO des grandes vasos de agua fría de golpe; estimula el vómito. Siempre en sorbos pequeños y pausados.'
    ],
    whenToSeekMedicalHelp: [
      'Acude a urgencias de inmediato si la persona no tolera ningún líquido, vomita todo lo que toma, tiene fiebre alta o luce somnolienta y difícil de despertar.'
    ],
    sources: [
      { name: 'Organización Mundial de la Salud (OMS) / UNICEF Manejo de Deshidratación', year: '2023' },
      { name: 'American Academy of Pediatrics (AAP)', year: '2023' }
    ],
    relatedArticles: ['heat-illness-prevention', 'thermometer-fever-management'],
    searchKeywords: ['deshidratacion', 'falta de agua', 'diarrea', 'vomitos', 'bebe deshidratado', 'sales de rehidratacion', 'orina oscura']
  },

  // 11. HEAT ILLNESS
  {
    id: 'heat-illness-prevention',
    slug: 'heat-illness-prevention',
    title: 'Golpe de Calor y Agotamiento: Prevención y Respuesta Rápida',
    shortDescription: 'Diferencias clave entre agotamiento y golpe de calor potencialmente letal.',
    category: 'prevention',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Comisión Médica de Salud Ambiental y Clima',
    summary: 'El golpe de calor es una urgencia vital donde la temperatura corporal supera los 40 °C y los mecanismos de enfriamiento del cuerpo colapsan. Requiere enfriamiento agresivo inmediato.',
    whatIsIt: 'El cuerpo humano necesita mantener su temperatura cerca de los 37 °C. En ambientes muy calurosos y húmedos, la sudoración no logra disipar el calor, provocando inflamación generalizada y fallo multiorgánico.',
    howToRecognize: [
      'Agotamiento por calor: Sudoración copiosa, debilidad, piel pálida y fría, pulso rápido pero débil, náuseas.',
      'Golpe de calor (grave): Temperatura mayor a 40 °C, piel roja, caliente y seca (o sudorosa por esfuerzo), pulso fuerte y rápido, confusión, delirio, convulsiones o desmayo.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Llamar a Emergencias ante Sospecha de Golpe de Calor',
        description: 'Si hay alteración del estado mental, fiebre extrema o pérdida de conciencia, solicita auxilio médico urgente.'
      },
      {
        step: 2,
        title: 'Trasladar a la Sombra y Enfriar de Inmediato',
        description: 'Lleva a la persona a un sitio fresco con aire acondicionado o sombra. Desvístela tanto como sea posible.'
      },
      {
        step: 3,
        title: 'Aplicar Métodos de Enfriamiento Rápido',
        description: 'Moja su cuerpo con agua fresca, rocíala con un atomizador y abanícala vigorosamente. Coloca paños húmedos o hielo envuelto en toallas en cuello, axilas e ingles.'
      }
    ],
    whatNotToDo: [
      'NO des antipiréticos (paracetamol o ibuprofeno); no bajan la temperatura en un golpe de calor y pueden dañar el hígado.',
      'NO des bebidas si la persona está confundida o inconsciente.'
    ],
    whenToSeekMedicalHelp: [
      'El golpe de calor con confusión o pérdida de conciencia requiere traslado en ambulancia e internación en cuidados intensivos.'
    ],
    sources: [
      { name: 'Centers for Disease Control and Prevention (CDC) Extreme Heat', year: '2023' },
      { name: 'World Health Organization (WHO)', year: '2022' }
    ],
    relatedArticles: ['dehydration-warning-signs', 'fainting-syncope'],
    searchKeywords: ['golpe de calor', 'insolacion', 'temperatura alta', 'calor extremo', 'desmayo por calor', 'agotamiento por calor']
  },

  // 12. ANAPHYLAXIS
  {
    id: 'anaphylaxis-allergic-reaction',
    slug: 'anaphylaxis-allergic-reaction',
    title: 'Anafilaxia y Reacciones Alérgicas Graves',
    shortDescription: 'Cómo reconocer una reacción alérgica fulminante y usar un autoinyector de adrenalina.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Organización Mundial de Alergia (WAO)',
    summary: 'La anafilaxia es una reacción alérgica grave que se desarrolla en minutos y puede cerrar la garganta o colapsar la presión arterial. La adrenalina (epinefrina) es el único tratamiento que salva la vida.',
    whatIsIt: 'Ocurre tras la exposición a un alérgeno (comidas como maní o mariscos, picaduras de abejas o medicamentos) que desata una liberación masiva de histamina en todo el cuerpo.',
    howToRecognize: [
      'Hinchazón evidente de labios, lengua, garganta o párpados (angioedema).',
      'Dificultad marcada para respirar, silbidos en el pecho (sibilancias) o sensación de opresión en la garganta.',
      'Ronchas rojas con picazón intensa en todo el cuerpo.',
      'Mareo repentino, palidez extrema, desvanecimiento o pérdida del conocimiento.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Aplicar Autoinyector de Adrenalina (EpiPen u otro)',
        description: 'Si la persona cuenta con un autoinyector de epinefrina, aplícalo de inmediato en la parte lateral externa del muslo. Presiona con firmeza hasta escuchar el clic y sostén durante 3 a 5 segundos.'
      },
      {
        step: 2,
        title: 'Llamar a Emergencias de Inmediato',
        description: 'Informa al operador: "Tengo una persona con anafilaxia grave que recibió adrenalina".'
      },
      {
        step: 3,
        title: 'Recostar a la Persona con las Piernas Elevadas',
        description: 'Mantenla acostada en el suelo con los pies elevados unos 30 cm para favorecer el retorno de sangre al corazón. Si tiene mucha dificultad para respirar, déjala sentada.'
      }
    ],
    whatNotToDo: [
      'NO pierdas tiempo dando antihistamínicos (antialérgicos) orales si hay dificultad para respirar o hinchazón de garganta; tardan 45 minutos en actuar y no revierten la asfixia.',
      'NO permitas que la persona se ponga de pie o camine repentinamente, ya que puede provocar un colapso cardiovascular.'
    ],
    whenToSeekMedicalHelp: [
      'Toda anafilaxia requiere traslado en ambulancia a una sala de emergencias, aun cuando la persona parezca haberse recuperado con la adrenalina (riesgo de reacción bifásica).'
    ],
    sources: [
      { name: 'World Allergy Organization (WAO) Anaphylaxis Guidelines', year: '2023' },
      { name: 'European Academy of Allergy and Clinical Immunology (EAACI)', year: '2023' }
    ],
    relatedArticles: ['cardiac-arrest-cpr', 'choking-adult-child'],
    searchKeywords: ['anafilaxia', 'alergia grave', 'adrenalina', 'epipen', 'picadura de abeja', 'hinchazon de garganta', 'shock anafilactico']
  },

  // 13. CHEST PAIN & HEART ATTACK
  {
    id: 'chest-pain-heart-attack',
    slug: 'chest-pain-heart-attack',
    title: 'Dolor en el Pecho y Sospecha de Infarto de Miocardio',
    shortDescription: 'Cómo reconocer un ataque cardíaco y actuar antes de que derive en un paro.',
    category: 'emergencies',
    urgency: 'critical',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Sociedad Interamericana y Europea de Cardiología',
    summary: 'Un infarto ocurre cuando una arteria que irriga el corazón se bloquea. Reconocer los signos y llamar rápido al servicio de emergencias reduce enormemente el riesgo de muerte y daño cardíaco permanente.',
    whatIsIt: 'La falta de flujo de sangre provoca la muerte del tejido muscular cardíaco. Cuanto más rápido se destape la arteria en el hospital mediante cateterismo, más músculo cardíaco se salva.',
    howToRecognize: [
      'Presión, ardor, pesadez o dolor opresivo en el centro del pecho que dura más de unos minutos.',
      'Dolor que se irradia hacia el hombro izquierdo, brazo, cuello, mandíbula o espalda.',
      'Dificultad para respirar, sudoración fría profusa y mareos.',
      'En mujeres y adultos mayores: náuseas, dolor en la boca del estómago, fatiga inexplicable y falta de aire sin dolor torácico clásico.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Llamar a Emergencias de Inmediato',
        description: 'Comunícate de inmediato con la central de emergencias. Describe con claridad el dolor en el pecho.'
      },
      {
        step: 2,
        title: 'Mantener en Reposo Absoluto',
        description: 'Sienta a la persona en una posición cómoda semi-incorporada (espalda apoyada y rodillas dobladas) para reducir el esfuerzo del corazón.'
      },
      {
        step: 3,
        title: 'Aspirina si no hay Alergia ni Contraindicaciones',
        description: 'Si la persona no es alérgica a la aspirina y no tiene sangrados activos, dale a masticar 1 tableta para adultos (300 mg) o 2 infantiles masticables de 100 mg con aprobación del operador médico.'
      },
      {
        step: 4,
        title: 'Tener un DEA a Mano y Monitorear',
        description: 'Ten preparado un desfibrilador si hay uno disponible en el lugar, y prepárate para iniciar RCP si la persona pierde el conocimiento y deja de respirar.'
      }
    ],
    whatNotToDo: [
      'NO permitas que la persona conduzca hasta el hospital por sus propios medios.',
      'NO esperes a ver si el dolor "se pasa con un antiácido".',
      'NO dejes sola a la persona.'
    ],
    whenToSeekMedicalHelp: [
      'Cualquier dolor de pecho opresivo inexplicable requiere llamada urgente al servicio de ambulancias.'
    ],
    sources: [
      { name: 'American Heart Association (AHA) Acute Coronary Syndromes Guidelines', year: '2023' },
      { name: 'European Society of Cardiology (ESC)', year: '2023' }
    ],
    relatedArticles: ['cardiac-arrest-cpr', 'aed-basics', 'stroke-recognition'],
    searchKeywords: ['infarto', 'ataque cardiaco', 'dolor de pecho', 'opresion en el pecho', 'corazon', 'brazo izquierdo', 'falta de aire']
  },

  // 14. FAINTING & SYNCOPE
  {
    id: 'fainting-syncope',
    slug: 'fainting-syncope',
    title: 'Desmayos, Pérdida Transitoria de Conciencia y Síncope',
    shortDescription: 'Qué hacer cuando alguien pierde el conocimiento brevemente y cuándo preocuparse.',
    category: 'warning-signs',
    urgency: 'moderate',
    readingTimeMinutes: 3,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Comité de Emergencias Médicas Ambulatorias',
    summary: 'Un desmayo común ocurre por una disminución temporal y breve del flujo sanguíneo al cerebro. La persona se recupera rápidamente una vez que está acostada en el suelo.',
    whatIsIt: 'Suele desencadenarse por calor, deshidratación, estar mucho tiempo de pie, dolor agudo o emociones intensas (síncope vasovagal).',
    howToRecognize: [
      'Mareo previo, visión borrosa o "visión de túnel", palidez repentina y sudor frío.',
      'Caída al suelo con pérdida breve de conciencia (generalmente menor a 1 minuto).',
      'Recuperación rápida de la lucidez mental apenas se recuesta horizontalmente.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Verificar Respiración Normal',
        description: 'Asegúrate de que la persona respire de manera regular y tranquila.'
      },
      {
        step: 2,
        title: 'Elevar las Piernas unos 30 cm',
        description: 'Mantén a la persona acostada boca arriba y eleva sus piernas por encima del nivel del corazón para estimular el retorno de sangre al cerebro.'
      },
      {
        step: 3,
        title: 'Aflojar Ropa y Ventilar el Ambiente',
        description: 'Afloja cinturones y cuellos. Abre ventanas para asegurar aire fresco y dispersa a la multitud.'
      },
      {
        step: 4,
        title: 'Incorporar Despacio',
        description: 'Déjala descansar acostada al menos 10 minutos. Luego ayúdala a sentarse despacio antes de intentar ponerse de pie.'
      }
    ],
    whatNotToDo: [
      'NO intentes sentar o levantar a la persona inmediatamente tras desmayarse.',
      'NO le tires agua en la cara ni la abofetees.',
      'NO le des bebidas calientes o azucaradas hasta que esté totalmente lúcida.'
    ],
    whenToSeekMedicalHelp: [
      'Consulta al médico si el desmayo ocurrió durante ejercicio físico intenso, vino acompañado de dolor de pecho, palpitaciones, o si la persona tiene antecedentes cardíacos o sufrió un golpe severo en la cabeza al caer.'
    ],
    sources: [
      { name: 'European Society of Cardiology (ESC) Syncope Guidelines', year: '2023' },
      { name: 'American College of Emergency Physicians', year: '2022' }
    ],
    relatedArticles: ['cardiac-arrest-cpr', 'dehydration-warning-signs'],
    searchKeywords: ['desmayo', 'lipotimia', 'sincope', 'mareo', 'se desvanecio', 'perdida de conocimiento breve', 'baja presion']
  },

  // 15. FRACTURES AND SPRAINS
  {
    id: 'fractures-and-sprains',
    slug: 'fractures-and-sprains',
    title: 'Fracturas Óseas, Esguinces y Traumatismos Articulares',
    shortDescription: 'Inmovilización básica, aplicación de frío y protocolo RICE ante lesiones musculares y óseas.',
    category: 'accidents',
    urgency: 'urgent',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Comité de Traumatología y Medicina Deportiva',
    summary: 'Ante una sospecha de fractura o esguince, inmovilizar el miembro afectado y aplicar frío reduce el dolor, la inflamación y evita que bordes de hueso dañen nervios y vasos sanguíneos.',
    whatIsIt: 'Un esguince es el estiramiento o rotura de ligamentos articulares (muy común en tobillos). Una fractura es la pérdida de continuidad del hueso (cerrada si la piel está intacta, abierta si el hueso atravesó la piel).',
    howToRecognize: [
      'Dolor agudo e intenso que impide apoyar el peso o mover la articulación.',
      'Hinchazón rápida y aparición de moretones (hematomas).',
      'Deformidad visible en la extremidad o sensación de chasquido.',
      'En fracturas abiertas: herida con hueso visible o sangrado local importante.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Inmovilizar el Miembro en la Posición Encontrada',
        description: 'No intentes enderezar ni reacomodar el hueso. Sujeta el miembro con almohadas, toallas dobladas o férulas caseras acolchadas por arriba y por abajo de la articulación lesionada.'
      },
      {
        step: 2,
        title: 'Aplicar Frío Local',
        description: 'Coloca hielo envuelto en una toalla o paño limpio sobre la zona durante 15 a 20 minutos para aliviar el dolor y reducir la inflamación.'
      },
      {
        step: 3,
        title: 'Cubrir Heridas si es una Fractura Abierta',
        description: 'Si hay herida abierta con hueso visible, cúbrela holgadamente con gasas estériles sin presionar el hueso y llama a emergencias.'
      }
    ],
    whatNotToDo: [
      'NUNCA intentes encajar o enderezar un hueso torcido o una articulación luxada.',
      'NO apliques hielo directo sobre la piel desnuda.',
      'NO permitas que la persona apoye el pie o camine.'
    ],
    whenToSeekMedicalHelp: [
      'Toda sospecha de fractura, luxación visible o dolor articular que impide el apoyo debe ser evaluada en una guardia médica con radiografías.'
    ],
    sources: [
      { name: 'American Academy of Orthopaedic Surgeons (AAOS)', year: '2023' },
      { name: 'Red Cross First Aid Guidelines for Musculoskeletal Trauma', year: '2023' }
    ],
    relatedArticles: ['severe-bleeding-wounds', 'head-injuries-concussion'],
    searchKeywords: ['fractura', 'hueso roto', 'esguince', 'tobillo torcido', 'traumatismo', 'inmovilizar', 'yeso', 'hielo']
  },

  // 16. HEAD INJURIES
  {
    id: 'head-injuries-concussion',
    slug: 'head-injuries-concussion',
    title: 'Traumatismos de Cráneo y Conmoción Cerebral',
    shortDescription: 'Señales de alarma tras un golpe en la cabeza en niños y adultos.',
    category: 'accidents',
    urgency: 'urgent',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Comisión de Neurotrauma y Medicina de Urgencias',
    summary: 'Los golpes en la cabeza pueden causar desde una simple herida en el cuero cabelludo hasta hematomas cerebrales internos graves. Saber vigilar los signos neurológicos en las primeras 24 a 48 horas salva vidas.',
    whatIsIt: 'Una conmoción cerebral es una alteración funcional temporal del cerebro causada por un impacto directo o por un movimiento brusco de desaceleración (efecto latigazo).',
    howToRecognize: [
      'Pérdida de conocimiento, aunque haya durado solo unos segundos.',
      'Vómitos repetidos (más de 2 episodios).',
      'Dolor de cabeza progresivo y de intensidad creciente.',
      'Confusión, dificultad para recordar lo sucedido o para reconocer personas.',
      'Pupilas de tamaño desigual, visión borrosa o marcha tambaleante.',
      'Salida de líquido claro o sangre por la nariz o los oídos.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Mantener la Cabeza y Cuello Inmóviles',
        description: 'Si el golpe fue de alta energía (caída de altura, accidente de auto o moto), sospecha lesión en la columna cervical. Evita mover a la persona salvo peligro inminente.'
      },
      {
        step: 2,
        title: 'Aplicar Frío sobre Chichones o Contusiones',
        description: 'Coloca una compresa fría envuelta en un paño durante 15 minutos para disminuir la hinchazón externa.'
      },
      {
        step: 3,
        title: 'Vigilar de Cerca las Primeras 24 Horas',
        description: 'Observa si surgen signos de alarma como somnolencia de la que cuesta despertar, mareo o vómitos reiterados.'
      }
    ],
    whatNotToDo: [
      'NO administres aspirina ni ibuprofeno en las primeras horas; pueden aumentar el sangrado interno en el cerebro si hay un vaso dañado (usa solo paracetamol si el médico lo autoriza).',
      'NO permitas que un deportista con sospecha de conmoción vuelva al juego el mismo día.'
    ],
    whenToSeekMedicalHelp: [
      'Llama a emergencias o acude de inmediato a una guardia si hubo pérdida de conciencia, vómitos repetidos, convulsiones o salida de líquido por nariz u oídos.'
    ],
    sources: [
      { name: 'Centers for Disease Control and Prevention (CDC) Heads Up', year: '2023' },
      { name: 'Consensus Statement on Concussion in Sport', year: '2023' }
    ],
    relatedArticles: ['seizures-first-aid', 'fractures-and-sprains'],
    searchKeywords: ['golpe en la cabeza', 'traumatismo de craneo', 'conmocion cerebral', 'chichon', 'perdida de memoria', 'accidente cabeza']
  },

  // 17. GO-BAG
  {
    id: 'emergency-preparedness-go-bag',
    slug: 'emergency-preparedness-go-bag',
    title: 'Mochila de Emergencia Familiar para 72 Horas',
    shortDescription: 'Qué empacar para evacuar rápidamente ante sismos, inundaciones o cortes prolongados de servicios.',
    category: 'preparedness',
    urgency: 'precautionary',
    readingTimeMinutes: 5,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Agencias Internacionales de Gestión de Desastres',
    summary: 'Tener una mochila de evacuación lista cerca de la puerta permite salir del hogar en menos de dos minutos ante desastres naturales con los suministros básicos de supervivencia.',
    whatIsIt: 'Un bolso resistente con provisiones suficientes para que cada integrante de la familia sobreviva de forma autosuficiente durante al menos 72 horas mientras se restablecen los servicios básicos.',
    howToRecognize: [
      'Debe estar en un lugar de fácil acceso conocido por toda la familia.',
      'Debe ser impermeable y fácil de transportar en la espalda.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Agua Potable y Alimentos No Perecederos',
        description: 'Calcula 2 a 3 litros de agua por persona por día en botellas selladas. Empaca barras de cereal, frutos secos, conservas enlatadas con abrelatas manual y alimentos infantiles.'
      },
      {
        step: 2,
        title: 'Linterna y Radio a Pilas o Dinamo',
        description: 'Incluye una linterna LED con baterías de repuesto y una radio portátil para sintonizar comunicados de defensa civil cuando se caigan las redes móviles.'
      },
      {
        step: 3,
        title: 'Documentos Clave en Bolsa Hermética',
        description: 'Copias de documentos de identidad, escrituras, pólizas de seguro, recetas médicas habituales y dinero en efectivo en billetes chicos.'
      },
      {
        step: 4,
        title: 'Botiquín y Medicamentos Crónicos',
        description: 'Guarda gasas, desinfectante, apósitos y medicación regular para al menos 7 días (como insulina o pastillas de presión arterial).'
      }
    ],
    whatNotToDo: [
      'NO empaques alimentos que requieran cocinarse o refrigerarse.',
      'NO sobrecargues la mochila de modo que resulte imposible cargarla al caminar rápido.'
    ],
    whenToSeekMedicalHelp: [
      'Sigue siempre las órdenes de evacuación dictadas por las autoridades de defensa civil de tu localidad.'
    ],
    sources: [
      { name: 'FEMA / Ready.gov Emergency Kit Standards', year: '2023' },
      { name: 'Red Cross Disaster Preparedness Guidelines', year: '2023' }
    ],
    relatedArticles: ['first-aid-kit-checklist', 'household-poisoning-prevention'],
    searchKeywords: ['mochila de emergencia', '72 horas', 'evacuacion', 'terremoto', 'inundacion', 'desastre natural', 'preparacion emergencias']
  },

  // 18. FEVER AND THERMOMETER
  {
    id: 'thermometer-fever-management',
    slug: 'thermometer-fever-management',
    title: 'Medición de Temperatura y Manejo Seguro de la Fiebre',
    shortDescription: 'Cómo medir la fiebre correctamente y cuándo acudir al médico.',
    category: 'home-health',
    urgency: 'moderate',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Asociación Internacional de Pediatría y Medicina Familiar',
    summary: 'La fiebre es una respuesta natural del sistema inmunológico para combatir infecciones. Tratar la incomodidad del paciente es más importante que bajar el número del termómetro a toda costa.',
    whatIsIt: 'Se define como fiebre una temperatura corporal igual o superior a 38.0 °C. La medición axilar, timpánica o rectal varía en precisión según la edad.',
    howToRecognize: [
      'Piel caliente al tacto, escalofríos, sudoración y decaimiento general.',
      'Temperatura axilar comprobada con termómetro digital igual o superior a 38 °C.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Usar un Termómetro Digital de Forma Correcta',
        description: 'Coloca la punta del termómetro en el centro de la axila seca, baja el brazo y mantenlo presionado contra el cuerpo hasta que suene el pitido.'
      },
      {
        step: 2,
        title: 'Asegurar Hidratación Continua',
        description: 'Ofrece agua, caldos o leche con frecuencia para compensar la pérdida de líquidos provocada por la fiebre.'
      },
      {
        step: 3,
        title: 'Vestir con Ropa Liviana y Cómoda',
        description: 'No sobreabrigues a la persona con mantas pesadas, ya que esto atrapa el calor corporal e incrementa la temperatura.'
      }
    ],
    whatNotToDo: [
      'NUNCA uses baños de alcohol ni paños con alcohol; el alcohol se absorbe a través de la piel y puede provocar intoxicaciones graves en niños.',
      'NUNCA des aspirina a niños o adolescentes con fiebre; existe riesgo de Síndrome de Reye (enfermedad hepática y cerebral grave).',
      'NO sumerjas al niño en agua helada; los escalofríos aumentan la temperatura corporal interna.'
    ],
    whenToSeekMedicalHelp: [
      'Consulta de urgencia si la fiebre ocurre en un bebé menor de 3 meses (siempre es una emergencia), supera los 40 °C, dura más de 3 días, o se acompaña de manchas en la piel, dificultad para respirar o rigidez en el cuello.'
    ],
    sources: [
      { name: 'American Academy of Pediatrics (AAP) Fever Guidelines', year: '2023' },
      { name: 'National Institute for Health and Care Excellence (NICE)', year: '2023' }
    ],
    relatedArticles: ['dehydration-warning-signs', 'first-aid-kit-checklist'],
    searchKeywords: ['fiebre', 'termometro', 'temperatura alta', 'fiebre en bebes', 'antipireticos', 'paracetamol', 'escalofrios']
  },

  // 19. FOOD SAFETY
  {
    id: 'food-safety-infection-prevention',
    slug: 'food-safety-infection-prevention',
    title: 'Seguridad Alimentaria y Prevención de Infecciones Gastrointestinales',
    shortDescription: 'Las 4 reglas de oro de la OMS: limpiar, separar, cocinar y enfriar.',
    category: 'prevention',
    urgency: 'precautionary',
    readingTimeMinutes: 4,
    lastReviewed: 'Noviembre 2024',
    reviewedBy: 'Comisión de Higiene y Enfermedades Transmisibles de la OMS',
    summary: 'La mayoría de las gastroenteritis e intoxicaciones bacterianas por Salmonella o E. coli pueden evitarse en el hogar adoptando pautas simples de higiene y cocción.',
    whatIsIt: 'Las enfermedades transmitidas por alimentos son causadas por bacterias, virus o parásitos que contaminan comidas crudas o mal refrigeradas.',
    howToRecognize: [
      'Síntomas habituales: vómitos, náuseas, dolor abdominal tipo cólico, diarrea y a veces fiebre entre 6 y 48 horas tras ingerir comida contaminada.'
    ],
    whatToDo: [
      {
        step: 1,
        title: 'Limpiar Manos y Superficies',
        description: 'Lava tus manos con agua y jabón durante 20 segundos antes de cocinar, y desinfecta tablas y cuchillos tras manipular carnes crudas.'
      },
      {
        step: 2,
        title: 'Separar Alimentos Crudos de Cocidos',
        description: 'Usa tablas de cortar distintas para carnes crudas y vegetales listos para comer para evitar la contaminación cruzada.'
      },
      {
        step: 3,
        title: 'Cocinar Completamente las Carnes',
        description: 'Cocina carnes picadas, aves y huevos hasta que no queden partes rosadas en el centro para eliminar bacterias patógenas.'
      },
      {
        step: 4,
        title: 'Refrigerar Rápido a Menos de 5 °C',
        description: 'No dejes comidas cocidas a temperatura ambiente por más de 2 horas. Guárdalas en la heladera en recipientes cerrados.'
      }
    ],
    whatNotToDo: [
      'NO laves el pollo crudo bajo la canilla; las salpicaduras dispersan bacterias invisibles en la mesada y vajilla cercana.',
      'NO descongeles alimentos dejándolos todo el día sobre la mesada a temperatura ambiente (descongela en la heladera o microondas).'
    ],
    whenToSeekMedicalHelp: [
      'Consulta al médico si hay diarrea con sangre, vómitos que impiden la hidratación o síntomas que duran más de 48 horas.'
    ],
    sources: [
      { name: 'Organización Mundial de la Salud (OMS) Cinco Claves para la Inocuidad de los Alimentos', year: '2023' },
      { name: 'USDA Food Safety and Inspection Service', year: '2023' }
    ],
    relatedArticles: ['dehydration-warning-signs', 'household-poisoning-prevention'],
    searchKeywords: ['seguridad alimentaria', 'salmonella', 'intoxicacion por comida', 'carne cruda', 'higiene cocina', 'diarrea alimentaria']
  }
];

