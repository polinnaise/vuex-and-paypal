<template>
	<div id="slideshow">
  <div class="slide-wrapper">
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
  </div>
</div>
</template>

<style scoped>

#slideshow {
  overflow: hidden;
  height: 510px;
  width: 728px;
  margin: 0 auto;
  margin-top: 10%;
}

.slide-wrapper {
  width: 2912px;
  -webkit-animation: slide 18s ease infinite;
}

.slide {
  float: left;
  height: 510px;
  width: 728px;
}

.slide:nth-child(1) {
  background-image: url(1.jpg);
  background-size: 800px;
}

.slide:nth-child(2) {
  background-image: url(2.jpg);
  background-size: 800px;
}

.slide:nth-child(3) {
  background-image: url(3.jpg);
  background-size: 800px;
}

.slide:nth-child(4) {
  background-image: url(4.jpg);
  background-size: 800px;
}

.slide:nth-child(5) {
  background-image: url(5.jpg);
  background-size: 800px;
}

.slide-number {
  color: #000;
  text-align: center;
  font-size: 10em;
}

@-webkit-keyframes slide {
  20% {margin-left: 0px;}
  30% {margin-left: -728px;}
  50% {margin-left: -728px;}
  60% {margin-left: -1456px;}
  70% {margin-left: -1456px;}
  80% {margin-left: -2184px;}
  90% {margin-left: -2184px;}
}

</style>