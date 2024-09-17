<script setup>
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import PetitionPageTimeLine from "src/components/Petition/PetitionPageTimeLine.vue";
import { useRoute, useRouter } from "vue-router";
import { usePetitionStore } from "../stores/petitionStore";
import { onMounted } from "vue";
import { ref } from "vue";
import { watch } from "vue";
const route = useRoute();
const router = useRouter();
const id = ref(route.params.id);

const data = ref({});
const loading = ref(true);
const error = ref(null);
const petitionStore = usePetitionStore();

onMounted(async () => {
  if (id.value) {
    await petitionStore.fetchData(id.value);
    data.value = petitionStore.getData;
  }
});

watch(
  () => petitionStore.loading,
  (newLoading) => {
    loading.value = newLoading;
  }
);

const onClickBack = () => {
  router.push("/");
};
</script>

<template>
  <div v-if="!loading" class="q-pa-lg fit row justify-between">
    <div class="left-content q-px-md">
      <div class="text-h4 text-blue-10 text-weight-bold">
        <q-btn
          color="primary"
          size="md"
          icon="chevron_left"
          rounded
          @click="onClickBack"
          class="q-mr-md"
        />
        {{ data.title }}
      </div>
      <div class="q-pt-lg rounded">
        <q-img
          :src="data.imageUrl"
          spinner-color="white"
          class="rounded-borders"
        />
      </div>
      <div class="q-pt-lg text-body1">
        <div class="text-caption text-grey">Подробное описание</div>
        {{ data.description }}
      </div>

      <div
        v-if="data.activity"
        class="q-pt-xl text-h6 text-blue-10 text-weight-bold"
      >
        <div class="text-caption text-grey">Направление деятельности</div>
        {{ data.activity.name }}
      </div>
      <div
        v-if="data.classification"
        class="q-pt-sm text-h6 text-blue-10 text-weight-bold"
      >
        <div class="text-caption text-grey">Классификация проблемы</div>
        {{ data.classification.name }}
      </div>
      <div class="q-pt-sm text-h6 text-blue-10 text-weight-bold">
        <div class="text-caption text-grey">Автор проблемы</div>
        {{ data.author }}
      </div>
      <div class="q-mt-md row justify-between">
        <div class="row">
          <div class="row items-center">
            <img :src="like" height="30px" alt="thumbs" />
            <div
              class="q-ml-sm q-mt-xs text-subtitle1 text-info text-weight-bold"
            >
              {{ data.likes_count }}
            </div>
          </div>
          <div class="row items-center q-ml-lg">
            <img
              :src="dislike"
              height="30px"
              alt="thumbs"
              style="transform: scaleY(-1)"
              class="q-mt-sm"
            />
            <div
              class="q-ml-sm q-mt-xs text-subtitle1 text-info text-weight-bold"
            >
              {{ data.dislikes_count }}
            </div>
          </div>
        </div>
      </div>
      <div class="q-pt-md text-h6 text-positive text-weight-bold">
        {{ data.status }}
      </div>
    </div>
    <div class="timeline-container">
      <PetitionPageTimeLine />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 20px;
}
.left-content {
  flex: 1;
  padding-top: 14px;
}

.timeline-container {
  flex: 1;
  max-width: 600px;
  margin-left: auto;
}
.rounded-borders {
  border-radius: 20px;
  overflow: hidden;
}
</style>
