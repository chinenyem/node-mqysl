<template>
   <v-navigation-drawer
         fixed
         v-model="drawer"
         app
       >
         <v-list dense>
           <v-list-tile @click="">
             <v-list-tile-action>
               <v-icon>home</v-icon>
             </v-list-tile-action>
             <v-list-tile-content>
               <v-list-tile-title>Home</v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
           <v-list-tile @click="">
             <v-list-tile-action>
               <v-icon>contact_mail</v-icon>
             </v-list-tile-action>
             <v-list-tile-content>
               <v-list-tile-title>Contact</v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
         </v-list>
       </v-navigation-drawer>
</template>



<script>


</script>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DashboardTeacher extends Vue {
  @Prop() private drawer: any;
 // undecorated property will be packed in `data` option
  
  // undecorated method is just method
  // hello() {
  //   alert('hello ' + this.name)
  // }
  // data: () => ({
  //   drawer: null
  // })
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// Colors
$primary: #7d87a8;
$primary-ultralight: mix(white, $primary, 65%);
$primary-light: mix(white, $primary, 40%);
$primary-dark: mix(black, $primary, 40%);
$primary-ultradark: mix(black, $primary, 80%);
$black: #333333;
$white: #eeeeee;

// Fonts
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400|Raleway:300,700);
$open-sans: 'Open Sans', Helvetica, arial, sans-serif;
$raleway: 'Raleway', 'Open Sans', sans-serif;

// Misc
$max-width: 800px;
$mobile-width: 600px;
$ease-in-out-cubic: cubic-bezier(0.645,  0.045, 0.355, 1.000);
$cubic-transition: 0.55s $ease-in-out-cubic;

$nav-bar-width: 60px;
$bar-length: 28px;
$bar-thickness: 4px;
$nav-item-delay: 0.05s;


// ------------------------------------------------------


*,
*:before,
*:after {
    box-sizing: border-box;
}



body {
    &.is-froze {
        overflow: hidden;
        width: 100vw;
        height: 100vh;
    }
}

h1, h2, h3,
h4, h5, h6 {
    font-family: $raleway;
}

a {
    color: $black;
    text-decoration: none;
}

img {
    max-width: 100%;
}

a {
    transition: color 0.3s ease-in-out;

    &:hover {
        color: $primary;
    }
}


// ------------------------------------------------------



// --------------------------------------
// Navigation
// --------------------------------------
.navbar.nav__bar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $nav-bar-width;
    height: 100vh;
    border-right: 1px solid rgba($primary, 0.25);
    background-color: $primary-ultradark;
    z-index: 99;
}

.nav__trigger {
    display: block;
    position: absolute;
    top: 50%;
    left: ($nav-bar-width/2) - ($bar-length/2);
    padding: ($bar-thickness*2) 0;
    margin-top: -(($bar-thickness*5) / 2);
    transition: 0.2s ease-in-out;
    z-index: 99;

    .bars {
        position: relative;

        &,
        &:before,
        &:after {
            width: $bar-length;
            height: $bar-thickness;
            background-color: $primary;
            transition: 0.2s ease-in-out;
            border-radius: $bar-thickness;
        }

        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            will-change: transform;
        }

        &:before {
            transform: translateY(-($bar-thickness*2));
        }

        &:after {
            transform: translateY(($bar-thickness*2));
        }
    }

    &.is-active {
        transform: rotate(-45deg);

        .bars {
            &:before,
            &:after {
                transform: translateX(0)
                           rotate(-90deg);
            }
        }
    }
}

.nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $primary-ultradark;
    z-index: 0;
}

.nav__list {
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    margin: 0;
    padding-left: $nav-bar-width;
    list-style: none;
    font-family: $raleway;
    transform: translateY(-50%);

    .nav__item {
        padding: 0.5rem 1rem;

        @media (min-width: $mobile-width) {
            width: percentage(1/3);
            padding: 0.5rem 1rem;
        }
    }

    a {
        display: inline-block;
        color: $primary;
        font-size: 1rem;
        line-height: 1.5;

        &:hover {
            color: $primary-light;
        }

        &.is-active {
            color: $primary-ultralight;
        }

        @media (min-width: $mobile-width) {
            font-size: 1.5rem;
        }
    }
}
</style>
