import React, { useState, useRef, useEffect } from "react";
import { TextInput, Keyboard, View, StyleSheet, Text } from "react-native";

const OTPTextInput = ({
  type = "outline",
  cursorColor = "#4C5457",
  borderColor = "#8FA2A3",
  currentBorderColor = "#3E517A",
  numberOfInputs = 4,
  title = null,
  subtitle = null,
  inputStyle,
  titleStyle,
  subtitleStyle,
  onFilledCode,
}) => {
  const inputRef = useRef([]);
  const [indexState, setIndexState] = useState(0);
  const [state, setState] = useState("");
  const [back, setBack] = useState(false);

  const handleChange = (e) => {
    if (e === "") {
      setBack(true);
      let text = "";
      text = state.slice(0, -1);
      setState(text);
      if (state.length > 1) {
        setIndexState(state.length - 2);
        inputRef.current[state.length - 2].focus();
      }
    } else {
      setState(state + e);
      if ((state + e).length < numberOfInputs) {
        setIndexState((state + e).length);
        inputRef.current[(state + e).length].focus();
      }
    }
  };

  const keyboardClose = () => {
    onFilledCode(state);
  }

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      keyboardClose();
    });

    return () => {
      hideSubscription.remove();
    };
  }, [state]);

  return (
    <View style={styles.main}>
      {title != null ? (
        <Text style={[{ marginVertical: 10, fontSize: 18, fontWeight: "bold" }, titleStyle]}>
          {title}
        </Text>
      ) : null}
      <View style={styles.textInputView}>
        {[...Array(numberOfInputs).keys()].map((data, index) => (
          <View key={index}>
            <TextInput
              autoCorrect={false}
              autoFocus={index === 0}
              maxLength={1}
              ref={(ref) => inputRef.current.push(ref)}
              onChangeText={(e) => {
                handleChange(e);
              }}
              onFocus={() => {
                if (
                  (state.length < numberOfInputs && !back) ||
                  state.length === 0
                ) {
                  inputRef.current[state.length].focus();
                } else if (state.length === numberOfInputs) {
                  inputRef.current[state.length - 1].focus();
                }
              }}
              selectionColor={cursorColor}
              keyboardType="number-pad"
              style={[
                inputStyle,
                {
                  borderRadius: 4,
                  textAlign: "center",
                  borderBottomWidth:
                    type === "filled"
                      ? inputStyle?.borderWidth
                        ? inputStyle.borderWidth
                        : 1.5
                      : null,
                  borderWidth:
                    type === "outline"
                      ? inputStyle?.borderWidth
                        ? inputStyle.borderWidth
                        : 1
                      : null,
                  minWidth: numberOfInputs > 5 ? 45 : 50,
                  maxWidth: numberOfInputs > 5 ? 50 : 55,
                  borderColor:
                    indexState === index ? currentBorderColor : borderColor,
                  backgroundColor: inputStyle?.backgroundColor
                    ? inputStyle.backgroundColor
                    : type === "filled"
                    ? "#f5f5f5"
                    : null,
                  marginRight: numberOfInputs - 1 === index ? 0 : 20,
                },
              ]}
            />
          </View>
        ))}
      </View>
      {subtitle !== null ? (
        <Text style={[{ marginVertical: 10, fontSize: 13, fontWeight: "400" }, subtitleStyle]}>
          {subtitle}
        </Text>
      ) : null}
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

export default OTPTextInput;
