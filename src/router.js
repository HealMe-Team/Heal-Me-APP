import { createRouter, createWebHistory } from 'vue-router';
import Doctors from './components/Doctors/Doctors.component.vue';
import Hospitals from './components/Hospitals/Hospitals.component.vue';
import RecommendedProducts from './components/Products/RecommendedProducts.component.vue';
import MainImage from './layouts/MainLayout.component.vue';
import DoctorView from "@/components/Doctors/DoctorView.vue";
import DoctorViewHistory from "@/components/Doctors/DoctorView.History.vue";

const routes = [
    { path: '/', component: MainImage },
    { path: '/doctor', component: Doctors },
    { path: '/hospitals', component: Hospitals },
    { path: '/products', component: RecommendedProducts },
    { path: '/doctor-view', component: DoctorView },
    { path: '/doctor-view/history', component: DoctorViewHistory },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
