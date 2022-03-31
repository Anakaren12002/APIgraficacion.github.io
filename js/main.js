
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(dibujargrafica);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function dibujargrafica() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Champiñones', 2],
          ['Cebollas', 0.5],
          ['Aceitunas', 1],
          ['Queso', 2],
          ['Jamon', 1],
          ['Piña', .5],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'¿Cuánta pizza comistes anoche?',
                       'width':450,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('grafica'));
        chart.draw(data, options);
      }

      google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTitleSubtitle);

function drawTitleSubtitle() {
      var data = google.visualization.arrayToDataTable([
        ['Ciudad', '2010 Poblacion', '2000 Poblacion'],
        ['Ciudad de Mexico, CDMX', 8175000, 8008000],
        ['Monterrey, Mon', 3792000, 3694000],
        ['Sinaloa, Sin.', 2695000, 2896000],
        ['Pachuca, Hgo', 2099000, 1953000],
        ['Puebla, Pue', 1526000, 1517000]
      ]);

      var materialOptions = {
        chart: {
          title: 'Población en las ciudades mas grandes de México',
          subtitle: 'Basada en el ultimo censo de población INEGI'
        },
        hAxis: {
          title: 'Total población',
          minValue: 0,
        },
        vAxis: {
          title: 'Ciudad'
        },
        bars: 'horizontal'
      };
      var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
      materialChart.draw(data, materialOptions);
    }


    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChartdonu);
    function drawChartdonu() {
      var data = google.visualization.arrayToDataTable([
        ['Tarea', 'Horas por día'],
        ['Trabajo',     11],
        ['Comida',      2],
        ['Comunidad',  2],
        ['Ve TV', 2],
        ['Dormir',    7]
      ]);

      var options = {
        title: 'Mis actividades por día',
        pieHole: 0.4,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }

    google.charts.load('current', {
        'packages':['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['País', 'Población'],
          ['Germania', 200],
          ['Estados Unidos', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(Dinosaur);
      function Dinosaur() {
        var data = google.visualization.arrayToDataTable([
          ['Dinosaur', 'Length'],
          ['Acrocanthosaurus (top-spined lizard)', 12.2],
          ['Albertosaurus (Alberta lizard)', 9.1],
          ['Allosaurus (other lizard)', 12.2],
          ['Apatosaurus (deceptive lizard)', 22.9],
          ['Archaeopteryx (ancient wing)', 0.9],
          ['Argentinosaurus (Argentina lizard)', 36.6],
          ['Baryonyx (heavy claws)', 9.1],
          ['Brachiosaurus (arm lizard)', 30.5],
          ['Ceratosaurus (horned lizard)', 6.1],
          ['Coelophysis (hollow form)', 2.7],
          ['Compsognathus (elegant jaw)', 0.9],
          ['Deinonychus (terrible claw)', 2.7],
          ['Diplodocus (double beam)', 27.1],
          ['Dromicelomimus (emu mimic)', 3.4],
          ['Gallimimus (fowl mimic)', 5.5],
          ['Mamenchisaurus (Mamenchi lizard)', 21.0],
          ['Megalosaurus (big lizard)', 7.9],
          ['Microvenator (small hunter)', 1.2],
          ['Ornithomimus (bird mimic)', 4.6],
          ['Oviraptor (egg robber)', 1.5],
          ['Plateosaurus (flat lizard)', 7.9],
          ['Sauronithoides (narrow-clawed lizard)', 2.0],
          ['Seismosaurus (tremor lizard)', 45.7],
          ['Spinosaurus (spiny lizard)', 12.2],
          ['Supersaurus (super lizard)', 30.5],
          ['Tyrannosaurus (tyrant lizard)', 15.2],
          ['Ultrasaurus (ultra lizard)', 30.5],
          ['Velociraptor (swift robber)', 1.8]]);

        var options = {
          title: 'Dionosaurios mas grandes  (metros)',
          legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('chart_divH'));
        chart.draw(data, options);
      }

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(magadagascar);

      function magadagascar() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Mes', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          title : 'Meses de producción de cafe por país',
          vAxis: {title: 'CAFE'},
          hAxis: {title: 'Mes'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_MADAGASCAR'));
        chart.draw(data, options);
      }

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(pac);
      function pac() {
        var data = google.visualization.arrayToDataTable([
          ['Pac Man', 'Percentage'],
          ['Hombres', 75],
          ['Mujeres', 25]
        ]);
  
        var options = { 'title':'¿Cuántos hombres/mujeres hay?',
          legend: 'none',
          pieSliceText: 'none',
          pieStartAngle: 135,
          tooltip: { trigger: 'none' },
          slices: {
            0: { color: 'yellow' },
            1: { color: 'cyan' }
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('pacman'));
        chart.draw(data, options);
      }