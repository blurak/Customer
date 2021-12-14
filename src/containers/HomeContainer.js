import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AppFrame from '../componets/AppFrame'
import CustomerActions from '../componets/CustomerActions'
import CustomerLogin from '../componets/CustomerLogin'


 class HomeContainer extends Component {
    handleOnClick = ()=>{
        console.log("click")
        this.props.history.push('/customers')
    }

    render() {
        return (
            <div>
               <AppFrame 
                    header ='Inicio'
                    body ={
                        <div>
                            <CustomerLogin/>
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>Lista de Cliente</button>                                
                            </CustomerActions>
                        </div>
                    }
                ></AppFrame>
            </div>
        )
    }
}
HomeContainer.propTypes = {

}
export default withRouter(HomeContainer);