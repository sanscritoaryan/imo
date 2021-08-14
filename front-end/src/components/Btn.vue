<template>
    <router-link v-if="to" :to="to" :class="color">{{text}}</router-link>
    <button v-else @click.prevent="$emit('on-click')" :class="color">{{text}}</button>
</template>

<script>
export default {
	props: ["text", "color", "to"],
};
</script>

<style>
.blue {
    text-decoration: none;
    padding: 10px 20px 10px 20px;
    border-radius: 50px;
    border: none;
    background-color: #2251AD;
    border: solid 1px #2251AD;
    color: #fff;
    cursor: pointer;
    transition: .4s ease-in;
}
.blue:hover {
    background-color: #fff;
    color: #2251AD;
    transition: .4s ease-out;
}

.white {
    text-decoration: none;
    padding: 10px 20px 10px 20px;
    border-radius: 50px;
    border: solid 1px #2251AD;
    background-color: #fff;
    color: #2251AD;
    cursor: pointer;
    transition: .4s;
}
.white:hover {
    color: #fff;
    background-color: #193c82;
    transition: .4s;
}
</style>
