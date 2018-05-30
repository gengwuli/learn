import React, { Component } from 'react'

import {Table} from 'react-bootstrap'

class MyTable extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>标题</th>
                    <th>解法</th>
                    <th>难度</th>
                    <th>公司</th>
                    <th>题型</th>
                    <th>频率</th>
                    <th>参考</th>
                    <th>备注</th>
                    <th>增加</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}

export default MyTable