<h1>TWILIO-MOBILE-OTP</h1>

Secure Mobile Access, Instantly and Seamlessly

![last commit](https://img.shields.io/github/last-commit/Rashim-Sunar/twilio-mobile-otp)
![language](https://img.shields.io/badge/javascript-100%25-blue)
![langs count](https://img.shields.io/badge/languages-1-lightgrey)

Built with the tools and technologies:

![Express](https://img.shields.io/badge/Express-black)
![JSON](https://img.shields.io/badge/JSON-black)
![npm](https://img.shields.io/badge/npm-red)
![Mongoose](https://img.shields.io/badge/Mongoose-orange)
![ENV](https://img.shields.io/badge/.ENV-yellow)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![Twilio](https://img.shields.io/badge/Twilio-red)

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

---

## Overview

**twilio-mobile-otp** is an open-source Node.js tool designed to facilitate **secure SMS-based OTP authentication** for mobile applications using Twilio.  
It provides a streamlined way to **generate, send, and validate one-time passwords**, ensuring user verification workflows remain reliable and scalable.

### ⭐ Why twilio-mobile-otp?

This project simplifies mobile user authentication by integrating Twilio's SMS API directly into your backend.  
Core features include:

- 🔑 **OTP Generation & Delivery:** Securely generate & send OTPs via Twilio to verify user phone numbers.
- ⏱️ **OTP Expiration Validation:** Enforces a 2-minute validity window for enhanced security.
- 🗄️ **Database Schema:** Securely stores OTP records for validation and auditing.
- 🚀 **API Endpoints:** Simple and clean routes for sending and verifying OTPs.
- 🛠️ **Utility Functions:** Helper scripts to validate expiration and manage OTP lifecycle.

---

## Getting Started

### Prerequisites

This project requires:

- **Programming Language:** JavaScript  
- **Package Manager:** npm  

---

## Installation

Follow the steps below to build **twilio-mobile-otp** from source:

### **1. Clone the repository:**

```bash
git clone https://github.com/Rashim-Sunar/twilio-mobile-otp
```

### **2. Navigate to the project directory:**

```bash
cd twilio-mobile-otp
```

### **3. Install the dependencies:**

```bash
npm install
```
### **4. Create .env file in project root**

```bash
npm install
```

## Usage
Run the project with:
```bash
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

## Testing
twilio-mobile-otp uses Node.js for runtime and can be tested with:
```bash
npm test
```
<br><hr>
## API Usage (Postman Guide)
Below is how GitHub visitors can test your API instantly.
### **1. Send OTP**
POST
```sh
http://localhost:5000/send-otp
```
Body (JSON)
```sh
{
  "phoneNumber": "+91XXXXXXXXXX"
}
```

### **2. Verify OTP**
POST
```sh
http://localhost:5000/verify-otp
```

Body (JSON)
```sh
{
  "phoneNumber": "+91XXXXXXXXXX",
  "otp": "123456"
}
```

<br><hr>
[🔼 Back to top](#TWILIO-MOBILE-OTP)





