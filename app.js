const app = Vue.createApp({
    data() {
      return {
        showChars: true,
        cartoonChars: [
          { character: 'Grizz', species: 'Grizzly Bear', img: 'assets/1.webp', isFav: true },
          { character: 'Ice', species: 'Polar Bear', img: 'assets/2.webp', isFav: false },
          { character: 'Panpan', species: 'Panda Bear', img: 'assets/3.webp', isFav: true },
        ],
      }
    },
    methods: {
      toggleShowBooks() {
        this.showChars =  !this.showChars
      },

      toggleFav(cartoonChar) {
        cartoonChar['isFav'] = !cartoonChar['isFav']
      }
    }
  })
  
  app.mount('#app')