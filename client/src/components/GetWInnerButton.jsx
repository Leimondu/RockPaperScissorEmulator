import React from "react";
import { getWinner } from "../utils/contractServices";
let winner;
const styles = {
    backgroundColor: 'rgb(153, 153, 153)',
    color: 'black',
    padding: '20px 40px',
    borderRadius: '5px',
    border: '2px',
    marginRight: '100px'
};
function GetWinnerButton() {
    const GetWinnerGame = async () => {
        try {
        winner = await getWinner();
        }
        catch (error) {
            console.error("Winner can't be retrieved...",error);    
        }
    };
    return(
    <div>
        <div>
            <button style={styles} onClick={GetWinnerGame}>Find out the winner!</button>
            <br></br>   
        </div>
    </div>
    );
}


export default GetWinnerButton;