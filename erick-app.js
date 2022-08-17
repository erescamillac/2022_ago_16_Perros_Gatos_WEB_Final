document.querySelector("#imageFiles").addEventListener('change', (e) => {
    if( window.File && window.FileReader && window.FileList && window.Blob ){
        const files = e.target.files;
        console.log( files );

        const output = document.querySelector("#resultadoImagenes");

        for(let i = 0; i < files.length; i++ ){
            if( !files[i].type.match("image") ) continue;

            const picReader = new FileReader();

            picReader.addEventListener( "load", function(event) {
                const picFile = event.target;
                const div = document.createElement( "div" );
                // element.classList.add("class")
                div.classList.add( "contenedorImagen" );
                // .contenedorImagen
                div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/><p><strong></strong></p>`;
                output.appendChild( div );
            })
            
            console.log( picReader );
            picReader.readAsDataURL( files[i] );
        }
    }else{
        console.log( 'Su navegador NO soporta la API [File]' );
        alert( 'Su navegador NO soporta la API [File]' );
    }
});

// Experimento simple ::
// de <img> a <canvas> ::
// 'resultadoImagenes'
// JS : EventDelegation 
// YT : https://www.youtube.com/watch?v=JL7Wo-ASah4&list=PLUu19MuEK048a_sErLTwf8dE5Zzn9sf--&index=1
// minute: 27:44
const resultadoImagenes = document.getElementById( 'resultadoImagenes' );

resultadoImagenes.addEventListener( 'click', e => {
    if( e.target.classList.contains('thumbnail') ){
        console.log( e.target );
        var imgTmp = e.target;
        // ++test: img to canvas

        console.log( 'imgTmp :: ' );
        console.log( imgTmp );
        console.log( typeof imgTmp );
        // In this example if the canvas dimensions are larger/smaller
        // than the image dimensions, the image will be clipped or
        // it would not fill the entire space
        var canvasV2 = document.getElementById("canvasV2");
        var ctxV2 = canvasV2.getContext("2d");
        var tamanoV2 = 400;
        // ctx.clearRect(0, 0, 400, 400);
        ctxV2.clearRect(0, 0, canvasV2.width, canvasV2.height);
        // var img = document.getElementById("test");
        // ctxV2.drawImage(imgTmp, 0, 0); // On hover nothing will show
        // ctx.drawImage(video, 0, 0, tamano, tamano, 0, 0, tamano, tamano);
        // ctxV2.drawImage(imgTmp, 0, 0, tamanoV2, tamanoV2, 0, 0, tamanoV2, tamanoV2);

        /*
        // get the scale
        var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        */

        // get the scale
        var scale = Math.min(canvasV2.width / imgTmp.width, canvasV2.height / imgTmp.height);
        // get the top left position of the image
        var x = (canvasV2.width / 2) - (imgTmp.width / 2) * scale;
        var y = (canvasV2.height / 2) - (imgTmp.height / 2) * scale;
        ctxV2.drawImage(imgTmp, x, y, imgTmp.width * scale, imgTmp.height * scale);

        // ctxV2.drawImage(imgTmp, 0, 0, canvasV2.width, canvasV2.height, 0, 0, canvasV2.width, canvasV2.height);

        /*
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.strokeStyle = "#FF0000";
        ctx.strokeRect(20, 20, 150, 100); 
        */
        ctxV2.strokeStyle = "#FF0000";
        ctxV2.strokeRect( 0, 0, canvasV2.width, canvasV2.height );

        // unless you implement a custom tooltip functionality
        
        // --test: img to canvas
        // var canvasV2 = document.getElementById("canvasV2");
        var otrocanvasV2 = document.getElementById("otrocanvasV2");

        var respuestaModelo = predecirV2();
        console.log( "[resultadoImagenes (click) .thumbnail ] -- respuestaModelo :: " );
        console.log( respuestaModelo );
        document.querySelector( "#divTestCanvasTmp p strong" ).textContent = respuestaModelo;
    } //--FIN: if .thumbnail
});


document.querySelector("#btnClasificarImgs").addEventListener('click', (e) => {
    console.log( "se HIZO CLICK en el botón [btnClasificarImgs]" );
    // predecirV2();
    // predecirV3();

    var imagenes = document.querySelector("#resultadoImagenes").querySelectorAll( ".thumbnail" );
    console.log( "imagenes.length" );
    console.log( imagenes.length );

    var idxTmp = -1;
    contenedoresImagen = document.querySelector( "#resultadoImagenes" ).querySelectorAll( ".contenedorImagen" );

    imagenes.forEach( elementoImg =>{
        console.log( elementoImg );
        idxTmp++;
        // por cada Imagen ::
        // PASO 1.- predecirV3()
        console.log( 'elementoImg :: ' );
        console.log( elementoImg );
        console.log( typeof elementoImg );
        // In this example if the canvas dimensions are larger/smaller
        // than the image dimensions, the image will be clipped or
        // it would not fill the entire space
        var canvasV3 = document.getElementById("canvasV3");
        var ctxV3 = canvasV3.getContext("2d");
        var tamanoV3 = 400;
        // ctx.clearRect(0, 0, 400, 400);
        ctxV3.clearRect(0, 0, canvasV3.width, canvasV3.height);
        // var img = document.getElementById("test");
        // ctxV2.drawImage(imgTmp, 0, 0); // On hover nothing will show
        // ctx.drawImage(video, 0, 0, tamano, tamano, 0, 0, tamano, tamano);
        // ctxV2.drawImage(imgTmp, 0, 0, tamanoV2, tamanoV2, 0, 0, tamanoV2, tamanoV2);

        /*
        // get the scale
        var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        */

        // get the scale
        var scale = Math.min(canvasV3.width / elementoImg.width, canvasV3.height / elementoImg.height);
        // get the top left position of the image
        var x = (canvasV3.width / 2) - (elementoImg.width / 2) * scale;
        var y = (canvasV3.height / 2) - (elementoImg.height / 2) * scale;
        ctxV3.drawImage(elementoImg, x, y, elementoImg.width * scale, elementoImg.height * scale);

        // ctxV2.drawImage(imgTmp, 0, 0, canvasV2.width, canvasV2.height, 0, 0, canvasV2.width, canvasV2.height);

        /*
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.strokeStyle = "#FF0000";
        ctx.strokeRect(20, 20, 150, 100); 
        */
        ctxV3.strokeStyle = "#FF0000";
        ctxV3.strokeRect( 0, 0, canvasV3.width, canvasV3.height );

        // unless you implement a custom tooltip functionality
        
        // --test: img to canvas
        // var canvasV2 = document.getElementById("canvasV2");
        var otrocanvasV3 = document.getElementById("otrocanvasV3");

        var respuestaModelo = predecirV3();
        console.log( "[predecirV3()] -- respuestaModelo :: " );
        console.log( respuestaModelo );
        // document.querySelector( "#divTestCanvasTmp p strong" ).textContent = respuestaModelo;
        contenedoresImagen[idxTmp].querySelector("p strong").textContent = respuestaModelo;
        // PASO 2.- mostrar resultado 'GUI' en <p><strong>

    });
});