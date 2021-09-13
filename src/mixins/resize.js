export const resizeMixin = {
  data() {
    return {
      publicContHeight: ''
    }
  },
  mounted() {
    window.addEventListener('resize', this.getHeight)
  },
  created() {
    this.getHeight()
  },
  methods: {
    getHeight(size = 50) {
      const height = document.body.clientHeight - size
      this.publicContHeight = height
    }
  }

}
