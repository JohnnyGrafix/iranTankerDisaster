window.onload = function(e) {
  var router = new VueRouter({
      mode: 'history',
      routes: []
  });

  var app = new Vue({
    router,
    
    el: '#app',

    components: {
      'credits': httpVueLoader('./vendor/afp/credits.vue'),
      'logo': httpVueLoader('./vendor/afp/logo.vue')
    },

    data: {
      story: {},
      loaded: false
    },

    created () {
    	var url = this.getStory(this.$route.query.lang);
      this.loadStory(url);
    },

    mounted () {
    	this.pymChild = new pym.Child({ polling: 500 });
    },

    methods: {
    	getStory (lang) {
        if(lang && lang.length === 2) return './story_' + lang + '.txt';
        return './story_en.txt';
      },

      loadStory (url) {
        return this.$http.get(url)
          .then(response => archieml.load(response.bodyText))
          .then(
            json => {
              this.story = json;
              this.loaded = true;
            },
            error => {
              this.loadStory('./story_en.txt');
            }
          );
      },

      moveTo (i) {
        var elementId = 'zoom'+i;
        if(this.pymChild && this.pymChild.id) {
          this.pymChild.scrollParentToChildEl(elementId);
        } else {
          var element = document.getElementById(elementId);
          document.documentElement.scrollTop = document.body.scrollTop = element.offsetTop;
        }
      }
    }
  })
};
