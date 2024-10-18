/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
   scrollBehavior(__to, __from, __savedPosition) {
      return { top: 0 };
   },
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

const accountRoutes = [ "login", "register"]
router.beforeEach(async (to, from, next) => {
  //  let isLoggedIn = false;

  //  try {
  //     // Cek apakah pengguna sudah memiliki sesi aktif
  //     const session = await account.getSession("current");
  //     isLoggedIn = !!session; // Jika session ada, berarti pengguna sudah login
  //  } catch {
  //     isLoggedIn = false; // Jika error, berarti tidak ada sesi
  //  }

  //  if (!isLoggedIn) {
  //     if (to.name !== "Login" && to.name !== "Register") {
  //       next({ name: 'Register' }); 
  //     } else {
  //       next();
  //     }
  //   } else {
  //     if (to.name === 'Login' || to.name === 'Register') {
  //       next({ name: 'Home' });
  //     } else {
  //       next();
  //     }
  //   }
  next()
});

export default router;