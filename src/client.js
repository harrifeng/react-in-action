import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Dropzone from 'react-dropzone';

var DropzoneDemo = React.createClass({
  onDrop: function (acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
  },

  render: function () {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
        </Dropzone>
      </div>
    );
  }
});

render(<DropzoneDemo/>, document.getElementById('app'))
