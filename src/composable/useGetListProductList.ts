// composables/useFakeList.ts
import { ref } from "vue";
import products from "./json/productData.json";

export function useGetProductList() {
  const loading = ref(false);
  const data = ref<IProduct[]>([]);
  const error = ref<string | null>(null);

  const fetchList = async () => {
    loading.value = true;
    error.value = null;
    try {
      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // fake data
      data.value = products;
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
    fetchList,
  };
}

export interface IProduct {
  id: number;
  price: string;
  priceNumber: number;
  title: string;
  description: string;
  imgSrc: string;
  rating: number;
  isFavorite: boolean;
}
