<template>
    <div class="row">
        <button @click="authenticate('github')">auth Github</button>
    </div>
</template>
<script>


    export default {
        data() {
            return {

            }
        },
        methods: {
            authenticate() {
                axios({
                    url: '/auth/github',
                    headers: {"Access-Control-Allow-Origin": "*"},
                })
                .then((response) => {
                    alert("logged")
                })
                .catch((error) => {
                    console.log(error.toString())
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>
