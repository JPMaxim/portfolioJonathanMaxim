import './App.css';
import { Tab } from './components/Tab';
import { ContentContainer } from './components/ContentContainer';
import { useState } from 'react';

function App() {

  const [bootcampDisplay, setBootcampDisplay] = useState('hidden')
  const [journalDisplay, setJournalDisplay] = useState('hidden')
  const [projectsDisplay, setProjectsDisplay] = useState('flex')

  return (
    <>
      {/* Tabs Container */}
      <div className='flex flex-col fixed w-100% h-24vh 
      ltp:flex-row ltp:h-100vh ltp:w-39% ltp:left-0 ltp:border-r-4 border-black
      wide:w-auto'> 
        
        <Tab 
          name={'Projects'}
          id={'darkMagenta'}
        />
        <Tab 
          name={'Journal'}
          id={'skyMagenta'}
        />
        <Tab 
          name={'Bootcamp'}
          id={'teal'}
        />
      </div>

      <ContentContainer 
        bootcamp={bootcampDisplay}
        journal={journalDisplay}
        projects={projectsDisplay}
      />
    </>
  );
}

export default App;
