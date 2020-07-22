<template>
  <div>
    <br><br>
    <ul id="menu">
  <li>
    <router-link to="/">Home</router-link>
  </li>
  <li>
  <li><router-link to="/bio">Bio</router-link>
    <ul>
    <li><a href="">TV Interviews</a></li>
    <li><a href="">Radio Interviews</a></li>
    <li><a href="">Mendesian</a></li>
    </ul>
  </li>
  <li>
    <router-link to="/publications">Publications</router-link>
    </li>
  <li><a href="">Exhibitons</a>
    <ul>
    <li><a href="">Mendesian</a></li>
    <li><a href="">Mummification</a></li>
    </ul>
  </li>
  <li><a href="">Lectures</a>
    <ul>
    <li><a href="">Conference</a></li>
    <li><a href="">Invited Lectures</a></li>
    <li><a href="">Lecture Series</a></li>
    </ul>
  </li>
  <li><a href="">Workshop</a>
    <ul>
    <li><a href="">Kyphi</a></li>
    <li><a href="">Mummification</a></li>
    <li><a href="">Temple Scent</a></li>
    <li><a href="">Garden Scent</a></li>
    <li><a href="">Lovemaking & Sexuality</a></li>
    <li><a href="">Unguent Cones</a></li>
    <li><a href="">Tickets</a></li>
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
}

li ul
{
    display: none;
    background-color: white;
}

ul li a 
{
    display: block;
    text-decoration: none;
    color: black;
    background: transparent;
    margin-left: 1px;
    white-space: nowrap;
    width:50%;
    padding-right: 30px;
}

ul li a:hover 
{
    color: goldenrod;

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
}
</style>