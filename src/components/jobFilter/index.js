import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import JobList from '../jobList';
import styles from './style.module.css';

export default class JobFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredJobs: this.props.jobs,
      placeValue: "all",
      companyValue: "all",
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.getLocationOptions = this.getLocationOptions.bind(this);
    this.getTeamOptions = this.getTeamOptions.bind(this);
  }

  handleFilter(item, key) {
  
    const otherFilter = key === "place" ? "company" : "place";

    if(item) {
      this.setState({
        filteredJobs: this.props.jobs.filter(job => job[key] === item.value),
        [`${key}Value`]: item.value,
        [`${otherFilter}Value`]: "all",
      })
    } else {
      this.resetFilter(key)
    }
  }

  resetFilter(key) {
    this.setState({
      filteredJobs: this.props.jobs,
      [`${key}Value`]: "all",
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
    const locations = this.props.jobs
           .map(job => job.place)
           .filter(this.onlyUnique)
           .map(this.renderOption);

    return [{ value: "all", label: "all locations"}, ...locations];
  }

  getTeamOptions() {
    const locations = this.props.jobs
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