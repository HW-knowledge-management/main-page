<script setup>
import { ref } from 'vue'

const title = ref('')
const userId = ref('')
const content = ref('')
const tag = ref('')
const like = ref('')
const dislike = ref('')
const star = ref('')

const userData = ref(null)

async function submitForm() {
    const res = await fetch(
        `http://localhost:3000/wiki`
    )
    userData.value = await res.json()
    const result = userData.value.find(item => item.title.value == '')

    console.log(title.value);
    if (result) {
        alert('제목을 입력해 주세요')
        title.value = ''
    } else {
        const myData = {
            "title" : title.value,
            "content" : content.value,
            "tag" : tag.value,
            "id" : userData.value.length + 1 + '',
            "userId" : '',
            "like" : '',
            "dislike" : '',
            "star" : ''
        }

        await fetch('http://localhost:3000/wiki', {
            method: 'POST', // 또는 'PUT', 'GET'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myData),
 
        })

    }

}
</script>

<template>
<h1>Wiki Write</h1><br>

<form @submit.prevent="submitForm()">
    <table border="1" width="50%">
        <tr>
            <td>제목</td><td><input id="title" type="text" v-model="title" size="50"/></td>
        </tr>
        <tr height="300px">
            <td>내용</td> <td><textarea id="content" cols="50" rows="20" v-model="content"/></td>
        </tr>
        <tr>
            <td>태그</td><td><input id="tag" type="text" v-model="tag" width="50%" height="300px" size="50"/></td>
        </tr>
    </table>
    <br>
    <button type="submit" value="확인">등록</button> 
   
</form>
</template>
