import {resultType} from "./type";
import React from "react";

const Result: React.FC<{ result: resultType }> = (props) => {
    const {result} = props;
    return (
        <div className="list-group list-group-flush border-bottom">
            <div className="list-group-item list-group-item-action py-3 lh-tight">
                {
                    (result || []).map((item) => {
                        let itemInItems = Object.entries(item[1]);
                        return (
                            <div key={item[0]}>
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">{item[0]}</strong>
                                </div>
                                {
                                    (itemInItems || []).map((itemInItem) => {
                                        return (
                                            <div key={itemInItem[0]} className="col-10 mb-1 small">
                                                <p>
                                                    {itemInItem[0]}: <small className="text-muted">{""+itemInItem[1]}</small>
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Result;
