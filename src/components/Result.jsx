import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import {AiOutlineCaretLeft} from "react-icons/ai";
import {BiRepeat} from "react-icons/bi";
import {RiChatHistoryFill} from "react-icons/ri";
//var CanvasJSReact = require('@canvasjs/react-charts');
import {useNavigate} from "react-router-dom";

function Result() {

    // 1 Need length of the text in x axis
    // 2 Need error point in x axis
    // 3 Need acuracy in %
    //     4 Need typing time
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const navigate = useNavigate();

    const options = {
        animationEnabled: true,
        backgroundColor: "#087f8c", //"light1", "dark1", "dark2"
        colorSet:"colorSet3",
        theme:"dark2",
        // title:{
        //     text: "Number of New Customers"
        // },
        // axisY : {
        //     title: "Number of Customers"
        // },
        toolTip: {
            shared: true
        },
        data: [{
            type: "spline",
            name: "2016",
            // showInLegend: true,
            dataPoints: [
                { y: 173, label: "Jan" },
                { y: 145, label: "Feb" },
                { y: 175, label: "Mar" },
                { y: 172, label: "Apr" },
                { y: 162, label: "May" },
                { y: 165, label: "Jun" },
                { y: 172, label: "Jul" },
                { y: 176, label: "Aug" },
                { y: 145, label: "Sept" },
                { y: 170, label: "Oct" },
                { y: 185, label: "Nov" },
                { y: 169, label: "Dec" }
            ]
        },
            {
                type: "spline",
                name: "2017",
                // showInLegend: true,
                dataPoints: [
                    { y: 172, label: "Jan" },
                    { y: 173, label: "Feb" },
                    { y: 175, label: "Mar" },
                    { y: 172, label: "Apr" },
                    { y: 162, label: "May" },
                    { y: 165, label: "Jun" },
                    { y: 172, label: "Jul" },
                    { y: 168, label: "Aug" },
                    { y: 175, label: "Sept" },
                    { y: 170, label: "Oct" },
                    { y: 165, label: "Nov" },
                    { y: 169, label: "Dec" }
                ]
            }]
    }
    return <>
        {/*Details*/}
        <div className="container my-4 p-4" style={{backgroundColor:"#087f8c",color:"white"}}>
            <div className={"d-flex"}>
                <div className={"col-2 d-flex justify-items-center justify-content-center flex-column"}>
                    {/*<div>*/}
                        <h3>wpm</h3>
                        <h1 style={{color:"#bb9f06"}}>84</h1>
                        <h3>acc</h3>
                        <h1 style={{color:"#bb9f06"}}>84%</h1>
                    {/*</div>*/}
                </div>
                <div className={"col-10"}>
                <CanvasJSChart options = {options} />
                </div>
            </div>
            <div className={"d-flex justify-context-evenly"}>
                <div className={"col button"} onClick={()=>navigate('/')} ><AiOutlineCaretLeft/></div>
                <div className={"col button"} onClick={()=>navigate('/redo')}><BiRepeat/></div>
                <div className={"col button"} onClick={()=>navigate('/History')}><RiChatHistoryFill/></div>
            </div>
        </div>
        {/*Action*/}

    </>
}

export default Result