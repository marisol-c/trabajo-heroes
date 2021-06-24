const express= require('express');
const app = expres();


app.get('/',(req,res)=>{ res.send('hola')});

app.listen(3030, () => console.log("servidor corriendo en el puerto 3030"));