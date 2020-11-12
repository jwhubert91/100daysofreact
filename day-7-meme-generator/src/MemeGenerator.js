import React from 'react';

export default class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.generate = this.generate.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState((prevState) => {
          return {
            ...prevState,
            allMemeImgs: memes,
          };
        });
      });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        [name]: value,
      };
    });
  }

  generate(e) {
    const imageArrayLength = this.state.allMemeImgs.length;
    const randomNumber = Math.floor(Math.random() * imageArrayLength);
    this.setState((prevState) => {
      return {
        ...prevState,
        randomImage: prevState.allMemeImgs[randomNumber].url,
      };
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form className='meme-form' onSubmit={this.generate}>
          <input
            type='text'
            name='topText'
            placeholder='Top Text'
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='bottomText'
            placeholder='Bottom Text'
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImage} alt='' />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
