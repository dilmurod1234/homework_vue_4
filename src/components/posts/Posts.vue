<template>
    <div class="row">
        <div class="col-md-3 p-0">
            <SidebarApp :router="router" />
        </div>
        <div class="col-md-9 py-5 table__albums">
            <h2 class="mb-3">Posts</h2>
            <select class="form-control form__select" @change="handleChange">
                <option value="" selected>Select your number</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
            <table class="table table-hovered table-bordered table-striped">
                <thead>
                    <tr>
                        <th>T/R</th>
                        <th>Title</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in albums" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.body }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center">
                <button class="btn btn-primary mx-2" @click="prevAlbums">Prev</button>
                <span>{{ count }}</span>
                <button class="btn btn-success mx-2" @click="nextAlbums">Next</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import SidebarApp from '../sidebar/SidebarApp.vue';
import axios from "axios"
import { ref } from 'vue';

let albums = ref([])
const select = ref('5')
const count = ref(1)

const handleChange = (evt) => {
    select.value = evt.target.value
    getUsers()
}

const prevAlbums = () => {
    if (count.value !== 1) {
        count.value -= 1
    }
    getUsers()
}

const nextAlbums = () => {
    count.value += 1
    getUsers()
}

const getUsers = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${count.value}&_limit=${select.value}`).then(res => {
        albums.value = res.data
    })
}

const router = ref([
    { name: "Posts", path: "/" },
    { name: "Albums", path: "/albums" },
    { name: "Comments", path: "/comments" },
    { name: "Todos", path: "/todos" },
    { name: "Users", path: "/users" },
    { name: "Photos", path: "/photos" }
])
</script>
<style scoped>
.form__select {
    width: 400px;
    margin-bottom: 25px;
}
</style>