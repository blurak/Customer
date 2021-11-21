import React,{ Component } from "react";

 export const setPropsAsInitials = WrappedComponet =>(
     class extends Component{
         render (){
            return <WrappedComponet {...this.props} initialValues={this.props} />;
         }
     }
 );