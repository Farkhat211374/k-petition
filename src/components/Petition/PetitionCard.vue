<script setup>
import thumbs from "../../assets/like.svg";
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
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
        <div class="q-mt-xl q-mb-md">
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

        <!--        <div>-->
        <!--          <img :src="thumbs" height="30px" alt="thumbs">-->
        <!--        </div>-->
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Подробнее" />
        <q-space />
      </q-card-actions>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
