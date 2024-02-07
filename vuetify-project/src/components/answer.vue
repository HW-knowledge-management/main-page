<script setup>
import { ref, defineProps } from 'vue'
import Cookies from 'js-cookie'


const props = defineProps({
    questionId: String
})

const question = ref(null)
const questionId = props.questionId

const allAnswers = ref(null)
const answers = ref(null)

const content = ref('')

async function getQuestion() {
    const res = await fetch(`http://localhost:3001/Question/${questionId}`);
    question.value = await res.json()
}

async function getAllAnswers() {
    const res = await fetch(`http://localhost:3001/Answer`);
    allAnswers.value = await res.json()
    
}

async function getAnswers() {

    await getAllAnswers()
    const result = allAnswers.value.filter(item => item.questionId === questionId)
    answers.value = result
    console.log(answers.value)
}


async function submitForm() {
    const newAnswer = {
            "id" : allAnswers.value.length + 1 + '',
            "userId" : Cookies.get('userId'),
            "questionId" : questionId,
            "content" : content.value,
            "like" : "0",
            "dislike" : "0"
        }
    await fetch('http://localhost:3001/Answer', {
            method: 'POST', // 또는 'PUT', 'GET'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAnswer),
    })
  
    content.value = ''

    getAnswers()
}



getQuestion()
getAnswers()

</script>

<template>
    <div>
        <h1>{{ question.title }}</h1> <hr>
        {{ question.content }} <br>
    </div>
    <hr>
    <hr>
    <hr>
    <div v-for="item in answers">
        {{ item.content }}
        <hr>
    </div>

    <div>
        <form @submit.prevent="submitForm()">
        <h2>답변하기</h2>
        <label>답변</label>
        <textarea id="content" v-model="content"></textarea>
        <input type="submit" value="확인" />
    </form>
    </div>

</template>