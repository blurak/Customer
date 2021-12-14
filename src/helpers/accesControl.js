import React, { Component } from "react"
import { connect } from "react-redux"

export const accesControl = permissionsRequied => WrappepComponent =>{
    const SecuredControl = class extends Component{
        render(){
            const {permissions} = this.props.user 
            console.log("Persmision",permissions)       
            if(permissions === undefined){
                return(<div><i>NO TIENES PERMISOS</i></div>);
            }else{
                const isAllow = permissionsRequied.every(p=>permissions.indexOf(p)>= 0);
                if(!isAllow){
                    return(<div><i>NO TIENES PERMISOS</i></div>);
                }
                return <WrappepComponent {...this.props}/>
            }    
            
            
        }

    }
    return connect(state =>({user: state.user}))(SecuredControl)
}