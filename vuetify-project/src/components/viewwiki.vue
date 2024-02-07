<script setup>
import { ref, defineEmits }  from 'vue'

const emits = defineEmits(['callWikiChild'])

function callWikiChildHandler(wikiId) {
  emits('callWikiChild', wikiId)
}


const props = defineProps(['contentOfWIKI'])
const searchData = ref(null)
async function getList() {
    const res = await fetch(
        `http://localhost:3001/wiki`
//        `https://mmmmmmm-dry-glade-6852.fly.dev/wiki`
    )
    searchData.value = await res.json()

}
getList()

</script>

<template>
<h1>View Wiki</h1>
<hr />
<div>
    <table border="2">
        <div>
            <tr>
                <td align="center" width="80px">제목</td>
                <td align="center" width="300px">내용</td>
                <td align="center" width="80px">태그</td>
                <td align="center" width="80px">기타</td>
            </tr>
        </div>
        <div v-for="item in searchData">
            <div  @click="callWikiChildHandler(item.id)">
            <tr>
                <td align="center" width="80px">{{ item.title }}</td> 
                <td align="center" width="300px"> {{ item.content }} </td> 
                <td align="center" width="80px"> {{ item.tag }} </td>
                <td width="80px">
                    <button type="submit" background-color="gray">수정</button> &nbsp;
                    <button @click="deleteForm()">삭제</button>
                </td>
            </tr>
            </div>
        </div>
    </table>
    
</div>
</template>

