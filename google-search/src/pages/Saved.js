import React from "react";
import Jumbotron from "../components/Jumbotron";
import SavedResults  from "../components/SavedBooks";
const savePage = () => {
    return (
        <div>
        <br />
        <Jumbotron/>
        <br />
        <SavedResults />
        </div>
    )
}

export default savePage;