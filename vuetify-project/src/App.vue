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
               <v-list-item link title="sign-up" @click="showComponent('sign-up')">                
               </v-list-item>
               <v-list-item link title="sign-in" @click="showComponent('sign-in')">                
               </v-list-item>
               <v-list-item link title="view-wiki" @click="showComponent('view-wiki')">                
               </v-list-item>
               <v-list-item link title="wiki" @click="showComponent('wiki')">                
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
          
            <component :is="currentComponent" 
            @changeComponent="handleSignupSuccess"
            @callAnswer="callAnswer"
            @callWiki="callWiki"
            @callWikiChild="callWikiChild"
            :questionId="questionId"
            :wikiId="wikiId"
            />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import QnA from './components/QnA.vue'
import answer from './components/answer.vue'
import wiki from './components/wiki.vue'
import signup from './components/sign-up.vue'
import signin from './components/sign-in.vue'
import viewwiki from './components/viewwiki.vue'
import childwiki from './components/wikichild.vue'

import { ref, onMounted } from 'vue'
import Cookies from 'js-cookie'

const userId = ref(Cookies.get('userId'))

const currentComponent = ref(QnA)

const questionId = ref('')
const wikiId = ref('')

onMounted(() => {
  if(!userId.value){
    currentComponent.value = signin
  }
})

function showComponent(link){
  if(link === 'QnA'){
    console.log(Cookies.get('userId'))
    if(!Cookies.get('userId')){
      console.log("Tset")
    currentComponent.value = signin
  }
    else {currentComponent.value = QnA}
  } else if(link === 'wiki'){
    if(!Cookies.get('userId')){
    currentComponent.value = signin
  }
    else {currentComponent.value = wiki}
  } else if(link === 'view-wiki'){
    if(!Cookies.get('userId')){
    currentComponent.value = signin
  }
    else {currentComponent.value = viewwiki}
  } else if(link === 'sign-up'){
    currentComponent.value = signup
  } else if(link === 'sign-in'){
    currentComponent.value = signin
  }

}

function handleSignupSuccess(){
  currentComponent.value = QnA
}

function callAnswer(getQuestionId) {
//  currentComponent.value = { answer: { "test": questionId } }
  questionId.value = getQuestionId
  currentComponent.value = answer
}

function callWiki(){
  wikiId.value = wikiId
  currentComponent.value = viewwiki
}

function callWikiChild(getwikiId){
  wikiId.value = getwikiId
  currentComponent.value = childwiki
}
</script>
