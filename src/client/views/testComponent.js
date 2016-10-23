import React from 'react';

class TestComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default TestComponent;

// import React, {Component} from 'react';
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>
//         I am a Test
//         </p>
//       </div>
//     )
//   }
// }
