from cryptography.fernet import Fernet

# فایل‌های ورودی و خروجی
input_file = "pass.txt"
output_file = "encrypted_pass.txt"
key_file = "key.key"

# تولید کلید رمزنگاری
key = Fernet.generate_key()
with open(key_file, 'wb') as keyfile:
    keyfile.write(key)

# ایجاد شیء Fernet برای رمزنگاری
cipher = Fernet(key)

# خواندن پسوردها و رمزنگاری آنها
with open(input_file, 'r') as f:
    passwords = f.readlines()

encrypted_passwords = []
for password in passwords:
    password = password.strip()
    encrypted = cipher.encrypt(password.encode())
    encrypted_passwords.append(encrypted.decode())

# ذخیره پسوردهای رمزنگاری شده
with open(output_file, 'w') as f:
    for encrypted in encrypted_passwords:
        f.write(encrypted + '\n')

print(f"Passwords have been encrypted and stored in '{output_file}'.")
