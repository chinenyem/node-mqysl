<!--  eslint-disable-next-line -->

<template>
  
  <div class="login login-page" id="login">
    <div class="welcomeTitle">
      <div class="title">
        <h2>
          <span class="subtitle">Welcome To </span>ChurchCourse 
        </h2>
      </div>
    </div>
    <div class="containerForm">
      <div class="teachersignin">
      <div class="form">
        <h5>
          Are You A Teacher?<br>
          Log In
        </h5>
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
          <div :updated="updated">
            
          </div>
          <input type="text" placeholder="username" v-model="username"/>
          <input type="password" placeholder="password" v-model="logingpassword"/>
          <button @click="loginIn(username, logingpassword)">login</button>
          <p class="message" @click="show = !show">Not registered? <a href="#" class="divp" >Create an account</a></p>
        </form>
    </div>
      
    </div>
      <div class="studentsignin">
        <div class="form">
        <h5>
          Are You A Student?<br>
          Log In
        </h5>
        <form class="register-form" v-if="!showstudent">
          <input type="text" placeholder="name" v-model="studentusername" required/>
          <input type="password" placeholder="password" v-model="studentpassword" required/>
          <input type="email" placeholder="email address" v-model="studentemail" required/>
          <button @click="createAcctstudent(studentusername, studentpassword, studentemail)">create</button>
          <p v-if="emptyfields" class="error Message">
            Please complete All fields.
          </p>
          <p class="message" @click="showstudent =!showstudent">Already registered? <a href="#" class="divp" >Sign In</a></p>
        </form>
        <form class="login-form" v-if="showstudent">
          <div :updated="updated">
            
          </div>
          <input type="text" placeholder="username" v-model="studentusername"/>
          <input type="password" placeholder="password" v-model="studentlogingpassword"/>
          <button @click="loginInstudent(studentusername, studentlogingpassword)">login</button>
          <p class="message" @click="showstudent = !showstudent">Not registered? <a href="#" class="divp" >Create an account</a></p>
        </form>
    </div>
    </div>
     </div>
  </div>
</template>



<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600');
  
  
  .welcomeTitle{
    height: 222px;
    background-image: url("../assets/abstract2.png");
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 281%;
    .title{
      font-family: 'Montserrat', sans-serif;
      top: 74px;
      position: relative; 
      color:white;
      h2{
        font-weight:600;
      }
      h2 > .subtitle{
        font-weight:400;
      }
    }
  }
  
  .containerForm{
    display: flex;
    flex-flow: row wrap;
    max-width: 100%;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    .teachersignin{
      flex: 1;
      background-color: rgba(238, 238, 239, 0.5);
    }
    .studentsignin{
      flex: 1;
      background-color: rgba(255, 166, 3, 0.5);
    }
  }
  
  
  @media (max-width: 400px) {
  .containerForm {
    display: block;
    .teachersignin, .studentsignin{
      width: 100%;
    }
    .teachersignin{
      height: 63vh; 
    }
     .studentsignin{
       height: 69vh;
    }
  }
}
  
  
  
.login-page {
/*   width: 360px;
  padding: 8% 0 0;
  margin: auto; */
}
.form {
  top: 69px;
  position: relative;
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
  background: #854bf5;
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
  background: #854bf5;
}
.form .message {
  margin: 15px 0 0;
  color: #4a4949;
  font-size: 12px;
}
.form .message a {
  color: #854bf5;
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
  import Vue from 'vue';
  import { mapState } from 'vuex';

    export default Vue.extend({
      name: "login",
      data()  {
        return {
              show: true,
              showstudent:true,
              emptyfields: false,
              password: '',
              email: '', 
              username: '',
              logingpassword: '',
              id: '',
              role: '',
              studentpassword: '',
              studentemail: '', 
              studentusername: '',
              studentlogingpassword: '',
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
        createAcctstudent(studentusername, studentpassword, studentemail){
          console.log(studentusername + " " + studentpassword + " " + studentemail);
         
          let dataNew = {
              username: studentusername,
              password: studentpassword,
              email:studentemail
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
                let dataNew = {
                  username: response.data.data.username,
                  email: response.data.data.email,
                  role: response.data.data.role,
                  id:response.data.data.id,
                  token:response.data.token
                }
                console.log(this.$store.state)
                this.$store.dispatch('auth', dataNew);
                //this.$router.push({ name: 'dashboard', params: { userId: 123 }})
                this.$router.push({ name: 'teacher'})
              //teacher dashboard shared by teacher and teacher assistant
              //admin dashboard
              //student dashboard


               
            });
          }
            
        },
        loginInstudent(studentusername, studentlogingpassword) {
          console.log(studentusername + " " + studentlogingpassword );
          if(studentusername == "" || studentlogingpassword == ""){
            console.log("problem")
          }else{
            let url = '/login';
            axios.post(url, {username:studentusername, password:studentlogingpassword}).then((response) => {
                let dataNew = {
                  username: response.data.data.username,
                  email: response.data.data.email,
                  role: response.data.data.role,
                  id:response.data.data.id,
                  token:response.data.token
                }
                console.log(this.$store.state)
                this.$store.dispatch('auth', dataNew);
                //this.$router.push({ name: 'dashboard', params: { userId: 123 }})
              //needs to be dashboardstudent
                this.$router.push({ name: 'dashboardTeacher'})
              //teacher dashboard shared by teacher and teacher assistant
              //admin dashboard
              //student dashboard


               
            });
          }
            
        }
        
      },
      watch: {
        userState() {
          console.log(this.$store.state)
         // return this.$store.state.user
        }
      },
      computed: {
          // arrow functions can make the code very succinct!
//           ...mapState({
//             username: state => state.username,
//             role: state => state.role,
//             id : state => state.user_id,
//             email: state => state.email
//           })
        
         updated: function() {
      return this.$store.getters.getUserData
    }
          

//           // passing the string value 'count' is same as `state => state.count`
//           countAlias: 'count',

//           // to access local state with `this`, a normal function must be used
//           countPlusLocalState (state) {
//             return state.count + this.localCount
//           }
        }
    
    })
    
    
    
</script>