import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisode = { 
    id: 1,
    image: "https://i.ibb.co/2FsfXqM/stranger-things.png",
    name: "",
    season: 1, 
    number: 1, 
    summary: "test summary",
    runtime: 1 
  }

// does the component render??
// try dif varieties for props for testing 
test("renders without error", () => {
    render(<Episode episode={ testEpisode }/>)
 });

test("renders the summary test passed as prop", () => {
    //arrange - set up --what-- you're testing (the dummy episode)
    render( <Episode episode={ testEpisode } />)
    // act - grab the element(s) from that that you're going to incorporate into testing
    const testSummary = screen.queryByText(/test summary/i);
    expect(testSummary).toBeInTheDocument();
    expect(testSummary).toBeTruthy();
    expect(testSummary).toHaveTextContent("test summary");

 });

test("renders default image when image is not defined", () => { });
