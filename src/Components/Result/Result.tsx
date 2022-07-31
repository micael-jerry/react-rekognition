import {resultType} from "../type";
import React from "react";
import './Result.css';

const Result: React.FC<{ result: resultType }> = (props) => {
    const {result} = props;
    return (
        <div className="scroll-div list-group list-group-flush border-bottom">
            <div className="list-group-item list-group-item-action py-3 lh-tight">
                {
                    (result?.slice(0, result!.length - 2) || []).map((item) => {
                        let itemInItems = Object.entries(item[1]);
                        return (
                            <div key={item[0]}>
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <h5 className={"mb-2"}>{item[0]}</h5>
                                </div>
                                {
                                    (itemInItems || []).map((itemInItem: [string, any]) => {
                                        if (typeof itemInItem[1] !== "object") {
                                            return (
                                                <p key={itemInItem[0]}>
                                                    {itemInItem[0]}: <small
                                                    className="text-muted">{"" + itemInItem[1]}</small>
                                                </p>
                                            )
                                        } else {
                                            return (
                                                <div key={itemInItem[0]} className="col-10 mb-1 small">
                                                    <small
                                                        className="text-muted">{JSON.stringify(itemInItem[1])}</small>
                                                </div>
                                            )
                                        }
                                    })
                                }
                                <br/>
                            </div>
                        )
                    })
                }
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong
                        className="mb-1">{result![result!.length - 1][0]}: <p>{"" + result![result!.length - 1][1]}</p>
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default Result;
