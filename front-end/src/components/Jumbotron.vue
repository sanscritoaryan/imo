<template>
    <div class="container-fluid py-5 mt-4">
        <h1 class="display-5 fw-bold">write, read, and connect</h1>
        <p class="col-md-8 fs-4">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
        <hr class="my-4 mx-4">
        <Btn to="/login" text="Start Writing" color="white"/>
    </div>  
</template>

<script>
import Btn from "./Btn";
export default {
	components: {
		Btn,
	},
};
</script>

<style scoped>
.container-fluid{
    background-color: #2250ad25;
    border-radius: 8px;
}
</style>
