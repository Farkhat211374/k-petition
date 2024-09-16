<script setup>
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import { useRouter } from "vue-router";
const router = useRouter();

const onClickView = () => {
  router.push("/petition/123");
};
</script>

<template>
  <div class="">
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://www.dirmagazina.ru/images/NewArticles/767/maxresdefault.jpg"
      />
      <q-card-section>
        <div class="text-overline text-orange-9">08.07.2024</div>
        <div class="text-caption text-grey q-mt-xs">Наименование проблемы</div>
        <div class="text-h5 q-mb-md text-blue-10 text-weight-bold">
          Организация зон отдыха и релаксации в офисах
        </div>
        <div class="text-caption text-grey">Подробное описание</div>
        <div class="text-body1">
          Отсутствие специально оборудованных зон отдыха в офисах приводит к
          переутомлению и стрессу у сотрудников, что отрицательно влияет на их
          эффективность и мотивацию
        </div>
        <div class="q-mt-xl q-mb-xs">
          <div class="text-caption text-grey">Направление деятельности</div>
          <div class="text-subtitle1 text-blue-10 text-weight-bold">
            Бытовые условия
          </div>
          <div class="text-caption text-grey">Классификация проблемы</div>
          <div class="text-subtitle1 text-blue-10 text-weight-bold">
            Материальное обеспечение
          </div>
          <div class="text-caption text-grey">Автор проблемы</div>
          <div class="text-subtitle1 text-blue-10 text-weight-bold">
            Сотрудник службы ИБ - Сағат Ф. И.
          </div>
        </div>

        <div class="text-subtitle1 text-positive text-weight-bold">
          Завершена 01.08.2024
        </div>

        <div class="q-mt-md row justify-between">
          <div class="row">
            <div class="row items-center">
              <img :src="like" height="20px" alt="thumbs" />
              <div
                class="q-ml-sm q-mt-xs text-overline text-info text-weight-bold"
              >
                121
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
                25
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
                @click="onClickView"
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
