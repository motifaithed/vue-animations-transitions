<template>
  <router-view v-slot="slotProps">
      <transition name="show-user">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  <!-- <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animateFlag }"></div>
    <button @click="beginAnimation">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="showHideFlag">Sometimes show this..Sometimes not..</p>
    </transition>
    <button @click="showHide">show/hide</button>
  </div>
  <div class="container">
    <transition name="show-user" mode="out-in">
      <button @click="showUsers" v-if="!showUserFlag">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>

<script>
  // import UsersList from './components/UsersList.vue';
export default {
  components:{
    // UsersList
  },
  data() {
    return {
      dialogIsVisible: false,
      animateFlag: false,
      showHideFlag: false,
      showUserFlag: true,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    beginAnimation() {
      this.animateFlag = true;
    },
    showHide() {
      this.showHideFlag = !this.showHideFlag;
    },
    showUsers() {
      this.showUserFlag = true;
    },
    hideUsers() {
      this.showUserFlag = false;
    },
    beforeEnter(el) {
      console.log('before enter');
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      
      let round = 1;
       this.enterInterval = setInterval(()=>{
        el.style.opacity = round * 0.01;
        round++;
        if(round > 100){
          clearInterval(this.enterInterval)
          done();
        }
      },20)
    },
    afterEnter(el) {
      console.log('after enter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('before leave');
      el.style.opacity = 1;
    },
    leave(el, done){
      console.log('leave');
      let round = 1;
       this.leaveInterval = setInterval(()=>{
        el.style.opacity = 1 - round * 0.01;
        round++;
        if(round > 100){
          clearInterval(this.leaveInterval)
          done();
        }
      },20)
    }, 
    afterLeave(el) {
      console.log('after leave');
      console.log(el);
    },
    enterCancelled(){
      clearInterval(this.enterInterval);
    },
    leaveCancelled(){
      clearInterval(this.leaveInterval);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
/* .v-enter-from{
  opacity: 0;
  transform: translateY(-50px);
} */
/* .para-enter-active {
   transition: all 0.3s ease-out; 
  animation: slide-fade 0.3s ease-out;
} */
/* .v_enter-to{
  opacity: 1;
  transform: translateY(0px)
} */

/* .v-leave-from{
  opacity: 1;
  transform: translateY(0px);
} */
/* .para-leave-active {
   transition: all 0.3s ease-out; 
  animation: slide-fade 0.3s ease-out;
} */
/* .v-leave-to{
  opacity: 0;
  transform: translateY(-50px);
} */
.animate {
  /* transform: translateX(-100px); */
  animation: slide-fade 0.3s ease-out forwards;
}

.show-user-enter-from,
.show-user-leave-to {
  opacity: 0;
}
.show-user-enter-active {
  transition: opacity 1s ease-out;
}
.show-user-enter-to,
.show-user-leave-from {
  opacity: 1;
}
@keyframes slide-fade {
  0% {
    transform: translateX(0px) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.2);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
