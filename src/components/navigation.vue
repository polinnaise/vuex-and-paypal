<template>
  <div>
    <br>
    <ul id="menu">
  <li>
    <router-link to="/">Home</router-link>
  </li>
  <li>
  <li><router-link to="/bio">Bio</router-link>
    <ul>
    <li><router-link to="/bio/sense">Sense of Smell</router-link></li>
    <li><router-link to="/bio/mendesian">Mendesian</router-link></li>
    <li><router-link to="/bio/mummification">Mummification</router-link></li>
    <li><router-link to="/bio/unguent">Unguent Cones</router-link></li>
    </ul>
  </li>
  <li>
    <router-link to="/publications">Publications</router-link>
    </li>
  <li><a href="">Exhibitons</a>
    <ul>
    <li><router-link to="/exhibitions/mendesian">Mendesian</router-link></li>
    <li><router-link to="/exhibitions/mummification">Mummification</router-link></li>
    </ul>
  </li>
  <img src="../assets/lotus.svg">
  <li><a href="">Lectures</a>
    <ul>
    <li><router-link to="/lectures/conferences">Conference</router-link></li>
    <li><router-link to="/lectures/invited_lectures">Invited Lectures</router-link></li>
    <li><router-link to="/lectures/lecture_series">Lecture Series</router-link></li>
    <li><router-link to="/lectures/online_classes">Online Classes</router-link></li>
    </ul>
  </li>
  <li><a style="cursor:auto;">Workshop</a>
    <ul>
    <li><router-link to="/workshop/kyphi">Kyphi</router-link></li>
    <li><router-link to="/workshop/mummification">Mummification</router-link></li>
    <li><router-link to="/workshop/lovemaking">Lovemaking</router-link></li>
    <li><router-link to="/workshop/garden_scent">Garden Scent</router-link></li>
    <li><router-link to="/workshop/temple_smell">Temple Smell</router-link></li>
    <li><router-link to="/workshop/unguent_cones">Unguent Cones</router-link></li>
    <li><router-link to="/workshop/online_workshops">Online Workshops</router-link></li>
    </ul>
  </li>
  <li>
    <router-link to="/webshop">Smell Kits</router-link>
  </li>
  <li>
    <router-link to="/contact">Contact</router-link>
  </li>
</ul>
  </div>
</template>

<style>
ul
{
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    display: table;
    text-align: center;
}


ul li
{
    display: block;
    position: relative;
    display: inline-block;
    float: none;
    text-align: center;
}

img {
  width: 60px;
  margin-right: 18px;
}

li ul
{
    display: none;
    background-color: white;
    text-align: left;
    
}

ul li a 
{
    display: block;
    text-decoration: none;
    color: black; 
    margin-left: 1px;
    white-space: nowrap;
    width:50%;
    padding-right: 30px;
    text-align: center;
    border-bottom: 0.5px solid black;
}

ul li a:hover 
{
    color: goldenrod;
    text-decoration: none;

}
li:hover ul 
{
    display: block;
    position: absolute;
}

li:hover li
{
    float: none;
    font-size: 11px;
}

li:hover li a:hover 
{
    color: goldenrod;
    text-decoration: none;
}
</style>