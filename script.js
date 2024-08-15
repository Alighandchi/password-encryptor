function generateKey() {
    return window.crypto.getRandomValues(new Uint8Array(32)).toString();
}

function encrypt() {
    const input = document.getElementById('input').value;
    if (!input) {
        alert("Please enter a password to encrypt.");
        return;
    }

    const key = generateKey();
    const encodedMessage = btoa(unescape(encodeURIComponent(input)));
    const encrypted = window.btoa(window.btoa(encodedMessage + key));

    document.getElementById('key').value = key;
    document.getElementById('output').value = encrypted;
}

function decrypt() {
    const key = document.getElementById('key').value;
    const encryptedMessage = document.getElementById('output').value;
    
    if (!key || !encryptedMessage) {
        alert("Please enter the key and encrypted message.");
        return;
    }

    try {
        const decryptedMessage = window.atob(window.atob(encryptedMessage));
        const originalMessage = decodeURIComponent(escape(window.atob(decryptedMessage.replace(key, ''))));
        document.getElementById('input').value = originalMessage;
    } catch (error) {
        alert("Decryption failed. Please check the key and encrypted message.");
    }
}

function downloadFile(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
