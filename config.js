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
    title: '¡FUERA AIRBNB!',
    subtitle: "Alquileres de Corto Plazo y su rol en el desplazamiento forzado y despojo en la Ciudad de México",
    // subtitle: 'subtitle, if desired',
    byline: 'Mapa hecho por el Proyecto Juaricua, en colaboración con [06600] Platforma Observatorio Vecinal de la Colonia Juárez',
    littleByline: 'Para mejores resultados, visualice el sitio web desde un ordenador (website).',
    footer: 'Este mapa fue creado usando la plantilla de <a href="https://github.com/mapbox/storytelling" style="color:#ffffff;" target="_blank">Mapbox Storytelling</a>.Agradecemos al <a href="https://antievictionmap.com/" style="color:#ffffff;" target="_blank">Anti-Eviction Mapping Project</a> por darnos el acceso a Mapbox Studio. Publicado en 2025.',
    
    // Chapter Details
    chapters: [

        {
            // 1: Intro
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'La ciudad de México ha sido un destino turístico reconocido desde hace tiempo..',
            description: ' sin embargo, recientemente el tipo de turismo ha cambiado: los turistas ya no vienen solo un par de semanas. Desde la pandemia de Covid-19 y a medida que empresas de todo el mundo han decidido ofrecer más oportunidades de trabajo remoto (<em>home office</em>), ha habido un aumento exponencial en el número de extranjeros que se mudan a la Ciudad de México por periodos prolongados para trabajar remotamente.',
            image: './images/intro_image_v4.jpg',
            imageCaption: "Se dice hace mucho tiempo, antes de Airbnb en este edificio hubo vida real.",
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
            title: 'Nómadas Digitales y la  \’Gringuificación\’ ',
            // image: './images/tulum_beach.jpg',
            
            description: 'Predominantemente trabajadores Norteamericanos o \“Nómadas Digitales\”, voltearon a ver la Ciudad de México cuando se popularizó el estilo de vida por medio de los <em> Influencers </em>. Los “<em>Influencers </em> Nómadas Digitales” trajeron atención a la Ciudad de México, destacando especialmente a la “cultura vibrante, costo de vida accesibles y la variedad de espacios para <em> Coworking </em>” [1].',
            image: './images/digital_nomads.png',
            imageCaption: 'Contenido de influencers en YouTube, Instagram, TikTok y otras plataformas sociales retrata a la Ciudad de México como un destino deseable y asequible para los nómadas digitales.', 
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
            title: 'Unidades de Airbnb en la Alcaldía Cuauhtémoc ',
            
            description: 'A partir de este tiempo, el contenido generado por los influencers comenzó a popularizarse en redes sociales. Se observó un incremento significativo en el número de alquileres de corta estancia, particularmente en la plataforma Airbnb. Ubicados en su mayoría en alcaldías como Cuauhtémoc. Colonias como La Condesa y la Roma, se volvieron focos para las unidades de Airbnb. Comparando el número de unidades en la Alcadía Cuauhtémoc en años previos a la pandemia, se tuvo un incremento del 71% entre 2019 y 2024 en cuanto al número de unidades en renta.',
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
            // 4: Mega Landlords
            id: 'mega_landlords',
            alignment: 'center',
            hidden: false,
            title: 'Crecimiento de los \'Mega-Hosts\'',
            // image: './images/tulum_beach.jpg',
            description: 'Este periodo marca un cambio en el modelo de negocios de los alquileres de corta estancia, de igual manera observamos el incremento de <em> Hosts </em> que manejan múltiples unidades -desde decenas hasta cientos de Airbnbs-. Estos <em> Hosts </em>multi-unidad han sido los principales actores en el incremento de unidades de Airbnb disponibles en la Ciudad de México. Entre Abril 2019 y Septiembre 2024, el número de unidades manejadas por un <em> host </em>disminuyeron de 9,749 a 8,440, mientras que el número de unidades manejadas por <em> host </em>multi-unidad incrementaron en un 67% de 10,819 a 18,142. <br> <br> Estos mapas retratan el incremento en el número de unidades de Airbnb entre 2019 y 2023, particularmente aquellas unidades pertenecientes a los mega-hosts, y su incremento. ',
            
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
            // 4: Mega Landlords
            id: 'mega_landlords_ii',
            alignment: 'left',
            hidden: false,
            title: "Unidades de Airbnb pertenecientes a los Mega-Hosts en Septiembre del 2019. ",
            // description: "Shown based on number of units owned by the unit's host.",
            image: './images/number_of_units_owned_legend.png',
            // description: 'Since 2022, there has been a noted increase in Airbnb landlords that own multiple units. A few mega-landlords have emerged in Mexico City, that own or manage 100+ units.',
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
            // 4: Mega Landlords
            id: 'mega_landlords_iii',
            alignment: 'left',
            hidden: false,
            title: "Unidades de Airbnb pertenecientes a los Mega-Hosts en Septiembre del 2024",
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
            // 5: 100+ Landlords
            id: 'hundred_plus_landlords_text',
            alignment: 'center',
            hidden: false,
            title: 'El Ascenso de los Mega-Caseros',
            // image: './images/tulum_beach.jpg',
            description: 'Algunos <em> mega-hosts </em> emergen en este periodo, y han manejado hasta 1,500 unidades al mismo tiempo. Dos <em> mega-hosts </em> ­­­destacan en este proceso por el número de unidades que manejan: Mr.W y Virtual Homes. <br> <br> Ambos, junto con otros <em> mega-hosts </em>,  manejan a veces edificios cuales son únicamente utilizados como Airbnb. Este fenómeno plantea las preguntas : <br> <br> <strong> ¿Quiénes vivían en estos edificios antes de volverse Airbnb? ¿Qué impacto tienen los Airbnb en las comunidades donde se ubican? </strong>',
            
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
            // 5: 100+ Unit Landlords
            id: 'hundred_plus_landlords_dec2019',
            alignment: 'left',
            hidden: false,
            title: 'Mega-Caseros: Septiembre 2019',
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
            // 5: 100+ Unit Landlords
            id: 'hundred_plus_landlords_dec2023',
            alignment: 'left',
            hidden: false,
            title: 'Mega-Caseros : Septiembre 2024',
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
            description: 'La Colonia Juárez es uno de los vecindarios donde los alquileres de Airbnb se han incrementado exponencialmente durante los últimos años. En el año 2019 habían listados 612 Airbnb en el vecindario, para el 2024 hay 1,237 unidades. En tan solo 5 años se han agregado efectivamente 600 unidades que ya no son utilizadas para alquileres de largo plazo. 600 familias han sido desplazadas de sus hogares para hacer espacio a los Airbnb. ',
            
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
            title: '[06600] Plataforma Vecinal y Observatorio de la Colonia Juárez',
            imageCaption: 'One of the logoes used by the organization.',
            image: './images/06600.jpg',
            description: 'Los residentes de la Colonia Juárez, localmente conocidos como Juaricuas, han resistido activamente el desplazamiento y la reurbanización de su vecindario por más de una década. Juaricua, en este contexto, se refiere a los vecinos y vecinas de la Colonia Juárez que luchan por su derecho a una vivienda estable, segura y autónoma en su colonia. <br> <br> De esté grupo de vecinos nace la Plataforma Vecinal y Observatorio de la Colonia Juárez (06600 proviene de el código postal) que desde el 2014, han defendido el vecindario De desarrolladoras inmobiliarias, y de igual manera mantener la continua presencia de sus residentes. El grupo, está organizado por mismo vecinos de la Juárez, y se organizan entorno a las necesidades de la comunidad, conectando luchas y proponiendo soluciones de manera colaborativa, creativa, proactiva y colectiva. Se enfocan en compartir y reproducir métodos para combatir el blanqueamiento por despojo. Un término proveniente del activismo Juaricua, que identifica a un proceso similar pero no idéntico a lo que entiende el anglicismo “gentrificación”. <br> <br> Este grupo fue una parte crucial en organizarse en contra del Corredor Cultural Chapultepec en 2015, al igual de tener un rol principal en el 2019, cuando se incorporó el Artículo 59 el cual define el Derecho Humano a Vivienda Digna, y el Artículo 60 el cual refiere a los desplazamientos forzados de residentes con arraigo, dentro de la Constitución de Derechos Humanos en la Ciudad de México. Este grupo se enfoca en evitar el desplazamiento tanto de residentes como negocios en el barrio y los efectos que tienen en la pérdida de empleos. Los Juaricuas también intentan mitigar y contrarrestar los efectos que ha tenido el mercado capitalista de la vivienda en el terreno y propiedades en la Ciudad de México, lo que ha impulsado el desplazamiento y el incremento de precio en las rentas y propiedades del vecindario. ',
            
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
            description: 'El predio de Dinamarca 77 es uno de los edificios en la Colonia Juárez en donde los efectos del capitalismo en el mercado de bienes raíces se volvieron más evidentes. Un estimado de 12 familias fueron forzosamente desalojadas de sus hogares en 2018. Este edificio comenzó sus operaciones como Airbnb en Octubre del 2023 con 11 unidades listadas en el mercado. El propietario y host  de este edificio es Mr. W, uno de los <em> mega-hosts </em> de la Ciudad de México. <br> <br> Mr. W fue establecido en el 2017 por los hermanos Luis Carlos Weber Zetina y Carlos Enrique Weber Zetina. Hasta el 2019, su presencia en la alcaldía Cuauhtémoc era relativamente pequeña (< 50 unidades) desde entonces han crecido y ahora manejan hasta 350 unidades en la Alcaldía Cuauhtémoc. La compañía no es dueña directamente de las unidades, en realidad son intermediarios o <em> property managers </em>. Responsables de mantener relación entre los dueños y los potenciales  <em>guests </em> al igual de manejar la publicidad a cambio de una porción de la renta mensual. Un portavoz de la compañía estima que un Airbnb puede generar de un 30%-40% más de ganancia en comparación con las unidades tradicionales de renta [3]. Esto se ha vuelto un incentivo para desalojar familias y entregar las llaves de sus departamentos a <em> mega-hosts </em> como Mr. W. ',
            
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
            title: 'La Caja de Pandora: Londres 49 y Nápoles 35',
            // imageBeforeDescription: "./images/juarez_skyline.png",
           
            description: 'Otros dos edificios de la Colonia Juárez: Nápoles 35 y Londres 49 fueron también sitios de desalojo forzado: Estimamos que un total de 18 familias fueron desplazadas de los dos edificios en Diciembre de 2020. Activistas Comunitarios como la [06600]- Plataforma Vecinal y Observatorio de la Colonia Juárez grabaron los testimonios de los arrendatarios desplazados, contando lo que pasó el día que los residentes de Nápoles 35 fueron desplazados.',
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
            title: 'Uno los testimonios proviene de un inquilino:',
            // imageBeforeDescription: "./images/juarez_skyline.png",
            audio: "./media/testimonio_1.mp3",
            audioCaption: "La siguiente cita es una versión condensada de las declaraciones dadas por la inquilina en Diciembre, 2020.",
            image: './images/eviction_1.png',
            imageCaption: 'Captura de pantalla proveniente de un vídeo de la plataforma [06600] documentando el día del desalojo.',
        
            description: '<em>"Nos vinieron a lanzar (sin previo aviso, sin mostrar ninguna notificación o papel que nos iban a sacar…Todas nuestras pertenencias la echaron a la calle y que queda se llevaron… Hubo muchos granaderos, y mucha gente que traían. Gente que es la que está sacando las cosas y los granaderos que se retiraron luego luego…Hubo muchos granaderos, y mucha gente que traían. Gente que es la que está sacando las cosas y los granaderos que se retiraron luego luego…No, no hubo violencia. Hasta después que se salieron, les chiflaron y se salieron todos"</em>',
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
            title: 'Otro inquilino comentó:',
            // imageBeforeDescription: "./images/juarez_skyline.png",
            audio: "./media/testimonio_2.mp3",
            audioCaption: "La siguiente cita es una versión condensada de las declaraciones dadas por la inquilina en Diciembre, 2020.",
            image: './images/eviction_2.png',
            imageCaption: 'Captura de pantalla proveniente de un vídeo de la plataforma [06600] documentando el día del desalojo.',
            description: '<em>“He vivido 35 años en Nápoles 35… Hoy arbitrariamente nos desalojaron, jamás recibimos una notificación para poder defendernos es una brutalidad, es un abuso…Entonces desafortunadamente no tengo aquí en el distrito federal a donde ir a residir…  Yo soy diabética, entonces soy de la tercera edad, tengo una discapacidad motriz, pero no les importo nada…Hay unas personas igual que . Una persona que es invidente, con Alzheimer…<strong> ¿que representa para ustedes quedarse sin casa durante la pandemia? </strong>”</em>',
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
            imageCaption: 'Los edificios de Londres 49 y Nápoles 36 después de las renovaciones.',
            description: 'Como comentan los inquilinos  desplazados, los desalojos forzados ocurrieron sin previo aviso. No tuvieron la oportunidad de encontrar o preparar alojamientos alternativos. Sus pertenencias fueron tiradas a la calle y/o robadas, y del mismo modo tuvieron que volver a construir sus vidas. Personas de la tercera edad y/o con discapacidades fueron dejados a su suerte sin ningún lugar a donde ir, sin recursos ni ayuda con la transición u otras opciones de vivienda. Una de las inquilinas de Nápoles 35 llevaba viviendo en el predio por 35 años, su vida cambió en un instante. La mayoría de los inquilinos no pudieron darse el lujo o permitirse quedarse en la colonia Juárez. El [06600] -Plataforma Vecinal y Observatorio de la Colonia Juárez y organizadores han perdido el contacto con muchos vecinos desalojados. <br> <br> Posterior a los desalojos de Diciembre del 2020, desarrolladores inmobiliarios renovaron drásticamente los dos edificios y en Octubre del 2023, el <em> mega-host” </em> Virtual Homes comenzó a promocionar el edificio bajo en nombre de <em> Pandora </em> y abrieron sus puertas para alojamiento de corto plazo. Promocionando 40 unidades de Airbnb, Pandora no solo participó en el desalojo de las familias, sino al mismo tiempo alteró dramáticamente el vecindario donde se ubica.',
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
            description:'Según los mapas y los testimonios personales, Airbnb ha tenido un tremendo impacto en las vidas diarias de los habitantes de la alcaldía Cuauhtémoc. En el caso de las remodelaciones de Dinamarca 77 y <em> Pandora </em>, la vida de los inquilinos han sido transformadas. Primero a través de los desalojos violentos que se vieron forzados a vivir en carne propia, pero también al no poder encontrar vivienda dentro de sus limitaciones en la Colonia Juárez. <br> <br> Datos disponibles [4] acerca de los alquileres promedio en la Colonia Juárez muestran un incremento de precios diferente al de otras colonias y la Ciudad de México en sí. Se observa este incremento especialmente en 2022, después de que el turismo global se “restableciera” al eliminarse las restricciones generadas post Covid-19. Este incremento está relacionado en parte por la reducción de unidades habitacionales disponibles para alquiler, ahora presentadas como alquiler de corta estancia y precios elevados. <br> <br> Esto es causado en parte por el incremento de Airbnbs en la zona ya que desestabilizan el precio de las unidades de renta, y al mismo tiempo eliminan unidades habitacionales del mercado. Unidades que después reingresan al mercado como alojamiento de corto plazo y tarifas de alojamiento elevadas. La gráfica representa la importancia que tiene el nivel colonia cuando se refiere al impacto que tiene Airbnb en los precios de renta, ya que usar datos generales de toda la ciudad, no visibiliza el impacto generado por Airbnb.',
            
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
            description:'El incremento de las unidades de Airbnb también impacta los tipos de negocios que hay en la zona, con cafés, restaurantes, tiendas y boutiques de lujo que emergen para satisfacer las necesidades de los consumidores de élite y/o extranjeros [5]. Esto es abiertamente observado al caminar por la colonia Juárez. La emergencia de edificios Airbnb también significa el desplazamiento forzado de locales comerciales. Por ejemplo, la conversión de Dinamarca 77 a unidades de Airbnb también ha desplazado económicamente restaurantes y tienditas de la esquina a nivel calle, transformando estos espacios comerciales en boutiques de lujo. <br> <br> El <em> blanqueamiento  </em> de estos lugares también ha creado una representación alternativa del vecindario, una versión refinada de las viejas fachadas porfirianas. Nosotros junto a la [06600]- Plataforma Vecinal y Observatorio de la Colonia Juárez llamamos a este proceso  <em> blanqueamiento por despojo </em>  [6]. Blanqueamiento en estos lugares no solo se refiere al proceso donde inquilinos extranjeros llegan a los edificios, pero también como los edificios son pintados en escalas de color “neutrales”, indicando que el despojo habitacional no solo es un proceso económico pero también es un proceso racial. <br> <br> Otras instancias de despojos masivos en la Colonia Juárez, como fue la expulsión de 20 familias Mazahuas de Turín 46 en Octubre del 2021, ilustran cómo estos procesos de desalojo violento y forzado han sido normalizados en las vidas de aquellos que se les considera menor valor en los extensos procesos de racialización y territorialidad en México [7]. Considerando que los inquilinos de bajos recursos son aquellos que son expulsados para crear espacio a las élites extranjeras y nacionales, en este contexto la Colonia Juárez es inscrita como exclusiva, un espacio blanqueado que tiene un impacto visceral de los arrendatarios en su día a día.',
            
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
            imageCaption: 'Captura de pantalla, tomada de las redes sociales del Gobierno de la Ciudad de México, promoviendo su apoyo a trabajadores remotos.',
            description: 'El blanqueamiento de Airbnb y el impacto que tiene en las poblaciones locales no es natural ni inevitable, pero un proceso que se ha ejercido intencionalmente. En Octubre 2022 Airbnb anunció que tendría una colaboración con la ciudades de México anunciando explícitamente querer “promocionar la ciudad como un centro global para los trabajadores remotos… y como Capital del turismo creativo”  [8]. De igual manera el anuncio afirmó que Airbnb proveería oportunidades económicas a los mexicanos (por medio de la industria del turismo). Sin embargo desde ese anuncio la Ciudad de México ha dado marcha atrás al recibimiento de nómadas digitales. <br> <br> En 2024 el Gobierno de la Ciudad de México implementó nuevas regulaciones relacionadas a Airbnb y otras plataformas de alquiler a corto plazo, llamando a la creación de un padrón de anfitriones donde estarían documentados los números de identificación fiscal y  registro de propiedad [9] . En Septiembre 2024 el Gobierno de la Ciudad de México establece que mientras el padrón no ha sido finalizado, los <em> hosts </em> no podrán renovar sus licencias de operación si las tasas de ocupación son mayores al 50%, al igual que restringir su habilidad de listar nuevas propiedades o extender períodos de alquiler.  <br> <br> La compañía de Airbnb ha financiado campañas locales donde los hosts son retratados como negocios familiares que benefician a las economías locales. Sin embargo las unidades listadas desde el 2022 en Airbnb no son negocios locales, pero propiedades manejadas por <em> mega-landlords </em> cuya presencia ha incrementado los precios de renta en la Colonia Juárez y en otras colonias donde hay una presencia grande de Airbnb.',
            
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
            title: 'El rol de Airbnb en la financiarización de la vivienda',
            image: './images/proptech.png',
            imageCaption: 'Una industria profesional sobre las plataformas tecnológicas ha emergido en distintos mercados de Bienes Raíces en Latinoamérica, estás incluyen varias empresas que se dedican específicamente a las rentas de corto plazo. ',
            // image: './images/tulum_beach.jpg',
            description: 'Las compañías que son dueñas u ofrecen el <em> management </em> de edificios como Dinamarca 77 y Pandora compran propiedades, que no ven como hogares (a diferencia de quienes fueron desalojados), pero como sitios donde pueden generar ganancias. Este fenómeno es conocida como financiarización de la vivienda, donde se trata a unidades habitacionales como un activo financiero en lugar de ser un derecho humano [10]. <br> <br> Aunque la financiarización de la vivienda no es proceso nuevo, el impacto que ha generado, se ha visto magnificado por medio de las plataformas digitales. Los <em> smartphones </em> y las <em> apps </em> (la generación de datos y las capacidades analíticas que habilita) ayudan a los inversionistas manejar complejos portafolios de propiedades, y mantenerlos en crecimiento [11]. Ellos habilitan la financiarización de la vivienda, a velocidades y escalas impresionantes, con un incremento en la ganancia que generan. <br> <br> Las plataformas de alquiler a corto plazo, crean nuevas oportunidades para este nuevo tipo de financiarización. Estos alquileres están diseñados para una nueva clase de inquilinos, trabajadores remotos adinerados (en su mayoría turistas extranjeros) quienes pueden permitirse pagar rentas mucho más caras que a los locales. Esto también pone en riesgo las regulaciones y protecciones dadas a los inquilinos de largo plazo, ya que Airbnb da los <em> Hosts </em>más flexibilidades y control sobre sus propiedades [12]. Para inversionistas como lo son Mr. W y Virtual Homes, el potencial de ganancia es demasiado grande, como para ser ignorado. <br> <br> Este fenómeno no es único de la Ciudad de México [13]. Una industria conformada por <em> property managers </em>, caseros, y plataformas de bienes raíces ha  surgido en conjunto con Airbnb en ciudades alrededor del mundo. Las boutiques y las fachadas de la CSM son una expresión de un sistema global que valora las inversiones de capital y la generación de ganancias, sobre las vidas y comunidades humanas.',
            
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
            title: ' El Barrio es de Quien lo Trabaja...',
            image: './images/juarez_conclusion.png',
            imageCaption: 'Murales como este son una de las maneras que los vecinos de la Colonia Juárez resisten el Blanqueamiento por Despojo, al mismo tiempo visibilizan sus lucha por la Colonia. ',
            // image: './images/tulum_beach.jpg',
            description: 'Mientras que los gobiernos municipales han comenzado a limitar el crecimiento de plataformas como Airbnb, no es claro que tan aplicadas y exitosas serán las nuevas reglamentaciones. Los datos disponibles para Airbnb en la Alcaldía Cuahutémoc se han mantenido relativamente estables a lo largo del año. Mientras los incremento de golpe observados en el periodo de 2022-2023 se han ralentizado, los miles de unidades de Airbnb que fueron establecidas se mantienen en el mercado.  Los nómadas digitales continúan tomando <em> selfies </em> en las calles de la Ciudad de/ México, y la gentrificación continúa modificando el paisaje cultural y económico de la ciudad. <br> <br> Sin embargo, residentes como los de la Juárez no aceptan estos cambios como parte de un futuro inevitable. Mientras que el blanqueamiento por despojo y la gentrificación son procesos que se mantienen activos, y están fundamentados en largos procesos de despojo que se han vivido históricamente en la Ciudad de México. Aún así, los Juaricuas no han podido ser disuadidos, y continúan practicando en su día a día diferentes y creativas formas de resistencia ante el Airbnb y otras formas de especulación capitalista en su colonia. Estos modelos de resistencia son visibles y directos, como lo son afiches y murales en edificios donde los residentes resisten el desplazamiento. Otros son menos obvios como el señor de los tamales que continúa vendiendo comida, aún cuando los edificios del otro lado de la banqueta han sido blanqueados. Los Juaricuas defienden su derecho de mantenerse en su colonia, y en sus casas. <em>El barrio es de quien lo trabaja. La lucha sigue. </em>',
            
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
            title: 'The People of Proyecto Juaricua',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            description: '<strong> Margaret Marietta Ramírez</strong>, (Dra. en Geografía) es la Directora Asociada de Estudios Chicana/o- Latina/o de la Universidad de Stanford, California. También es Profesora Adjunta del Departamento de Geografía de la Universidad Simon Fraser, Canadá.  MMR es una investigadora que ha dedicado más de una década al estudio de los efectos de la gentrificación en comunidades históricamente marginalizadas en el área de San Francisco. Sus trabajos en gentrificación, justicia habitacional y movimientos sociales han sido publicados en Environment & Planning D, Urban Geography, IJURR Online, y Antipode. También es Co-Editora de el Anti-Eviction Mapping Project (2021) colección Counterpoints: A Bay Area Atlas of Displacement and Resistance. MMR creció explorando la Ciudad de México durante el verano mientras visitaba a su familia, siendo desde su infancia una fuerte conexión y cariño por la Ciudad de México y sus familiares que viven en ella. <br> <br> <strong> Gabrielle Wong </strong> es una estudiante de licenciatura de la Universidad Simon Fraser, se graduará en Junio 2025 con una Licenciatura en Geografía Humana, una especialidad en Análisis de Datos para las Ciencias Sociales y un certificado en Estudios Urbanos. Este proyecto le ha permitido observar la vivacidad, creatividad y resiliencia de los habitantes de la Ciudades de México y sus diferentes vecindarios que  encaran el desplazamiento. <br> <br>  <strong> Andrea M. López </strong> es una estudiante de licenciatura en Simon Fraser University. Actualmente se encuentra trabajando en su Licenciatura en Geografía Humana, una especialidad en Ciencias de los Sistemas de Información Geográficos y un certificado en Estudios Urbanos. Nació y creció en las calles de la Ciudad de México, y el trabajar en esté proyecto le ha dado nuevos significados en las calle donde creció. <br> <br> <strong> Sergio González </strong> es un activista urbano por la Defensa del Territorio y el Derecho a la Ciudad que busca mitigar las 4D’s: Desplazamiento Forzado, Despojo, Desalojo y Desarraigo provocadas por los efectos del Blanqueamiento por despojo, termino polisémico Juaricua que la academia nombra con el anglicismo Gentrificación. Es integrante y co-fundador de la [ 06600 ] - Plataforma Vecinal y Observatorio de la Colonia Juárez y de Juaricua TV, medio de difusión vecino barrial en la Gran Ciudad de México. Ha sido dos veces desplazado por la presión inmobiliaria y ha logrado prevalecer en el territorio defendiendo el derecho al Arraigo Vecinal.<br> <br> <br> <em> <strong> Esté proyecto fue financiado por el Concilio de Ciencias Sociales y Humanidades del Gobierno de Canadá (SSHRC) Insight Development Research Grant y con el apoyo del <a href=\"https://antievictionmap.com\" style=\"color:#ffffff;\" target=\"_blank\">Anti-Eviction Mapping Project</a>  y los datos de <a href=\"https://insideairbnb.com/\" style=\"color:#ffffff;\" target=\"_blank\">Inside Airbnb.</a>. </em> </strong>',
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
            title: 'Endnotes',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            description: "[1] Quote from the blog <em> <a href = 'https://digitalnomadlifestyle.com/2024/06/14/mexico-city-the-complete-digital-nomad-guide/' style='color:#ffffff;' >Digital Nomad Lifestyle </a> </em>. <br> <br> [2]In the latter half of 2024, the global company <a href = 'https://www.theblueground.com/' style='color:#ffffff;' >Blueground </a> added nearly 150 units to their listings in CDMX. Although they have slightly fewer units than Mr. W and Virtual Homes in Mexico City, they are expanding at a faster rate and are much more established globally, with collections of short-term rentals in five continents. <br> <br>  [3] Figure from <a href = 'https://english.elpais.com/international/2022-12-13/mr-w-the-mysterious-airbnb-broker-in-mexico-city.html_' style='color:#ffffff;'> EL PAÍS </a> <br> <br> [4] Data from <a href = 'https://www.inmuebles24.com/noticias/cdmx-renta/' style='color:#ffffff;' >Inmeubles24 </a>. The data that is provided only accounts for properties listed on this site. <br> <br> [5] See the research of <a href= ‘https://doi.org/10.1093/cjres/rsad009’ style='color:#ffffff;'>Hidalgo et al. (2023) </a> for more information. <br> <br> [6] Blanqueamiento por despojo was first discussed in <a href = ‘https://permanecerenlamerced.wordpress.com/2019/03/18/blanqueamiento-por-despojo-por-pablo-gaytan-santiago/’ style='color:#ffffff;'> work </a> by Pablo Gaytán Santiago, a researcher in the Department of Social Relations and the Communication and Politics Area at Universidad Autónoma Metropolitana-Xochimilco and a documentary filmmaker. Sergio González, lead organizer with the [06600] Plataforma Vecinal y Observatorio de la Colonia Juárez, also speaks to the terms origins within the Juaricuas’ housing movement.  <a href = 'https://journals.sagepub.com/doi/abs/10.1177/27541258231204004?journalCode=dusa' style='color:#ffffff;' >Ben Gerlofs and Ernesto López Morales (2023) </a> have also written on blanqueamiento por despojo in Mexico City.  <br> <br> [7] For more information, see Carla Escoffié’s book, <em> País sin techo: Ciudades, historias y luchas sobre la vivienda </em>, and the work of <a href = ‘https://doi.org/10.5354/0718-8358.2022.65649’ style='color:#ffffff;'> Linz et al. (2022) </a>. <br> <br> [8] See Airbnb’s announcement on this partnership <a href = ‘https://news.airbnb.com/cdmx-unesco-and-airbnb-announce-partnerships-to-promote-mexico-city-as-a-g/’ style='color:#ffffff;'> here </a>. <br> <br> [9] The full policy is available in the <a href = ‘https://data.consejeria.cdmx.gob.mx/portal_old/uploads/gacetas/31ad26cb85b412c0492e504ade4f23ab.pdf  style='color:#ffffff;'’> Gaceta Oficial de la Ciudad de Órgano de México 1330 </a>. <br> <br> [10] For more in-depth research on the global financialization of housing, see the work of <a href = ‘https://onlinelibrary.wiley.com/doi/full/10.1111/1468-2427.12062?casa_token=WQ035imkpzYAAAAA%3Av7XspjfGza1m6wvOawDp20aUKJ1RuCoKtUjoNoudnWlpWtw1t4uAXAfHFF-1DWDJ-u56oe50YAnNKWo’ style='color:#ffffff;'> Rolnik (2013) </a>,  <a href = ‘https://doi.org/10.1177/0042098014543704’ style='color:#ffffff;'> Fields & Uffer (2016) </a>, <a href = ‘https://onlinelibrary.wiley.com/doi/full/10.1111/1468-2427.12522?casa_token=0JoSEVSlzOgAAAAA%3AhlEZlRYTzeKzIPOgdp6WcxWECC-rvBA6i09ZuPuYOEhfrhZu4ufi4Fsgdu4-f0ONW-FMyRH3xxM2m5Y’ style='color:#ffffff;'> Aalbers (2017) </a>, <a href = ‘https://www.tandfonline.com/doi/full/10.1080/10511482.2019.1681491?casa_token=FXvnQMNUPFkAAAAA%3AKiGk-KjHTzLaXf7fTXQJdwAkVBbGMZpTIsCo0y0Ft_W7oEohcYHP0eC7X7V02miGKJEprmoAI6sO7A#abstract' style='color:#ffffff;'> Fernandez & Aalbers 2020 </a>, and <a href = ‘https://www.tandfonline.com/doi/full/10.1080/02723638.2024.2355061?casa_token=cMfFq2GBngkAAAAA%3A4ty_JaEpM5IV-SvPXSvWacjlqJnwQFJspl9Q_EplAGKJKHAWkX7vSiL1cmXs6oR1W4gETsXdd5_wBw’ style='color:#ffffff;''> Rolnik et al. (2024) </a>.<br> <br> [11] See <a href = ‘https://doi.org/10.1177/0308518X19846514’ style='color:#ffffff;'> Fields (2022) </a> for a discussion of digital technologies and their role in financial accumulation.  <br> <br> [12]  <a href = ‘https://doi.org/10.1016/j.cities.2023.104245’ style='color:#ffffff;'> Gil et al. (2023) </a> discuss the connections between short-term rental platforms and the financialization of housing in more detail.  <br> <br> [13]  <a href = ‘https://doi.org/10.1016/j.cities.2023.104245’ style='color:#ffffff;'> Gil et al. (2023) </a> and <a href = ‘https://www.routledge.com/Airbnb-Short-Term-Rentals-and-the-Future-of-Housing/Hoffman-SchmitterHeisler/p/book/9780367234188?srsltid=AfmBOopw8w0Cl8zsGoHmA01xS46pc48K1BZcN6ReEVTF1WzygKM0rk5y’ style='color:#ffffff;'> Hofman & Heisler’s (2020) </a> research both investigate the role of Airbnb in the financialization of housing in other cities.",
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