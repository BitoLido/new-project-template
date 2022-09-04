import React from "react";
/*=================
import redux action
===================*/
//import { someAction } from '../../redux/actions/someAction';

/*========================================
import react redux UI, use 'connect' UI to
 connect Redux store & react component.
==========================================*/
import { connect } from "react-redux";
import Antd_button from "../../components/antd_button";

function HomePage(props) {
  return (
    <div className="home-page">
      <h1>home page</h1>
      <Antd_button />
    </div>
  );
}
/*=======================================================
React Redux UI
Use connect()() creact & export a container component
connect(mapStateToProps,mapDispatchToProps)(UIcomponent);
=========================================================*/
export default connect((state) => state, {
  //actions,
})(HomePage);
