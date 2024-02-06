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

        <!-- <v-responsive max-width="160">
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

        <input v-model="message" placeholder="Search">
			    
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
              <!--  -->
              <p>{{message}}</p>
              <h1>hi</h1>
            </v-sheet>
          </v-col>
          
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>

// import Child from './components/Child.vue'
import data from '/home/jelly/code/HW-knowledge-management/json-server/db.json'
import {ref} from 'vue'
const message = ref('')


  const links = [
    'Dashboard',
    'Messages',
    'Profile',
    'Updates',
  ]
</script>

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
  }

}

</script>

