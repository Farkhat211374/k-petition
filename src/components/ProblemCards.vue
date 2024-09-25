<script setup>
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import { usePetitionStore } from "../stores/petitionStore";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { ref } from "vue";

const router = useRouter();

const data = ref([]);
const petitionStore = usePetitionStore();
onMounted(async () => {
  await petitionStore.fetchAllData();
  data.value = petitionStore.getData;
});

const onClickView = (id) => {
  router.push(`/petition/${id}`);
};
</script>

<template>
  <div class="row items-start q-gutter-lg my-card-container">
    <div v-for="(obj, index) in data" :key="'petition_' + index">
      <q-card v-if="obj" class="my-card" flat bordered>
        <q-card-section class="justify-between">
          <q-img :src="obj.imageUrl" :ratio="16 / 9" class="card-image" />
          <div class="text-overline text-grey">
            {{ obj.create_date }}
          </div>
          <div class="text-caption text-grey q-mt-xs text-weight-thin">
            Наименование проблемы
          </div>
          <div class="text-body1 q-mb-md highlighted-text text-weight-bold">
            {{ obj.title }}
          </div>
          <div class="text-caption text-grey text-weight-thin">
            Подробное описание
          </div>
          <div class="text-body2 text-grey-8 text-weight-medium">
            {{ obj.description }}
          </div>
          <div class="q-mt-md q-mb-xs">
            <div class="text-caption text-grey text-weight-thin">
              Направление деятельности
            </div>
            <div class="text-body2 highlighted-text text-weight-bold">
              {{ obj.activity.name }}
            </div>
            <div class="text-caption text-grey text-weight-thin">
              Классификация проблемы
            </div>
            <div class="text-body2 highlighted-text text-weight-bold">
              {{ obj.classification.name }}
            </div>
            <div class="text-caption text-grey text-weight-thin">
              Автор проблемы
            </div>
            <div class="text-body2 highlighted-text text-weight-bold">
              {{ obj.author }}
            </div>
          </div>
          <div class="text-caption text-grey text-weight-thin">
            Статус
            <div class="text-body2 text-positive text-weight-bold">
              {{ obj.status }} 01.08.2024
            </div>
          </div>

          <div class="row justify-between">
            <div class="row">
              <div class="row items-center">
                <img :src="like" height="20px" alt="thumbs" />
                <div
                  class="q-ml-sm q-mt-xs text-overline text-info text-weight-bold"
                >
                  {{ obj.likes_count }}
                </div>
              </div>
              <div class="row items-center q-ml-lg">
                <img
                  :src="dislike"
                  height="20px"
                  alt="thumbs"
                  style="transform: scaleY(-1)"
                  class="q-mt-sm"
                />
                <div
                  class="q-ml-sm q-mt-xs text-overline text-info text-weight-bold"
                >
                  {{ obj.dislikes_count }}
                </div>
              </div>
            </div>
            <div>
              <q-card-actions class="q-ml-lg row justify-end">
                <q-btn
                  rounded
                  size="md"
                  color="primary"
                  label="Просмотреть"
                  @click="onClickView(obj.id)"
                  no-caps
                />
                <q-space />
              </q-card-actions>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.my-card-container
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))
  gap: 16px

.my-card
  display: flex
  flex-direction: column
  width: 100%
  border-radius: 20px
  min-height: 400px
  height: 100%

.my-card .q-card-section
  flex-grow: 1

.image-colored
  color: #fff

.card-image
  border-radius: 10px

.highlighted-text
  color: #4d5870
</style>
