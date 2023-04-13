function openContactForm() {
    var name = prompt("Ingrese nombre");
    while (!name) {
      name = prompt("No puede quedar vacio, ingrese su nombre");
    }
  
    var mail = prompt("Ingrese su mail");
    while (!isValidEmail(mail)) {
      mail = prompt("Tiene que ser formato email");
    }
  
    var mes = prompt("Ingrese su mensaje");
    while (!mes) {
      mes = prompt("No puede quedar vacio, ingrese su mensaje");
    }
  
    // do something with the form data
    alert(`Gracias ${name.charAt(0).toUpperCase() + name.slice(1)} por contactarnos, recibira su respuesta en la casilla de ${mail}`);
  
    function isValidEmail(mail) {
      var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(mail);
    }
  }
  