import React from 'react';
import TabPanel from '../components/TabPanel';

const RaceHighlightsPage = () => {
    return (
        <TabPanel index={3}>
          Race Highlights
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/icY1tbK9C7g" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </TabPanel>
      )
};

export default RaceHighlightsPage;