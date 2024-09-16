<script setup>
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import PetitionPageTimeLine from "src/components/Petition/PetitionPageTimeLine.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const onClickBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="q-pa-lg fit row justify-between">
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
        Организация зон отдыха и релаксации в офисах
      </div>
      <div class="q-pt-lg rounded">
        <q-img
          src="https://www.dirmagazina.ru/images/NewArticles/767/maxresdefault.jpg"
          spinner-color="white"
          class="rounded-borders"
        />
      </div>
      <div class="q-pt-lg text-body1">
        <div class="text-caption text-grey">Подробное описание</div>
        Отсутствие специально оборудованных зон отдыха в офисах приводит к
        переутомлению и стрессу у сотрудников, что отрицательно влияет на их
        эффективность и мотивацию. В условиях постоянной нагрузки и недостатка
        времени для полноценного отдыха, работники сталкиваются с проблемами в
        концентрации, ухудшением общего самочувствия и увеличением числа ошибок
        в работе. Длительный стресс и хроническая усталость могут вызывать не
        только снижение производительности, но и физические проблемы, такие как
        головные боли, нарушение сна и ослабление иммунной системы. Это, в свою
        очередь, приводит к увеличению числа больничных дней и снижению общего
        уровня удовлетворённости работой.
      </div>

      <div class="q-pt-xl text-h6 text-blue-10 text-weight-bold">
        <div class="text-caption text-grey">Направление деятельности</div>
        Бытовые условия
      </div>
      <div class="q-pt-sm text-h6 text-blue-10 text-weight-bold">
        <div class="text-caption text-grey">Классификация проблемы</div>
        Материальное обеспечение
      </div>
      <div class="q-pt-sm text-h6 text-blue-10 text-weight-bold">
        <div class="text-caption text-grey">Автор проблемы</div>
        Сотрудник службы ИБ - Сағат Ф. И.
      </div>
      <div class="q-mt-md row justify-between">
        <div class="row">
          <div class="row items-center">
            <img :src="like" height="30px" alt="thumbs" />
            <div
              class="q-ml-sm q-mt-xs text-subtitle1 text-info text-weight-bold"
            >
              121
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
              25
            </div>
          </div>
        </div>
      </div>
      <div class="q-pt-md text-h6 text-positive text-weight-bold">
        Завершена 01.08.2024
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
