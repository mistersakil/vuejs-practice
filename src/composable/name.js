import { ref, onMounted, onUnmounted, watch } from "vue";
import { faker } from "@faker-js/faker";

export default function useName() {
  const fullName = ref("");

  const generateFullName = () => {
    fullName.value = faker.person.fullName();
  };

  onMounted(() => {
    window.addEventListener("mousemove", generateFullName);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", generateFullName);
  });

  watch(fullName, (newVal, oldVal) => {
    console.log(newVal);
  });

  // another way to return value using property { fullName };
  const getFullName = () => {
    return fullName.value;
  };
  return { getFullName };
}
