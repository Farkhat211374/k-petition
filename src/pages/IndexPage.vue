<script setup>
import CreateProblem from "src/components/dialogs/CreateEditProblemDialog.vue";
import ProblemCards from "src/components/ProblemCards.vue";
import ProblemKpiMap from "src/components/ProblemKpiMap.vue";
import ProblemKpiTable from "src/components/ProblemKpiTable.vue";
import { usePetitionStore } from "../stores/petitionStore";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useQuasar } from "quasar";

const data = ref([]);
const petitionStore = usePetitionStore();
const $q = useQuasar();
let timer;

onMounted(async () => {
  showLoading();
  await petitionStore.fetchAllData();
  data.value = petitionStore.getData;
});

onBeforeUnmount(async () => {
  if (timer !== void 0) {
    clearTimeout(timer);
  }
  $q.loading.hide();
});

const showCreateDialog = ref(false);
const options = ref("all");
const search = ref("");
const vueOption = ref("cards");

const showLoading = () => {
  $q.loading.show();
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 2000);
};

const onClickCreateButton = () => {
  showCreateDialog.value = true;
};

const onChangeVue = (value) => {
  vueOption.value = value;
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
          unelevated
          no-caps
          @click="onClickCreateButton"
        />
        <div class="q-gutter-x-md">
          <q-btn
            padding="sm"
            :color="vueOption === 'cards' ? 'info' : 'white'"
            :text-color="vueOption === 'cards' ? 'white' : 'grey'"
            unelevated
            icon="format_size"
            @click="onChangeVue('cards')"
          />
          <q-btn
            padding="sm"
            :color="vueOption === 'table' ? 'info' : 'white'"
            :text-color="vueOption === 'table' ? 'white' : 'grey'"
            unelevated
            icon="today"
            @click="onChangeVue('table')"
          />

          <q-btn
            padding="sm"
            :color="vueOption === 'map' ? 'info' : 'white'"
            :text-color="vueOption === 'map' ? 'white' : 'grey'"
            unelevated
            icon="map"
            @click="onChangeVue('map')"
          />
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

      <div>
        <ProblemKpiTable v-if="vueOption === 'table'" />
        <ProblemKpiMap v-if="vueOption === 'map'" />
        <ProblemCards v-if="vueOption === 'cards'" :data="data" />
      </div>

      <CreateProblem v-model:showCreateDialog="showCreateDialog" />
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
