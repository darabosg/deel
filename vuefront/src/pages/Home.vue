<template>
    <div class="section">
        <div class="column is-half is-offset-one-quarter">
            <div class="box mt-6">
                <p class="title">Data</p>
                <table
                    class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
                >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="row in data" :key="row.id">
                            <td>{{ row.id }}</td>
                            <td>{{ row.text }}</td>
                        </tr>
                    </tbody>
                </table>
                <button class="button is-danger" @click="logOut">
                    Log out
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            data: [],
        }
    },
    mounted() {
        const token = localStorage.getItem('token')
        this.axios
            .get(process.env.VUE_APP_SERVER_URL + '/api/data', {
                headers: {
                    'x-api-key': token,
                },
            })
            .then(res => {
                this.data = res.data
            })
            .catch(err => console.log(err))
    },
    methods: {
        logOut() {
            localStorage.removeItem('token')
            this.$router.push({ name: 'Login' })
        },
    },
}
</script>
