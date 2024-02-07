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
        <v-responsive max-width="160">
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
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
               <v-list-item link title="QnA" @click="showComponent('QnA')">
               </v-list-item>
               <v-list-item link title="wiki" @click="showComponent('wiki')">
               </v-list-item>
               <v-list-item link title="viewwiki" @click="showComponent('viewwiki')">
               </v-list-item>
               <v-list-item link title="sign-up" @click="showComponent('sign-up')">
               </v-list-item>
               <v-list-item link title="sign-in" @click="showComponent('sign-in')">
               </v-list-item>
              
<!--
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                  :title="`List Item ${n}`"
                ></v-list-item>
-->
                <v-divider class="my-2"></v-divider>
                <v-list-item
                  color="grey-lighten-4"
                  link
                  title="Refresh"
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            <component :is="currentComponent" @changeComponent="handleSignupSuccess"/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import QnA from './components/QnA.vue'
import wiki from './components/wiki.vue'
import viewwiki from './components/viewwiki.vue'
import signup from './components/sign-up.vue'
import signin from './components/sign-in.vue'
const currentComponent = ref(QnA)
function showComponent(link){
  if(link === 'QnA'){
    currentComponent.value = QnA
  } else if(link === 'wiki'){
    currentComponent.value = wiki
  } else if(link === 'sign-up'){
    currentComponent.value = signup
  } else if(link === 'sign-in'){
    currentComponent.value = signin
  } else if(link === 'viewwiki'){
    currentComponent.value = viewwiki
  }
}
function handleSignupSuccess(){
  currentComponent.value = QnA
}
// 15:27
// sign-up.vue
// 15:27
// import db from "@/json-server/db.json"
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['changeComponent'])
const username = ref('')
const password = ref('')
const userData = ref(null)
async function submitForm() {
    const userData = {
        username: username.value,
        password: password.value
    }
    const res = await fetch(
        `http://localhost:3001/User`
    )
    userData.value = await res.json()
    console.log(userData.value.userId)
//  emit('changeComponent');
}
</script>

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2VE7M9RE5hCW5ZGVMHZGrCWV8TUQmP70",
    authDomain: "team2-kms.firebaseapp.com",
    projectId: "team2-kms",
    storageBucket: "team2-kms.appspot.com",
    messagingSenderId: "1047209731876",
    appId: "1:1047209731876:web:2749b1d1ed2d262e96b5b1",
    measurementId: "G-4MRK1CH97W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>