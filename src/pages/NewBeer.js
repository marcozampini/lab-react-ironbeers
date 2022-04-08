import React from 'react'
import './NewBeer.css'

const NewBeer = () => {
  return (
    <>
      <h1>New Beer</h1>
      <form>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" />
        <label for="tagline">Tagline</label>
        <input id="tagline" name="tagline" type="text" />
        <label for="description">Description</label>
        <textarea id="description" name="description" />
        <label for="first-brewed">First Brewed</label>
        <input id="first-brewed" name="first_brewed" type="text" />
        <label for="brewers-tips">Brewers Tips</label>
        <input id="brewers-tips" name="brewers_tips" type="text" />
        <label for="attenuation-level">Attenuation Level</label>
        <input id="attenuation-level" name="attenuation_level" type="text" />
        <label for="contributed-by">Contributed By</label>
        <input id="contributed-by" name="contributed_by" type="text" />
        <input type="submit" value="Add New" />
      </form>
    </>
  )
}

export default NewBeer
