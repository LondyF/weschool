import React from "react";
const Routes = [
{
    path: "/",
    component: () => <div>Hello</div>,
    exact: true
},
{
    path: "/test",
    component: () => <div>Yoo</div>,
    exact: false
},
]

export default Routes;