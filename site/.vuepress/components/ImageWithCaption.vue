<template>
  <div class="ImageWithCaption"> 
    <div class="title" v-if="title">{{title}}</div>
    <div class="above" v-if="above" v-html="mdAbove"></div>
    <img :src="$withBase(src)" />
    <div class="title" v-if="bottomTitle">{{bottomTitle}}</div>
    <div class="below" v-if="below" v-html="mdBelow"></div>
  </div>
</template>

<script>
const md = require('markdown-it')({ breaks: true });

export default {
  props: ['src', 'title', 'above', 'below', 'bottomTitle'],
  computed: {
    mdAbove: function() {
      return md.renderInline(this.above);
    },
    mdBelow: function() {
      return md.renderInline(this.below);
    }
  }
}
</script>

<style scoped>
.ImageWithCaption {
  margin: 2rem auto;
  text-align: center;
}
.title {
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.above, .below {
  margin: 0.5rem auto 0;
  text-align: center;
  font-weight: 300;
  line-height: 1.3rem;
  max-width: 450px;
  display: block;
  font-style: italic;
  font-family: Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;
}
img {
  margin-top: 1rem;
}
</style>
