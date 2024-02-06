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
<<<<<<< HEAD
<<<<<<< HEAD
        <v-spacer></v-spacer>
        <v-responsive max-width="250">
=======


        <v-spacer></v-spacer>

        <!-- <v-responsive max-width="160">
>>>>>>> 088410f2d2f734197810ebbc2fb6f3199a1dbdc0
=======

        <v-spacer></v-spacer>
        <v-responsive max-width="250">

>>>>>>> 6d62b3918dd21dd73d834e4844f98c2506514e1d
          <v-text-field
            ref="searchField"
            density="compact"
            flat
            hide-details
            label="Search"
            rounded="lg"
            single-line
            variant="solo-filled"
          ></v-text-field>
        </v-responsive> -->

        <!-- <input v-model="message" placeholder="Search"> -->

        <div>
          <input v-model="message" placeholder="Search">
          <!-- <v-text-field v-model="message" :rules="nameRules" label="Search"></v-text-field> -->
          <v-btn variant="tonal" @click="search()">검색</v-btn>
        </div>
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
<<<<<<< HEAD
<<<<<<< HEAD
               <v-list-item link title="sign-up" @click="showComponent('sign-up')">
=======
               <v-list-item link title="viewwiki" @click="showComponent('viewwiki')">                               
               </v-list-item>
               <v-list-item link title="sign-up" @click="showComponent('sign-up')">                
>>>>>>> 088410f2d2f734197810ebbc2fb6f3199a1dbdc0
=======

               <v-list-item link title="sign-up" @click="showComponent('sign-up')">

>>>>>>> 6d62b3918dd21dd73d834e4844f98c2506514e1d
               </v-list-item>
               <v-list-item link title="sign-in" @click="showComponent('sign-in')">
               </v-list-item>

<<<<<<< HEAD
<<<<<<< HEAD
=======
<!--
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                  :title="`List Item ${n}`"
                ></v-list-item>

>>>>>>> 088410f2d2f734197810ebbc2fb6f3199a1dbdc0
                <v-divider class="my-2"></v-divider>
=======
  <v-divider class="my-2"></v-divider>
>>>>>>> 6d62b3918dd21dd73d834e4844f98c2506514e1d

                <v-list-item
                  color="grey-lighten-4"
                  link
                  title="Refresh"
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 6d62b3918dd21dd73d834e4844f98c2506514e1d


            <v-sheet
              min-height="70vh"
	      min-width="700"
              rounded="lg" >
            <component :is="currentComponent" @changeComponent="handleSignupSuccess"/>
            </v-sheet>
<<<<<<< HEAD
=======
          
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >


            <searchdata :contentOfWIKI="sendMessage"/>
              <!--  
              <li v-for = "(dt) in dts">
                {{ dt.Question }}
              </li>
              
              <p>{{message}}</p>
              <h1>hi</h1>
-->


              <!-- <v-list-item link title="QnA" @click="showComponent('QnA')">                
              </v-list-item> -->



            </v-sheet>
          </v-col>
          
>>>>>>> 088410f2d2f734197810ebbc2fb6f3199a1dbdc0
=======

>>>>>>> 6d62b3918dd21dd73d834e4844f98c2506514e1d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6d62b3918dd21dd73d834e4844f98c2506514e1d
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
<<<<<<< HEAD
=======
// import Child from './components/Child.vue'
// import data from '/home/wsl/code/HW-knowledge-management/json-server/db.json'
import searchdata from './components/search.vue'
import {ref} from 'vue'
const message = ref('')
let sendMessage = ref('')
//const dts = ref(data)

function search() {
  console.log("검색어 : ", message.value)
  sendMessage.value = message.value

}


  const links = [
    'Dashboard',
    'Messages',
    'Profile',
    'Updates',
  ]
</script>
function showComponent(link){
  if(link === 'QnA'){
    if(!Cookies.get('username')){
    currentComponent.value = signin
  }
    else {currentComponent.value = QnA}
  } else if(link === 'wiki'){
  //   if(!Cookies.get('username')){
  //   currentComponent.value = wiki
  // }
  //   else {currentComponent.value = wiki}
    currentComponent.value = wiki
  } else if(link === 'sign-up'){
    currentComponent.value = signup
  } else if(link === 'sign-in'){
    currentComponent.value = signin
  } else if(link === 'viewwiki') {
    currentComponent.value = viewwiki
  }

>>>>>>> 088410f2d2f734197810ebbc2fb6f3199a1dbdc0
=======
>>>>>>> 6d62b3918dd21dd73d834e4844f98c2506514e1d
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