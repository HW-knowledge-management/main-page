<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="grey-darken-1"
          size="32"
        ></v-avatar>
        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>
        <v-spacer></v-spacer>
        <v-responsive max-width="250">
          <v-text-field
            density="compact"
            flat
            hide-details
            label="Search"
            rounded="lg"
            single-line
            variant="solo-filled"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
               <v-list-item link title="QnA" @click="showComponent('QnA')">
               </v-list-item>
               <v-list-item link title="wiki" @click="showComponent('wiki')">
               </v-list-item>
               <v-list-item link title="sign-up" @click="showComponent('sign-up')">
               </v-list-item>
               <v-list-item link title="sign-in" @click="showComponent('sign-in')">
               </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  color="grey-lighten-4"
                  link
                  title="Refresh"
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>


            <v-sheet
              min-height="70vh"
	      min-width="700"
              rounded="lg" >
            <component :is="currentComponent" @changeComponent="handleSignupSuccess"/>
            </v-sheet>
        </v-row>
      </v-container>
    </v-main>
       <template v-if="totalPages > 1">
      <v-pagination v-model="currentPage" :length="totalPages" @input="changePage"></v-pagination>
    </template>
  </v-app>
</template>

<script setup>
import QnA from './components/QnA.vue'
import wiki from './components/wiki.vue'
import signup from './components/sign-up.vue'
import signin from './components/sign-in.vue'
import { ref, onMounted, computed } from 'vue'
import Cookies from 'js-cookie'
const username = ref(Cookies.get('username'))
const currentComponent = ref(QnA)
const itemsPerPage = 5; // 페이지당 항목 수
const currentPage = ref(1); // 현재 페이지
const totalItems = ref(0); // 전체 항목 수
async function fetchData() {
  const res = await fetch('http://localhost:3001/Question');
  const data = await res.json();
  totalItems.value = data.length;
}
onMounted(async () => {
  if (!username.value) {
    currentComponent.value = signin
  } else {
    await fetchData();
  }
})
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage)); // 전체 페이지 수
function changePage(page) {
  currentPage.value = page;
}
function showComponent(link) {
  if (link === 'QnA') {
    if (!Cookies.get('username')) {
      currentComponent.value = signin
    } else {
      currentComponent.value = QnA
    }
  } else if (link === 'wiki') {
    if (!Cookies.get('username')) {
      currentComponent.value = signin
    } else {
      currentComponent.value = wiki
    }
  } else if (link === 'sign-up') {
    currentComponent.value = signup
  } else if (link === 'sign-in') {
    currentComponent.value = signin
  }
}
function handleSignupSuccess() {
  currentComponent.value = QnA
}
</script>

