<script setup>
import { ref } from 'vue'

const title = ref('')
const content = ref('')
const tag = ref('')

async function submitForm() {
    const res = await fetch(
        `http://localhost:3001/WriteWiki`
    )
    
}
</script>

<template>
<h1>WIKI Write</h1><br>

<form @click="submitForm()">
    <table border="1" width="50%">
        <tr>
            <td>제목</td><td><input id="title" type="text" v-model="title" size="50"/></td>
        </tr>
        <tr height="300px">
            <td>내용</td> <td><textarea cols="50" rows="20"/></td>
        </tr>
        <tr>
            <td>태그</td><td><input id="tag" type="text" v-model="tag" width="50%" height="300px" size="50"/></td>
        </tr>
    </table>
    <br>
    <button type="submit" value="확인">등록</button> 
   
</form>
</template>
