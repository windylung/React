import React, {Component} from 'react';


class Subject extends Component {
    render(){
      return(
        <header>
          <h1><a href="/">{this.state.subject.title}</a></h1>
          {this.props.sub}
          
        </header>
      )
    }
  }


  export default Subject;