<script setup>
import { ref } from "vue";

const columns = ref([
  {
    name: "photo",
    required: true,
    label: "Фото",
    align: "center",
    field: (row) => row.photo,
    format: (val) => `<img src="${val}" alt="Фото" width="32" height="32" />`,
    sortable: false,
    style: "width: 32px",
  },
  {
    name: "fullname",
    required: true,
    label: "ФИО",
    align: "center",
    field: (row) => row.fullname,
    format: (val) => `${val}`,
    style: "width: 20%;",
    sortable: true,
  },
  {
    name: "position",
    align: "center",
    label: "Должность",
    field: (row) => row.position,
    style: "width: 20%",
    sortable: true,
  },
  {
    name: "division",
    align: "center",
    label: "Подразделение",
    field: (row) => row.division,
    style: "width: 45%",
    sortable: true,
  },
  {
    name: "activity",
    align: "center",
    label: "Активность",
    style: "width: 15%",
    field: (row) => row.activity,
  },
]);

const rows = ref([
  {
    photo:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726617600&semt=ais_hybrid",
    fullname: "Иван Иванов Иванович",
    position: "Разработчик",
    division: "Отдел разработки",
    activity: "Активен",
  },
  {
    photo:
      "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833584.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1726185600&semt=ais_hybrid",
    fullname: "Петровик Петр Петорвич",
    position: "Тестировщик",
    division: "Отдел тестирования",
    activity: "Неактивен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratuitas/renderizacao-3d-de-avatar_23-2150833582.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722038400&semt=sph",
    fullname: "Снеж Снежанна Снежновна",
    position: "Разработчик",
    division: "Отдел разработки",
    activity: "Активен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-personagem-avatar_23-2150611750.jpg",
    fullname: "Петр Петров",
    position: "Тестировщик",
    division: "Отдел тестирования",
    activity: "Неактивен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratuitas/renderizacao-3d-de-avatar_23-2150833536.jpg",
    fullname: "Иван Иванов",
    position: "Разработчик",
    division: "Отдел разработки",
    activity: "Активен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611740.jpg",
    fullname: "Петр Петров",
    position: "Тестировщик",
    division: "Отдел тестирования",
    activity: "Неактивен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611725.jpg",
    fullname: "Иван Иванов",
    position: "Разработчик",
    division: "Отдел разработки",
    activity: "Активен",
  },
  {
    photo:
      "https://img.freepik.com/psd-premium/render-3d-personaje-avatar_23-2150611777.jpg",
    fullname: "Петр Петров",
    position: "Тестировщик",
    division: "Отдел тестирования",
    activity: "Неактивен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611737.jpg?w=360",
    fullname: "Иван Иванов",
    position: "Разработчик",
    division: "Отдел разработки",
    activity: "Активен",
  },
  {
    photo:
      "https://img.freepik.com/psd-premium/render-3d-personaje-avatar_23-2150611783.jpg?w=360",
    fullname: "Петр Петров",
    position: "Тестировщик",
    division: "Отдел тестирования",
    activity: "Неактивен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611771.jpg?w=360",
    fullname: "Иван Иванов",
    position: "Разработчик",
    division: "Отдел разработки",
    activity: "Активен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611713.jpg",
    fullname: "Петр Петров",
    position: "Тестировщик",
    division: "Отдел тестирования",
    activity: "Неактивен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611725.jpg",
    fullname: "Иван Иванов",
    position: "Разработчик",
    division: "Отдел разработки",
    activity: "Активен",
  },
  {
    photo:
      "https://img.freepik.com/psd-premium/render-3d-personaje-avatar_23-2150611777.jpg",
    fullname: "Петр Петров",
    position: "Тестировщик",
    division: "Отдел тестирования",
    activity: "Неактивен",
  },
  {
    photo:
      "https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611737.jpg?w=360",
    fullname: "Иван Иванов",
    position: "Разработчик",
    division: "Отдел разработки",
    activity: "Активен",
  },
]);

const initialPagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 13,
});
</script>

<template>
  <div class="">
    <q-table
      class="my-sticky-header-table"
      :rows="rows"
      :columns="columns"
      row-key="fullname"
      separator="cell"
      virtual-scroll
      flat
      :pagination="initialPagination"
    >
      <template v-slot:body-cell-photo="props">
        <q-td :props="props" class="avatar">
          <img :src="props.row.photo" alt="Фото" width="32" height="32" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<style lang="sass" scoped>
.my-sticky-header-table
  ::v-deep .q-table__top,
  ::v-deep thead tr:first-child th
    background-color: #c5cfd9
    color: #fff
    font-weight: bold

  ::v-deep tbody tr
    color: #6e6e6e

  ::v-deep tbody tr:nth-child(odd)
    background-color: #f1f0f5

  ::v-deep tbody tr:hover
    background-color: #1ebbe3
    color: #fff
    img
      border: solid #fff 1px

  ::v-deep tbody tr:hover td
    color: #ffffff

.avatar
  width: 32px
  height: 32px
  img
    border: solid #6e6e6e 1px
    border-radius: 50%
    object-fit: cover
</style>
