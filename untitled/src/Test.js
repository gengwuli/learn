import React, {Component} from 'react';
import {render} from 'react-dom';
import AceEditor from 'react-ace';
import 'brace/mode/jsx';
import axios from 'axios';


const languages = [
    'javascript',
    'java',
    'python',
    'xml',
    'ruby',
    'markdown',
    'mysql',
    'json',
    'golang',
    'elixir',
    'css',
    'c_cpp'
]

const themes = [
    'monokai',
    'github',
    'tomorrow',
    'kuroir',
    'twilight',
    'xcode',
    'textmate',
    'solarized_dark',
    'solarized_light',
    'terminal',
]

languages.forEach((lang) => {
    require(`brace/mode/${lang}`)
    require(`brace/snippets/${lang}`)
})

themes.forEach((theme) => {
    require(`brace/theme/${theme}`)
})

const defaultValue =
    `function onLoad(editor) {
  console.log(\"i\'ve loaded\");
}`;
class Test extends Component {
    onLoad() {
        console.log('i\'ve loaded');
    }
    onChange(newValue) {
        console.log('change', newValue);
        this.setState({
            value: newValue
        })
    }

    onSelectionChange(newValue, event) {
        console.log('select-change', newValue);
        console.log('select-change-event', event);
    }

    onCursorChange(newValue, event) {
        console.log('cursor-change', newValue);
        console.log('cursor-change-event', event);
    }

    onValidate(annotations) {
        console.log('onValidate', annotations);
    }

    setTheme(e) {
        this.setState({
            theme: e.target.value
        })
    }

    setMode(e) {
        this.setState({
            mode: e.target.value
        })
    }
    setBoolean(name, value) {
        this.setState({
            [name]: value
        })
    }
    setFontSize(e) {
        this.setState({
            fontSize: parseInt(e.target.value,10)
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            value: defaultValue,
            theme: 'monokai',
            mode: 'c_cpp',
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            fontSize: 14,
            showGutter: true,
            showPrintMargin: true,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true,
        };
        this.setTheme = this.setTheme.bind(this);
        this.setMode = this.setMode.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
        this.setBoolean = this.setBoolean.bind(this);
    }

    onClick() {
        console.log(this.state.value)
        const data = { "code": this.state.value }
        axios.post('http://127.0.0.1:3002/code', {
            code: this.state.value,
            lang: this.state.mode == 'c_cpp' ? 'cpp' : this.state.mode
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="columns">
                <div className="column">
                    <button onClick={() => this.onClick()}>click</button>
                    <div className="field">
                        <label>
                            Mode:
                        </label>
                        <p className="control">
                 <span className="select">
                   <select name="mode" onChange={this.setMode} value={this.state.mode}>
                     {languages.map((lang) => <option  key={lang} value={lang}>{lang}</option>)}
                   </select>
                  </span>
                        </p>
                    </div>

                    <div className="field">
                        <label>
                            Theme:
                        </label>
                        <p className="control">
                 <span  className="select">
                   <select name="Theme" onChange={this.setTheme} value={this.state.theme}>
                    {themes.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
                   </select></span>
                        </p>
                    </div>

                    <div className="field">
                        <label>
                            Font Size:
                        </label>
                        <p className="control">
                 <span  className="select">
                   <select name="Font Size" onChange={this.setFontSize} value={this.state.fontSize}>
                    {[14,16,18,20,24,28,32,40].map((lang) => <option  key={lang} value={lang}>{lang}</option>)}
                   </select></span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input type="checkbox" checked={this.state.enableBasicAutocompletion} onChange={(e) => this.setBoolean('enableBasicAutocompletion', e.target.checked)} />
                                Enable Basic Autocomplete
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input type="checkbox" checked={this.state.enableLiveAutocompletion} onChange={(e) => this.setBoolean('enableLiveAutocompletion', e.target.checked)} />
                                Enable Live Autocomplete
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input type="checkbox" checked={this.state.showGutter} onChange={(e) => this.setBoolean('showGutter', e.target.checked)} />
                                Show Gutter
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input type="checkbox" checked={this.state.showPrintMargin} onChange={(e) => this.setBoolean('showPrintMargin', e.target.checked)} />
                                Show Print Margin
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input type="checkbox" checked={this.state.highlightActiveLine} onChange={(e) => this.setBoolean('highlightActiveLine', e.target.checked)} />
                                Highlight Active Line
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input type="checkbox" checked={this.state.enableSnippets} onChange={(e) => this.setBoolean('enableSnippets', e.target.checked)} />
                                Enable Snippets
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input type="checkbox" checked={this.state.showLineNumbers} onChange={(e) => this.setBoolean('showLineNumbers', e.target.checked)} />
                                Show Line Numbers
                            </label>
                        </p>
                    </div>


                </div>
                <div className="examples column">
                    <h2>Editor</h2>
                    <AceEditor
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
                <div className="column">
                    <h2>Code</h2>
                    <AceEditor
                        mode="jsx"
                        theme="monokai"
                        readOnly={true}
                        value={
                            `<AceEditor
  mode="${this.state.mode}"
  theme="${this.state.theme}"
  name="blah2"
  onLoad={this.onLoad}
  onChange={this.onChange}
  fontSize={${this.state.fontSize}}
  showPrintMargin={${this.state.showPrintMargin}}
  showGutter={${this.state.showGutter}}
  highlightActiveLine={${this.state.highlightActiveLine}}
  value={\`${this.state.value}\`}
  setOptions={{
  enableBasicAutocompletion: ${this.state.enableBasicAutocompletion},
  enableLiveAutocompletion: ${this.state.enableLiveAutocompletion},
  enableSnippets: ${this.state.enableSnippets},
  showLineNumbers: ${this.state.showLineNumbers},
  tabSize: 2,
  }}/>
            `
                        } />
                </div>
            </div>
        );
    }
}

export default Test