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
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(item, key) {
  
    this.setState({
      filteredJobs: this.props.jobs.filter(job => job[key] === item.value),
    })
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

  render () {
    return (
      <div>
        <div>
        <Select
          name="form-field-location"
          options={this.props.jobs.map(job => job.place).filter(this.onlyUnique).map(this.renderOption)}
          placeholder="All Locations"
          onChange={(e) => this.handleFilter(e, 'place')}
          clearable={true}
          searchable={false}
          className={styles.select}
        />
        <Select
          name="form-field-team"
          options={this.props.jobs.map(job => job.company).filter(this.onlyUnique).map(this.renderOption)}
          placeholder="All Teams"
          onChange={(e) => this.handleFilter(e, 'company')}
          clearable={true}
          searchable={false}
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