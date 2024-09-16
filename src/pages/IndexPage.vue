<script setup>
import { ref } from "vue";
import CreatePetitionDialog from "../components/Petition/CreatePetitionDialog.vue";
import PetitionCardList from "components/Petition/PetitionCardList.vue";
const confirm = ref(false);

const onClickCreate = () => {
  confirm.value = true;
};

const close = () => {
  confirm.value = false;
};
</script>

<template>
  <div class="wrapper">
    <q-btn
      class="q-ml-md"
      color="primary"
      icon="my_location"
      label="Добавить предложение"
      @click="onClickCreate"
    />
    <CreatePetitionDialog :confirm="confirm" @close="close" />

    <PetitionCardList />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px;
}
</style>
