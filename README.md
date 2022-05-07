<p align="center">
  <a href="https://github.com/kedar09/react-native-otp-forminput" target="blank">
    <img src="https://github.com/kedar09/kedar09/blob/dev/assets/logo1.png" width="420" height="220" alt="RNOTP Logo" />
  </a>
</p>
# react-native-otp-forminput

## Get Started 

### Installation 
```js
npm install react-native-otp-forminput
```

### Usage
```js
import React from 'react';
import OTPInput from 'react-native-otp-forminput';

const App = () => {
  return (
    <>
      <OTPInput
        title="Enter OTP"
        type="outline"
        onFilledCode={code => {
          console.log(code);
        }}
      />
    </>
  );
};

export default App;
```

### Usage
<table>
  <tr>
    <td>
      <p align="center">
        <strong>Outline Example</strong>
      </p>
    </td>
    <td>
      <p align="center">
        <strong>Filled Example</strong>
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <p align="center">
        <img src="https://github.com/kedar09/kedar09/blob/dev/assets/Screenshot_otp_outline.png" width="220" height="420"/>
      </p>
    </td>
    <td>
      <p align="center">
        <img src="https://github.com/kedar09/kedar09/blob/dev/assets/Screenshot_otp_filled.png" width="220" height="420"/>
      </p>
     </td>
    </tr>
</table>

### Available props

| Name                      | Type                 | Default         |
|---------------------------|----------------------| ----------------|
| `type            `        | filled or outline    | outline         |
| `keyboardType    `        | string               | number-pad      |
| `cursorColor          `   | string               | #4C5457         |
| `borderColor`             | string               | #8FA2A3         |
| `currentBorderColor`      | string               | #3E517A         |
| `numberOfInputs     `     | number               | 4               |
| `title`                   | string               | null            |
| `titleStyle     `         | style                | Text style      |
| `subtitle`                | string               | null            |
| `subtitleStyle     `      | style                | Text style      |
| `inputStyle     `         | number               | TextInput style |
| `onFilledCode     `       | function             | null            |



### Author
Feel free to ask me questions [here](https://github.com/kedar09/react-native-otp-forminput/issues) - @kedar09!

