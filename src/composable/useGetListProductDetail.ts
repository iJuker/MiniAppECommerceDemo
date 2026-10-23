// composables/useFakeList.ts
import { ref } from "vue";
import products from "./json/productData.json";
import type { IProduct } from "./useGetListProductList";

export function useGetListProductDetail() {
  const loading = ref(false);
  const data = ref<IProduct | undefined>(undefined);
  const error = ref<string | null>(null);

  const fetchData = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // fake data
      data.value = products.find((x) => x.id === id);
    } catch (err: any) {
      error.value = "Failed to fetch list";
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    data,
    error,
   fetchData,
  };
}
