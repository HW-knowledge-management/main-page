<script setup>
import { ref, computed } from 'vue'
import Cookies from 'js-cookie'

const currentPage = ref(1)
const itemsPerPage = 5
const questions = ref([])

const title = ref('')
const content = ref('')
const tag = ref('')

const paginatedQuestions = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return questions.value.slice(startIndex, endIndex);
});

function changePage(page) {
  currentPage.value = page;
}

function removeQuestion(question) {
  questions.value = questions.value.filter(q => q.id !== question.id);
}

async function getList() {
    const res = await fetch(`http://localhost:3001/Question`);
    questions.value = await res.json();
}
getList();

async function submitForm() {
    console.log("test")
    const newQuestion = {
            "id" : questions.value.length + 1 + '',
            "userId" : Cookies.get('userId'),
            "title" : title.value,
            "content" : content.value,
            "like" : "0",
            "dislike" : "0",
            "tag" : tag.value,
            "star" : "0"
        }
    await fetch('http://localhost:3001/Question', {
            method: 'POST', // 또는 'PUT', 'GET'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newQuestion),
    })
    title.value = ''
    content.value = ''
    tag.value = ''
    getList()
}

</script>

<template>
    <h1>QnA</h1>
    <hr />
    <form @submit.prevent="submitForm()">
        <h2>질문하기</h2>
        <label>제목</label>
        <input type="text" id="title" v-model="title"></input>
        <label>내용</label>
        <textarea id="content" v-model="content"></textarea>
        <label>태그</label>
        <input type="text" id="tag" v-model="tag"></input>
        <input type="submit" value="확인" />
    </form>
    <div>
        <div v-for="(item, index) in paginatedQuestions" :key="index">
            {{ item.title }} - {{ item.content }}
        </div>
    </div>
    <!-- 페이징 컴포넌트 추가 -->
    <v-pagination
      v-model="currentPage"
      :length="Math.ceil(questions.length / itemsPerPage)"
      @input="changePage"
    ></v-pagination>
</template>