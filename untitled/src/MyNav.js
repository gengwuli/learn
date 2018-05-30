import React, { Component } from 'react';
// import {Button} from 'amazeui-react';
import { Grid, Col, Row } from 'react-bootstrap';
import Search from './Search'
import MyTable from './MyTable'
import MyPage from './MyPage'
import MyEditor from './MyEditor'
import MySplit from './MySplit'
import MyPlayer from './MyPlayer'

import './App.css'

class MyNav extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (<Grid>
            <Row className="show-grid">
                <MyPlayer/>
                {/*<Search/>*/}
                {/*<hr/>*/}
                {/*<MyPage/>*/}
                {/*<MyTable/>*/}
                {/*<MyEditor/>*/}
            </Row>
        </Grid>)
        // return <MyEditor/>
    }
}

export default MyNav;
