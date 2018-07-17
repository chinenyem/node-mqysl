<template>
  <div class="home main">
    <DashbaordTeacher />
    <router-view></router-view>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DashbaordTeacher from '@/components/DashboardTeacher.vue'; // @ is an alias to /src

@Component({ 
  components: {
  DashbaordTeacher,
  },
  })
export default class DashbaordTeacherView extends Vue {}
</script>

<script>
let navigation = {
    // Variables
    $navTrigger: document.querySelector('.nav__trigger'),
    $nav: document.querySelector('.nav'),
    $navItems: document.querySelectorAll('.nav__item a'),
    $main: document.querySelector('.main'),
    transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    isOpeningNav: false,

    init() {
        let self = this;

        // Reset overflow and height on load
        self.$main.style.overflow = 'auto';
        self.$main.style.height = 'auto';

        
        // Handle scroll events
        window.addEventListener('scroll', (e) => {
            if (window.scrollY == 0 && self.isOpeningNav) {
                self.isOpeningNav = false;
                
                // Add a small delay
                setTimeout(function() {
                    self.openNavigation();                    
                }, 150);
            }
        });

        // Handle .nav__trigger click event
        self.$navTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (!self.$navTrigger.classList.contains('is-active')) {
                if (window.scrollY !== 0) {
                    // Scroll to top
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });

                    // Enable opening nav
                    self.isOpeningNav = true;                    
                } else {
                    self.openNavigation();
                }
            } else {
                self.closeNavigation();
            }
        });
                
        // Handle .nav__item click events
        self.$navItems.forEach((navLink) => {
            navLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove is-active from all .nav__items
                self.$navItems.forEach((el) => {
                    el.classList.remove('is-active');
                });
                
                // Ad is-active to clicked .nav__item
                this.classList.add('is-active');
                
                // Transition the page
                self.transitionPage();
            });
        });
    },
    
    openNavigation() {
        let self = this;

        // .nav--trigger active
        self.$navTrigger.classList.add('is-active');

        // body froze
        document.body.classList.add('is-froze');

        // Remove old inline styles
        if (self.$main.style.removeProperty) {
            self.$main.style.removeProperty('overflow');
            self.$main.style.removeProperty('height');
        } else {
            self.$main.style.removeAttribute('overflow');
            self.$main.style.removeAttribute('height');
        }

        // .main active
        self.$main.classList.add('is-active');
    },
    
    closeNavigation() {
        let self = this;
        
        // .nav--trigger inactive
        self.$navTrigger.classList.remove('is-active');

        // .main inactive
        self.$main.classList.remove('is-active');
        self.$main.addEventListener('transitionend', (e) => {    
            if (e.propertyName == 'transform' && !self.$navTrigger.classList.contains('is-active')) {
                // Reset overflow and height
                self.$main.style.overflow = 'auto';
                self.$main.style.height = 'auto';

                // body unfroze
                document.body.classList.remove('is-froze');
            }
        });                    

        // no-csstransitions fallback
        if (document.documentElement.classList.contains('no-csstransitions')) {
            // .main inactive
            self.$main.classList.remove('is-active');

            // body unfroze
            document.body.classList.remove('is-froze');
        }
    },
    
    transitionPage() {
        let self = this;
        
        // .main transitioning
        self.$main.classList.add('is-transition-out');
        self.$main.addEventListener('transitionend', (e) => {    
            if (e.propertyName == 'clip-path') {
                if (self.$main.classList.contains('is-transition-in')) {
                    self.$main.classList.remove('is-transition-in');
                    self.$main.classList.remove('is-transition-out');
                    self.closeNavigation();
                }

                if (self.$main.classList.contains('is-transition-out')) {
                    self.$main.classList.remove('is-transition-out');
                    
                    // Add new content to .main
                    
                    setTimeout(function() {
                        self.$main.classList.add('is-transition-in');
                    }, 500);
                }
            }
        });
    }
}

//navigation.init();
</script>

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

html {
    font-family: $open-sans;
    color: $black;
    background-color: $white;
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


.main {
    overflow: hidden;
    position: relative;
    width: 100%;
    width: calc(100% - #{$nav-bar-width});
    height: 100vh;
    margin-left: $nav-bar-width;
    background-color: $white;
    transition: $cubic-transition;
    transform: scale(1)
               translate3d(0, 0, 0);
    clip-path: inset(0 0 0 0);
    will-change: width, height, opacity, transform, clip-path;
    z-index: 1;
    
    &.is-active {
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        width: calc(100vw - #{$nav-bar-width});
        pointer-events: none;
        opacity: 0.25;
        transform: scale(0.9)
                   translate3d(60%, 0, 0);
        
        @media (min-width: $mobile-width) {
            transform: scale(0.9)
                       translate3d(40%, 0, 0);            
        }
    }
    
    &.is-transition-out {
        clip-path: inset(0 0 0 100%);
    }
}


// --------------------------------------
// Hero
// --------------------------------------
.hero__content,
.content {
    max-width: $max-width;
    margin: 0 auto;
}

.hero {
    background-color: $primary-ultralight;
}

.hero__content {
    width: 100%;
    padding: 1.5rem;
    color: $primary-dark;
    z-index: 1;
    
    @media (min-width: $mobile-width) {
        padding: 6vmin;
    }
}

.hero__heading {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    
    @media (min-width: $mobile-width) {
        font-size: 3rem;        
    }
}

.hero__subheading {
    margin: 1rem 0 0;
    text-transform: uppercase;
    font-size: 1.25rem;
    
    @media (min-width: $mobile-width) {
        font-size: 1.5rem;        
    }

    &,
    a {
        color: $primary-dark;
    }
}


// --------------------------------------
// Article
// --------------------------------------
.article {
    padding: 1.5rem;
    position: relative;
    
    @media (min-width: $mobile-width) {
        padding: 6vmin;
    }
    
    &:not(:last-of-type) {
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 1.5rem;
            width: 50px;
            height: 2px;
            background-color: $primary;
            
            @media (min-width: $mobile-width) {
                left: 6vmin;
            }
        }
    }    
}

.article__title {
    display: block;
    position: relative;
    font-family: $raleway;
    font-size: 1.5rem;
    color: $primary-ultradark;
    
    @media (min-width: $mobile-width) {
        font-size: 3vmin;
    }
    
    &:hover {
        color: $primary;
    }
}

.article__time {
    display: block;
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-top: 1rem;
    
    @media (min-width: $mobile-width) {
        font-size: 1.5vmin;
    }
}

.article__content {
    margin: 1rem 0 0;
    font-size: 1rem;
    line-height: 1.5;
    
    @media (min-width: $mobile-width) {
        font-size: 2vmin;
    }
}


// --------------------------------------
// Navigation
// --------------------------------------
.nav__bar {
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