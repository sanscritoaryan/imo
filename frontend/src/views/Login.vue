/* eslint-disable quote-props */
<template>
    <div class="main">
        <section class="vh-100">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center">
                <div class="col-lg-12 col-xl-11">
                    <div v-for="error in errors" :key="error" class="alert alert-danger d-flex align-items-center mt-2" role="alert">
                        {{error}}    
                    </div>
                    <div class="card text-black mt-3" style="border-radius: 25px;">
                    <div class="card-body p-md-4">
                        <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 mr-5">Log in</p>

                            <form class="mx-1 mx-md-4">

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input v-model="username" type="text" class="form-control" placeholder="Your name" required/>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input v-model="password" type="password" class="form-control" placeholder="Password" required/>
                                </div>
                            </div>

                            <div class="d-flex justify-content-center mb-4 ">
                                <Btn @on-click="submit" text="Enter now" color="blue"/>
                            </div>

                            <div class="d-flex justify-content-center">
                                <p>Don't have a account <router-link to="/register">Register</router-link></p>
                            </div>

                            </form>

                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 pl-5">

                            <img src="https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/5def2c159f7f67eda8e92222_5de59a6989c6853f0b7a6ed4_drawkit-grape-pack-illustration-5-white-bg.gif" class="img-fluid" alt="Sample image">

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Btn from "../components/Btn.vue";
export default {
	components: {
		Btn,
	},
	data() {
		return {
			username: "",
			password: "",
			errors: [],
		};
	},
	methods: {
		submit: async function() {
			this.errors = [];
			if (!this.username || !this.password) {
				this.errors.push("Fill in the empty fields");
				return;
			}

			const body = {
				username: this.username,
				password: this.password,
			};
			console.log("enter");
                
			try {
				const {data} = await this.axios.post("/auth/signin", body);
				console.log(data);
				this.$router.push("/");
			} catch (error) {
				console.log(error.response);
				this.errors = error.response.data.message || [];
			}
		},
	},
};
</script>

<style>
</style>
