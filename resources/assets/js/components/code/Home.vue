<template>
    <div class="row margin-bottom-20 stories-cont">
        <div class="col-md-12">
        <div class="title" >
            <h1>My Daily Cheat Sheet(this project is ongoing)</h1>
            <p>Oftentimes, I can't remember the command to clear cache, command to deploy project to Heroku, or generating entity in A Symfony console, So I built this little project</p>
            <h2>This Project built is with Vuejs, Vue Router, NodeJS/Express, MongoDB/Mongoose, ES6</h2>
        </div>
    </div>
        <div class="col-lg-3 col-md-6" v-for="code in codes">
            <div class="portlet light">
                <div class="photo">
                    <router-link  :to="{path: '/' + code }">
                        <!-- <img :src="'/images/' + code + '.png'" v-bind:alt="code" class="img-responsive" > -->
                        <img :src="getMe(code)" v-bind:alt="code" class="img-responsive" >
                    </router-link>
                </div>
                <div class="title">
                    <router-link  :to="{path: '/' + code }">
                        <span> {{ code }} </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                codes:'',
                image: ''
            }
        },
        mounted() {
            axios.get('/cheats/getcheaternames')
            .then((response) => {
                this.codes = response.data;
                // for(const i of this.codes) {
                //     var file = '/images/' + i + '.png';
                //     console.log(file, 'files')
                // }
            })
            .catch((error) => {
                console.log(error,'err');
            })
            //this.getMe();





        },
        methods: {
            getMe(code) {
                var host = window.location.host;
                axios({
                    method:'get',
                    url:host + '/images/' + code + '.png',
                    responseType:'stream'
                    })
                    .then(function(response) {
                        console.log(response, 'ok')
                        if (response) {
                            return host + '/images/' + code + '.png';
                        } else {
                            return host +'/images/default.png';
                        }
                    })
                    .catch(function(error) {
                        console.log(error.toString(),'error')
                    })
            }

        }
    }
</script>
<style lang="scss" scoped>
</style>
