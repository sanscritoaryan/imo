<template>
	<div class="main">
		<Navbar/>
		<router-view/>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
	components: {
		Navbar,
	},
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
	font-family: 'Poppins';
}
.main{
	margin-right: 50px;
	margin-left: 50px;
}

</style>
