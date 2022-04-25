import React from 'react';
import Episodes from "./Episodes";
import Loading from './Loading';

const Show = (props) => {
  const { handleSelect, selectedSeason, show } = props;

  if (!show)
    return <Loading />

  return (
    <div data-testid="show-container">
      <h1>{show.name}</h1>
      <p>{show.summary}</p>

      {/*handleSelect changes state of selected season*/}
      <label htmlFor="seasons">Select A Season</label><br />
      <select onChange={handleSelect} name="seasons" id="seasons">
        <option value="none"></option>
        {
          show.seasons.map(season => {
            return (
            <option data-testid="season-option" key={season.id} value={season.id}>
              {season.name}
            </option>);
          })
        }
      </select>

      { // if selectedSeason does not equal "none" return Episodes component
      //.. using the change of state from click handleSelect ("e.target.value") 
        (selectedSeason !== "none") && <Episodes episodes={show.seasons[selectedSeason].episodes} />
      }
    </div>
  );
}

export default Show;
