import { ref, onMounted, onUnmounted, watch } from "vue";
import { faker } from "@faker-js/faker";

export default function useName2() {
  const name = ref(faker.person.fullName());
  const error = ref("");
  const changeName = () => {
    name.value = faker.person.fullName();
  };
  watch(name, (newVal, oldVal) => {
    // console.log(newVal, " => ", oldVal);
    console.log(name.value);
  });

  onMounted(() => {
    console.log(name.value);
  });
  return { name, fullName: name.value, error, changeName };
}
