<script setup>
import { ref, computed } from 'vue';

const currentPage = ref(1);
const itemsPerPage = 5;
const questions = ref([]);

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

function submitForm(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const newQuestion = form.get('question');
    addQuestion(newQuestion);
}

function addQuestion(newQuestion) {
    if (newQuestion.trim() !== '') {
        questions.value.push({
            title: newQuestion,
            content: '' // 내용은 비워둠
        });
    }
}
</script>

<template>
    <h1>QnA</h1>
    <hr />
    <form @submit="submitForm"> 
        <h2>질문하기</h2>
        <textarea name="question"></textarea> 
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

