import React, { useState, useRef, useEffect } from "react";
import { TextInput, Keyboard, View, StyleSheet, Text } from "react-native";

const OTPInput = ({
  type = "outline",
  defaultValue = "",
  keyboardType = "number-pad",
  cursorColor = "#4C5457",
  borderColor = "#8FA2A3",
  currentBorderColor = "#3E517A",
  numberOfInputs = 4,
  title = null,
  titleStyle,
  subtitle = null,
  subtitleStyle,
  inputStyle,
  secureTextEntry = false,
  onFilledCode = false,
  onChange = () => {},
}) => {
  const inputRef = useRef([]);
  const [state, setState] = useState([]);
  const [indexState, setIndexState] = useState(0);

  const handleChange = (e, index) => {
    if (e === " ") {
      console.log("avoid space");
    } else if (e === "") {
      const copyState = [...state];
      copyState[index] = e;
      setState(copyState);
      if (copyState.join("").length > 0 && index !== 0) {
        setIndexState(indexState - 1);
        inputRef.current[indexState - 1].focus();
      }
    } else {
      const copyState = [...state];
      copyState[index] = e;
      setState(copyState);
      if (
        copyState.join("").length < numberOfInputs &&
        index !== numberOfInputs - 1
      ) {
        setIndexState(indexState + 1);
        inputRef.current[indexState + 1].focus();
      }

      if (copyState.join("").length === numberOfInputs && onFilledCode) {
        Keyboard.dismiss();
      }
    }
  };

  const keyboardClose = () => {
    if (state.length > 0) {
      onChange(state.join(""));
    }
  };

  const filterData = () => {
    if (defaultValue.length === 4) {
      const copyState = defaultValue.split("");
      setState(copyState);
      setIndexState(defaultValue.length - 1);
    } else {
      const copyState = [];
      [...Array(numberOfInputs).keys()].map((data, index) => {
        copyState.push("");
      });
      setState(copyState);
    }
  };

  useEffect(() => {
    if (state.length === 0) {
      filterData();
    }
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      keyboardClose();
    });

    return () => {
      hideSubscription.remove();
    };
  }, [state]);

  return (
    <View style={styles.main}>
      {title != null && (
        <Text
          style={StyleSheet.flatten([
            { marginVertical: 10, fontSize: 18, fontWeight: "bold" },
            titleStyle,
          ])}
        >
          {title}
        </Text>
      )}
      <View style={styles.textInputView}>
        {state.map((data, index) => (
          <View key={index}>
            <TextInput
              autoCorrect={false}
              autoFocus={index === indexState}
              maxLength={1}
              value={data}
              ref={(ref) => inputRef.current.push(ref)}
              onChangeText={(e) => {
                handleChange(e, index);
              }}
              onFocus={() => {
                setIndexState(index);
              }}
              selectionColor={cursorColor}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              style={StyleSheet.flatten([
                inputStyle,
                {
                  height: 48,
                  borderRadius: 4,
                  textAlign: "center",
                  borderBottomWidth:
                    type === "filled"
                      ? inputStyle?.borderWidth
                        ? inputStyle.borderWidth
                        : 1.5
                      : 1,
                  borderWidth:
                    type === "outline"
                      ? inputStyle?.borderWidth
                        ? inputStyle.borderWidth
                        : 1
                      : 0,
                  minWidth: numberOfInputs > 5 ? 45 : 50,
                  maxWidth: numberOfInputs > 5 ? 50 : 55,
                  borderColor:
                    indexState === index ? currentBorderColor : borderColor,
                  backgroundColor: inputStyle?.backgroundColor
                    ? inputStyle.backgroundColor
                    : type === "filled"
                    ? "#f5f5f5"
                    : "#fff",
                  marginRight: numberOfInputs - 1 === index ? 0 : 20,
                },
              ])}
            />
          </View>
        ))}
      </View>
      {subtitle !== null && (
        <Text
          style={StyleSheet.flatten([
            { marginVertical: 10, fontSize: 13, fontWeight: "400" },
            subtitleStyle,
          ])}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 22,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OTPInput;
