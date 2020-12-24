import React, { Component } from 'react';

class Resume extends Component {
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className='info'>
              {education.degree} <span>&bull;</span>
              <em className='date'>{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className='info'>
              {work.title}
              <span>&bull;</span> <em className='date'>{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });

      var skills = this.props.data.skills.map((skills) => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <span key={skills.name}>
            {/* <span
              style={{ width: '100%', backgroundColor: this.getRandomColor() }}
              className={className}
            ></span> */}
            <em>
              <i
                className={`skills-icon ${skills.icon}`}
                style={{ color: this.getRandomColor() }}
              ></i>
              {skills.name}
            </em>{' '}
          </span>
        );
      });
    }

    return (
      <section id='resume'>
        <div className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>{education}</div>
            </div>
          </div>
        </div>

        <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className='nine columns main-col'>{work}</div>
        </div>

        <div className='row skill'>
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            <p>{skillmessage}</p>

            <div className='bars'>
              <p className='skills'>{skills}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
