<template>
  <Layout>
    <h1 class="h2 text-center m-5 " data-aos="flip-right" data-aos-duration="1500">
            Don't be a stranger
    </h1>
    <div class="fade-in">
        <p class="sm:w-3/4 lg:w-1/2 my-5 text-center mx-auto lg:text-xl">
            Want me to build something cool or got some questions? Send a message.
        </p>
        <form class="lg:w-1/2 sm:w-full shadow-2xl rounded px-4 py-6 mb-4 mx-auto"
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
                    <input required type="email" class="w-full bg-gray-400 text-black p-2"  name="email" v-model="formData.email" />
                </div>
            </div>

            <div class="message-wrapper">
                <label for="message" class="block text-sm font-bold mb-2">Message *</label>
                <textarea required name="message" class="w-full bg-gray-400 text-black p-2"  v-model="formData.message"></textarea>
            </div>

            <div class="flex justify-center mx-8 mt-5 relative">
            <button type="submit" class="button font-bold py-2 px-4 rounded">
                Send Message
            </button>
            </div>
        </form>
        <div class="links sm:w-3/4 lg:w-1/2 mx-auto flex" >
            <p class=" inline-flex w-full justify-center mt-5">
                    <a class="md:mr-16 mr-8  flex flex-col items-center" href="https://twitter.com/LindaOjo_" title="Twitter">
                        <i class="fa fa-twitter" aria-hidden="true"></i> Twitter
                    </a>  
                    <a class="md:mr-16 mr-8 flex flex-col items-center" href="https://github.com/LindaOjo" title="Github">
                        <i class="fa fa-github" aria-hidden="true"></i> Github
                    </a>   
                    <a class="flex flex-col items-center" href='https://res.cloudinary.com/lindaojo/image/upload/v1601131597/Resume_Linda_Ojo_msdltz.png' target="_blank">
                        <i class="fas fa-file-alt" aria-hidden="true"></i>
                        Resume
                    </a> 
            </p>
        </div>
      </div>
      
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
i {
    font-size: 1.3rem;
}

a:hover {
    color: var(--primary);
}

</style>
