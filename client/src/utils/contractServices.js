import RPS_ABI from "./RPS_ABI.json";
import {BrowserProvider, Contract, parseEther, formatEther} from "ethers";
import { CONTRACT_ADDRESS} from "./constants";

let provider;
let signer;
let contract;


const initialize = async () => {
    if (typeof window.ethereum != "undefined") {
        provider = new BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new Contract(CONTRACT_ADDRESS, RPS_ABI, signer);
    }
    else {
        console.error("MetaMask is needed!");
    }
};

initialize();

export const requestAccount = async () => {
    try{
        const accounts  = await provider.send("eth_requestAccounts", []);
        return accounts[0];
    }
    catch (error) {
        console.error("Error requesting account");
        return null;
    }
};

export const run = async () =>  {
    const runtx = await contract.run();
    await runtx.wait();
    console.log("Game is done, winner decided!");
};

export const getWinner = async () => {
    const getWinnertx = await contract.getWinner();
    console.log("Winner is picked: ", getWinnertx);
    return getWinnertx;
};

export const getPlayers = async () => {
    const players = await contract.getPlayers();
    console.log("Players recieved: ", players);
    return players;
}