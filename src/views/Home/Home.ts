import { ref } from "vue"

export default {
    setup() {
        const title = ref("Hello World")
        return { title }
    }
}