<script setup>
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import { ref } from "vue";
import ReadProblemDialog from "./dialogs/ReadProblemDialog .vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const viewObject = ref({});
defineProps({
  data: Object,
});
const showReadDialog = ref(false);

const onClickView = (obj) => {
  viewObject.value = obj;
  showReadDialog.value = true;
};
</script>

<template>
  <ReadProblemDialog
    v-model:showReadDialog="showReadDialog"
    :data="viewObject"
  />
  <div class="row items-stretch q-gutter-lg my-card-container">
    <div v-for="(obj, index) in data" :key="'petition_' + index">
      <q-card v-if="obj" class="my-card" flat bordered>
        <q-card-section class="custom-card-section">
          <q-img :src="obj.imageUrl" :ratio="16 / 9" class="card-image" />
          <div class="text-overline text-grey">
            {{ obj.create_date }}
          </div>
          <div class="text-caption text-grey q-mt-xs text-weight-thin">
            {{ t("problemPage.problemCard.name") }}
          </div>
          <div
            class="text-title text-body1 q-mb-md highlighted-text text-weight-bold"
          >
            {{ obj.title }}
          </div>
          <div class="text-caption text-grey text-weight-thin">
            {{ t("problemPage.problemCard.detailedDescription") }}
          </div>
          <div
            class="text-body2 text-grey-8 text-weight-medium text-description"
          >
            {{ obj.description }}
          </div>
          <div class="q-mt-md q-mb-xs">
            <div class="text-caption text-grey text-weight-thin">
              {{ t("problemPage.problemCard.activity") }}
            </div>
            <div class="text-body2 highlighted-text text-weight-bold">
              {{ obj.activity.name }}
            </div>
            <div class="text-caption text-grey text-weight-thin">
              {{ t("problemPage.problemCard.classification") }}
            </div>
            <div class="text-body2 highlighted-text text-weight-bold">
              {{ obj.classification.name }}
            </div>
            <div class="text-caption text-grey text-weight-thin">
              {{ t("problemPage.problemCard.author") }}
            </div>
            <div class="text-body2 highlighted-text text-weight-bold">
              {{ obj.author }}
            </div>
          </div>
          <div class="text-caption text-grey text-weight-thin">
            {{ t("problemPage.problemCard.status") }}
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
                  class="view-button"
                  rounded
                  size="md"
                  color="primary"
                  unelevated
                  :label="$t('buttons.view')"
                  @click="onClickView(obj)"
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
  grid-gap: 16px

.my-card
  display: flex
  flex-direction: column
  width: 100%
  border-radius: 20px
  min-height: 400px
  height: 100%
  cursor: pointer
  &:hover
    border: solid #1ebbe3 1px

.text-title
  max-height: 100px
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical

.text-description
  max-height: 100px
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: 4
  -webkit-box-orient: vertical

.custom-card-section
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%

.image-colored
  color: #fff

.card-image
  border-radius: 10px

.highlighted-text
  color: #4d5870

.view-button
  min-width: 100px
</style>
