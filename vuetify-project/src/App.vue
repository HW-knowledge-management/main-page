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
<<<<<<< HEAD
                <v-list-item link>  
		<router-link to="/wiki">
		WIKI
		</router-link>
		</v-list-item>
		
		<v-list-item link>
		Q&A
		</v-list-item>
=======
               <v-list-item link title="QnA" @click="showComponent('QnA')">                
               </v-list-item>
               <v-list-item link title="wiki" @click="showComponent('wiki')">                
               </v-list-item>
<!--
                <v-list-item
                  :key="n"
                  link
                  :title="`HW-knowledge Q&A`"
		  @click="handleHWknowledgeQAClick"
               
		  ></v-list-item>

>>>>>>> 7467585dbd3c48623561d9e8d7f9284be069e464
                <v-divider class="my-2"></v-divider>
		
                <v-list-item
                  color="grey-lighten-4"
                  link
                  title="WIKI"
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
<<<<<<< HEAD
		
		<Wiki />
              <!--  -->
=======
            <component :is="currentComponent" />
>>>>>>> 7467585dbd3c48623561d9e8d7f9284be069e464
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import Wiki from './components/Wiki.vue';

  const links = [
    'Dashboard',
    'Messages',
    'Profile',
    'Updates',
  ]
<<<<<<< HEAD

=======
    const handleHWKnowledgeQAClick = (event) => {
    console.log(`handleHWKnowledgeQAClick clicked!`, event);
  };

</script>

import { ref } from 'vue'

const currentComponent = ref(QnA)
function showComponent(link){
  if(link === 'QnA'){
    currentComponent.value = QnA
  } else if(link === 'wiki'){
    currentComponent.value = wiki
  }

}
>>>>>>> 7467585dbd3c48623561d9e8d7f9284be069e464
</script>
<style scoped>
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
