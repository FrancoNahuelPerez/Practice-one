export default function validations(form) {
    let error = {};
    if (form.name.length === 0) {
      error.name = "Ingresa un nombre";
    } else if (form.name.length > 35) {
      error.name = "Nombre demasiado largo";
    }
  
    if (form.phone.length === 0) {
      error.phone = "Ingresa un numero";
    } else if (!/^\d+$/.test(form.phone)) {
      console.log(form.phone);
      error.phone = "Ingrese un caracter valido";
    }
  
    return error;
  }
  