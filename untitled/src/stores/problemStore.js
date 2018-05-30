import {request} from 'superagent'

import { observable, action, reaction} from 'mobx'

class ProblemStore {

    @observable problems = []

    @action loadProblems() {
        return request
            .get('http://localhost:3003')
            .then(action((res) => {this.problems = res.body }))
    }
}

export default new ProblemStore();