import Home from "@/pages/home/Home.vue";
import NotFound from "@/pages/no-found/NotFound.vue";
import ProductDetail from "@/pages/product-detail/ProductDetail.vue";
import Checkout from "@/pages/check-out/Checkout.vue";
import { createRouter, createWebHistory } from "vue-router";
import TermAndCondition from "@/pages/term-and-condition/TermAndCondition.vue";
import UnacceptedTermCondition from "@/pages/unaccepted-term-condition/UnacceptedTermCondition.vue";
// import { useAcceptTerm } from "@/composable/state/useAcceptTerm";

const routes = [
  { path: "/", component: Home, meta: { requiresAuth: true } },
  { path: "/product/:id", component: ProductDetail, meta: { requiresAuth: true } },
  { path: "/checkout/:id", component: Checkout, meta: { requiresAuth: true } },
  { path: "/term-condition", component: TermAndCondition },
  { path: "/unaccepted-term-condition", component: UnacceptedTermCondition },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, // catch-all
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard
router.beforeEach((to, _, next) => {
  const acceptType = localStorage.getItem("acceptTerm");

  // Public routes → always allow
  if (!to.meta.requiresAuth || acceptType === "accepted") return next();

  if (acceptType === "rejected") return next("/unaccepted-term-condition");

  // Default: must accept terms
  return next("/term-condition");
});
export default router;
