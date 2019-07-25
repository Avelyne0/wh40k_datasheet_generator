import React, { Component } from 'react'
import Model from '../components/Model'

export default class Unit extends Component {

    render() {

        const models = this.props.models

        return (
            <>
            {
                models.map(model => <Model key={model.id} {...model} />)
          }
          </>
        )
    }
}
