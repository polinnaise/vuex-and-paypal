<template>
    <div class="text">
		<p>I am open to scientific collaborations including research projects, publications and museum
projects. My lectures and workshops can be booked both live and online.</p>
<ul>
	<li>English</li>
	<li>German</li>
	<li>Hebrew</li>
	<li>Hungarian</li>
	<li>French</li>
</ul>
<span @click="redirect" class="email">Message me!</span>
    </div>
</template>

<script>
export default {
	methods:  {
    redirect: function() {
      window.location.href = "mailto:doragold@zedat.fu-berlin.de";
    }
  }
}
</script>