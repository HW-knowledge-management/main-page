<script setup>
import { ref, defineEmits }  from 'vue'
import axios from 'axios'
const emits = defineEmits(['callAnswer'])
function callAnswerHandler(questionId) {
    emits('callAnswer', questionId)
}

const removeData = ref(null)
async function removeWiki(item) {
    const res = await fetch(
        `http://localhost:3000/wiki`
//        `https://mmmmmmm-dry-glade-6852.fly.dev/wiki`
    )
    removeData.value = await res.json()
    // removeData.value = removeData.value.filter(i => i.id != item.id)
    
    await axios.delete (
        `http://localhost:3000/wiki/${item.id}`
    )
  }

// async function removeWiki(item) {
//     const res = await fetch(
//         `http://localhost:3000/wiki`
//     )

//     console.log(title.value);

//     await fetch('http://localhost:3000/', {
//         method: 'DELETE', // 또는 'PUT', 'GET'
//         data: {
//             id: item.id 
//         }
 
//     })
// }

//import vueRouter from 'vue-router'
//import ViewWiki from './viewwikidetail.vue'

// Vue.use(VueRouter);

// export default new VueRouter({
//     mode: "history",
//     routes: [
//         {
//             path: "/",
//             name: "viewwiki",
//             component: ViewWiki
//         }
//     ]
// })

const props = defineProps(['contentOfWIKI'])
const searchData = ref(null)
async function getList() {
    const res = await fetch(
        `http://localhost:3000/wiki`
//        `https://mmmmmmm-dry-glade-6852.fly.dev/wiki`
    )
    searchData.value = await res.json()

}
getList()

function showComponent(link, id){
  if(link === id){
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
</script>

<template>
<h1>View Wiki</h1>
<hr />
<div>
    <table border="2">
        <div>
            <tr>
                <td align="center" width="80px">ID</td>
                <td align="center" width="80px">제목</td>
                <td align="center" width="300px">내용</td>
                <td align="center" width="80px">태그</td>
                <td align="center" width="80px">기타</td>
            </tr>
        </div>
        <div v-for="item in searchData">
            <tr>
                <td align="center" width="80px"> {{ item.id }}</td>
                <td align="center" width="80px"><button @click="callAnswerHandler(item.id)">{{ item.title }}</button></td> 
                <td align="center" width="300px"> {{ item.content }} </td> 
                <td align="center" width="80px"> {{ item.tag }} </td>
                <td width="80px">
                    <button type="submit" background-color="gray">수정</button> &nbsp;
                    <button type="submit" @click="removeWiki(item)">삭제</button>
                </td>
            </tr>
        </div>
    </table>
    
</div>
</template>

