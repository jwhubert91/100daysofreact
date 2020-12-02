import React from 'react';
import Form from './Form';
import PrototypeElement from './PrototypeElement';
import CreatedElContainer from './CreatedElContainer';

class App extends React.Component {
  state = {
    protoShape: 'square',
    backgroundColor: '#ffffff',
    headerText: '',
    innerText: '',
    catPic: false,
    createdEls: [],
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (e) => {
    const newEl = {
      protoShape: this.state.protoShape,
      backgroundColor: this.state.backgroundColor,
      headerText: this.state.headerText,
      innerText: this.state.innerText,
      catPic: this.state.catPic,
    };
    const newElsArr = [...this.state.createdEls, newEl];
    console.log(newElsArr);
    this.setState({
      protoShape: 'square',
      backgroundColor: '#ffffff',
      headerText: '',
      innerText: '',
      catPic: false,
      createdEls: newElsArr,
    });
    e.preventDefault();
  };

  render() {
    const createdComponents = this.state.createdEls.map((el, idx) => {
      return <PrototypeElement shape={el} key={idx} />;
    });
    return (
      <div className='App'>
        <h2>React Child Rearer App</h2>
        <div className='row mt-5'>
          <div className='col-md-4 col-sm-6'>
            <Form
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              proto={this.state}
            />
          </div>
          <div className='col-md-4 col-sm-6 prototype-container'>
            <PrototypeElement shape={this.state} />
          </div>
          <div className='col-md-4 third-col'>
            <CreatedElContainer>
              {createdComponents.reverse()}
            </CreatedElContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
