<template>
  <Layout class="">
      <h1 class="h2 text-center m-5 " data-aos="flip-right" data-aos-duration="1500">
           Don't be a stranger
      </h1>
        <p class="sm:w-3/4 lg:w-1/2 my-5 text-center mx-auto lg:text-xl">
            I am open to discussing creative ideas and oppurtunies
            <i class="fas fa-smile-wink"></i>
        </p>
        <form class="lg:w-1/2 sm:w-3/4 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 mx-auto"
            name="contact"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                Don’t fill this out: <input name="bot-field" />
                </label>
            </p>
            <div class="sender-info">
                <div class="py-4">
                <label for="name" class="label block text-sm font-bold mb-2" >Your Name *</label>
                <input required type="text" class="w-full bg-gray-400  text-black p-2" name="name" v-model="formData.name" />
                </div>
                <div class="py-4">
                <label for="email" class=" block text-sm font-bold mb-2">Your Email *</label>
                <input required type="email" class="w-full bg-gray-400  text-black p-2"  name="email" v-model="formData.email" />
                </div>
            </div>

            <div class="message-wrapper">
                <label for="message" class="block text-sm font-bold mb-2">Message *</label>
                <textarea required name="message" class="w-full bg-gray-400 text-black p-2"  v-model="formData.message"></textarea>
            </div>

            <div class="flex justify-center mx-auto m-8 relative">
            <button type="submit" class="button bg-pink-700 hover:bg-pink-600 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-pink-500 rounded">
                Send Message
            </button>
            </div>
            <div class="links sm:w-3/4 lg:w-1/2 mx-auto flex justify-start" >
                <p class=" inline-flex w-full justify-between">
                        <a href="https://twitter.com/LindaOjo_" title="Twitter">
                            <i class="fa fa-twitter fa-2x pr-2" aria-hidden="true"></i> Twitter
                        </a>  
                        <a href="https://github.com/LindaOjo" title="Github">
                            <i class="fa fa-github fa-2x pr-2" aria-hidden="true"></i> Github
                        </a>   
                </p>
            </div>
        </form>
  </Layout>
</template>

<script> 
import Layout from '~/layouts/Default.vue' 
export default {
    components: { Layout },

    metaInfo: { title: 'Contact Me' },

    data() {
        return {
            formData: {},
        }
    },

    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
                'form-name': e.target.getAttribute('name'),
                ...this.formData,
            }),
            })
            .then(() => {
                if (this.formData.name.length != 0 && this.formData.name.email != 0 && this.formData.name.message != 0) this.$router.push('/success')
            } )
            .catch(error => alert(error))
        }
    }
}
</script>

<style scoped>
@import "./../styles/variables.css";

.links > a:hover{
    cursor: pointer;
    color: var(--light-blue);
}

.button {
    transition: all ease 0.3s;
}

.button:focus {
  transform: scale(0.9);
}

.fa-twitter:hover, .fa-github:hover, .fa-smile-wink:hover, a:hover {
    color: var(--pink);
}
</style>
