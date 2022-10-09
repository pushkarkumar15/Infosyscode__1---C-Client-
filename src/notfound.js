import {Link} from "react-router-dom"

let Notfound = () => {
    return(
        <div>
            <h1> 404! - Wrong Page</h1>
            <Link to='/'>Go to App</Link>

        </div>
    )
}

export {Notfound}