var numero1=document.querySelector('#num1')

var numero2=document.querySelector('#num2')

var resultado = document.querySelector('span')
        
       
      
                function somar(){
                        resultado.innerHTML = (numero1.valueAsNumber) + (numero2.valueAsNumber)
                }
                function subtrair(){
                        resultado.innerHTML = (numero1.valueAsNumber) - (numero2.valueAsNumber)
                }
                function dividir(){
                        if (numero2.valueAsNumber== 0){
                                resultado.innerHTML= "Não existe divisão por 0"
                        }else{
                                resultado.innerHTML = (numero1.valueAsNumber) / (numero2.valueAsNumber)
                        }
                        
                        
                }
                function multiplicar(){
                        resultado.innerHTML = (numero1.valueAsNumber) * (numero2.valueAsNumber)
                }
                function clean(){
                        resultado.innerHTML = "";
                        numero1.value = "";
                        numero2.value = "";

                        
                }

              