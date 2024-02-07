<script setup>
import { ref, defineProps } from 'vue'
import Cookies from 'js-cookie'

const props = defineProps({
    wikiId: String
})

const wiki = ref(null)
const wikiId = props.wikiId

console.log(props.wikiId)

const question = ref(null)
const questionId = props.questionId

const allAnswers = ref(null)
const answers = ref(null)

const content = ref('')

async function getWiki() {
    const res = await fetch(`http://localhost:3001/wiki/${wikiId}`);
    wiki.value = await res.json()
}



getWiki()

</script>

<template>
    <div>
        <h1>{{ wiki.title }}</h1> <hr>
        {{ wiki.content }} <br>
    </div>
    <hr>
    <hr>
    <hr>

</template>