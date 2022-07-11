const connect = async (e) => {
    if (typeof window.ethereum == 'undefined') {
        showError('We could not find Metamask. Please, ensure that you have it installed.');
        return;
    };

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

    if (accounts.length > 0) {
        document.getElementById('connect-button').style.display = 'none';
        document.getElementById('mint-button').style.display = 'block';
        document.getElementById('connected-wallet-address').innerHTML = accounts[0];
        document.getElementById('connected-wallet-address').style.display = 'block';

        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { gas: 3000000 });
        totalSupply = await contract.methods.totalSupply().call();
        document.getElementById("tokens-available").innerHTML = totalSupply + "/7777";
    }
}