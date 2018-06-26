<!--  eslint-disable-next-line -->

<template>
  <div class="login login-page" id="login">
    <div class="form">
        <form class="register-form" v-if="!show">
          <input type="text" placeholder="name" v-model="username" required/>
          <input type="password" placeholder="password" v-model="password" required/>
          <input type="email" placeholder="email address" v-model="email" required/>
          <button @click="createAcct(username, password, email)">create</button>
          <p v-if="emptyfields" class="error Message">
            Please complete All fields.
          </p>
          <p class="message" @click="show =!show">Already registered? <a href="#" class="divp" >Sign In</a></p>
        </form>
        <form class="login-form" v-if="show">
          <input type="text" placeholder="username" v-model="username"/>
          <input type="password" placeholder="password" v-model="logingpassword"/>
          <button @click="loginIn(username, logingpassword)">login</button>
          <p class="message" @click="show = !show">Not registered? <a href="#" class="divp" >Create an account</a></p>
        </form>
    </div>
  </div>
</template>



<style scoped lang="scss">
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}


body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
  
  .container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>

<script>
  import axios from 'axios';

    export default {
      name: "login",
      data()  {
        return {
              show: true,
              emptyfields: false,
              username: '',
              password: '',
              email: '', 
              username: '',
              logingpassword: '',
             };
      },
      methods:{
          createAcct(username, password, email){
          console.log(username + " " + password + " " + email);
         
          let dataNew = {
              username: username,
              password: password,
              email:email
            },
            value = true;
          if (dataNew.username == "" || dataNew.password == "" || dataNew.email == "")
          {
              
              value = true;
              setTimeout(function(){
              value = false;
              }, 3000)
             this.emptyfields = value 
            
          }
          else{
            let url = '/createUser';
            console.log(dataNew)
             axios.post(url, dataNew).then((response) => {
                console.log(response)
            });
         }
        
        },
         loginIn(username, logingpassword) {
          console.log(username + " " + logingpassword );
          if(username == "" || logingpassword == ""){
            console.log("problem")
          }else{
            let url = '/login';
            axios.post(url, {username:username, password:logingpassword}).then((response) => {
                console.log(response)
            });
          }
            
        }
        
      }
      
//       ,
    
//       computed:{
//         createAcct():boolean{
//           return this.createAcct();
//         }
//       }
    
    }
    
    
    
</script>