import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import Users from './pages/Users.vue';
import CourseGoal from './pages/CourseGoal';

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component:Users},
        {path:'/course-goal', component:CourseGoal}
    ]
});
app.component('base-modal', BaseModal);
app.use(router);

router.isReady().then(()=>{
    app.mount('#app');
})
