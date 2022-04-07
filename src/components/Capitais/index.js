import { Fragment } from "react"

function Capitais(props) {
    return(
        <Fragment>
            <tr className="capitais-components">
                <td>{props.tempMin}</td>
                <td>{props.tempMax}</td>
                <td>{props.cidade}</td>
            </tr>
        </Fragment>
    )
}

export default Capitais