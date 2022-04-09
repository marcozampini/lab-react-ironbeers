import React, { useState } from 'react'
import axios from "axios";
import './NewBeer.css'

const NewBeer = () => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });
  const handleSubmit = async (event) => {
    // do not navigate the browser on form submit
    event.preventDefault();
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", formData);
    setFormData({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    });
  };
  const handleChanges = (event) => {
    const { value, name } = event.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
  };
  return (
    <>
      <h1>New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={formData.name}
            onChange={handleChanges}
          />
        <label htmlFor="tagline">Tagline</label>
        <input id="tagline" name="tagline" type="text" value={formData.tagline}
            onChange={handleChanges}
          />
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" onChange={handleChanges} value={formData.description}></textarea>
        <label htmlFor="first-brewed">First Brewed</label>
        <input id="first-brewed" name="first_brewed" type="text" value={formData.first_brewed}
            onChange={handleChanges}
          />
        <label htmlFor="brewers-tips">Brewers Tips</label>
        <input id="brewers-tips" name="brewers_tips" type="text" value={formData.brewers_tips}
            onChange={handleChanges}
          />
        <label htmlFor="attenuation-level">Attenuation Level</label>
        <input id="attenuation-level" name="attenuation_level" type="number" value={formData.attenuation_level}
            onChange={handleChanges}
          />
        <label htmlFor="contributed-by">Contributed By</label>
        <input id="contributed-by" name="contributed_by" type="text" value={formData.contributed_by}
            onChange={handleChanges}
          />
        <input type="submit" value="Add New"/>
      </form>
    </>
  )
}

export default NewBeer
