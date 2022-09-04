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
import { Button } from "antd";

function Antd_button(props) {
  return (
    <div className="home-page">
      <Button type="primary">Button</Button>
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
})(Antd_button);
