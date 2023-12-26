
var nameInputData = document.getElementById('nameInput')
var emailInputData = document.getElementById('emailInput')
var passwordInputData = document.getElementById('passwordInput')
var inputAllData;
var emailRegix =/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
var passwordRegix = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/gi

if (JSON.parse(localStorage.getItem('inpuAllData')) != null) {
     inputAllData = JSON.parse(localStorage.getItem('inpuAllData'))

} else { inputAllData =[]

}





function signUpData(){

    
    if (validateEmailRegix(emailInputData.value )){
     if(validatepasswordRegix(passwordInputData.value)){ 
          

  var inputData ={
          name: nameInputData.value,
         email: emailInputData.value,
         password: passwordInputData.value,
     

     } 
      required()

      noRepite(emailInputData.value) 
         inputAllData.push(inputData)
       localStorage.setItem('inpuAllData',JSON.stringify(inputAllData) )
    console.log(inputAllData);
    change()
//     clearAll()
//     logInData()
//  welcome()
  }else{alert('Wrong password')}
}else{alert('Wrong email')}
}

function noRepite(test3) {  
       JSON.parse(localStorage.getItem('inpuAllData'))
     for (var i = 0; i < inputAllData.length; i++) {
      
          if (inputAllData[i].email == test3) {


               document.getElementById('error').classList.remove('d-none')
               document.getElementById('sucess').classList.add('d-none')
               signUpData()
          } else {
               document.getElementById('error').classList.add('d-none')
               document.getElementById('sucess').classList.remove('d-none')
               
          }
          
          
     }
     
}

function validateEmailRegix(test){
      emailRegix =/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ig
  
     return emailRegix.test(test)
     
}
function validatepasswordRegix(test2){
     passwordRegix = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/ig
     return passwordRegix.test(test2)
     
}
function change(){
     document.getElementById('nameInput').classList.add('d-none')
     document.getElementById('signin').innerHTML=('signUp')
     document.getElementById('account').innerHTML=('Don’t have an account?')
     document.getElementById('buttonSign').classList.add('d-none')
     document.getElementById('buttonlogin').classList.remove('d-none')
     document.querySelector('#required').classList.add('d-none')



     
}



function signInAncor(){

          document.getElementById('nameInput').classList.add('d-none')
        document.getElementById('signin').classList.add('d-none')
        document.getElementById('signUp').classList.remove('d-none')
          document.getElementById('account').innerHTML=(' Don’t have an account?')
          document.getElementById('buttonSign').classList.add('d-none')
          document.getElementById('buttonlogin').classList.remove('d-none')
          document.querySelector('#required').classList.add('d-none')
         

          
     }



    function signUpAncor(){ 
     document.getElementById('nameInput').classList.remove('d-none')
     document.getElementById('signin').classList.remove('d-none')
     document.getElementById('signUp').classList.add('d-none')
     document.getElementById('account').innerHTML=('You have an account?')
     document.getElementById('buttonSign').classList.remove('d-none')
     document.getElementById('buttonlogin').classList.add('d-none')
     document.querySelector('#required').classList.add('d-none')
     

    }




    function welcome() {



     
     document.querySelector('h3').innerHTML==(nameInputData.value)

     document.querySelector('#containerAll').classList.add('d-none')
     document.querySelector('h2').classList.remove('d-none')
     document.querySelector('h3').innerHTML=(nameInputData.value)
     document.querySelector('#logOutData').classList.remove('d-none')


     
    }

function required(){
   
     
     if (nameInputData.value ==''|| emailInputData.value =='' || passwordInputData.value =='')
     {document.querySelector('#required').classList.remove('d-none')
     signUpData()
     
   }else{document.querySelector('#required').classList.add('d-none')}


}

// function required(){

//      if (document.getElementById('buttonSign').innerHTML== ('Login'))
//       { if (emailInputData.value =='' || passwordInputData.value =='') {
//           document.querySelector('#required').classList.remove('d-none')
        
//      } 


          
//      } else if (document.getElementById('buttonSign').innerHTML== ('Sign Up') ){
//      if (nameInputData.value ==''|| emailInputData.value =='' || passwordInputData.value =='')
//      {document.querySelector('#required').classList.remove('d-none')
//    }

     
//           { 
//     }
    
// }
// }

function logInData(){
     if ( emailInputData.value =='' ||  passwordInputData.value ==''){
          document.querySelector('#required').classList.remove('d-none')
          signUpData()

         
     }else{welcome()}
}

    function clearAll(){


     
     emailInputData.value =''
      passwordInputData.value =''
    }
    


    function logOutData(){
     

     document.getElementById('nameInput').classList.remove('d-none')
     document.querySelector('h2').classList.add('d-none')
     document.querySelector('h3').classList.add('d-none')
     document.getElementById('nameInput').classList.add('d-none')
     document.querySelector('#containerAll').classList.remove('d-none')
     document.getElementById('error').classList.add('d-none')
     document.getElementById('sucess').classList.add('d-none')
     document.querySelector('#logOutData').classList.add('d-none')
     clearAll()


    }