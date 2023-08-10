const express = require('express');

const app = express();
const {Date} = require ('./src/service/Date');
const {Usuarios} = require ('./src/service/usuarios');

app.use(express.json());


app.get('/home', function(req, res) {
  
  try{
    const date3 = new Date(2023,-5,10)
    res.json({ 
    fecha: date3.Print()}
    );
  }catch(error){
      res.json({
        m: error.message
      })
  } 
   }) 

app.get('/user', async (req, res) => {
  const users = new Usuarios();
  const newUser = await users.find();
  res.json({
    res: newUser
  });
});



app.get('/nosotros',function(req,res){ //especificamos las rutas 
  res.send("Aqui esta nosotros");
})
//escuchando el puerto

app.listen(3000, function () {
  console.log("escuchando en el puerto 3000") 
})