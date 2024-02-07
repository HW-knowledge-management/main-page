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
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                  :title="`List Item ${n}`"
                ></v-list-item>

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
          
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
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

<script>
  export default {
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }),
  }
</script>

