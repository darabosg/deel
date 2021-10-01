<template>
    <div class="section">
        <div class="column is-half is-offset-one-quarter">
            <div class="box mt-6">
                <span class="icon-text mb-5">
                    <font-awesome-icon
                        icon="user-lock"
                        class="icon is-medium mr-3"
                    />
                    <p class="title">Login</p>
                </span>
                <form @submit="loginPost">
                    <div class="field">
                        <label class="label" for="user_name">
                            User
                        </label>
                        <p class="control has-icons-left">
                            <input
                                required
                                class="input"
                                name="userName"
                                type="text"
                                id="user_name"
                                v-model="loginInput.userName"
                            />
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="user" />
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <label class="label" for="password">
                            Password
                        </label>
                        <p class="control has-icons-left">
                            <input
                                required
                                class="input"
                                name="password"
                                type="password"
                                id="password"
                                v-model="loginInput.password"
                            />
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="lock" />
                            </span>
                        </p>
                    </div>
                    <div class="block">
                        <p class="is-block has-text-danger">
                            &nbsp;{{ errorMsg }}
                        </p>
                    </div>
                    <input class="button is-info" type="submit" value="Login" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            errorMsg: '',
            loginInput: {
                userName: '',
                password: '',
            },
        }
    },
    watch:{
        errorMsg: function () {
            setTimeout(() => {
            this.errorMsg = ''
        }, 2000)
        }
    },
    methods: {
        loginPost(e) {
            e.preventDefault()
        this.axios
            .post(process.env.VUE_APP_SERVER_URL + '/api/login', this.loginInput)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                this.$router.push({name:'Home'})
            })
            .catch(err => {
                this.errorMsg = err.response.data.msg
            })
        }
    }
}
</script>