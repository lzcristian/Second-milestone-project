   var markers = [
    {
        "title": 'Madrid',
        "lat": '40.416775',
        "lng": '-3.703790',
        "description": '<b>MADRID</b><br> This is the capital and the biggest city of Spain. The heart of old Hapsburg Madrid is the portico-lined Plaza Mayor, and nearby is the baroque Royal Palace and Armory, displaying historic weaponry.'       
    },
    {
        "title": 'Valencia',
        "lat": '39.4666676',
        "lng": '-0.375000',
        "description": '<b>VALENCIA</b><br> The port city of Valencia lies on Spain’s southeastern coast, where the Turia River meets the Mediterranean Sea. It’s known for its City of Arts and Sciences, with futuristic structures including a planetarium, an oceanarium and an interactive museum.'
    },
    {
        "title": 'Barcelona',
        "lat": '41.385063',
        "lng": '2.173404',
        "description": '<b>BARCELONA</b><br> The cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes.'
    },
    {
        "title": 'Tenerife',
        "lat": '28.291565',
        "lng": '-16.629129',
        "description": '<b>TENERIFE</b><br> This is the largest of Spain’s Canary Islands, off West Africa. Tenerife may be best known for its Carnaval de Santa Cruz, a huge pre-Lent festival with parades, music, dancing and colorful costumes. The island has many beaches (with sands from yellow to black) and resort areas.'
    },
    {
        "title": 'Milan',
        "lat": '45.464203',
        "lng": '9.189982',
        "description": '<b>MILAN</b><br> A metropolis in Italy northern Lombardy region, is a global capital of fashion and design. Home to the national stock exchange, it is a financial hub also known for its high-end restaurants and shops. The Gothic Duomo di Milano cathedral and the Santa Maria delle Grazie convent houses Leonardo da Vinci mural “The Last Supper”.'
    },
    {
        "title": 'Rome',
        "lat": '41.902782',
        "lng": '12.496365',
        "description": '<b>ROME</b><br> The city is the capital and a special comune of Italy, as well as the capital of the Lazio region. The city has been a major human settlement for almost three millennia.'
    },
    {
        "title": 'Venice',
        "lat": '45.4371908',
        "lng": '12.3345898',
        "description": '<b>VENICE</b><br> The capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.'
    },
    {
        "title": 'Torino',
        "lat": '45.0677551',
        "lng": '7.6824892',
        "description": '<b>TORINO</b><br> This is the largest of Spain’s Canary Islands, off West Africa. Tenerife may be best known for its Carnaval de Santa Cruz, a huge pre-Lent festival with parades, music, dancing and colorful costumes. The island has many beaches (with sands from yellow to black) and resort areas.'
    },
    {
        "title": 'Athens',
        "lat": '37.9839412',
        "lng": '23.7283052',
        "description": '<b>ATHENS</b><br> Athens is at the heart of Ancient Greece, a powerful civilization and empire. The city is still dominated by 5th-century BC landmarks, including the Acropolis, a hilltop citadel topped with ancient buildings like the colonnaded Parthenon temple.'
    },
    {
        "title": 'Santorini',
        "lat": '36.4071112',
        "lng": '25.4566637',
        "description": '<b>SANTORINI</b><br> Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater).'
    },
    {
        "title": 'Mykonos',
        "lat": '37.4514226',
        "lng": '25.3923032',
        "description": '<b>MYKONOS</b><br> It is popularly known for its summer party atmosphere. Beaches such as Paradise and Super Paradise have bars that blare thumping music. Massive dance clubs attract world-renowned DJs and typically stay open well past dawn.'
    },
    {
        "title": 'Corfu',
        "lat": '39.591337',
        "lng": '19.8596189',
        "description": '<b>CORFU</b><br> An island off Greece’s northwest coast in the Ionian Sea, is defined by rugged mountains and a resort-studded shoreline. Its cultural heritage reflects years spent under Venetian, French and British rule before it was united with Greece in 1864.'
    },
    {
        "title": 'Lisbon',
        "lat": '38.7077507',
        "lng": '-9.1365919',
        "description": '<b>LISBON</b><br> Lisbon is Portugal hilly, coastal capital city. From imposing São Jorge Castle, the view encompasses the old city’s pastel-colored buildings, Tagus Estuary and Ponte 25 de Abril suspension bridge.'
    },
    {
        "title": 'Porto',
        "lat": '41.1494512',
        "lng": '-8.6107884',
        "description": '<b>PORTO</b><br> It is a coastal city in northwest Portugal known for its stately bridges and port wine production. In the medieval Ribeira (riverside) district, narrow cobbled streets wind past merchants’ houses and cafes. São Francisco Church is known for its lavish baroque interior with ornate gilded carvings.'
    },
    {
        "title": 'Madeira',
        "lat": '32.7517488',
        "lng": '-16.981752',
        "description": '<b>MADEIRA</b><br> An autonomous region of Portugal, is an archipelago comprising 4 islands off the northwest coast of Africa. It is known for its botanical gardens, namesake wine and warm, subtropical climate.'
    },
    {
        "title": 'Tavira',
        "lat": '37.1262493',
        "lng": '-7.6499121',
        "description": '<b>TAVIRA</b><br> A small city on Portugal’s Algarve coast, it straddles the Gilão River, which reaches the sea through the inlets and lagoons of Ria Formosa Natural Park. Tavira Island has a long, sandy beach, plus salt pans that attract flamingos, spoonbills and other wading birds.'
    },
    {
        "title": 'Paris',
        "lat": '48.8566969',
        "lng": '2.3514616',
        "description": '<b>PARIS</b><br> France capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.'
    },
    {
        "title": 'Lyon',
        "lat": '45.7578137',
        "lng": '4.8320114',
        "description": '<b>LYON</b><br> The capital city in France’s Auvergne-Rhône-Alpes region, sits at the junction of the Rhône and Saône rivers. Its center reflects 2,000 years of history from the Roman Amphithéâtre des Trois Gaules, medieval and Renaissance architecture in Vieux (Old) Lyon, to the modern Confluence district on Presquîle peninsula.'
    },
    {
        "title": 'Nice',
        "lat": '43.7009358',
        "lng": '7.2683912',
        "description": '<b>NICE</b><br> Capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly shores of the Baie des Anges. Founded by the Greeks and later a retreat for 19th-century European elite, the city has also long attracted artists. Former resident Henri Matisse is honored with a career-spanning collection of paintings at Musée Matisse.'
    },
    {
        "title": 'Marseille',
        "lat": '43.2961743',
        "lng": '5.3699525',
        "description": '<b>MARSEILLE</b><br> A port city in southern France, has been a crossroads of immigration and trade since its founding by the Greeks circa 600 B.C. At its heart is the Vieux-Port (Old Port), where fishmongers sell their catch along the boat-lined quay. Basilique Notre-Dame-de-la-Garde is a Romanesque-Byzantine church.'
    },
    {
        "title": 'Amsterdam',
        "lat": '52.3727598',
        "lng": '4.8936041',
        "description": '<b>AMSTERDAM</b><br> Is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk.'
    },
    {
        "title": 'Rotterdam',
        "lat": '51.9227828',
        "lng": '4.4787454',
        "description": '<b>ROTTERDAM</b><br> Rotterdam is a major port city in the Dutch province of South Holland. The Maritime Museum vintage ships and exhibits trace the city seafaring history. The 17th-century Delfshaven neighborhood is home to canalside shopping and Pilgrim Fathers Church, where pilgrims worshiped before sailing to America.'
    },
    {
        "title": 'Hague',
        "lat": '52.0799838',
        "lng": '4.3113461',
        "description": '<b>HAGUE</b><br> Is a city on the North Sea coast of the western Netherlands. Its Gothic-style Binnenhof (or Inner Court) complex is the seat of the Dutch parliament, and 16th-century Noordeinde Palace is the king’s workplace. The city is also home to the U.N.’s International Court of Justice, headquartered in the Peace Palace, and the International Criminal Court.'
    },
    {
        "title": 'Utrecht',
        "lat": '52.0809856',
        "lng": '5.127684',
        "description": '<b>UTRECHT</b><br> Is a city in the Netherlands, known for its medieval center. It has tree-lined canals, Christian monuments and a venerable university. The iconic Domtoren, a 14th-century bell tower with city views, stands opposite the Gothic Cathedral of St. Martin on central Domplein square.'
    },
    {
        "title": 'Munich',
        "lat": '48.1371079',
        "lng": '11.5753822',
        "description": '<b>MUNICH</b><br> Munich, Bavaria’s capital, is home to centuries-old buildings and numerous museums. The city is known for its annual Oktoberfest celebration and its beer halls, including the famed Hofbräuhaus, founded in 1589.'
    },
     {
        "title": 'Berlin',
        "lat": '52.5170365',
        "lng": '13.3888599',
        "description": '<b>BERLIN</b><br> Germany’s capital, dates to the 13th century. Reminders of the city turbulent 20th-century history include its Holocaust memorial and the Berlin Wall graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification.'
    },
     {
        "title": 'Frankfurt',
        "lat": '50.1106444',
        "lng": '8.6820917',
        "description": '<b>FRANKFURT</b><br> A central German city on the river Main, is a major financial hub that is home to the European Central Bank. It is the birthplace of famed writer Johann Wolfgang von Goethe, whose former home is now the Goethe House Museum.'
    },
     {
        "title": 'Hamburg',
        "lat": '53.550341',
        "lng": '10.000654',
        "description": '<b>HAMBURG</b><br> Is a major port city in northern Germany, is connected to the North Sea by the Elbe River. It is crossed by hundreds of canals, and also contains large areas of parkland. Near its core, Inner Alster lake is dotted with boats and surrounded by cafes.'
    },
     {
        "title": 'Larnaca',
        "lat": '34.9236095',
        "lng": '33.6236184',
        "description": '<b>LARNACA</b><br> Is a port city on the south coast of Cyprus. It is known for Finikoudes Beach, a sandy strip in the city center backed by a palm-lined seaside promenade. Buzzing bars line the waterfront at Mackenzie Beach.'
    },
     {
        "title": 'Nicosia',
        "lat": '35.1739302',
        "lng": '33.364726',
        "description": '<b>NICOSIA</b><br> Also known as Lefkosia, is the divided capital city of Cyprus. South of the border, on the Greek side, the Cyprus Museum has archaeological finds from the Neolithic to Byzantine periods, including the Aphrodite of Soloi statue.'
    },
     {
        "title": 'Limassol',
        "lat": '34.6852901',
        "lng": '33.0332657',
        "description": '<b>LIMASSOL</b><br> Is a city on the southern coast of Cyprus. It’s known for the centuries-old Limassol Castle, home to the Cyprus Medieval Museum and its collection of pottery and tombstones. On the seafront is the Prokymea (Molos) Sculpture Park, with sculptures by Cypriot, Greek and international artists.'
    },
     {
        "title": 'Paphos',
        "lat": '34.7743988',
        "lng": '32.4231586',
        "description": '<b>PAPHOS</b><br> Is a city on the southwest coast of the Mediterranean island of Cyprus. Inhabited since Neolithic times, it has several sites relating to the cult of goddess Aphrodite, whose mythical birthplace was at Old Paphos (Kouklia).'
    },

    ];
    window.onload = function () {
        initMap();
    }


    function initMap() {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("clMap"), mapOptions);
 
        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title
            });
 
            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {                    
                    infoWindow.setContent("<div style = 'width:300px;min-height:40px'>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
    }