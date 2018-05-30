import React, {Component} from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue) {
    console.log('change', newValue);
}

class AceEd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: ''
        }
    }

    render() {
        return (
            <div>
                <AceEditor
                    mode="java"
                    theme="github"
                    onChange={this.onChange.bind(this)}
                    name="root"
                    editorProps={{$blockScrolling: true}}
                />
                <button onClick={() => this.activateLasers()}>
                    Activate Lasers
                </button>
            </div>
        )
    }

    componentDidMount() {

    }

    activateLasers() {
        console.log(this.state.code)
    }

    onChange(newValue) {
        console.log('change', newValue);
        // this.setState({
        //     code: newValue
        // })
    }

}

export default AceEd