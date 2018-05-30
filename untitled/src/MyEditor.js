import React, {Component} from 'react'
import AceEditor from 'react-ace';
import {FormGroup, ControlLabel, FormControl, Row, Col} from 'react-bootstrap'
import axios from 'axios';

const languages = [
    'javascript', 'java', 'python', 'ruby',
]

const themes = [
    'textmate',
]

languages.forEach((lang) => {
    require(`brace/mode/${lang}`)
    require(`brace/snippets/${lang}`)
})

themes.forEach((theme) => {
    require(`brace/theme/${theme}`)
})


class MyEditor extends Component {
    constructor() {
        super()
        this.state = {
            value: 'public static void main',
            theme: 'textmate',
            mode: 'java',
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            fontSize: 14,
            showGutter: true,
            showPrintMargin: true,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true,
        };
        this.onChange = this.onChange.bind(this)
    }

    onChange(newValue) {
        console.log('change', newValue);
        this.setState({
            value: newValue
        })
    }

    render() {
        return (
            <div style={{border: '1px solid red', paddingLeft: 20}}>
                <Row style={{textAlign: 'left'}}> 0 <select><option>1</option></select><select><option>1</option></select><radio>0</radio></Row>
                <AceEditor style={{width: 'auto'}}
                           mode={this.state.mode}
                           theme={this.state.theme}
                           name="blah2"
                           onLoad={this.onLoad}
                           onChange={this.onChange}
                           onSelectionChange={this.onSelectionChange}
                           onCursorChange={this.onCursorChange}
                           onValidate={this.onValidate}
                           value={this.state.value}
                           fontSize={this.state.fontSize}
                           showPrintMargin={this.state.showPrintMargin}
                           showGutter={this.state.showGutter}
                           highlightActiveLine={this.state.highlightActiveLine}
                           setOptions={{
                               enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                               enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                               enableSnippets: this.state.enableSnippets,
                               showLineNumbers: this.state.showLineNumbers,
                               tabSize: 2,
                           }}/>
            </div>
        )
    }
}

export default MyEditor