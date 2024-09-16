<script setup>
import PetitionCard from "components/Petition/PetitionCard.vue";
import { ref } from "vue";

const status_options = ref(["Открытый", "Закрытый"]);
const status = ref(status_options.value[0]);

const qualification_options = ref([
  "Материальное обеспечение",
  "Квалификация сотрудников",
  "Профессиональное развитие",
  "Оборудование",
  "Финансовая поддержка",
]);
const qualification = ref(qualification_options.value[0]);

const activity_options = ref([
  "Бытовые условия",
  "Услуги и поддержка",
  "Энергетические ресурсы",
  "Техническое обслуживание",
  "Потребности в обучении",
]);
const activity = ref(activity_options.value[0]);
</script>

<template>
  <div class="q-pa-md">
    <div class="row justify-start">
      <q-select
        color="blue"
        filled
        v-model="status"
        :options="status_options"
        label="Статус"
        class="q-mr-md custom-height"
      >
        <template v-if="model" v-slot:append>
          <q-icon
            name="cancel"
            @click.stop.prevent="model = null"
            class="cursor-pointer"
          />
        </template>
      </q-select>
      <q-select
        color="blue"
        filled
        v-model="qualification"
        :options="qualification_options"
        label="Направление деятельности"
        class="q-mr-md"
      >
        <template v-if="model" v-slot:append>
          <q-icon
            name="cancel"
            @click.stop.prevent="model = null"
            class="cursor-pointer"
          />
        </template>
      </q-select>
      <q-select
        color="blue"
        filled
        v-model="activity"
        :options="activity_options"
        label="Классификация проблемы"
        class="q-mr-md"
      >
        <template v-if="model" v-slot:append>
          <q-icon
            name="cancel"
            @click.stop.prevent="model = null"
            class="cursor-pointer"
          />
        </template>
      </q-select>
    </div>
    <div class="q-mt-sm row items-start q-gutter-lg">
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
      <PetitionCard />
    </div>
  </div>
</template>
