function generateKey() {
    // تولید یک کلید تصادفی برای رمزنگاری
    return window.crypto.getRandomValues(new Uint8Array(32)).toString();
}

function encrypt() {
    // دریافت ورودی کاربر
    const input = document.getElementById('input').value;
    if (!input) {
        alert("Please enter a password to encrypt.");
        return;
    }

    // تولید کلید و رمزنگاری متن
    const key = generateKey();
    const encodedMessage = btoa(unescape(encodeURIComponent(input)));
    const encrypted = window.btoa(encodedMessage + key);

    // نمایش کلید و متن رمزنگاری‌شده در تکست‌ایریاهای جداگانه
    document.getElementById('key').value = key;
    document.getElementById('output').value = encrypted;
}

function decrypt() {
    // دریافت کلید و متن رمزنگاری‌شده از تکست‌ایریاها
    const key = document.getElementById('key').value;
    const encryptedMessage = document.getElementById('output').value;

    if (!key || !encryptedMessage) {
        alert("Please enter the key and encrypted message.");
        return;
    }

    try {
        // رمزگشایی متن
        const decryptedMessage = window.atob(encryptedMessage);
        const originalMessage = decodeURIComponent(escape(window.atob(decryptedMessage.replace(key, ''))));
        document.getElementById('input').value = originalMessage;
    } catch (error) {
        alert("Decryption failed. Please check the key and encrypted message.");
    }
}

function downloadFile(filename, content) {
    // ساخت و دانلود فایل با محتوای مشخص
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
