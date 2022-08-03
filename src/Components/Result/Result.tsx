import {resultType} from "../type";
import React from "react";
import './Result.css';

const Result: React.FC<{ result: resultType }> = (props) => {
    const {result} = props;
    return (
        <div className={"list-group scroll-div"}>
            {
                (result?.slice(0, result!.length - 2) || []).map((item) => {
                    let itemInItems = Object.entries(item[1]);
                    return (
                        <div className={"list-group list-group-flush border-bottom"}>
                            <div className={"list-group-item list-group-item-action py-3 lh-tight"} key={item[0]}>
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <h5 className={"mb-2"}>{item[0]}</h5>
                                </div>
                                <ul className={"list-group listGroup"}>
                                    {
                                        (itemInItems || []).map((itemInItem: [string, any]) => {
                                            if (typeof itemInItem[1] !== "object") {
                                                return (
                                                    <li key={itemInItem[0]}
                                                        className={"list-group-item d-flex justify-content-between align-items-center"}>
                                                        {itemInItem[0]}: <span
                                                        className="text-muted">{"" + itemInItem[1]}</span>
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <>
                                                        {
                                                            (Object.keys(itemInItem[1]).length === 2) ? (
                                                                <li key={itemInItem[1].Confidence}
                                                                    className={"list-group-item d-flex justify-content-between align-items-center"}>
                                                                    {itemInItem[1].Type}: <span
                                                                    className={"text-muted"}>{itemInItem[1].Confidence}</span>
                                                                </li>
                                                            ) : (
                                                                <>
                                                                    <li key={itemInItem[1].X}
                                                                        className={"list-group-item d-flex justify-content-between align-items-center"}>
                                                                        {itemInItem[1].Type}:
                                                                        <span>
                                                                             X=<small
                                                                            className={"text-muted"}>{itemInItem[1].X}</small>
                                                                            <br/>
                                                                            Y=<small
                                                                            className={"text-muted"}>{itemInItem[1].Y}</small>
                                                                        </span>
                                                                    </li>
                                                                </>
                                                            )
                                                        }
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                                <br/>
                            </div>
                        </div>
                    )
                })
            }
            <div className={"list-group list-group-flush border-bottom"}>
                <div className={"list-group-item list-group-item-action py-3 lh-tight"}>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <h5 className={"mb-1"}>
                            {result![result!.length - 1][0]}:
                        </h5>
                        <h5 className={"mb-1"}>{"" + result![result!.length - 1][1]}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;
