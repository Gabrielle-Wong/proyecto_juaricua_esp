var config = {
    // Setup here:
    // style: 'mapbox://styles/mapbox/standard',
    style: 'mapbox://styles/antievictionmap/clxmmsbgl00ex01puepih1r9d',
    accessToken: 'pk.eyJ1IjoiYW50aWV2aWN0aW9ubWFwIiwiYSI6ImNrazF6dWs2ZzA2OHQyd251eGxoc2IyYzQifQ.lQbeWzEMZhhvSNpsbo34wQ',
    showMarkers: false,
    markerColor: '#FFFFFF',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    legend: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,

   // Story Details
    title: 'Lucha por la vivienda',
    subtitle: "Alquileres de Corto Plazo y su rol en el desplazamiento forzado y despojo en la Ciudad de México",
    // subtitle: 'subtitle, if desired',
    byline: 'Mapa hecho por el Proyecto Juaricua, en colaboración con [ 06600 ] Plataforma Observatorio Vecinal de la Colonia Juárez',
    littleByline: 'Para mejores resultados, visualice el sitio web desde un ordenador (website).',
    footer: 'Este mapa fue creado usando la plantilla de <a href="https://github.com/mapbox/storytelling" style="color:#ffffff;" target="_blank">Mapbox Storytelling</a>. Agradecemos al <a href="https://antievictionmap.com/" style="color:#ffffff;" target="_blank">Anti-Eviction Mapping Project</a> por darnos el acceso a Mapbox Studio. Publicado en 2025.',
    
    // Chapter Details
    chapters: [

        {
            // 1: Intro
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'La Ciudad de México ha sido durante mucho tiempo un destino turístico...',
            description: '...pero en los últimos años el turismo ha cambiado de aspecto. Desde la pandemia del COVID-19,  empresas de todo el mundo ofrecen cada vez más oportunidades de trabajo a distancia a sus empleados, por lo que se ha producido un aumento espectacular del número de trabajadores extranjeros a distancia que se trasladan a Ciudad de México para quedarse durante largos periodos de tiempo.',
            image: './images/intro_image_v4.jpg',
            imageCaption: "Se dice hace mucho, mucho  tiempo, antes de Airbnb, en este edificio hubo vida real.",
            location: {
                center: [-99.40935, 19.35071],
                zoom: 9.25,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                
               
            ]
            
        },

        {
            // 2: Digital Nomads
            id: 'digital_nomads',
            alignment: 'center',
            hidden: false,
            title: 'La influencia de los nómadas digitales',
            
            description: 'Estos trabajadores predominantemente norteamericanos, o «nómadas digitales», comenzaron a dirigir su mirada a la Ciudad de México alrededor de 2021, cuando el contenido de los <em>influencer</em> sobre mudarse a la Ciudad de México comenzó a popularizarse en línea. Estos «nómadas digitales influyentes» sin duda han desempeñado un papel importante a la hora de atraer la atención del público hacia Ciudad de México, destacando la «vibrante cultura, el coste de vida asequible y la variedad de espacios de coworking» de la ciudad como principales atractivos [1]. También influye la presencia de Airbnbs, donde muchos nómadas digitales se alojan durante varios meses antes de marcharse.',
            image: './images/digital_nomads.png',
            imageCaption: 'Contenido de influencers en YouTube, Instagram, TikTok y otras plataformas sociales muestra a la Ciudad de México como un destino deseable y asequible para los nómadas digitales.', 
            location: {
                center: [-99.40935, 19.35071],
                zoom: 9.25,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                
               
            ]
            
        },

        {
            // 3: Context for Cuauhtémoc
            id: 'context_cuahtemoc',
            alignment: 'left',
            hidden: false,
            title: 'Unidades de Airbnb en la Alcaldía Cuauhtémoc',
            
            description: 'A partir de este tiempo (2021), se comienza a popularizar el contenido generado por los influencers en redes sociales.  Al mismo tiempo se observa un incremento en el número de alquileres de corta estancia, particularmente en la plataforma Airbnb. Estos alquileres ubicados en su mayoría en alcaldías como Cuauhtémoc, colonias como La Condesa y la Roma, se volvieron epicentros  de los Airbnb. <br> <br> La base de datos usada en la presente investigación  proviene de   <a href="https://insideairbnb.com/about/" style="color:#ffffff;" target="_blank">Inside Airbnb</a>, un proyecto que extrae datos regularmente de la plataforma de Airbnb en distintas ciudades del mundo. En la Ciudad de México, empezaron a coleccionar datos en el 2019, entonces para nuestro estudio, analizamos los datos de 2019 a 2024. <br> <br> A pesar que las Colonias Condesa y Roma fueron epicentros para el Airbnb antes de la pandemia, el incremento de unidades alojamiento de airbnb en la Colonia Cuauhtémoc, incrementó en un 71% entre 2019 y 2024, que se muestra en el siguiente gráfico. ',
            legend: '<em> Unidades de Airbnb localizadas en la Alcaldía Cuauhtémoc 2024. Cada punto rosa representa una unidad de Airbnb. Datos retribuidos de InsideAirbnb, 2024 <br> <br> Este es un mapa interactivo. Puedes acercar y desplazar. </em>',
            // image: './images/airbnb_points.png',


            location: {
                center: [-99.17401, 19.43337],
                zoom: 12.45,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cuauhtemocLine',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'sep24',
                    opacity: 0.5,
                    duration: 500
                },
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
               
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // 3: Context for Cuauhtémoc ii
            id: 'context_cuauhtemoc_ii',
            alignment: 'center',
            hidden: false,
            // title: 'Cuauhtémoc',
            
           
            image: './images/airbnb_points.png',
            

            location: {
                center: [-99.17401, 19.43337],
                zoom: 12.45,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
             
            ]
            
        },

        {
            // 4: Mega Hosts
            id: 'mega_hosts',
            alignment: 'center',
            hidden: false,
            title: 'Crecimiento de los mega-anfitriones',
            // image: './images/tulum_beach.jpg',
            description: 'Este período también marca un cambio en el modelo de negocio de alquiler a corto plazo, ya que se observa un aumento de los propietarios de Airbnb que gestionan múltiples unidades de alojamiento, <strong>desde docenas hasta cientos de unidades</strong>. Estos anfitriones de \'múltiples unidades\' han sido los principales impulsores de los aumentos en los registros en la Ciudad de México. Entre abril de 2019 y septiembre de 2024, mientras que el número de listados (registros) de anfitriones de una sola unidad disminuyó de 9,749 a 8,440, el número de listados de anfitriones de unidades múltiples se disparó 67%, de 10,819 a 18,142. <br> <br> Los mapas que se despliegan más abajo retratan el incremento en el número de unidades de Airbnb entre 2019 y 2023, haciendo hincapié en  aquellas unidades pertenecientes a los mega-anfitriones, y su incremento.',
            
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sep19_hosts',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
              
            ],
            onChapterExit: [
              
            ]
            
        },

        {
            // 4: Mega Hosts
            id: 'mega_hosts_ii',
            alignment: 'left',
            hidden: false,
            title: "Unidades de Airbnb pertenecientes a los mega-anfitriones en Septiembre del 2019",
            // description: "Shown based on number of units owned by the unit's host.",
            image: './images/number_of_units_owned_legend.png',
            legend: '<em> Este es un mapa interactivo. Puedes acercar y desplazar. </em>',
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sep19_hosts',
                    opacity: 1, 
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
              
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
              
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },
        {
            // 4: Mega Hosts
            id: 'mega_hosts_iii',
            alignment: 'left',
            hidden: false,
            title: "Unidades de Airbnb pertenecientes a los mega-anfitriones en Septiembre del 2024",
            image: './images/number_of_units_owned_legend.png',
            legend: '<em> Este es un mapa interactivo. Puedes acercar y desplazar.  </em>',

            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sep24_hosts',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
               
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
               
            ]
            
        },

        {
            // 5: 100+ Hosts
            id: 'hundred_plus_hosts_text',
            alignment: 'center',
            hidden: false,
            title: '¿Qué son los mega-anfitriones?',
            // image: './images/tulum_beach.jpg',
            description: 'En este periodo han surgido algunos mega-anfitriones  que han llegado a gestionar más de 1.500 unidades de alojamiento en total en 2024. Dos mega-anfitriones destacan por el gran número de unidades que gestionan: Mr. W y Virtual Homes [2]. <br> <br> Estos dos, junto con varios otros mega-anfitriones, gestionan a menudo edificios enteros de departamentos con unidades Airbnb. Este fenómeno plantea las preguntas: <br> <br> <strong>¿Quién vivía en estos edificios antes de que se convirtieran en Airbnbs y qué impacto ha tenido Airbnb en el vecindario circundante?</strong>',
            
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },

                {
                    layer: 'sep19_megahosts',
                    opacity: 1, 
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
               
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
    
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },

        {
            // 5: 100+ Unit Hosts
            id: 'hundred_plus_hosts_dec2019',
            alignment: 'left',
            hidden: false,
            title: 'Mega-Anfitriones: Septiembre 2019',
            image: "./images/megalandlord_legend.png",
            legend: '<em> Este es un mapa interactivo. Puedes acercar y desplazar.  </em>',
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },

                {
                    layer: 'sep19_megahosts',
                    opacity: 1, 
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
               
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
             
            ]
            
        },

     
        {
            // 5: 100+ Unit Hosts
            id: 'hundred_plus_hosts_dec2023',
            alignment: 'left',
            hidden: false,
            title: 'Mega-Anfitriones: Septiembre 2024',
            image: "./images/megalandlord_legend.png",
            legend: '<em> Este es un mapa interactivo. Puedes acercar y desplazar.  </em>',
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },

                {
                    layer: 'sep24_megahosts',
                    opacity: 1, 
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
               
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
               

            
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
             
             
            ]
            
        },
       

        {
            // 6: Context for Juárez 
            id: 'context_juarez',
            alignment: 'left',
            hidden: false,
            title: 'La Colonia Juárez',
            // image: './images/tulum_beach.jpg',
            description: 'La Colonia Juárez es uno de esas colonias donde el número de alquileres Airbnb se ha disparado en los últimos años. Mientras que en 2019 sólo había 612 unidades de Airbnb en esta colonia, a partir de junio de 2024, hay 1,200 unidades. Esto significa que en cinco años hay 600 departamentos menos que ya no están disponibles como alquileres a largo plazo: <strong>600 familias han sido expulsadas de sus hogares para dar paso a estos Airbnbs</strong>.',
            
            location: {
                center: [-99.17199, 19.42819],
                zoom: 14.0,
                pitch: 50.00,
                bearing: 15
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'juarezLine',
                    opacity: 1,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
               
            ]
            
        },

        {
            // 6: Context for Juárez ii
            id: 'context_juarez_ii',
            alignment: 'center',
            hidden: false,
            image: './images/jua_points.png',
            location: {
                center: [-99.17199, 19.42819],
                zoom: 14.0,
                pitch: 50.00,
                bearing: 15
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'juarezLine',
                    opacity: 1,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
               
            ]
            
        },


        {
            // 7: Context for 06600 
            id: 'context_06600',
            alignment: 'left',
            hidden: false,
            title: '[ 06600 ] Plataforma Vecinal y Observatorio de la Colonia Juárez',
            image: './images/06600.jpg',
            description: 'Los residentes de la Colonia Juárez, conocidos localmente como Juaricuas, llevan más de una década resistiendo activamente al desplazamiento y a la reurbanización de su colonia. Juaricuas, en este contexto, se refiere a los inquilinos y dueños de inmuebles de la Colonia Juárez, que luchan por el derecho a una vivienda segura, estable y autónoma en su colonia. <br> <br> De este grupo de vecinos surgió en 2014 la Plataforma y Observatorio Vecinal [06600] Colonia Juárez (06600 es el código postal), un espacio dedicado a defender a la colonia de los desarrolladores, y a garantizar la permanencia de sus habitantes. El grupo es liderado por vecinos de la Juárez, organizándose en torno a las necesidades de la comunidad, conectando luchas y proponiendo soluciones de manera colaborativa, creativa, proactiva y colectiva. Se centran en compartir y reproducir métodos activistas para combatir el blanqueamiento por despojo, un término que surge del activismo juaricua y que denomina a este proceso similar, aunque no idéntico, a lo que en occidente se denomina «gentrificación». <br> <br> El grupo fue un actor clave en la organización contra el proyecto del Corredor Cultural Chapultepec en 2015, y también desempeñó un papel importante en la incorporación en 2019 del Artículo 59, que define el Derecho Humano a una Vivienda Adecuada, y el Artículo 60, que aborda el desplazamiento forzado de residentes establecidos desde hace mucho tiempo, en la Ley Constitucional de Derechos Humanos de la Ciudad de México. Los esfuerzos del grupo se centran en evitar el desplazamiento de residentes y pequeñas empresas de la colonia, que también alimenta la pérdida de puestos de trabajo. Pretenden contrarrestar y mitigar los efectos del mercado inmobiliario sobre el suelo y el territorio en Ciudad de México, que alimentan los desplazamientos forzosos y elevan los precios de los alquileres en el barrio.',
            
            location: {
                center: [-99.17199, 19.42819],
                zoom: 14.0,
                pitch: 50.00,
                bearing: 15
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'juarezLine',
                    opacity: 1,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // 8: Dinamarca 77 
            id: 'dinamarca77',
            alignment: 'left',
            hidden: false,
            title: 'El Caso de Dinamarca 77',
            image: './images/dinamarca.jpg',
            imageCaption: 'Dinamarca 77 en 2024.', 
            description: 'Dinamarca 77 es un edificio de la Colonia Juárez donde los efectos del mercado inmobiliario son evidentes. Se estima que 12 familias fueron desalojadas por la fuerza en abril de 2018.  Este edificio abrió con 11 unidades de alojamiento AirBnb en octubre de 2023. Son propiedad de Mr. W, uno de los mega-anfitrones que posee cienes de unidades en la Ciudad de México. <Br> <br> Mr. W fue fundado en 2017 por los hermanos Luís Carlos Weber Zetina y Carlos Enrique Weber Zetina. Hasta 2019, su presencia en Cuauhtémoc era relativamente pequeña (< 50 unidades), pero desde entonces han crecido hasta albergar más de 350 unidades en Cuauhtémoc. La empresa no es propietaria directa de estas unidades. Más bien, son administradores de propiedades que sirven como intermediarios entre los propietarios y los huéspedes potenciales, manejando la publicidad y la comunicación con los huéspedes a cambio de una parte de los ingresos por alquiler. Un portavoz de la empresa calcula que Airbnb puede hacer que un propietario obtenga entre un 30% y un 40% más de ingresos por su unidad en comparación con los alquileres tradicionales [3]. Este es un claro incentivo para que los caseros (propietarios)  desalojen a las familias y entreguen las llaves a gestores como el Mr. W.',
            
            location: {
                center: [-99.15789, 19.42543],
                zoom: 18.75,
                pitch: 63.5,
                bearing: -80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dinamarca77',
                    opacity: 0.9,
                    duration: 4000
                 },
                 
                 {
                    layer: 'minusDinamarca77',
                    opacity: 0.7,
                    duration: 5000
                 },
                  
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // 9:  Nápoles 35 and Londres 49 
            id: 'napoles35_londres49',
            alignment: 'left',
            hidden: false,
            title: 'La Caja de Pandora: Londrés 49 y Nápoles 35',
            // imageBeforeDescription: "./images/juarez_skyline.png",
           
            description: 'Otros dos edificios de la Colonia Juárez, Nápoles 35 y Londres 49, también fueron lugares de desalojo forzoso: <strong>estimamos que 18 familias fueron desalojadas por la fuerza de los dos edificios en diciembre de 2020</strong>. Activistas comunitarios de la 06600 Plataforma Vecinal y Observatorio de la Colonia Juárez grabaron testimonios con inquilinos poco después de que fueran desalojados por la fuerza del edificio, relatando lo que ocurrió el día en que los residentes de Nápoles 35 fueron desplazados.',
            location: {
                center: [-99.16067, 19.42710],
                zoom: 18.5,
                pitch: 61.25,
                bearing: -90.50
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'napoles35',
                    opacity: 0.9,
                    duration: 4000
                 },
                 
                 {
                    layer: 'minusNapoles35',
                    opacity: 0.7,
                    duration: 5000
                 },
                  
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
              
            ]
            
        },

        {
            // 9:  Nápoles 35 and Londres 49 
            id: 'napoles35_londres49_2',
            alignment: 'center',
            hidden: false,
            title: 'Como describió un inquilino,',
            // imageBeforeDescription: "./images/juarez_skyline.png",
            audio: "./media/testimonio_1.mp3",
            audioCaption: "La cita anterior es una versión condensada de lo que el inquilino relató el 4 de diciembre de 2020.",
            image: './images/eviction_1.png',
            imageCaption: 'Captura de pantalla de un vídeo grabado por los organizadores de [ 06600 ] Plataforma que documenta el desalojo del 4 de diciembre de 2020.',
        
            description: '<em>«Vinieron a echarnos sin previo aviso. No hubo ningún tipo de notificación o documento previo que nos avisara de antemano... Tiraron todas nuestras pertenencias a la calle y robaron lo que quedaba dentro... Había muchos policias antidisturbios y otras personas que trajeron con ellos. La gente que les acompañaba era la que sacaba las cosas, y la policía se retiró bastante rápido... Al cabo de un rato alguien silbó y entonces se fueron todos, pero más tarde volvieron y empezaron a destruir y robar cosas».</em>',
            location: {
                center: [-99.16067, 19.42710],
                zoom: 18.5,
                pitch: 61.25,
                bearing: -90.50
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'napoles35',
                    opacity: 0.9,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0.7,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
              
            ]
            
        },

        {
            // 9:  Nápoles 35 and Londres 49 
            id: 'napoles35_londres49_3',
            alignment: 'center',
            hidden: false,
            title: 'Otro inquilino relató:',
            // imageBeforeDescription: "./images/juarez_skyline.png",
            audio: "./media/testimonio_2.mp3",
            audioCaption: "La cita anterior es una versión condensada de lo que el inquilino relató el 4 de diciembre de 2020.",
            image: './images/eviction_2.png',
            imageCaption: 'Captura de pantalla de un vídeo grabado por los organizadores de [ 06600 ] Plataforma que documenta el día del desalojo',
            description: '<em>«Vivo aquí desde hace 35 años, en Nápoles 35... Hoy nos han desalojado arbitrariamente. Nunca recibimos una notificación, una oportunidad de defendernos de esta brutalidad. Es criminal...No tengo a dónde ir aquí en la Ciudad de México, un lugar donde vivir, no tengo a dónde ir después de esto...tal vez podría pedirle a mi hijo que me quede con él, pero está fuera de la Ciudad de México. Soy diabético. Soy de la tercera edad. Tengo una discapacidad, pero no les importó. Había residentes aquí con condiciones similares, una persona ciega, una persona con Alzheimer... Ahora, estamos en medio de una pandemia. ¿Qué significa para ti quedarte sin casa durante la pandemia de COVID-19?»</em>',
            location: {
                center: [-99.16067, 19.42710],
                zoom: 18.5,
                pitch: 61.25,
                bearing: -90.50
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'napoles35',
                    opacity: 0.9,
                    duration: 4000
                 },
                 
                 {
                    layer: 'minusNapoles35',
                    opacity: 0.7,
                    duration: 5000
                 },
                  
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                 
            ]
            
        },

        {
            // 9:  Nápoles 35 and Londres 49 
            id: 'napoles35_londres49_4',
            alignment: 'left',
            hidden: false,
           
            // imageBeforeDescription: "./images/juarez_skyline.png",
            image: './images/pandora.jpg',
            imageCaption: 'Londres 49 y Nápoles 35 tras la renovación.',
            description: '<strong>El desalojo forzoso de estos inquilinos se produjo sin previo aviso: no tuvieron tiempo de prepararse ni de buscar alojamiento alternativo</strong>. Sus pertenencias fueron arrojadas a la calle y/o robadas, y tuvieron que rehacer sus vidas. Los inquilinos mayores y discapacitados se quedaron sin un lugar adonde ir y sin recursos para ayudarles en la transición a otras opciones de vivienda. <strong>El inquilino antes citado llevaba 35 años viviendo en Nápoles 35, y en un instante su vida cambió para siempre</strong>. La mayoría de los inquilinos de estos edificios no podían permitirse permanecer en la Colonia Juárez, y los organizadores de 06600 Plataforma Vecinal y Observatorio de la Colonia Juárez han perdido el contacto con muchos de ellos. <br> <br> Después de estos desalojos de diciembre de 2020, los desarrolladores renovaron drásticamente estos dos edificios, y en octubre de 2023, este edificio administrado por Virtual Homes, rebautizado <em>Pandora</em>, abrió sus puertas. Anunciando 40 unidades Airbnb, Pandora no solo ha alimentado el desalojo de estas 18 familias en medio de una pandemia, sino que también ha alterado drásticamente el paisaje del vecindario circundante.',
            location: {
                center: [-99.16067, 19.42710],
                zoom: 18.5,
                pitch: 61.25,
                bearing: -90.50
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'napoles35',
                    opacity: 0.9,
                    duration: 4000
                 },
                 
                 {
                    layer: 'minusNapoles35',
                    opacity: 0.7,
                    duration: 5000
                 },
                  
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
              
            ]
            
        },

        {
            // 10.1: Neighbourhood Impact - Rent
            id: 'neighbourhood_impact_rent',
            alignment: 'center',
            hidden: false,
            // title: '',
        
            image: './images/rent_graph.png',
            description:'<strong>Como ilustran estos mapas y testimonios personales, Airbnb ha tenido un tremendo impacto en la vida cotidiana de los residentes de Ciudad de México en el núcleo central de la ciudad</strong>. En el caso de reurbanizaciones de Airbnb como Dinamarca 77 y Pandora, las vidas de los inquilinos se han visto alteradas, primero por el trauma de los desalojos violentos que se vieron obligados a sufrir, y después por la dificultad que suelen tener los residentes para encontrar una vivienda acorde con su presupuesto en la colonia. <br> <br> Los datos disponibles [4] sobre los alquileres medios en la Colonia Juárez muestran que los alquileres aumentaron a un ritmo más rápido en comparación con la Ciudad de México en su conjunto, en particular durante el período en que los anuncios de Airbnb se añadieron rápidamente al mercado. Observamos esto especialmente en 2022, cuando el turismo global «se recuperó» tras las restricciones de viajes internacionales de la era COVID-19. Este aumento podría deberse en parte a que Airbnb sacó viviendas del mercado local y las convirtió en alquileres a corto plazo con costes nocturnos inflados. <strong>Este gráfico también revela la importancia de mirar a escala de barrio para determinar el impacto de Airbnb en los precios de alquiler: Ciudad de México es demasiado extensa para utilizar datos de alquiler de toda la ciudad que reflejen el impacto de Airbnb</strong>. Otras colonias con un elevado número de registros de Airbnb muestran patrones similares.',
            
            location: {
                center: [-99.17276, 19.42655],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
              
                
            ]
            
        },

        {
            // 10: Neighbourhood Impact
            id: 'neighbourhood_impact',
            alignment: 'center',
            hidden: false,
            title: 'Blanqueamiento por Despojo',
        
            image: './images/pandora_streetscape.jpg',
            description:'El aumento de unidades Airbnb también impacta el tipo de negocios que surgen en una colonia determinada, con restaurantes, cafés, tiendas y boutiques de mayor precio que satisfacen los gustos de los consumidores de élite y los turistas extranjeros [5]. Esto es evidente en la Colonia Juárez. La aparición de edificios Airbnb también suele conllevar el desplazamiento de negocios comerciales. Por ejemplo, la conversión de Dinamarca 77 a unidades Airbnb también desplazó un restaurante de Comida Corrida y una tienda de barrio a pie de calle, transformando estos espacios comerciales en varias boutiques de lujo.<br><br>El blanqueamiento de estos edificios también crea una representación alternativa de la colonia, una fachada pulida que recuerda a épocas pasadas de la élite mexicana. Los organizadores de 06600 Plataforma Vecinal y Observatorio de la Colonia Juárez lo llaman blanqueamiento por despojo [6]. El blanqueamiento, aquí, se refiere no sólo al encalado literal de los edificios después de que los inquilinos son desposeídos, pintándolos con esquemas de colores suaves y “neutrales”, sino también a las formas en que el despojo de viviendas no es sólo un proceso económico, sino racializado.',
            
            location: {
                center: [-99.17276, 19.42655],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
              
                
            ]
            
        },

        {
            // 10.1: Neighbourhood Impact - INDG Tenants
            id: 'neighbourhood_impact_indg',
            alignment: 'center',
            hidden: false,
            // title: 'Blanqueamiento por Despojo',
        
            image: './images/protest_art.jpg',
            imageCaption: "Arte de protesta social en el exterior de Turin 46.",
            description:'<strong>La dinámica racial de estos procesos de desplazamiento se vuelve más clara cuando prestamos atención a las formas en que los inquilinos indígenas de Colonia Juárez han experimentado instancias especialmente brutales de desalojo forzoso en el vecindario</strong>. Colonia Juárez es el hogar de una multitud de residentes indígenas de diversas naciones, especialmente los pueblos Ñañú, Mazahua y Triqui. Los residentes indígenas han notado que experimentan racismo en el vecindario y a menudo son tratados como si no pertenecieran a esta parte de la ciudad [7]. Sin embargo, muchas familias se resisten al desplazamiento e insisten en su derecho a permanecer en La Juárez - [ 06600 ] ha documentado los desalojos de familias indígenas en los últimos diez años en la Colonia Juárez, tanto pasados ​​como actuales: <ul> <li> En 2014, más de 20 familias indígenas fueron desalojadas y desplazadas de Marsella 58, en la esquina de Nápoles. </li> <li>  En 2018, más de 25 familias indígenas fueron desplazadas de Roma 18 por un brutal desalojo. Tras ocho años ocupando las calles y viviendo en un campamento, su resistencia triunfó y lograron obtener vivienda del Instituto de Vivienda (INVI). </li> <li>  En 2019, más de 28 familias indígenas fueron desplazadas del edificio Londres 9 por un violento desalojo. </li> <li> En octubre de 2021, más de 22 familias indígenas mazahuas fueron expulsadas violentamente de sus hogares en Turín 46, pero resistieron lo que consideraron un desalojo ilegal y lograron permanecer en el edificio. Hoy luchan para reclamar la expropiación forzosa y construir viviendas sociales en el terreno. </li> <li> En 2024, tres familias indígenas fueron desplazadas de Turín 41. Actualmente, las familias indígenas que viven en Abraham González 66 también buscan reclamar el derecho de dominio eminente y construir viviendas sociales en el sitio.</li> </ul> <br>Estos casos de desalojo masivo violento son más frecuentes y se normalizan para vidas consideradas menos valiosas dentro de procesos más amplios de racialización y territorialización en México [7]. <strong>A medida que los inquilinos mexicanos de bajos ingresos son expulsados ​​para crear locales para las élites extranjeras y nacionales, la Colonia Juárez se reinscribe efectivamente como un espacio exclusivo y blanqueado que tiene un impacto visceral en la vida cotidiana de los inquilinos restantes</strong>.',
            
            location: {
                center: [-99.17276, 19.42655],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
              
                
            ]
            
        },

        {
            // 11: CDMX Policy on Digital Nomads
            id: 'cdmx_digital_nomads',
            alignment: 'center',
            hidden: false,
            title: '¿Cómo ha respondido la Ciudad de México a los alquileres de corto plazo?',
            image: './images/digital_nomad_announcement.jpg',
            imageCaption: 'Captura de pantalla de las redes sociales del Gobierno de la Ciudad de México, donde se anuncia su apoyo a los trabajadores remotos: <Br> <br> Nómadas Digitales en la Ciudad de México. El trabajo remoto genera un impacto transversal en la sociedad, desde los recursos humanos hasta diferentes sectores de nuestra economía. <br> br> En la #ConferenciaDePrensa del #AlcaldeDeLaCiudadDeMéxico, se afirmó que la alianza entre @GobCDMX, @airbnb_mx y @UNESCOMexico impulsará el turismo creativo, que incluirá a los habitantes de la Ciudad de México, ya que generará nuevos empleos e impulsará la economía local.',
            description: 'El crecimiento de Airbnb y su impacto en las poblaciones locales no son naturales ni inevitables. Más bien, el blanqueamiento de la Colonia Juárez y otras zonas de la Ciudad de México se ha buscado intencionalmente. En octubre de 2022, Airbnb anunció su colaboración con el gobierno de la Ciudad de México para "promocionar la ciudad como un centro global para trabajadores remotos... y la Capital del Turismo Creativo" [8]. Si bien el anuncio afirmaba que Airbnb brindaría oportunidades económicas a los mexicanos (a través de empleos en la industria turística), la Ciudad de México ha cambiado su perspectiva sobre los nómadas digitales, al menos en lo que respecta a sus alquileres de vivienda a corto plazo. <br> <br> En 2024, el gobierno de la Ciudad de México implementó nuevas regulaciones con respecto a Airbnb y otras plataformas de alquiler a corto plazo, exigiendo la creación de una lista de todos los anfitriones (hosts) de alquileres a corto plazo, documentando su Número de Identificación Fiscal (NIF) junto con la acreditación o propiedad de la unidad [9]. En septiembre de 2024, el gobierno municipal declaró que, si bien los anuncios de hosts no se habían completado, estos no podrían renovar sus licencias si superan el 50 % del año, si intentan anunciar propiedades adicionales o si extienden los períodos de alquiler. <br> <br> En respuesta a estas regulaciones, Airbnb ha financiado campañas e informes locales que presentan a sus hosts como negocios familiares cuyas unidades de alquiler benefician las economías locales y sustentan sus medios de vida; <strong>sin embargo, como muestra nuestra investigación, el marcado aumento de unidades en Airbnb desde 2022 no se debe a propietarios familiares, sino a mega-anfitriones cuya presencia ha incrementado el costo del alquiler en Colonia Juárez y en otras colonias con una gran presencia de Airbnb</strong>.',
            
            location: {
                center: [-99.14960, 19.40666],
                zoom: 11.50,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
              
            ]
            
        },

        {
            // 11: Financialisation of Housing
            id: 'housing_financialisation',
            alignment: 'center',
            hidden: false,
            title: 'El rol de Airbnb en la financiarización de la vivienda ',
            image: './images/proptech.png',
            imageCaption: ' Una industria profesional de plataformas y tecnologías inmobiliarias ha surgido en torno a los mercados inmobiliarios de América Latina, incluyendo muchas que se centran específicamente en el alquiler a corto plazo. ',
            // image: './images/tulum_beach.jpg',
            description: 'Las empresas propietarias o gestoras de edificios como Dinamarca 77 y Pandora los compran porque los consideran no como viviendas, como lo hicieron los inquilinos desalojados, sino como propiedades de las que pueden obtener beneficios. Este fenómeno se conoce como la financiarización de la vivienda: el tratamiento de la vivienda por parte de los inversores como un activo financiero, en lugar de como un derecho humano [10]. <br> <Br> Si bien la financiarización de la vivienda no es nueva, sus impactos se han visto amplificados por las plataformas y herramientas digitales. Los smartphones y las aplicaciones (y las capacidades de datos y análisis que ofrecen) permiten a los inversores gestionar carteras de propiedades grandes y cada vez más complejas [11]. Facilitan la financiarización a mayor velocidad, a mayor escala y con un mayor potencial de beneficios. <br> <br> Las plataformas de alquiler a corto plazo como Airbnb crean oportunidades para un nuevo tipo de financiarización. Atienden a un grupo creciente de trabajadores remotos móviles y relativamente adinerados (y turistas extranjeros) que pueden permitirse pagar alquileres mucho más altos que los locales. Además, al eludir las regulaciones y protecciones para inquilinos a largo plazo, Airbnb ofrece a los anfitriones mucha más flexibilidad y control sobre sus propiedades [12]. Para inversionistas como Mr W y Virtual Homes, el potencial de ingresos es demasiado grande como para ignorarlo. <br> <br> Este fenómeno no es exclusivo de la Ciudad de México [13]. Una industria profesional de administradores de propiedades, arrendadores y plataformas inmobiliarias ha surgido en paralelo con Airbnb en ciudades de todo el mundo. Las boutiques y fachadas de la CDMX son una expresión local de un sistema global que prioriza las inversiones de capital y las ganancias sobre las vidas humanas y la cohesión comunitaria.',
            
            location: {
                center: [-99.14960, 19.40666],
                zoom: 11.50,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // 13: Conclusion
            id: 'conclude',
            alignment: 'center',
            hidden: false,
            title: ' El Barrio es de quien lo trabaja...',
            image: './images/juarez_conclusion.png',
            imageCaption: 'Murales como éstos en Turin 46 son una forma en que los organizadores de la Colonia Juárez resisten el blanqueamiento por despojo y visibilizan sus reivindicaciones en el barrio.',
            // image: './images/tulum_beach.jpg',
            description: 'Aunque las políticas recientes del gobierno municipal indican un deseo de frenar el crecimiento de Airbnb, no está claro su éxito ni la eficacia con la que se aplicarán las nuevas normas. Los datos disponibles de 2024 sugieren que el número de alojamientos en Airbnb en la Alcaldía Cuauhtémoc se ha mantenido relativamente estable a lo largo del año. Si bien los notables aumentos en los alojamientos observados en 2022-2023 se han desacelerado, las miles de unidades Airbnb establecidas durante estos años se mantienen. Los nómadas digitales siguen tomándose selfis en las calles de la Ciudad de México, y la gentrificación sigue moldeando el panorama cultural y económico. <br> <br> Sin embargo, los residentes de colonias como La Juárez no aceptan estos cambios como inevitables. El blanqueo por despojo y la gentrificación continúan y tienen sus raíces en una larga historia de despojo en la Ciudad de México; sin embargo, los juaricuas no se desaniman: siguen practicando formas cotidianas y creativas de resistencia a Airbnb y otras formas de especulación capitalista en su barrio. Estas formas de resistencia son visibles y directas, como carteles pegados con celo o murales pintados en edificios donde los residentes resisten el desplazamiento. Otras son quizás menos obvias, como un vendedor ambulante que sigue vendiendo sus productos incluso después de que los edificios con los que comparte la acera hayan sido blanqueados. Los juaricuas siguen insistiendo en su derecho a permanecer en su colonia, en sus hogares, bajo sus propios términos. <em> El barrio es de quien lo trabaja. La lucha sigue. </em>',
            
            location: {
                center: [-99.14960, 19.40666],
                zoom: 11.50,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
               
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // References
            id: 'acknowledgements',
            alignment: 'center',
            hidden: false,
            title: 'Agradecimientos',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            description: 'Proyecto Juaricua es una colaboración entre investigadores y organizadores Mexicanos, Canadienses y Americanos. Esta investigación fue realizada con el apoyo del <a href=\"https://antievictionmap.com\" style=\"color:#ffffff;\" target=\"_blank\">Anti-Eviction Mapping Project</a> y  <a href=\"https://insideairbnb.com/about/\" style=\"color:#ffffff;\" target=\"_blank\">Inside Airbnb</a>',
            location: {
                center: [-99.12574, 19.39614],
                zoom: 10.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
               
            ],
            onChapterExit: [
             
            ]
        },

        {
            // References
            id: 'endnotes',
            alignment: 'center',
            hidden: false,
            title: 'Referencias finales',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            description: "[1] Quote from the blog <em> <a href = 'https://digitalnomadlifestyle.com/2024/06/14/mexico-city-the-complete-digital-nomad-guide/' style='color:#ffffff;'>Digital Nomad Lifestyle</a> </em>. <br> <br> [2]In the latter half of 2024, the global company <a href = 'https://www.theblueground.com/' style='color:#ffffff;'>Blueground</a> added nearly 150 units to their listings in CDMX. Although they have slightly fewer units than Mr. W and Virtual Homes in Mexico City, they are expanding at a faster rate and are much more established globally, with collections of short-term rentals in five continents. <br> <br> [3] Figure from <a href = 'https://english.elpais.com/international/2022-12-13/mr-w-the-mysterious-airbnb-broker-in-mexico-city.html_' style='color:#ffffff;'> EL PAÍS </a> <br> <br> [4] Data from <a href = 'https://www.inmuebles24.com/noticias/cdmx-renta/' style='color:#ffffff;'>Inmeubles24</a>. The data that is provided only accounts for properties listed on this site. <br> <br> [5] See the research of <a href = 'https://doi.org/10.1093/cjres/rsad009' style='color:#ffffff;'>Hidalgo et al. (2023)</a> for more information. <br> <br> [6] Blanqueamiento por despojo was first discussed in <a href = 'https://permanecerenlamerced.wordpress.com/2019/03/18/blanqueamiento-por-despojo-por-pablo-gaytan-santiago/' style='color:#ffffff;'> work</a> by Pablo Gaytán Santiago, a researcher in the Department of Social Relations and the Communication and Politics Area at Universidad Autónoma Metropolitana-Xochimilco and a documentary filmmaker. Sergio González, lead organizer with the 06600 Plataforma Vecinal y Observatorio de la Colonia Juárez, also speaks to the terms origins within the Juaricuas’ housing movement. <a href = 'https://journals.sagepub.com/doi/abs/10.1177/27541258231204004?journalCode=dusa' style='color:#ffffff;'>Ben Gerlofs and Ernesto López Morales (2023)</a> have also written on blanqueamiento por despojo in Mexico City. <br> <br> [7] For more information, see Carla Escoffié’s book, <em> País sin techo: Ciudades, historias y luchas sobre la vivienda </em>, and the work of <a href = 'https://doi.org/10.5354/0718-8358.2022.65649' style='color:#ffffff;'>Linz et al. (2022)</a>. <br> <br> [8] See Airbnb’s announcement on this partnership <a href = 'https://news.airbnb.com/cdmx-unesco-and-airbnb-announce-partnerships-to-promote-mexico-city-as-a-g/' style='color:#ffffff;'>here</a>. <br> <br> [9] The full policy is available in the <a href = 'https://data.consejeria.cdmx.gob.mx/portal_old/uploads/gacetas/31ad26cb85b412c0492e504ade4f23ab.pdf' style='color:#ffffff;'> Gaceta Oficial de la Ciudad de Órgano de México 1330</a>. <br> <br> [10] For more in-depth research on the global financialization of housing, see the work of <a href = 'https://onlinelibrary.wiley.com/doi/full/10.1111/1468-2427.12062?casa_token=WQ035imkpzYAAAAA%3Av7XspjfGza1m6wvOawDp20aUKJ1RuCoKtUjoNoudnWlpWtw1t4uAXAfHFF-1DWDJ-u56oe50YAnNKWo' style='color:#ffffff;'>Rolnik (2013)</a>,  <a href = 'https://doi.org/10.1177/0042098014543704' style='color:#ffffff;'>Fields & Uffer (2016)</a>, <a href = 'https://onlinelibrary.wiley.com/doi/full/10.1111/1468-2427.12522?casa_token=0JoSEVSlzOgAAAAA%3AhlEZlRYTzeKzIPOgdp6WcxWECC-rvBA6i09ZuPuYOEhfrhZu4ufi4Fsgdu4-f0ONW-FMyRH3xxM2m5Y' style='color:#ffffff;'>Aalbers (2017)</a>, <a href = 'https://www.tandfonline.com/doi/full/10.1080/10511482.2019.1681491?casa_token=FXvnQMNUPFkAAAAA%3AKiGk-KjHTzLaXf7fTXQJdwAkVBbGMZpTIsCo0y0Ft_W7oEohcYHP0eC7X7V02miGKJEprmoAI6sO7A#abstract' style='color:#ffffff;'>Fernandez & Aalbers (2020)</a>, and <a href = 'https://www.tandfonline.com/doi/full/10.1080/02723638.2024.2355061?casa_token=cMfFq2GBngkAAAAA%3A4ty_JaEpM5IV-SvPXSvWacjlqJnwQFJspl9Q_EplAGKJKHAWkX7vSiL1cmXs6oR1W4gETsXdd5_wBw' style='color:#ffffff;'>Rolnik et al. (2024)</a>.<br> <br> [11] See <a href = 'https://doi.org/10.1177/0308518X19846514' style='color:#ffffff;'>Fields (2022)</a> for a discussion of digital technologies and their role in financial accumulation. <br> <br> [12]  <a href = 'https://doi.org/10.1016/j.cities.2023.104245' style='color:#ffffff;'>Gil et al. (2023)</a> discuss the connections between short-term rental platforms and the financialization of housing in more detail. <br> <br> [13]  <a href = 'https://doi.org/10.1016/j.cities.2023.104245' style='color:#ffffff;'>Gil et al. (2023)</a> and <a href = 'https://www.routledge.com/Airbnb-Short-Term-Rentals-and-the-Future-of-Housing/Hoffman-SchmitterHeisler/p/book/9780367234188?srsltid=AfmBOopw8w0Cl8zsGoHmA01xS46pc48K1BZcN6ReEVTF1WzygKM0rk5y' style='color:#ffffff;'>Hofman & Heisler’s (2020)</a> research both investigate the role of Airbnb in the financialization of housing in other cities.",
            location: {
                center: [-99.12574, 19.39614],
                zoom: 10.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                
               
            ]
        },


        {
            // Map Only Chapter
            id: 'map_only_chapter',
            alignment: 'fully',
            hidden: true,
            title: 'Heading-Style Chapter',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            location: {
                center: [-99.12574, 19.39614],
                zoom: 10.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ]
        }

    ]
};