<script setup>
import { ref } from 'vue'

const questionId = ref(1)
const questionData = ref(null)
async function getList() {
    const res = await fetch(
//        `http://localhost:3001/Question/${questionId.value}`
        `http://localhost:3001/Question`
    )
        questionData.value = await res.json()

}

getList()
</script>

<template>
<h1>QnA</h1>
<hr />
<form>
    <h2>질문하기</h2>
    <textarea></textarea>
    <input type="submit" value="확인"></input>
</form>
<div>
    <div v-for="item in questionData">
        {{ item.title }} - {{ item.content }}
    </div>
</div>
</template>            
