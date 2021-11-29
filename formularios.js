<h2>Publicaciones</h2>
  <div class="formWrapper">



    <div class="formPublicaciones form">

       <div class="formField">
        <div>
            <label for="nombrePub">Nombre de publicación:</label>
            <input type="text" id="nombrePub" name="nombrePub" >
        </div>

        <div>
            <label for="proyectos">Nombre de proyecto:</label>
            <select name="proyectos" id="proyectos">
                <option value="proyecto1">Proyecto 1</option>
                <option value="proyecto2">Proyecto 2</option>
                <option value="proyecto3">Proyecto 3</option>
                <option value="proyecto4">Proyecto 4</option>
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
        <label for="isbn">ISBN: </label>
        <input type="text" id="isbn" name="isbn" size="10"> 
        
        <label for="issn">ISSN: </label>
        <input type="text" id="issn" name="issn" size="10"> 
        
        
       
        <label for="doi">DOI: </label>
        <input type="text" id="doi" name="doi" size="10"> 
        
        <label for="uri">URI: </label>
        <input type="text" id="uri" name="uri" size="10">
       </div>
    
       </div>

    </div>
  </div>

    <h2>Tesis</h2>

    <div class="formWrapper">
        <div class="formTesis form">
            <div class="formField">
                
                <div>
                    <label for="nombreTesis">Nombre de tesis:</label>
                    <input type="text" id="nombreTesis" name="nombreTesis" size="10">
                </div>
            
                <div>
                    <label for="proyectos">Nombre de proyecto:</label>
                    <select name="proyectos" id="proyectos">
                        <option value="proyecto1">Proyecto 1</option>
                        <option value="proyecto2">Proyecto 2</option>
                        <option value="proyecto3">Proyecto 3</option>
                        <option value="proyecto4">Proyecto 4</option>
                    </select>
                </div>
            
                <div>
                    <label for="nombreAlumno">Nombre de Alumno:</label>
                    <input type="text" id="nombreAlumno" name="nombreAlumno" size="10">
                </div>
                <div>
                    <label for="fechaTermino">Fecha de Término</label>
                    <input type="date" id="fechaTermino" name="fechaTermino">
                </div>
            
    
                <div>
                    <label for="gradTes">Grado de Tesis:</label>
                    <select name="gradTes" id="gradTes">
                        <option value="licenciatura">Licenciatura</option>
                        <option value="maestria">Maestria</option>
                        <option value="doctorado">Doctorado</option>
                        <option value="posdoctoral">Posdoctoral</option>
                    </select>
                </div>

        </div>
            
        </div>
    </div>

    <h2>Articulos Cientificos</h2>
    <div class="formWrapper">
        <div class="formArtCient form">
           <div class="formField">

            <div>
                <label for="nombreArtCient">Nombre de articulo cientifico:</label>
                <input type="text" id="nombreArtCient" name="nombreArtCient" size="10">
            
            </div>
            
            <div>
                <label for="proyectos">Nombre de proyecto:</label>
                <select name="proyectos" id="proyectos">
                <option value="proyecto1">Proyecto 1</option>
                <option value="proyecto2">Proyecto 2</option>
                <option value="proyecto3">Proyecto 3</option>
                <option value="proyecto4">Proyecto 4</option>
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
    
    </div>

    <h2>Desarrollo Tecnológico</h2>
   <div class="formWrapper">
    <div class="formDesTec form">
        <div class="formField">
            <div>
                <label for="nombreDesTec">Nombre del desarrollo tecnológico de investigación:</label>
                <input type="text" id="nombreDesTec" name="nombreDesTec" size="10">
            </div>
            <div>
                <label for="proyectos">Nombre de proyecto:</label>
                <select name="proyectos" id="proyectos">
                    <option value="proyecto1">Proyecto 1</option>
                    <option value="proyecto2">Proyecto 2</option>
                    <option value="proyecto3">Proyecto 3</option>
                    <option value="proyecto4">Proyecto 4</option>
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
    </div>

    <h2>Ponencias en Congreso</h2>
    <div class="formWrapper">
        <div class="formPonencias form">
            <div class="formField">
                <div>
                    <label for="nombrePonencia">Nombre de la ponencia:</label>
                    <input type="text" id="nombrePonencia" name="nombrePonencia" size="10">    
                </div>
                <div>
                    <label for="proyectos">Nombre de proyecto:</label>
                    <select name="proyectos" id="proyectos">
                        <option value="proyecto1">Proyecto 1</option>
                        <option value="proyecto2">Proyecto 2</option>
                        <option value="proyecto3">Proyecto 3</option>
                        <option value="proyecto4">Proyecto 4</option>
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
    </div>

    <h2>Patentes y/o derechos de autor</h2>
    <div class="formWrapper">
        <div class="formPatentes form">
            <div class="formField">
                <div>
                    <label for="nombreAutor">Nombre del autor:</label>
                    <input type="text" id="nombreAutor" name="nombreAutor" size="10">
                </div>
                
                <div>
                    <label for="proyectos">Nombre de proyecto:</label>
                    <select name="proyectos" id="proyectos">
                        <option value="proyecto1">Proyecto 1</option>
                        <option value="proyecto2">Proyecto 2</option>
                        <option value="proyecto3">Proyecto 3</option>
                        <option value="proyecto4">Proyecto 4</option>
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
    </div>

    <h2>Mapas y bases de datos:</h2>
    <div class="formWrapper">
        <div class="formMapBases form">
            <div class="formField">
                <div>
                    <label for="nombreMapBase">Nombre del mapa o base de datos:</label>
                    <input type="text" id="nombreMapBase" name="nombreMapBase" size="10">
                </div>
                <div>
                    <label for="proyectos">Nombre de proyecto:</label>
                    <select name="proyectos" id="proyectos">
                        <option value="proyecto1">Proyecto 1</option>
                        <option value="proyecto2">Proyecto 2</option>
                        <option value="proyecto3">Proyecto 3</option>
                        <option value="proyecto4">Proyecto 4</option>
                    </select>
                </div>
    
                <div>
                    <label for="fechaMapBase">Fecha de creación</label>
                    <input type="date" id="fechaMapBase" name="fechaMapBase">
                </div>
            </div>
        </div>
    </div>

    <h2>Publicaciones electrónicas</h2>
    <div class="formWrapper">
        <div class="formPubElec form">
            <div class="formField">
                <div>
                    <label for="nombreArtElec">Nombre del articulo:</label>
                    <input type="text" id="nombreArtElec" name="nombreArtElec" size="10">
            
                </div>
                <div>
                    <label for="proyectos">Nombre de proyecto:</label>
                    <select name="proyectos" id="proyectos">
                        <option value="proyecto1">Proyecto 1</option>
                        <option value="proyecto2">Proyecto 2</option>
                        <option value="proyecto3">Proyecto 3</option>
                        <option value="proyecto4">Proyecto 4</option>
                    </select>
                </div>
                <p>Referencias: </p>
                <div class="referencias">
                    <label for="isbnArtElec">ISBN</label>
                    <input type="text" id="isbnArtElec" name="isbn" size="10">
            
                    <label for="issnArtElec">ISSN</label>
                    <input type="text" id="issnArtElec" name="issn" size="10">
            
                    <label for="doiArtElec">DOI</label>
                    <input type="text" id="doiArtElec" name="doi" size="10">
            
                    <label for="uriArtElec">URI</label>
                    <input type="text" id="uriArtElec" name="uri" size="10">
                </div>
            
                <div>
                    <label for="fechaArtElec">Fecha de publicación</label>
                    <input type="date" id="fechaArtElec" name="fechaArtElec">
                </div>
            </div>
    
        </div>
    </div>

    <h2>Participación en actividades académicas y/o internacionales</h2>
    <div class="formWrapper">
        <div class="formActAcadInter form">
            <div class="formField">
                <div>
                    <label for="nombreAct">Nombre de la actividad:</label>
                    <input type="text" id="nombreAct" name="nombreAct" size="10">
                </div>
            
                <div>
                    <label for="proyectos">Nombre de proyecto:</label>
                    <select name="proyectos" id="proyectos">
                        <option value="proyecto1">Proyecto 1</option>
                        <option value="proyecto2">Proyecto 2</option>
                        <option value="proyecto3">Proyecto 3</option>
                        <option value="proyecto4">Proyecto 4</option>
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
            
                <!-- <p>Formato:</p> -->
            
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
    </div>

    <h2>Alumnos participantes en proyectos de investigación:</h2>
    <div class="formWrapper">
        <div class="formAlmnProyInv form">
           <div class="formField">
            <div>
                <label for="nombreAlumnoProyInv">Nombre del alumno:</label>
                <input type="text" id="nombreAlumnoProyInv" name="nombreAlumnoProyInv" size="10">
               </div>
        
                <div>
                    <label for="proyectosAlmnProyInv">Nombre de proyecto:</label>
                <select name="proyectosAlmnProyInv" id="proyectosAlmnProyInv">
                    <option value="proyecto1">Proyecto 1</option>
                    <option value="proyecto2">Proyecto 2</option>
                    <option value="proyecto3">Proyecto 3</option>
                    <option value="proyecto4">Proyecto 4</option>
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
    </div>

    <h2>Estancias Académicas</h2>
    <div class="formWrapper">
        <div class="estAcad form">
        
            <div class="formField">
            
                <div>
                    <label for="nombreEstInst">Nombre de la institucion:</label>
                    <input type="text" id="nombreEstInst" name="nombreEstInst" size="10">
                </div>
            
                <div>
                    <label for="proyectosEstAcad">Nombre de proyecto:</label>
                    <select name="proyectosEstAcad" id="proyectosEstAcad">
                        <option value="proyecto1">Proyecto 1</option>
                        <option value="proyecto2">Proyecto 2</option>
                        <option value="proyecto3">Proyecto 3</option>
                        <option value="proyecto4">Proyecto 4</option>
                    </select>
                </div>
            
                <!-- <p>Formato:</p> -->
            
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
    </div>

    <h2>Participacion en eventos de divulgación científica</h2>
    <div class="formWrapper">
        <div class="formEvntDivCien form">
            <div class="formField">
                <div>
                    <label for="nombreEvntDivCien">Nombre de la actividad:</label>
                    <input type="text" id="nombreEvntDivCien" name="nombreEvntDivCien" size="10">
                </div>
        
                <div>
                    <label for="proyectosEvntDivCien">Nombre de proyecto:</label>
                    <select name="proyectosEvntDivCien" id="proyectosEvntDivCien">
                        <option value="proyecto1">Proyecto 1</option>
                        <option value="proyecto2">Proyecto 2</option>
                        <option value="proyecto3">Proyecto 3</option>
                        <option value="proyecto4">Proyecto 4</option>
                    </select>
                </div>
        
                <div>
                    <label for="tipoActividadEvntDivCien">Nombre de proyecto:</label>
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
    </div>