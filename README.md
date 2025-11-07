# GCD API

A fast **GCD (Greatest Common Divisor) API** built in **TypeScript** and **Express**, featuring a **precomputed matrix** for extremely fast GCD lookups. Supports both **two-number** and **array-of-numbers** requests.  

---

## Features

- **Multi-form requests**: calculate GCD for two numbers or an array of numbers.  
- **Precomputed matrix**: stores GCDs of numbers from 0 to 500 for instant lookup.  
- **Clean modlet architecture**: service, controller, routes, validator, types, and utils all self-contained in the `gcd` feature.  
- **Lightweight runtime**: the matrix is loaded at runtime; generator script runs only once.  

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/GCDapi.git
cd GCDapi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the API


```bash
npm run dev
```

## API Endpoint

### Calculate GCD

**Endpoint:** `GET /gcd`  
**Query Parameters:**

1. **Two numbers form:**  
   - `a` (number)  
   - `b` (number)  

**Example:**

```
GET /gcd?a=48&b=180
```

**Response:**


```json
{
  "gcd": 12
}
```

### Calculate GCD of an array of numbers

**Endpoint:** `POST /gcd`
**Query Parameters:**

2. **Array of numbers form:**
    - `numbers` (number[]) — can be repeated multiple times

```
GET /gcd?numbers=48&numbers=180&numbers=300
```



**Response:**


```json
{
  "gcd": 12
}
```