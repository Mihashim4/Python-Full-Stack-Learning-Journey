# 02 - Database Username & Password Login 🔐

A beginner Python program that simulates a basic login system by checking a username and password against hardcoded credentials using nested `if` statements.

## 📝 Description

The user enters a username and password. The program compares them against a small in-memory list of accepted users and prints whether login is allowed.

> ⚠️ This is a learning exercise only. Credentials are hardcoded in the script and **not secure** — for understanding `if` / `else` logic, not real authentication.

## 👥 Hardcoded Users

| Username | Password |
|----------|----------|
| `Mihashim4` | `1234567` |
| `Hashim` | `12121212` |

## ▶️ How to Run

```bash
python Username_password.py
```

Then enter the username and password when prompted.

### Example (Successful Login)

```
Enter your username :    Mihashim4
Enter your password :    1234567
You can Login
```

### Example (Wrong Password)

```
Enter your username :    Mihashim4
Enter your password :    wrong
You can't login
```

### Example (Unknown User)

```
Enter your username :    someone
Enter your password :    whatever
No Username Found
```

## 🧠 Concepts Practiced

- User input with `input()`
- String comparison (`==`)
- Nested `if` / `else` statements
- Multi-user decision flow
