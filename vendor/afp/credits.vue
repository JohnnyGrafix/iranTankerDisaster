<template>
	<div>
        <button href="#" @click.prevent="toggle()">
            <s class="UI-icon UI-info"></s>
        </button>
        <transition name="modal">
            <section id="credits" v-if="show">
                <div class="container-close">
                    <button @click="show = !show">
                        <s class="UI-icon UI-close-alt"></s>
                    </button>
                </div>
                <div class="container">
                		<article>
                        <p>{{ sources }}</p>
                    </article>
                    <article>
                        <h2>{{ lastupdate.key }}</h2>
                        <p>{{ lastUpdateString }}</p>
                    </article>
                    <article>
                        <a href="https://twitter.com/AFPgraphics" target="_blank" class="follow">
                            <img src="vendor/afp/twitter-icon.svg" alt="Twitter" /> @AFPGraphics
                        </a>
                    </article>
                </div>
            </section>
        </transition>
    </div>
</template>

<script>
	module.exports = {
		data() {
			return {
				show: false
			}
		},
		props: ['lastupdate', 'lang', 'sources'],
		computed: {
			lastUpdateString() {
				var options = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}
				return new Date(this.lastupdate.value).toLocaleString(this.lang, options)
			}
		},
		methods: {
			toggle() {
				this.show = !this.show
			}
		}
	}
</script>

<style scoped>
	button {
		line-height: 0;
		padding: 0;
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
    background-color: white;
	}

	#credits {
		background: #fff;
    color: #000;
    box-shadow: 0 0 15px rgba(0,0,0,.25);
    display: block;
    position: absolute;
    height: auto;
    max-width: 300px;
    left: 0;
    right: 0;
    bottom: 50px;
    padding: 32px;
    transition: opacity .4s ease;
    z-index: 1;
	}

	#credits .container-close {
		position: relative;
	}

	#credits .container-close button {
		position: absolute;
    top: 0px;
    right: -16px;
    color: inherit;
   	padding: 0;
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
	}

	#credits .container-close button s {
		font-size: 2em;
    color: #a5a5a5;
    transition: color .3s ease;
	}

	s.UI-icon:before {
    width: 16px;
  	height: 16px;
  	display: inline-block;
  	position: relative;
  	top: 5px;
  	background-color: white;
  }

	#credits .container article {
    margin-right: 2.5em;
    text-align: left;
    font-family: "Source Sans Pro",sans-serif;
	}

	#credits .container article h2 {
		margin: 0 5px 0 0;
		display: inline-block;
		text-transform: uppercase;
    font-size: 1em;
    font-weight: 600;
	}

	#credits .container article p {
		margin: 0;
    font-size: .95em;
    display: inline-block;
	}

	#credits a {
		text-decoration: underline;
	  color: #4099ff;
	}

	#credits .follow img {
		display: inline-block;
    max-width: 1.3em;
    vertical-align: middle;
    margin-right: 5px;
	}

	@keyframes slideInLeft {
	  from {
	    transform: translate3d(-100%, 0, 0);
	    visibility: visible;
	  }

	  to {
	    transform: translate3d(0, 0, 0);
	  }
	}

	@keyframes slideOutLeft {
	  from {
	    transform: translate3d(0, 0, 0);
	  }

	  to {
	    visibility: hidden;
	    transform: translate3d(-100%, 0, 0);
	  }
	}

	.modal-enter-active {
	  animation: slideInLeft .5s ease;
	}
	.modal-leave-active {
	  animation: slideOutLeft .5s ease;
	}
</style>
