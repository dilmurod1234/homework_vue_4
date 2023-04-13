<template>
    <div class="sidebar">
        <ul class="sidebar__list">
            <li v-for="(item, index) in router" class="sidebar__item" :key="index">
                <router-link :to="item.path">
                    <p class="sidebar__link">{{ item.name }}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps({
    router: {
        type: Array
    }
})
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
.sidebar {
    padding-top: 40px;
    height: 300vh;
    background-color: #868686;
}
.sidebar__link{
    color: white;
    padding: 20px 10px;
}
.sidebar__link:hover{
    background-color: #d0cece;
}
.sidebar__list{
    display: flex;
    flex-direction: column;
}
</style>