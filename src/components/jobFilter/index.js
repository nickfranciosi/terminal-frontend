import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import 'react-select/dist/react-select.css';
import JobList from '../jobList';
import styles from './style.module.css';

export default class JobFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      filteredJobs: [],
      placeValue: "all",
      companyValue: "all",
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.getLocationOptions = this.getLocationOptions.bind(this);
    this.getTeamOptions = this.getTeamOptions.bind(this);
    this.fetchJobs = this.fetchJobs.bind(this);
  }

  componentDidMount() {
    this.fetchJobs();
  }

  fetchJobs() {
    axios.get('https://api.lever.co/v0/postings/terminal?mode=json')
    .then(response => {
      const formattedJobs = response.data.map(this.formatJob);
      this.setState({
        jobs: formattedJobs,
        filteredJobs: formattedJobs,
      })
    })
  }

  formatJob(job){
    return {
      title: job.text,
      place: job.categories.location,
      company: job.categories.team,
      link: job.hostedUrl,
    }
  }
  

  handleFilter(item, key) {
  
    const otherFilter = key === "place" ? "company" : "place";

    if(item.value === "all") {
      this.resetFilter(key);
    }else {
      this.setState({
        filteredJobs: this.state.jobs.filter(job => job[key] === item.value),
        [`${key}Value`]: item.value,
        [`${otherFilter}Value`]: "all",
      })
    }
  }



  resetFilter() {
    this.setState({
      filteredJobs: this.state.jobs,
      placeValue: "all",
      companyValue: "all",
    });
  }

  renderOption(item) {
    return {
      value: item,
      label: item,
    }
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  getLocationOptions() {
    const locations = this.state.jobs
           .map(job => job.place)
           .filter(this.onlyUnique)
           .map(this.renderOption);

    return [{ value: "all", label: "all locations"}, ...locations];
  }

  getTeamOptions() {
    const locations = this.state.jobs
           .map(job => job.company)
           .filter(this.onlyUnique)
           .map(this.renderOption);

    return [{ value: "all", label: "all teams"}, ...locations];
  }

  render () {
    return (
      <div>
        <div className={styles.selectContainer}>
        <Select
          name="form-field-location"
          options={this.getLocationOptions()}
          value={this.state.placeValue}
          onChange={(e) => this.handleFilter(e, 'place')}
          searchable={false}
          clearable={false}
          className={styles.select}
        />
        <Select
          name="form-field-team"
          options={this.getTeamOptions()}
          value={this.state.companyValue}
          onChange={(e) => this.handleFilter(e, 'company')}
          searchable={false}
          clearable={false}
          className={styles.select}
        />
        </div>
        <div>
          <JobList jobs={this.state.filteredJobs}/>
        </div>
      </div>
      
    );
  }
}