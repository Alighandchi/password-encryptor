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

    document.getElementById('output').value = `Key: ${key}\nEncrypted: ${encrypted}`;
}

function decrypt() {
    const input = document.getElementById('input').value;
    if (!input) {
        alert("Please enter the encrypted message.");
        return;
    }

    const [key, encryptedMessage] = input.split('\nEncrypted: ');
    const decodedKey = key.replace('Key: ', '');
    const decryptedMessage = window.atob(window.atob(encryptedMessage));
    const originalMessage = decodeURIComponent(escape(window.atob(decryptedMessage.replace(decodedKey, ''))));

    document.getElementById('output').value = originalMessage;
}
