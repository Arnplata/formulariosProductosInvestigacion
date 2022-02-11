
function Proyecto(nombre,profesor,profesorAux,financiamiento1) {
    this.nombre=nombre;
    this.profesor=profesor;
    this.profesorAux=profesorAux;
    this.financiamiento1=financiamiento1;
    
}

function Publicacion(nombrePublicacion,nombreProyecto,tipoPublicacion,tipoFormato,isbn,issn,doi,uri) {
    this.nombrePublicacion=nombrePublicacion;
    this.nombreProyecto=nombreProyecto;
    this.tipoPublicacion=tipoPublicacion;
    this.tipoFormato=tipoFormato;
    this.isbn=isbn;
    this.issn=issn;
    this.doi=doi;
    this.uri=uri;
}

function Tesis(nombreTesis,nombreProyecto,gradoTesis,nombreAlumno,fechaTermino) {
    this.nombreTesis=nombreTesis;
    this.nombreProyecto=nombreProyecto;
    this.nombreAlumno=nombreAlumno;
    this.fechaTermino=fechaTermino;
    this.gradoTesis=gradoTesis;
}

function ArticuloCientifico(nombreArticulo,nombreProyecto,nombreAlumno,gradoAlumno,fechaPublicacion,isbn,issn,doi,uri) {
    this.nombreProyecto=nombreProyecto;
    this.nombreArticulo=nombreArticulo;
    this.nombreAlumno=nombreAlumno;
    this.gradoAlumno=gradoAlumno;
    this.fechaPublicacion=fechaPublicacion;
    this.isbn=isbn;
    this.issn=issn;
    this.doi=doi;
    this.uri=uri;
}

function DesarrolloTecnologico(nombreDelDesarrollo,nombreProyecto,nombreResponsable,fechaPublicacion) {
    this.nombreDelDesarrollo=nombreDelDesarrollo;
    this.nombreProyecto=nombreProyecto;
    this.nombreResponsable=nombreResponsable;
    this.fechaPublicacion=fechaPublicacion;
}

function PonenciaEnCongreso(nombrePonencia,nombreProyecto,nombreCongreso,lugarPonencia,fechaPublicacion) {
    this.nombreProyecto=nombreProyecto;
    this.nombrePonencia=nombrePonencia;
    this.nombreCongreso=nombreCongreso;
    this.fechaPublicacion=fechaPublicacion;
    this.lugarPonencia=lugarPonencia;
  
}

function PatenteDerechoDeAutor(nombreAutor,nombreProyecto,productoCientifico,fechaPublicacion) {
    this.nombreAutor=nombreAutor;
    this.nombreProyecto=nombreProyecto;
    this.productoCientifico=productoCientifico;
    this.fechaPublicacion=fechaPublicacion;
}

function MapaBaseDeDatos(nombreMapaBase,nombreProyecto,fechaCreacion) {
    this.nombreMapaBase=nombreMapaBase;
    this.nombreProyecto=nombreProyecto;
    this.fechaCreacion=fechaCreacion;
}

function PublicacionElectronica(nombreArticulo,nombreProyecto,fechaPublicacion,isbn,issn,doi,uri) {
    this.nombreArticulo=nombreArticulo;
    this.nombreProyecto=nombreProyecto;
    this.isbn=isbn;
    this.issn=issn;
    this.doi=doi;
    this.uri=uri;
    this.fechaPublicacion=fechaPublicacion;
}

function ActividadAcademicaLocalInternacional(nombreActividad,nombreProyecto,tipoActividad,nacionalInternacional,nombreInstitucion,lugarEvento,fechaEvento) {
    this.nombreActividad=nombreActividad;
    this.nombreProyecto=nombreProyecto;
    this.tipoActividad=tipoActividad;
    this.nacionalInternacional=nacionalInternacional;
    this.nombreInstitucion=nombreInstitucion;
    this.lugarEvento=lugarEvento;
    this.fechaEvento=fechaEvento;
}

function AlumnoParticipanteProyInv(nombreAlumno,nombreProyecto,gradoAlumno,tipoProyecto,fecha) {
    this.nombreAlumno=nombreAlumno;
    this.nombreProyecto=nombreProyecto;
    this.gradoAlumno=gradoAlumno;
    this.tipoProyecto=tipoProyecto;
    this.fecha=fecha;
}

function EstanciaAcademica(nombreInstitucion,nombreProyecto,nacionalInternacional,lugarEstancia,fecha) {
    this.nombreInstitucion=nombreInstitucion;
    this.nombreProyecto=nombreProyecto;
    this.nacionalInternacional=nacionalInternacional;
    this.fecha=fecha;
    this.lugarEstancia=lugarEstancia;
}

function ActividadesDivulgacionCientifica(nombreActividad,nombreProyecto,tipoActividad,fechaActividad) {
    this.nombreActividad=nombreActividad;
    this.nombreProyecto=nombreProyecto;
    this.tipoActividad=tipoActividad;
    this.fechaActividad=fechaActividad;

}

var nombresProductos = ["PROYECTOS DE INVESTIGACIÓN","PUBLICACIONES","TESIS","ARTICULOS CIENTIFICOS PUBLICADOS","Desarrollo Tecnológico","PONENCIAS EN CONGRESOS","PATENTES Y/O DERECHOS DE AUTOR","MAPAS Y BASES DE DATOS","PUBLICACIONES ELECTRÓNICAS","PARTICIPACIÓN EN ACTIVIDADES ACADÉMICAS NACIONALES Y/O INTERNACIONALES","ALUMNOS PARTICIPANTES EN PROYECTOS DE INVESTIGACIÓN","ESTANCIAS ACADÉMICAS","PARTICIPACIÓN EN EVENTOS DE DIVULGACIÓN Y DIFUSIÓN CIENTÍFICA ORGANIZADA POR LA ENTIDAD"]


var listaProyectos=[{
    "nombre": "Nombre de Proyecto",
    "profesor": "Profesor Titular",
    "profesorAux": "Profesor Auxiliar",
    "financiamiento1": "Tipo de Financiamiento"
}];

var listaPublicacion=[{
    "nombrePublicacion": "Nombre de la Publicación",
    "nombreProyecto": "Nombre del Proyecto",
    "tipoPublicacion": "Tipo de Publicacion",
    "tipoFormato": "Formato",
    "isbn": "ISBN",
    "issn": "ISSN",
    "doi": "DOI",
    "uri": "URI"
}];

var listaTesis=[{
    "nombreTesis": "Nombre de Tesis",
    "nombreProyecto": "Nombre de Proyecto",
    "gradoTesis": "Grado de la Tesis",
    "nombreAlumno": "Nombre del Alumno",
    "fechaTermino": "Fecha de término"
},{
    "nombreTesis": "Tesis de prueba",
    "nombreProyecto": "proyecto de prueba",
    "gradoTesis": "Grado de prueba",
    "nombreAlumno": "alumno de prueba",
    "fechaTermino": "fecha de prueba"
}];

var listaArticuloCientifico=[{
    "nombreArticulo": "Nombre del Artículo",
    "nombreProyecto": "Nombre de Proyecto",
    "nombreAlumno": "Nombre del Alumno",
    "gradoAlumno": "Grado del Alumno",
    "fechaPublicacion": "Fecha de Publicación",
    "isbn": "ISBN",
    "issn": "ISSN",
    "doi": "DOI",
    "uri": "URI"
}];

var listaDesarrolloTecnologico=[{
    "nombreDelDesarrollo": "Nombre del Desarrollo",
    "nombreProyecto": "Nombre de Proyecto",
    "nombreResponsable": "Nombre del Responsable",
    "fechaPublicacion": "Fecha"
}];

var listaPonenciaEnCongreso=[{
    "nombrePonencia": "Nombre de Ponencia",
    "nombreProyecto": "Nombre de Proyecto",
    "nombreCongreso": "Nombre de Congreso",
    "lugarPonencia": "Lugar de Ponencia",
    "fechaPublicacion": "Fecha"
}];

var listaPatenteDerechoDeAutor=[{
    "nombreAutor": "Nombre de Autor",
    "nombreProyecto": "Nombre de Proyecto",
    "productoCientifico": "Producto del quehacer científico",
    "fechaPublicacion": "Fecha"
}];

var listaMapaBaseDeDatos=[{
    "nombreMapaBase": "Nombre del mapa y/o bases de datos",
    "nombreProyecto": "Nombre de Proyecto",
    "fechaCreacion": "Fecha"
}];

var listaPublicacionElectronica=[{
    "nombreArticulo": "Nombre del Artículo",
    "nombreProyecto": "Nombre de Proyecto",
    "fechaPublicacion": "Fecha",
    "isbn": "ISBN",
    "issn": "ISSN",
    "doi": "DOI",
    "uri": "URI",
    
}];

var listaActividadAcademicaLocalInternacional=[{
    "nombreActividad": "Nombre de la Actividad",
    "nombreProyecto": "Nombre de Proyecto",
    "tipoActividad": "Tipo de la actividad",
    "nacionalInternacional": "Nacional / Internacional",
    "nombreInstitucion": "Nombre de la Institución",
    "lugarEvento": "Lugar del Evento",
    "fechaEvento": "Fecha"
}];

var listaAlumnoParticipanteProyInv=[{
    "nombreAlumno": "Nombre del Alumno",
    "nombreProyecto": "Nombre de Proyecto",
    "gradoAlumno": "Grado del Alumno",
    "tipoProyecto": "Tipo de Proyecto",
    "fecha": "Fecha"
}];

var listaEstanciaAcademica=[{
    "nombreInstitucion": "Nombre de la Institución",
    "nombreProyecto": "Nombre de Proyecto",
    "nacionalInternacional": "Nacional / Internacional",
    "lugarEstancia": "Lugar de Estancia",
    "fecha": "Fecha"
}];

var listaActividadesDivulgacionCientifica=[{
    "nombreActividad": "Nombre de Actividad",
    "nombreProyecto": "Nombre de Proyecto",
    "tipoActividad": "Tipo de Actividad",
    "fechaActividad": "Fecha de Actividad"
}];

var listaNombres=[];

function imprimeFormulario(i) {
    if (i>0) {
        let cajaFormulario = document.getElementById("cajaForm");
        cajaFormulario.innerHTML=formularios[i];
        agregarProyectos()    
    } else {
        let cajaFormulario = document.getElementById("cajaForm");
        cajaFormulario.innerHTML=formularios[i];
    }
    
}

function getFormulariosIndx() {
    let tablaABorrar = document.getElementsByClassName("tabla")[0]
    let indice = Number(document.getElementById("productos").value) 
    lista = (
        indice ==  0  ? listaProyectos:
        indice ==  1  ? listaPublicacion:
        indice ==  2  ? listaTesis:
        indice ==  3  ? listaArticuloCientifico:
        indice ==  4  ? listaDesarrolloTecnologico:
        indice ==  5  ? listaPonenciaEnCongreso:
        indice ==  6  ? listaPatenteDerechoDeAutor:
        indice ==  7  ? listaMapaBaseDeDatos:
        indice ==  8  ? listaPublicacionElectronica:
        indice ==  9  ? listaActividadAcademicaLocalInternacional:
        indice ==  10 ? listaAlumnoParticipanteProyInv:
        indice ==  11 ? listaEstanciaAcademica :
        indice ==  12 ? listaActividadesDivulgacionCientifica : "");
    tablaABorrar.remove();
    imprimeFormulario(indice)
    genera_tabla(lista)

}

function imprime_Resumen(){
    
    let main = document.getElementById("mainCont");
    
    document.getElementById("contForm").innerHTML=``;
    document.getElementById("tableCont").innerHTML=``;
    
    let cajaResumen = document.createElement("div")
    cajaResumen.setAttribute("id", "cajaTabla")
    main.appendChild(cajaResumen)


    for (let indice = 0; indice < 13; indice++) {
        
      
      lista = (
        indice ==  0  ? listaProyectos:
        indice ==  1  ? listaPublicacion:
        indice ==  2  ? listaTesis:
        indice ==  3  ? listaArticuloCientifico:
        indice ==  4  ? listaDesarrolloTecnologico:
        indice ==  5  ? listaPonenciaEnCongreso:
        indice ==  6  ? listaPatenteDerechoDeAutor:
        indice ==  7  ? listaMapaBaseDeDatos:
        indice ==  8  ? listaPublicacionElectronica:
        indice ==  9  ? listaActividadAcademicaLocalInternacional:
        indice ==  10 ? listaAlumnoParticipanteProyInv:
        indice ==  11 ? listaEstanciaAcademica :
        indice ==  12 ? listaActividadesDivulgacionCientifica : "");
      
      let cajaTitulo = document.createElement("div") 
      let titulo = document.createTextNode(nombresProductos[indice] + ":");
      
      cajaTitulo.setAttribute("class", "titResumen");
      cajaTitulo.appendChild(titulo)
  
      if (lista.length > 1) {
        
        cajaResumen.appendChild(cajaTitulo)
        genera_tabla(lista)
      }
  
    }
  }

function genera_tablaResumen(lista) {

    // Obtener la referencia del elemento body
    //Contenedor donde imprimira la tabla
    var main = document.getElementById("mainCont");
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.setAttribute("id", "tablaResumen");
    
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas

    // Cantidad de productos
    for (var i = 0; i < lista.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");

      


      // cantidad de valores
  

        
        
        // de la hilera de la tabla
        let objetoProducto = lista[i];
        for (let key in objetoProducto) {

          if (i==0) {
            var celda = document.createElement("th");
            hilera.classList.add("anclado");
          }else{
            var celda = document.createElement("td");
          }
            

            var textoCelda = document.createTextNode(objetoProducto[key]);

            

            // haz que el nodo de texto sea el contenido de <td>, ubica el elemento <td> al final
            
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);

          }
       
        
    //   }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    main.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "1");
  }

function genera_tabla(lista) {
    console.log(lista);
    // Obtener la referencia del elemento body
    //Contenedor donde imprimira la tabla
    var cajaTabla = document.getElementById("cajaTabla");
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.setAttribute("id", "tablaResumen");
    tabla.setAttribute("class", "tabla");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas

    // Cantidad de productos
    for (var i = 0; i < lista.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      // cantidad de valores
        // de la hilera de la tabla
        let objetoProducto = lista[i];
        for (let key in objetoProducto) {

          if (i==0) {
            var celda = document.createElement("th");
            hilera.classList.add("anclado");
          }else{
            var celda = document.createElement("td");
          }
            

            var textoCelda = document.createTextNode(objetoProducto[key]);

            
            
            // haz que el nodo de texto sea el contenido de <td>, ubica el elemento <td> al final
            var cajaBtn = document.createElement("td")
            var boton = document.createElement("button")
            boton.setAttribute("id", `${lista}-${i}`)
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
            

          }
       
        
    //   }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
      if (i > 0) {
          hilera.appendChild(cajaBtn)
          cajaBtn.appendChild(boton)
      } else {
          var actionHder = document.createElement("th");
          actionHder.appendChild(document.createTextNode("Acciones"))
          hilera.appendChild(actionHder)
      }
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    cajaTabla.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "1");
  }





function capturar(t) {
    var tabla= document.getElementById("tablaResumen");
switch (t) {
    case 0:

        nuevoProyecto = new Proyecto(
            document.getElementById("nombreProy").value,
            document.getElementById("nombreProfesor").value,
            document.getElementById("nombreProfesorAux").value,
            document.formProyecto.tipoProy.value + document.getElementById("otroTipoProy").value,
            
        );
        console.log(nuevoProyecto);

        

        listaProyectos.push(nuevoProyecto);
            listaNombres.push(nuevoProyecto.nombre);
            tabla.innerHTML += ` <tr>
            
                <td>${nuevoProyecto.nombre}</td>
                <td>${nuevoProyecto.profesor}</td>
                <td>${nuevoProyecto.profesorAux}</td>
                <td>${nuevoProyecto.financiamiento1}</td>
                
            </tr>`;
            console.log(listaNombres);
    break;

    case 1:
        nuevoPublicacion = new Publicacion(
            document.getElementById("nombrePub").value,
            document.getElementById("proyectos").value,
            document.formPub.tipoPub.value,
            document.formPub.formatoPub.value,
            document.getElementById("isbn").value,
            document.getElementById("issn").value,
            document.getElementById("doi").value,    
            document.getElementById("uri").value
        );
        console.log(nuevoPublicacion);
        
        listaPublicacion.push(nuevoPublicacion);
            tabla.innerHTML += ` <tr>
            <td>${nuevoPublicacion.nombrePublicacion}</td>
            <td>${nuevoPublicacion.nombreProyecto}</td>
            <td>${nuevoPublicacion.tipoPublicacion}</td>
            <td>${nuevoPublicacion.tipoFormato}</td>
            <td>${nuevoPublicacion.isbn}</td>
            <td>${nuevoPublicacion.issn}</td>
            <td>${nuevoPublicacion.doi}</td>
            <td>${nuevoPublicacion.uri}</td>
                
                </tr>`;

    break;

    case 2:

        nuevoTesis = new Tesis(
            
            document.getElementById("nombreTesis").value,
            document.getElementById("proyectos").value,
            document.getElementById("gradTesis").value,
            document.getElementById("nombreAlumno").value,
            document.getElementById("fechaPub").value,
            
        );
        console.log(nuevoTesis);


        
        listaTesis.push(nuevoTesis);
            tabla.innerHTML += ` <tr>
                <td>${nuevoTesis.nombreTesis}</td>
                <td>${nuevoTesis.nombreProyecto}</td>
                <td>${nuevoTesis.gradoTesis}</td>
                <td>${nuevoTesis.nombreAlumno}</td>
                <td>${nuevoTesis.fechaTermino}</td>
                </tr>`;

    break;

    case 3:

        nuevoArtCient = new ArticuloCientifico(
            document.getElementById("nombreArtCient").value,
            document.getElementById("proyectos").value,
            document.getElementById("nombreAlumno").value,
            document.getElementById("gradAlmn").value,
            document.getElementById("fechaPub").value,
            document.getElementById("isbn").value,
            document.getElementById("issn").value,
            document.getElementById("doi").value,    
            document.getElementById("uri").value
        );
        
        listaArticuloCientifico.push(nuevoArtCient);
            tabla.innerHTML += ` <tr>
                <td>${nuevoArtCient.nombreArticulo}</td>    
                <td>${nuevoArtCient.nombreProyecto}</td>    
                <td>${nuevoArtCient.nombreAlumno}</td>
                <td>${nuevoArtCient.gradoAlumno}</td>
                <td>${nuevoArtCient.fechaPublicacion}</td>
                <td>${nuevoArtCient.isbn}</td>
                <td>${nuevoArtCient.issn}</td>
                <td>${nuevoArtCient.doi}</td>
                <td>${nuevoArtCient.uri}</td>
                
                </tr>`;
    break;

    case 4:
        nuevoDesarrolloTec = new DesarrolloTecnologico(
            document.getElementById("nombreDesTec").value,
            document.getElementById("proyectos").value,
            document.getElementById("nombreResponsable").value,
            document.getElementById("fechaPub").value
        );
        
        listaDesarrolloTecnologico.push(nuevoDesarrolloTec);
            tabla.innerHTML += `
            <tr>
                <td>${nuevoDesarrolloTec.nombreDelDesarrollo}</td>
                <td>${nuevoDesarrolloTec.nombreProyecto}</td>
                <td>${nuevoDesarrolloTec.nombreResponsable}</td>
                <td>${nuevoDesarrolloTec.fechaPublicacion}</td>
                
            </tr>`;
        
    break;

    case 5:

        nuevoPonenciaCongreso = new PonenciaEnCongreso(
            document.getElementById("nombrePonencia").value,
            document.getElementById("proyectos").value,
            document.getElementById("nombreCongreso").value,
            document.getElementById("lugarPonencia").value,
            document.getElementById("fechaPub").value
        );
        console.log(nuevoPonenciaCongreso);
        
        listaDesarrolloTecnologico.push(nuevoPonenciaCongreso);
            tabla.innerHTML += ` <tr>
                <td>${nuevoPonenciaCongreso.nombrePonencia}</td>
                <td>${nuevoPonenciaCongreso.nombreProyecto}</td>
                <td>${nuevoPonenciaCongreso.nombreCongreso}</td>
                <td>${nuevoPonenciaCongreso.lugarPonencia}</td>
                <td>${nuevoPonenciaCongreso.fechaPublicacion}</td>
                </tr>`;
            

    break;

    case 6:
        nuevoPatenteDerecho = new PatenteDerechoDeAutor(
            document.getElementById("nombreAutor").value,
            document.getElementById("proyectos").value,
            document.getElementById("productoQuehacer").value,
            document.getElementById("fechaPub").value,
        );
        console.log(nuevoPatenteDerecho);
        
        listaPatenteDerechoDeAutor.push(nuevoPatenteDerecho);
            tabla.innerHTML += ` <tr>
                <td>${nuevoPatenteDerecho.nombreAutor}</td>
                <td>${nuevoPatenteDerecho.nombreProyecto}</td>
                <td>${nuevoPatenteDerecho.productoCientifico}</td>
                <td>${nuevoPatenteDerecho.fechaPublicacion}</td>
                </tr>`;

    break;

    case 7:
        nuevoMapaBase = new MapaBaseDeDatos(
            document.getElementById("nombreMapBase").value,
            document.getElementById("proyectos").value,
            document.getElementById("fechaMapBase").value
        );
        console.log(nuevoMapaBase);
        
        listaMapaBaseDeDatos.push(nuevoMapaBase);
            tabla.innerHTML += ` <tr>
                <td>${nuevoMapaBase.nombreMapaBase}</td>
                <td>${nuevoMapaBase.nombreProyecto}</td>
                <td>${nuevoMapaBase.fechaCreacion}</td>
                </tr>`;

    break;
    case 8:
        nuevoPublicacionElec = new PublicacionElectronica(
            document.getElementById("nombreArtElec").value,
            document.getElementById("proyectos").value,
            document.getElementById("fechaArtElec").value,
            document.getElementById("isbn").value,
            document.getElementById("issn").value,
            document.getElementById("doi").value,
            document.getElementById("uri").value
        );
        console.log(nuevoPublicacionElec);
        
        listaPublicacionElectronica.push(nuevoPublicacionElec);
            tabla.innerHTML += ` <tr>
                <td>${nuevoPublicacionElec.nombreArticulo}</td>
                <td>${nuevoPublicacionElec.nombreProyecto}</td>
                <td>${nuevoPublicacionElec.fechaPublicacion}</td>
                <td>${nuevoPublicacionElec.isbn}</td>
                <td>${nuevoPublicacionElec.issn}</td>
                <td>${nuevoPublicacionElec.doi}</td>
                <td>${nuevoPublicacionElec.uri}</td>
                </tr>`;

    break;
    case 9:
        nuevoActividadAcademica = new ActividadAcademicaLocalInternacional(
            document.getElementById("nombreAct").value,
            document.getElementById("proyectos").value,
            document.getElementById("tipoActividad").value,
            document.formActAcadInter.nacionalInternacional.value,
            document.getElementById("nombreInst").value,
            document.getElementById("lugarEvento").value,
            document.getElementById("fechaEvento").value
        );
        console.log(nuevoActividadAcademica);
        
        listaActividadAcademicaLocalInternacional.push(nuevoActividadAcademica);
            tabla.innerHTML += ` <tr>
                <td>${nuevoActividadAcademica.nombreActividad}</td>
                <td>${nuevoActividadAcademica.nombreProyecto}</td>
                <td>${nuevoActividadAcademica.tipoActividad}</td>
                <td>${nuevoActividadAcademica.nacionalInternacional}</td>
                <td>${nuevoActividadAcademica.nombreInstitucion}</td>
                <td>${nuevoActividadAcademica.lugarEvento}</td>
                <td>${nuevoActividadAcademica.fechaEvento}</td>
                </tr>`;

    break;
    case 10:
        nuevoAlumnoProyInv = new AlumnoParticipanteProyInv(
            document.getElementById("nombreAlumnoProyInv").value,
            document.getElementById("proyectos").value,
            document.getElementById("gradoAlmnProyInv").value,
            document.formAlmnProyInv.tipoProy.value,
            document.getElementById("fechaProy").value
        );
        console.log(nuevoAlumnoProyInv);
        
        listaAlumnoParticipanteProyInv.push(nuevoAlumnoProyInv);
            tabla.innerHTML += ` <tr>
                <td>${nuevoAlumnoProyInv.nombreAlumno}</td>
                <td>${nuevoAlumnoProyInv.nombreProyecto}</td>
                <td>${nuevoAlumnoProyInv.gradoAlumno}</td>
                <td>${nuevoAlumnoProyInv.tipoProyecto}</td>
                <td>${nuevoAlumnoProyInv.fecha}</td>
                </tr>`;

    break;
    case 11:
        nuevoEstanciaAcademica = new EstanciaAcademica(
            document.getElementById("nombreEstInst").value,
            document.getElementById("proyectos").value,
            document.estAcad.nacionalInternacionalEstAcad.value,
            document.getElementById("lugarEstAcad").value,
            document.getElementById("fechaEstAcad").value
        );
        console.log(nuevoEstanciaAcademica);
        
        listaEstanciaAcademica.push(nuevoEstanciaAcademica);
            tabla.innerHTML += ` <tr>
                <td>${nuevoEstanciaAcademica.nombreInstitucion}</td>
                <td>${nuevoEstanciaAcademica.nombreProyecto}</td>
                <td>${nuevoEstanciaAcademica.nacionalInternacional}</td>
                <td>${nuevoEstanciaAcademica.lugarEstancia}</td>
                <td>${nuevoEstanciaAcademica.fecha}</td>
                </tr>`;

    break;
    case 12:
        nuevoActividadDivCient = new ActividadesDivulgacionCientifica(
            document.getElementById("nombreEvntDivCien").value,
            document.getElementById("proyectos").value,
            document.getElementById("tipoActividadEvntDivCien").value,
            document.getElementById("fechaActDivCien").value
        );
        // console.log(nuevoEstanciaAcademica);
        
        listaActividadesDivulgacionCientifica.push(nuevoActividadDivCient);
            tabla.innerHTML += ` <tr>
                <td>${nuevoActividadDivCient.nombreActividad}</td>
                <td>${nuevoActividadDivCient.nombreProyecto}</td>
                <td>${nuevoActividadDivCient.tipoActividad}</td>
                <td>${nuevoActividadDivCient.fechaActividad}</td>
                </tr>`;

    break;

}


}



function envio() {
    alert("Datos Enviados Correctamente!");
}


function estiloBoton(boton) {
    listaBotones = document.getElementsByClassName("pasoBtn");

    for (let i = 0; i < listaBotones.length; i++) {
        listaBotones[i].classList.remove("active")
    }
    listaBotones[boton].classList.add("active")
} 

function moverPaso(paso){
    let instrucciones = document.getElementById("instrCont");
    let inputAux = document.getElementById("cajaInputAux");
    let subCont1 = document.getElementById("contForm");
    let subCont2 = document.getElementById("tableCont");
    let mainCont = document.getElementById("mainCont");
    switch (paso) {
        case 1: 
            document.getElementById("cajaTabla").remove();
            subCont2.innerHTML=``;
            subCont1.innerHTML=``;
            subCont1.innerHTML=`
            <div id="cajaForm"></div>
            `;
            subCont2.innerHTML=`
            
<div class="resumenTitle">
    RESUMEN :
</div>

<div class="contTabla-btn">

    <div class="overflowTable" id="cajaTabla">
        
    </div>

    <div id="contBotonPaso" class="contButtonTabla">
        
    </div>
</div>



            `;

            estiloBoton(0);

            instrucciones.innerHTML=`
            <div class="pasoCont">
            <div class="pasoTitCont">
                <div class="pasoTit">Registro de Proyectos</div>
            </div>
        
            <div class="pasoDesc">
                Llenar la tabla mediante el <strong>formulario</strong> y el botón <strong>Agregar</strong>, Una vez terminado dar click en el boton <strong>CONTINUAR PASO 2</strong>
            </div>
        </div>
            
            `;

            inputAux.innerHTML=``;

            
            imprimeFormulario(0);

            genera_tabla(listaProyectos);
            document.getElementById("contBotonPaso").innerHTML= `<div class="navButton" onclick="moverPaso(2)">
            <div class="boton">CONTINUAR PASO 2</div>
        </div>`;
            break;

        case 2:
            document.getElementById("cajaTabla").remove();
            
            subCont2.innerHTML=``;
            subCont1.innerHTML=``;
            subCont1.innerHTML=`
            <div id="cajaForm"></div>
            `;

            
            subCont2.innerHTML=`
            
<div class="resumenTitle">
    RESUMEN :
</div>

<div class="contTabla-btn">

    <div class="overflowTable" id="cajaTabla">
        
    </div>

    <div id="contBotonPaso" class="contButtonTabla">
        
    </div>
</div>



            `;
           
            estiloBoton(1);
            //cambia de instrucciones
            instrucciones.innerHTML=`
            <div class="pasoCont">
                <div class="pasoTitCont">
                    <div class="pasoTit">Registro de Productos de Investigación</div>
                </div>
            
                <div class="pasoDesc">
                Elegir el <strong>Producto de Investigación</strong> y llenar la información correspondiente en el <strong>formulario</strong>, los datos aparecerán en la tabla inferior, una vez terminado de capturar los productos de investigación necesarios dar click en el boton <strong>CONTINUAR PASO 3</strong>
                </div>
            </div>
            
            `;

            inputAux.innerHTML=`
            <form class="selectTipoProy" onchange="getFormulariosIndx()">
            <label class="resumenTitle" for="productos">Productos de Investigación: </label>
                <select name="productos" id="productos">
                <option value="1">PUBLICACIONES</option>
                <option value="2">TESIS</option>
                <option value="3">ARTICULOS CIENTIFICOS PUBLICADOS</option>
                <option value="4">DESARROLLO TECNOLOGICO</option>
                <option value="5">PONENCIAS EN CONGRESOS</option>
                <option value="6">PATENTES Y/O DERECHOS DE AUTOR</option>
                <option value="7">MAPAS Y BASES DE DATOS</option>
                <option value="8">PUBLICACIONES ELECTRÓNICAS</option>
                <option value="9">PARTICIPACIÓN EN ACTIVIDADES ACADÉMICAS NACIONALES Y/O INTERNACIONALES</option>
                <option value="10">ALUMNOS PARTICIPANTES EN PROYECTOS DE INVESTIGACIÓN</option>
                <option value="11">ESTANCIAS ACADÉMICAS</option>
                <option value="12">PARTICIPACIÓN EN EVENTOS DE DIVULGACIÓN Y DIFUSIÓN CIENTÍFICA ORGANIZADA POR LA ENTIDAD</option>
            </select>
        </form>
            `;
            imprimeFormulario(1);

            genera_tabla(listaPublicacion);

            document.getElementById("contBotonPaso").innerHTML= `<div class="navButton" onclick="moverPaso(1)" ><div class="boton">REGRESAR PASO 1</div></div><div class="navButton" onclick="moverPaso(3)" ><div class="boton">CONTINUAR PASO 3</div></div>`;
            
            break;
            
        case 3:
            estiloBoton(2);
            instrucciones.innerHTML=`
            <div class="pasoCont">
                <div class="pasoTitCont">
                    <div class="pasoTit">Corroboración de datos</div>
                </div>
            
                <div class="pasoDesc">
                    Revisa que la información capturada sea la correcta mediante las tablas que aparecen en pantalla y da click en el botón de: <strong>FINALIZAR Y ENVIAR</strong> para terminar el proceso.
                </div>
            </div>
            `;

            inputAux.innerHTML=``;
            subCont1.innerHTML=``;
            subCont2.innerHTML=``;

            imprime_Resumen();
            // dibujarResumenTablas();
            // document.getElementById("contBotonPaso").innerHTML= `<div class="navButton" onclick="moverPaso(2)" ><div class="boton">REGRESAR PASO 2</div></div><div class="navButton" onclick="envio()"><div class="boton">FINALIZAR Y ENVIAR</div></div>`;
            // document.getElementById("tableCont").innerHTML=` `;
            break;
    
    }
}


// Rutina para agregar opciones a un <select>
function agregarProyectos() {
    var select = document.getElementsByName("proyectos")[0];
    listaNombres.sort();
   
    for (value in listaNombres) {
     var option = document.createElement("option");
     option.text = listaNombres[value];
     select.add(option);
    }
   }





var formularios= [
     // PROYECTOS
     ` 
     
     <form name="formProyecto" class="formWrapper" >

     <div class="resumenTitle">
         Proyectos de Investigación:
     </div>
 
     <div class="formProyectos form">
 
         <div class="formField">
             <div>
                 <label for="nombreProy">Nombre de proyecto investigación:</label>
                 <input type="text" id="nombreProy" name="nombreProy">
             </div>

             <div>
                 <label for="nombreProfesor">Profesor titular:</label>
                 <input type="text" id="nombreProfesor" name="nombreProfesor">
             </div>

             <div>
                 <label for="nombreProfesorAux">Profesor(es) auxiliar(es):</label>
                 <input type="text" id="nombreProfesorAux" name="nombreProfesorAux">
             </div>
 
             <p>Tipo de Financiamiento:</p>
 
             <div class="opt">
                 <div class="radioTop">
                     <input type="radio" id="papiit" name="tipoProy" value="PAPIIT">
                     <label for="papiit">PAPIIT</label><br>
                 </div>
                 <div class="radioTop">
                     <input type="radio" id="papime" name="tipoProy" value="PAPIME">
                     <label for="papime">PAPIME</label><br>
                 </div>
 
                 <div class="radioBot otro">
                     <input type="radio" id="finanOpt" name="tipoProy" value="Otro: ">
                     <label for="finanOpt">Otro: </label><br>
                     <input type="text" id="otroTipoProy" name="otroTipoProy">
                 </div>
             </div>
 
         </div>
 
     </div>
 
     <div class="contButton">
         <div class="boton" onclick="capturar(0)">Agregar</div>
     </div>
 
 </form>
     `,
     // PUBLICACIONES
     `
    
    <form name="formPub" class="formWrapper">

        <div class="resumenTitle">
            PUBLICACIONES:
        </div>

        <div class="formPublicaciones form">

         <div class="formField">
         <div>
             <label for="nombrePub">Nombre de publicación:</label>
             <input type="text" id="nombrePub" name="nombrePub" >
         </div>

         <div>
             <label for="proyectos">Nombre de proyecto:</label>
             <select name="proyectos" id="proyectos">
                 
             </select>
         </div>
         

         
         <p>Tipo de publicación:</p>
         <div class="opt">
             
             
             <div class="tooltip-right radioTop">
                 <input type="radio" id="arbitrada" name="tipoPub" value="arbitrada">
                 <label for="arbitrada">Publicación Arbitradas o Indizadas</label><br>
                 <span class="tooltiptext">Articulos publicados en revistas reconocidas o por algun indice internacional.</span>
             </div>

             <div class="tooltip-right radioBot">
                 <input type="radio" id="noArbitrada" name="tipoPub" value="noArbitrada">
                 <label for="noArbitrada">Libros o artículos no arbitrados</label><br>
                 <span class="tooltiptext"> Libros de primera edición o de revisiones amplias con ISBN y sello editorial.</span>
             </div>
         </div>

         <p>Formato:</p>

         <div class="opt">
             
             
             <input type="radio" id="digital" name="formatoPub" value="digital">
             <label for="digital">Digital</label>
             <input type="radio" id="impreso" name="formatoPub" value="impreso">
             <label for="impreso">Impreso</label>
         </div>
     
     
     
         <p>Referencias:</p>
     
         <div class="referencias">

         <div>
         <label for="isbn">ISBN: </label>
         <input type="text" id="isbn" name="isbn" size="10"> 
         
         <label for="issn">ISSN: </label>
         <input type="text" id="issn" name="issn" size="10"> 
         </div>
         
         <div>
         <label for="doi">DOI: </label>
         <input type="text" id="doi" name="doi" size="10"> 
         
         <label for="uri">URI: </label>
         <input type="text" id="uri" name="uri" size="10">
         </div>
         

         </div>
     
         </div>

     </div>

     <div class="contButton">
         <div class="boton" onclick="capturar(1)">Agregar</div>
     </div>
 </form>
     `,
     // TESIS
     `
     
     <form name="formPub" class="formWrapper">
    
     <div class="resumenTitle">
         TESIS:
     </div>
     
     <div class="formPublicaciones form">
 
         <div class="formField">
             <div>
                 <label for="nombrePub">Nombre de Tesis</label>
                 <input type="text" id="nombreTesis" name="nombrePub" >
             </div>
 
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
                 <select name="proyectos" id="proyectos">
                     
                 </select>
             </div>
 
             <div>
                 <label for="nombreAlmn">Nombre del Alumno: </label>
                 <input type="text" id="nombreAlumno" name="nombreAlmn" >
             </div>
         
             <div>
                 <label for="gradTesis">Grado de la Tesis:</label>
                 <select name="gradTesis" id="gradTesis">
                     <option value="Licenciatura">Licenciatura</option>
                     <option value="Maestria">Maestria</option>
                     <option value="Doctorado">Doctorado</option>
                     <option value="Posdoctoral">Posdoctoral</option>
                 </select>
             </div>
 
             <div>
                 <label for="fechaPub">Fecha de Publicación</label>
                 <input type="date" id="fechaPub" name="fechaPub">
             </div>
         </div>

    </div> 
    <div class="contButton">
        <div class="boton" onclick="capturar(2)">Agregar</div>
    </div>
</form>
     `,
     // ARTICULOS CIENTIFICOS PUBLICADOS
     `
     
    <form name="formArtCient" class="formWrapper">

    <div class="resumenTitle">
        ARTICULOS CIENTIFICOS PUBLICADOS:
    </div>
        <div class="formArtCient form">
         <div class="formField">
     
             <div>
                 <label for="nombreArtCient">Nombre de articulo cientifico:</label>
                 <input type="text" id="nombreArtCient" name="nombreArtCient" size="10">
     
             </div>
     
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
                 <select name="proyectos" id="proyectos">
                    
                 </select>
             </div>
     
             <div>
                 <label for="nombreAlumno">Nombre de Alumno:</label>
                 <input type="text" id="nombreAlumno" name="nombreAlumno" size="10">
     
             </div>
     
             <div>
                 <label for="gradAlmn">Grado del Alumno:</label>
                 <select name="gradAlmn" id="gradAlmn">
                     <option value="estudiante">Estudiante</option>
                     <option value="licenciatura">Licenciatura</option>
                     <option value="posgrado">Posgrado</option>
                     <option value="posdoctoral">Posdoctoral</option>
                     <option value="egresado">Egresado</option>
                 </select>
             </div>
     
             <p>Referencias:</p>
             <div class="referencias">
                 <label for="isbn">ISBN</label>
                 <input type="text" id="isbn" name="isbn" size="10">
     
                 <label for="issn">ISSN</label>
                 <input type="text" id="issn" name="issn" size="10">
     
                 <label for="doi">DOI</label>
                 <input type="text" id="doi" name="doi" size="10">
     
                 <label for="uri">URI</label>
                 <input type="text" id="uri" name="uri" size="10">
             </div>
     
             <div>
                 <label for="fechaPub">Fecha de Publicación</label>
                 <input type="date" id="fechaPub" name="fechaPub">
             </div>
     
         </div>
     </div>

     <div class="contButton">
         <div class="boton" onclick="capturar(3)">Agregar</div>
     </div>

     
 
 </form>
     `,
     // DESARROLLO TECNOLOGICO
     `
    
    <form name="formDesTec" class="formWrapper">

        <div class="resumenTitle">
            Desarrollo Tecnológico:
        </div>
    <div class="formDesTec form">
     <div class="formField">
         <div>
             <label for="nombreDesTec">Nombre del desarrollo tecnológico de investigación:</label>
             <input type="text" id="nombreDesTec" name="nombreDesTec" size="10">
         </div>
         <div>
             <label for="proyectos">Nombre de proyecto:</label>
             <select name="proyectos" id="proyectos">
               
             </select>
         </div>
     
         <div>
             <label for="nombreResponsable">Nombre del responsable:</label>
             <input type="text" id="nombreResponsable" name="nombreResponsable" size="10">
         </div>
         <div>
             <label for="fechaPub">Fecha de Publicación</label>
             <input type="date" id="fechaPub" name="fechaPub">
         </div>
     </div>
 </div>

 <div class="contButton">
     <div class="boton" onclick="capturar(4)">Agregar</div>
 </div>
 </form>
     `,
     // PONENCIAS EN CONGRESOS
     `
     
 <form name="formPonencias" class="formWrapper">
    <div class="resumenTitle">
        PONENCIAS EN CONGRESOS:
    </div>
     <div class="formPonencias form">
         <div class="formField">
             <div>
                 <label for="nombrePonencia">Nombre de la ponencia:</label>
                 <input type="text" id="nombrePonencia" name="nombrePonencia" size="10">    
             </div>
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
                 <select name="proyectos" id="proyectos">
                     
                 </select>
             </div>
             <div>
                 <label for="nombreCongreso">Nombre del congreso:</label>
                 <input type="text" id="nombreCongreso" name="nombreCongreso" size="10">
             </div>
             <div>
                 <label for="fechaPub">Fecha de Publicación</label>
                 <input type="date" id="fechaPub" name="fechaPub">
             </div>
             <div>
                 <label for="lugarPonencia">Lugar de la ponencia:</label>
                 <input type="text" id="lugarPonencia" name="lugarPonencia" size="10">
             </div>
         </div>
 
     </div>
     <div class="contButton">
         <div class="boton" onclick="capturar(5)">Agregar</div>
     </div>
 </form >
     `,
     // PATENTES Y/O DERECHOS DE AUTOR
     `
     
 <form name="formPatentes" class="formWrapper">
    <div class="resumenTitle">
    PATENTES Y/O DERECHOS DE AUTOR:
    </div>
     <div class="formPatentes form">
         <div class="formField">
             <div>
                 <label for="nombreAutor">Nombre del autor:</label>
                 <input type="text" id="nombreAutor" name="nombreAutor" size="10">
             </div>
             
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
                 <select name="proyectos" id="proyectos">
                    
                 </select>
             </div>
             
             <div>
                 <label for="productoQuehacer">Producto del quehacer cientifíco</label>
                 <input type="text" id="productoQuehacer" name="productoQuehacer" size="10">
             </div>
             
             <div>
                 <label for="fechaPub">Fecha de Publicación</label>
                 <input type="date" id="fechaPub" name="fechaPub">
             </div>
     
         </div>
     </div>
     <div class="contButton">
         <div class="boton" onclick="capturar(6)">Agregar</div>
     </div>
 </form>
     `,
     // MAPAS Y BASES DE DATOS
     `
     
 <form name="formMapBases" class="formWrapper">
    <div class="resumenTitle">
        MAPAS Y BASES DE DATOS:
    </div>
     <div class="formMapBases form">
         <div class="formField">
             <div>
                 <label for="nombreMapBase">Nombre del mapa o base de datos:</label>
                 <input type="text" id="nombreMapBase" name="nombreMapBase" size="10">
             </div>
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
                 <select name="proyectos" id="proyectos">
                     
                 </select>
             </div>
 
             <div>
                 <label for="fechaMapBase">Fecha de creación</label>
                 <input type="date" id="fechaMapBase" name="fechaMapBase">
             </div>
         </div>
     </div>
     <div class="contButton">
         <div class="boton" onclick="capturar(7)">Agregar</div>
     </div>
 </form>
     `,
     // PUBLICACIONES ELECTRÓNICAS
     `
     
 <form name="formPubElec" class="formWrapper">
    <div class="resumenTitle">
        PUBLICACIONES ELECTRÓNICAS:
    </div>
    <div class="formPubElec form">
         <div class="formField">
             <div>
                 <label for="nombreArtElec">Nombre del articulo:</label>
                 <input type="text" id="nombreArtElec" name="nombreArtElec" size="10">
         
             </div>
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
                 <select name="proyectos" id="proyectos">
                
                 </select>
             </div>
             <p>Referencias: </p>
             <div class="referencias">
                 <label for="isbnArtElec">ISBN</label>
                 <input type="text" id="isbn" name="isbn" size="10">
         
                 <label for="issnArtElec">ISSN</label>
                 <input type="text" id="issn" name="issn" size="10">
         
                 <label for="doiArtElec">DOI</label>
                 <input type="text" id="doi" name="doi" size="10">
         
                 <label for="uriArtElec">URI</label>
                 <input type="text" id="uri" name="uri" size="10">
             </div>
         
             <div>
                 <label for="fechaArtElec">Fecha de publicación</label>
                 <input type="date" id="fechaArtElec" name="fechaArtElec">
             </div>
         </div>
 
     </div>

     <div class="contButton">
         <div class="boton" onclick="capturar(8)">Agregar</div>
     </div>
 </form>
     `,
     // PARTICIPACIÓN EN ACTIVIDADES ACADÉMICAS NACIONALES Y/O INTERNACIONALES
     `
     
 <form name="formActAcadInter" class="formWrapper">
    <div class="resumenTitle">
    PARTICIPACIÓN EN ACTIVIDADES ACADÉMICAS NACIONALES Y/O INTERNACIONALES:
    </div>
     <div class="formActAcadInter form">
         <div class="formField">
             <div>
                 <label for="nombreAct">Nombre de la actividad:</label>
                 <input type="text" id="nombreAct" name="nombreAct" size="10">
             </div>
         
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
                 <select name="proyectos" id="proyectos">
                     
                 </select>
             </div>
         
             <div>
                 <label for="tipoActividad">Tipo de actividad:</label>
                 <select name="tipoActividad" id="tipoActividad">
                     <option value="conferencia">Conferencia</option>
                     <option value="seminario">Seminario</option>
                     <option value="mesaRedonda">Mesa redonda</option>
                     <option value="congreso">Congreso</option>
                     <option value="curso">Curso</option>
                     <option value="diplomado">Diplomado</option>
                     <option value="taller">Taller</option>
                 </select>
             </div>
         

         
             <div>
                 <input type="radio" id="nacional" name="nacionalInternacional" value="nacional">
                 <label for="nacional">Nacional</label><br>
                 <input type="radio" id="internacional" name="nacionalInternacional" value="internacional">
                 <label for="internacional">Internacional</label><br>
             </div>
         
             <div class="inptLarge">
                 <label for="nombreInst">Nombre de la institucion de Educación Superior u Organización:</label>
                 <input type="text" id="nombreInst" name="nombreInst" size="10">
             </div>
         
             <div>
                 <label for="lugarEvento">Lugar del evento</label>
                 <input type="text" id="lugarEvento" name="lugarEvento" size="10">
             </div>
         
             <div>
                 <label for="fechaEvento">Fecha del evento:</label>
                 <input type="date" id="fechaEvento" name="fechaEvento">
             </div>
         </div>
 
     </div>
     <div class="contButton">
         <div class="boton" onclick="capturar(9)">Agregar</div>
     </div>
 </form>
     `,
     // ALUMNOS PARTICIPANTES EN PROYECTOS DE INVESTIGACIÓN
     `
     
 <form name="formAlmnProyInv" class="formWrapper">
    <div class="resumenTitle">
    ALUMNOS PARTICIPANTES EN PROYECTOS DE INVESTIGACIÓN:
    </div>    
 
 <div class="formAlmnProyInv form">
         <div class="formField">
         <div>
             <label for="nombreAlumnoProyInv">Nombre del alumno:</label>
             <input type="text" id="nombreAlumnoProyInv" name="nombreAlumnoProyInv" size="10">
             </div>
     
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
             <select name="proyectos" id="proyectos">
               
             </select>
             </div>
     
             <div>
                 <label for="gradoAlmnProyInv">Grado de estudios del Alumno:</label>
             <select name="gradoAlmnProyInv" id="gradoAlmnProyInv">
                 <option value="estudiante">Estudiante</option>
                 <option value="licenciatura">Licenciatura</option>
                 <option value="posgrado">Posgrado</option>
                 <option value="posdoctoral">Posdoctoral</option>
                 <option value="egresado">Egresado</option>
             </select>
             </div>
     
             <p>Tipo de Proyecto:</p>
     
             <div class="opt">
                 <div class="radioTop">
                     <input type="radio" id="papiit" name="tipoProy" value="papiit">
                     <label for="papiit">PAPIIT</label><br>
                 </div>
                 <div class="radioBot">
                     <input type="radio" id="papime" name="tipoProy" value="papime">
                     <label for="papime">PAPIME</label><br>
                 </div>
             </div>
     
             
             <div>
                 <label for="fechaProy">Fecha:</label>
                 <input type="date" id="fechaProy" name="fechaProy">
             </div>
         </div>
     </div>
     <div class="contButton">
         <div class="boton" onclick="capturar(10)">Agregar</div>
     </div>
 </form>
     `,
     // ESTANCIAS ACADÉMICAS
     `
   
 <form name="estAcad" class="formWrapper">
    <div class="resumenTitle">
        ESTANCIAS ACADÉMICAS:
    </div>
    <div class="estAcad form">
     
         <div class="formField">
         
             <div>
                 <label for="nombreEstInst">Nombre de la institucion:</label>
                 <input type="text" id="nombreEstInst" name="nombreEstInst" size="10">
             </div>
         
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
                 <select name="proyectos" id="proyectos">
             
                 </select>
             </div>
         
             <div class="opt">
                 <div class="radioTop">
                     <input type="radio" id="nacionalEstAcad" name="nacionalInternacionalEstAcad" value="nacional">
                     <label for="nacionalEstAcad">Nacional</label>
                 </div>
                 <div class="radioBot">
                     <input type="radio" id="internacionalEstAcad" name="nacionalInternacionalEstAcad" value="internacional">
                     <label for="internacionalEstAcad">Internacional</label>
                 </div>
             </div>
         
             <div>
                 <label for="fechaEstAcad">Fecha:</label>
                 <input type="date" id="fechaEstAcad" name="fechaEstAcad">
             </div>
         
             <div>
                 <label for="lugarEstAcad">Lugar de la estancia:</label>
                 <input type="text" id="lugarEstAcad" name="lugarEstAcad" size="10">
             </div>
         
         </div>
         
     </div>
     <div class="contButton">
         <div class="boton" onclick="capturar(11)">Agregar</div>
     </div>
 </form>
     `,
     // PARTICIPACIÓN EN EVENTOS DE DIVULGACIÓN Y DIFUSIÓN CIENTÍFICA ORGANIZADA POR LA ENTIDAD
     `
 <form name="formEvntDivCien" class="formWrapper">
    <div class="resumenTitle">
    PARTICIPACIÓN EN EVENTOS DE DIVULGACIÓN Y DIFUSIÓN CIENTÍFICA ORGANIZADA POR LA ENTIDAD:
    </div> 
    <div class="formEvntDivCien form">
         <div class="formField">
             <div>
                 <label for="nombreEvntDivCien">Nombre de la actividad:</label>
                 <input type="text" id="nombreEvntDivCien" name="nombreEvntDivCien" size="10">
             </div>
     
             <div>
                 <label for="proyectos">Nombre de proyecto:</label>
                 <select name="proyectos" id="proyectos">
                
                 </select>
             </div>
     
             <div>
                 <label for="tipoActividadEvntDivCien">Tipo de actividad:</label>
                 <select name="tipoActividadEvntDivCien" id="tipoActividadEvntDivCien">
                     <option value="coloquios">Coloquios</option>
                     <option value="conferencias">Conferencias</option>
                     <option value="congresos">Congresos</option>
                     <option value="curso">Curso</option>
                     <option value="diplomado">Diplomado</option>
                     <option value="encuentros">Encuentros</option>
                     <option value="foros">Foros</option>
                     <option value="jornadas">Jornadas</option>
                     <option value="mesaRedonda">Mesa redonda</option>
                     <option value="talleres">Talleres</option>
                 </select>
             </div>
     
             <div>
                 <label for="fechaActDivCien">Fecha de la actividad:</label>
                 <input type="date" id="fechaActDivCien" name="fechaActDivCien">
             </div>
         </div>
     </div>
     <div class="contButton">
         <div class="boton" onclick="capturar(12)">Agregar</div>
     </div>
 </form>
     `,
    


];


