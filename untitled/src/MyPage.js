import React, {Component} from 'react'

import {FormControl, Row, Col, Pagination} from 'react-bootstrap'

class MyPage extends Component {
    constructor() {
        super()

        let items = []
        for (let i = 0; i < 10; i++) {
            items.push(<Pagination.Item active={i === 3}>{i}</Pagination.Item>)
        }
        this.state = {
            page: 10,
            items: items
        }
    }

    render() {
        return (
            <Row className="show-grid">
                <Col lg={1} md={2}>
                    <FormControl componentClass="select" placeholder="select" bsSize={"small"}>
                        <option value="select">select</option>
                        <option value="other">...</option>
                    </FormControl>
                </Col>
                <Col lg={4} md={5}style={{textAlign: 'left', padding: 0}}>
                    <Pagination bsSize={'small'}>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Col>
            </Row>
        )
    }
}

export default MyPage