import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAcCKY7ZxsySVcnqqD3WR00xhoLhmOh-wc",
  authDomain: "nudge-test-cd82a.firebaseapp.com",
  projectId: "nudge-test-cd82a",
  storageBucket: "nudge-test-cd82a.appspot.com",
  messagingSenderId: "183711746138",
  appId: "1:183711746138:web:a96b04d63ac5af52a93063",
  measurementId: "G-H95981M0TD"
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
