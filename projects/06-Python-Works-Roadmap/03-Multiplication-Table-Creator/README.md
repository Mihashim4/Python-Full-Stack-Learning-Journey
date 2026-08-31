<div align="center">

<img src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png" alt="Python Logo" width="220">

# ✖️ Multiplication Table Creator

### A simple Python program that generates the multiplication table of any number from 1 to 10.

![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)
![Beginner Friendly](https://img.shields.io/badge/Level-Beginner-success)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

</div>

---

## 📖 About the Project

**Multiplication Table Creator** is a beginner-friendly Python project that asks the user for a number and displays its multiplication table from **1 to 10**.

This project is part of my **Python Full Stack Learning Journey** and helps practice fundamental Python concepts such as:

- 🔢 User input
- 🔄 `for` loops
- ➗ Arithmetic operations
- 🖨️ Output formatting
- 🔤 Type conversion with `int()`

---

## ✨ Features

- ✅ Accepts a number from the user
- ✅ Generates a multiplication table automatically
- ✅ Displays results from **1 × number** to **10 × number**
- ✅ Uses a simple and beginner-friendly `for` loop
- ✅ Lightweight with no external libraries required

---

## 🧠 How It Works

```text
┌──────────────────────┐
│   User enters a      │
│       number         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Python converts the │
│   input into an int  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Loop runs from 1–10  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Multiplication table │
│     is displayed     │
└──────────────────────┘
```

---

## 💻 Code

```python
num = int(input("Enter a number to find it's Multiplication table (upto x 10):  "))

for i in range(1, 11):
    print(num, "x", i, "= ", num * i)
```

---

## ▶️ Example Output

```text
Enter a number to find it's Multiplication table (upto x 10):  7

7 x 1 =  7
7 x 2 =  14
7 x 3 =  21
7 x 4 =  28
7 x 5 =  35
7 x 6 =  42
7 x 7 =  49
7 x 8 =  56
7 x 9 =  63
7 x 10 =  70
```

---

## 🛠️ Requirements

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="55" align="right">

- Python **3.x**
- A terminal or command prompt

No external packages are required. 🎉

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Mihashim4/Python-Full-Stack-Learning-Journey.git
```

### 2. Navigate to this project

```bash
cd Python-Full-Stack-Learning-Journey/projects/06-Python-Works-Roadmap/03-Multiplication-Table-Creator
```

### 3. Run the program

```bash
python multiplication_table.py
```

---

## 📂 Project Structure

```text
03-Multiplication-Table-Creator/
│
├── multiplication_table.py
└── README.md
```

---

## 📚 Concepts Practiced

| Concept | Description |
|---|---|
| `input()` | Receives a number from the user |
| `int()` | Converts the entered text into an integer |
| `for` loop | Repeats the calculation from 1 to 10 |
| `range()` | Generates numbers from 1 through 10 |
| Arithmetic | Calculates the multiplication result |
| `print()` | Displays the table in the terminal |

---

## 🔮 Possible Future Improvements

- [ ] Allow the user to choose the ending limit instead of always using 10
- [ ] Add input validation for non-numeric values
- [ ] Create a graphical user interface (GUI)
- [ ] Save multiplication tables to a text file
- [ ] Generate tables for multiple numbers at once

---

<div align="center">

### 🌟 Part of My Python Full Stack Learning Journey

<img src="https://img.shields.io/badge/Keep-Learning-FF6B6B?style=for-the-badge" alt="Keep Learning">
<img src="https://img.shields.io/badge/Keep-Building-4ECDC4?style=for-the-badge" alt="Keep Building">
<img src="https://img.shields.io/badge/Keep-Improving-6C5CE7?style=for-the-badge" alt="Keep Improving">

<br><br>

**Made with ❤️ and Python**

</div>
