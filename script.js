class validator {

    constructor() {
        this.validations = [

        ]
    }
   // iniciar a validaçao
   validate(form) {

    // inputs
    let inputs = form.getElementTagName('input');

    let inputsArry = [...inputs];

    inputsArry.forEach(function(input) {
        console.log(input);

    }

   }

}








let from = document.getElementById('resgiter-form');
let submit = document.getElementById(btn-submit);

let validator = new validator();

//evento que dispara validações
submit.addEventListener('click', function(e) {
    
    e.preventDefault();

    console.log('cadastrado');

})
