import './style.css'
import logo from '/logo.svg'

/**
 * Could I have put this straight into the index.html file?
 * Yes.
 *
 * But this gives you a better sense of how JavaScript applications work.
 * In a different series, we'll get into this kind of thing more, but for now,
 * just know that this is the basic foundation of a JS application.
 *
 * - Aurooba
 */
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://aurooba.com" target="_blank" class="title">
      <img src="${logo}" class="logo" alt="JS Essentials for WP Devs by Aurooba Ahmed" />
	  <h1>JS Essentials for WP Devs</h1>
    </a>
	<h2>Lesson 13 – How Babel Works</h2>
  </div>
`
//<h2>👇🏽 It's all in the Console Log</h2>
