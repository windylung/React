
import React, {Component} from 'react';

import Content from "./components/Content";
import Subject from "./components/Subject";
import TOC from "./components/TOC";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      subject: {title:'WEB', sub:'World Wide Web!'},
      contents: [
        {id:1,title:'HTML',desc:'HTML is for information'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JAVASCRIPT',desc:'JS is for interaction'}
    
      ]

    }
  }
  render( ){
    return (
    <div className="App">
      <Subject 
      title = {this.state.subject.title} 
      sub = {this.state.subject.sub }>
      </Subject>
      <TOC data={this.state.contents}></TOC> 
      <Content></Content> 
    </div>
  );
}

}
export default App;
