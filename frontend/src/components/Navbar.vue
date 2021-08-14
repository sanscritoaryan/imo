<template>
	<div class="main">
        <nav class="navbar justyfi-content-bet mt-2">
			<router-link  class="navbar-brand" to="/">InMy<b>Opinion</b>.com</router-link>
			<div class="nav-itens">
				<router-link to="/login" class="link text-decoration-none mx-4">Sign in</router-link>
				<Btn to="/register" text="Get Started" color="blue"/>
			</div>
      </nav>
	<hr class="mt-1">
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

.navbar-brand{
	font-size: 25px;
	color: #2d3436 !important;
}
.link{
	color: #2d3436 !important;
}
</style>
