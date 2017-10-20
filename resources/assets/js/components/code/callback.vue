<template>
    <div class="spinner">
        <h1>Ok</h1>
        <img src="../../assets/loading.svg" alt="loading"/>
    </div>
</template>

<script>
    import AuthService from '../../auth/AuthService'

    const auth = new AuthService()

    const { login, logout, authenticated, authNotifier } = auth
    export default {
        data () {


            return {
                
            }
        },
        mounted() {
          //do something after mounting vue instance
         //this.auth.handleAuthentication()
      },
        methods: {
            login,
            logout
        }
    }
</script>

<style>
    .spinner {
        position: absolute;
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background-color: white;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>
