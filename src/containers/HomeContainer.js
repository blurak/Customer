import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AppFrame from '../componets/AppFrame'
import CustomerActions from '../componets/CustomerActions'


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
                            <img src={"https://sigdeletras.com/images/blog/202004_react_leaflet/react.png"} alt="Logo" />
                            
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