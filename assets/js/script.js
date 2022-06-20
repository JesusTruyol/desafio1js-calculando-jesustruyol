
function calculo(){
  // extraer datos
  let quantity=document.getElementById("quantity")
  let color=document.getElementById("color")
  // Realizar la multiplicación
  let Totalprice= 400000 * parseInt(quantity.value)
  // Enviar datos
  document.getElementById("total-calculation").innerHTML= "Total: " + Totalprice.toLocaleString("es-CL", { style: "currency", currency: "CLP" })
  document.getElementById("total-quantity").innerHTML= "Cantidad: " + quantity.value
  document.getElementById("circle").style.backgroundColor= color.value
}

