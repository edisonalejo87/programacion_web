const x = require('express'); 
//iniciando la app
const app=x();
let mayor; 
let medio;
let menor;

app.get('/home',function(req,res){ //especificamos las rutas todos los datos recibidos por url son string 
        const n1=req.query.n1
        const n2=req.query.n2
        const n3=req.query.n3
     //mayor menor y medio
     if (n1>n2&n1>n3) {
        mayor =n1;
          }else if (n2>n1&n2>n3) {
          mayor = n2
                  }else  {
                  mayor=n3
                         }

                        if(n1<n2&n1<n3){
                                menor=n1
                        }else if (n2<n1&n2<n3) {
                                menor=n2
                        } else {
                                menor=n3
                        }

                                        if((n1>n2&n1<n3)||(n1>n3&n1<n2)){
                                                medio=n1
                                        }else if((n2>n1&n2<n3)||(n2>n3&n2<n1)){
                                                medio=n2
                                        }else if((n3>n1&n3<n2)||(n3>n2&n3<n1)){
                                                medio=n3
                                        }     
        res.json({
                n1, //VARIABLE
                n2, // VARIABLE
                n3, // VARIABLE
                mayor, // CONTENEDOR
                medio, //CONTENEDOR
                menor // CONTENEDOR
                
        });
})


//escuchando el puerto

app.listen(3000, function () {
   console.log("escuchando en el puerto 3000") 
})