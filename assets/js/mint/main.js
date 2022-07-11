document.getElementById('connect-button').onclick = connect;
document.getElementById('mint-button').onclick = mint;

document.onload = refreshAvailable();

async function refreshAvailable() {
    try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

        const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { gas: 3000000 });

        const maxSupply = await contract.methods.maxSupply().call();
        const totalSupply = await contract.methods.totalSupply().call();

        document.getElementById("tokens-available").innerHTML = totalSupply + " / " + maxSupply
    } catch (e) {
        showError('Error', 'Could not establish the connection to MetaMask. If you are on desktop, make sure MetaMask extension is installed. If on phone - access the website from the metamask browser.');
        document.getElementById("tokens-available").innerHTML = "643/7777"
    }
}