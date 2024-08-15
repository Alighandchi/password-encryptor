from cryptography.fernet import Fernet

# فایل‌های ورودی
encrypted_file = "encrypted_pass.txt"
key_file = "key.key"

# خواندن کلید رمزنگاری
with open(key_file, 'rb') as keyfile:
    key = keyfile.read()

# ایجاد شیء Fernet برای رمزگشایی
cipher = Fernet(key)

# خواندن پسوردهای رمزنگاری شده و رمزگشایی آنها
with open(encrypted_file, 'r') as f:
    encrypted_passwords = f.readlines()

decrypted_passwords = []
for encrypted in encrypted_passwords:
    encrypted = encrypted.strip()
    decrypted = cipher.decrypt(encrypted.encode())
    decrypted_passwords.append(decrypted.decode())

# نمایش پسوردهای رمزگشایی شده
print("Decrypted passwords:")
for password in decrypted_passwords:
    print(password)
