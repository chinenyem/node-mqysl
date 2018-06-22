<template>
  <div class="login">

    <div class="login-page">
      <div class="form">
       <button @click="message">click me</button>
        <form class="register-form" v-if="!show">
          <input type="text" placeholder="name"/>
          <input type="password" placeholder="password"/>
          <input type="text" placeholder="email address"/>
          <button>create</button>
          <p class="message" @click="show =!show">Already registered? <a href="#" class="divp" >Sign In</a></p>
        </form>
         
        <form class="login-form" v-if="show">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p class="message" @click="show = !show">Not registered? <a href="#" class="divp" >Create an account</a></p>
        </form>
        
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                show:true,
                nameit: 'Vue.js'
            }
        }
    }
</script>

<style scoped lang="scss">

@import url(https://fonts.googleapis.com/css?family=Roboto:300);

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
/* .form .register-form {
  display: none;
} */
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

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>

<script lang="ts">
//   (function(){
//     $('.message a').click(function(){
//        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
//     });
//   })()

//   console.log("hello")


</script>

<script lang="ts">
 
import { Vue } from 'vue-property-decorator';
//    let app = new Vue({
//     el: ".login",
//     data:{
//       show:true,
//        name: 'Vue.js'
//     },
//       methods: {
//       message: function (event:any) {
//         // `this` inside methods points to the Vue instance
//         console.log("hello")
//         alert('Hello ' + this.name + '!')
//         // `event` is the native DOM event
//         if (event) {
//           alert(event.target.tagName)
//         }
//       }
//    }
//   })
  

 export default class Login  {
  show: boolean = true;
  name: string = 'Login';
  
  message(){
    console.log("hello")
  }
 }
</script>