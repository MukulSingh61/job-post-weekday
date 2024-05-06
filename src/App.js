//import './App.css';
import JobFilter from './job-filter-component/JobFilter';
import JobPostList from './job-post-list/JobPostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
          <JobFilter />
      </div>
      <div>
          <JobPostList /> 
      </div>
    </div>
  );
}

export default App;
