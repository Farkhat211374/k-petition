<script setup>
import ProblemCards from "src/components/ProblemCards.vue";
import { ref } from "vue";

const confirm = ref(false);
const options = ref("all");
const search = ref("");

const onClickCreate = () => {
  confirm.value = true;
};

const close = () => {
  confirm.value = false;
};
</script>

<template>
  <div class="wrapper">
    <div class="q-gutter-y-md">
      <div class="q-gutter-x-lg row items-start">
        <q-input
          class="col-6"
          bg-color="white"
          color="info"
          v-model="search"
          debounce="500"
          outlined
          dense
          clearable
          placeholder="Поиск"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn
          padding="sm"
          color="primary"
          icon-right="add"
          label="Создать"
          class="text-weight-bold"
          no-caps
          @click="onClickCreate"
        />
        <div class="q-gutter-x-md">
          <q-btn padding="sm" color="white" text-color="grey" icon="map" />
          <q-btn padding="sm" color="white" text-color="grey" icon="today" />
          <q-btn padding="sm" color="info" icon="format_size" />
        </div>
      </div>
      <div class="row items-center text-weight-bold" style="color: #a0a3b7">
        <q-option-group
          v-model="options"
          inline
          :options="[
            { label: 'Все проблемы', value: 'all' },
            { label: 'Активные проблемы', value: 'active' },
            { label: 'Завершенные проблемы', value: 'closed' },
          ]"
        />
      </div>
      <div class=""><ProblemCards /></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px;
  background-color: #f1f0f5;
  min-height: 95vh;
  box-sizing: border-box;
}
</style>
