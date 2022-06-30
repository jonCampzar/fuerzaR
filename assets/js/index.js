const grad = document.getElementById('grados') ;

const force = document.getElementById('force') ;

grad.addEventListener('submit', (e) => {
    e.preventDefault();
    const $grados =(parseFloat(grad.g.value));
    const $fuerza =(parseFloat(grad.f.value));
   
    if($grados===90 || $grados===270){
    var coseno = 0;
    console.log(coseno);
    }else{
    const radianes = $grados*((Math.PI)/180);
    var coseno = Math.cos(radianes);
    console.log(coseno);
    }           
    if($grados===180 || $grados===360){
    var seno = 0;
    console.log(seno);
    }else{
    const rad = $grados*((Math.PI)/180);
    var seno = Math.sin(rad);
    console.log(seno); 
    }

    const fuerzax = ($fuerza*coseno).toFixed(3); 
    const fuerzay = ($fuerza*seno).toFixed(3); 

    const $resultado = document.querySelector("#resultado");
    $resultado.innerHTML = ''; //inicializar el contenido del elemento
    
    $resultado.innerHTML +=`
                    <p id="resultado">
                                      La fuerza es: ${$fuerza} N
                                      <br>
                                      La fuerza en x es: ${fuerzax} N
                                      <br>
                                      La fuerza en y es: ${fuerzay} N
                   </p>
                       `;
   
})

force.addEventListener('submit', (e) => {
    e.preventDefault();
    const fuerza1 =(parseFloat(force.f1.value));
    const fuerza2 =(parseFloat(force.f2.value));
    const fuerza3 =(parseFloat(force.f3.value));

    const fuerza4 =(parseFloat(force.f4.value));
    const fuerza5 =(parseFloat(force.f5.value));
    const fuerza6 =(parseFloat(force.f6.value));

    const sum1 = fuerza1 + fuerza2 + fuerza3;
    const sum11 = sum1.toFixed(3)
    
    const sum2 = fuerza4 + fuerza5 + fuerza6;
    const sum22 = sum2.toFixed(3)
    
    const raiz = Math.sqrt((Math.pow(sum1,2)) + (Math.pow(sum2,2)));

    const tetha = ((Math.atan(sum2/sum1)))*(180/(Math.PI))

    const $resultado2 = document.querySelector("#resultado2");
    $resultado2.innerHTML = ''; //inicializar el contenido del elemento
    
    $resultado2.innerHTML +=`
                    <p id="resultado2">
                                      La sumatoria de fuerzas en X es: ${sum11} N
                                      <br>
                                       La sumatoria de fuerzas en Y es: ${sum22} N
                                      <br>
                                      | Fr | = ${raiz.toFixed(3)} N 
                                      <br>
                                      θ = ${tetha.toFixed(3)} ° 
                                      <br>
                                      Para saber la posicion de θ toma en cuenta EL SIGNO DE LA SUMATORIA DE LAS FUERZAS
                                   
                   </p>
                       `;
})