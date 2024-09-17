<script setup>
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({
  petition: Object,
});

const onClickView = (id) => {
  router.push(`/petition/${id}`);
};
</script>

<template>
  <div class="">
    <q-card class="my-card" flat bordered>
      <q-img :src="petition.imageUrl" :ratio="16 / 9" />
      <q-card-section class="justify-between">
        <div class="text-overline text-orange-9">
          {{ petition.create_date }}
        </div>
        <div class="text-caption text-grey q-mt-xs">Наименование проблемы</div>
        <div class="text-h5 q-mb-md text-blue-10 text-weight-bold">
          {{ petition.title }}
          <!-- Организация зон отдыха и релаксации в офисах -->
        </div>
        <div class="text-caption text-grey">Подробное описание</div>
        <div class="text-body1">
          {{ petition.description }}
        </div>
        <div class="q-mt-xl q-mb-xs">
          <div class="text-caption text-grey">Направление деятельности</div>
          <div class="text-subtitle1 text-blue-10 text-weight-bold">
            {{ petition.activity.name }}
          </div>
          <div class="text-caption text-grey">Классификация проблемы</div>
          <div class="text-subtitle1 text-blue-10 text-weight-bold">
            {{ petition.classification.name }}
          </div>
          <div class="text-caption text-grey">Автор проблемы</div>
          <div class="text-subtitle1 text-blue-10 text-weight-bold">
            {{ petition.author }}
          </div>
        </div>

        <div class="text-subtitle1 text-positive text-weight-bold">
          {{ petition.status }} 01.08.2024
        </div>

        <div class="q-mt-md row justify-between">
          <div class="row">
            <div class="row items-center">
              <img :src="like" height="20px" alt="thumbs" />
              <div
                class="q-ml-sm q-mt-xs text-overline text-info text-weight-bold"
              >
                {{ petition.likes_count }}
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
                {{ petition.dislikes_count }}
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
                @click="onClickView(petition.id)"
                no-caps
              />
              <q-space />
            </q-card-actions>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px

.image-colored
  color: #fff
</style>
