import {resultType} from "./type";

const Result: React.FC<{ result: resultType }> = (props) => {
    const {result} = props;
    return (
        <div className="list-group list-group-flush border-bottom">
            <div className="list-group-item list-group-item-action py-3 lh-tight">
                {
                    (result || []).map((item) => 
                        (
                            <>
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">{item[0]}</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                    <small className="text-muted">{JSON.stringify(item[1])}</small>
                                </div>
                            </>
                        ))
                }
            </div>
        </div>
    )
}

export default Result;
