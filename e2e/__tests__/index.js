import React from "react";
import renderer from "react-test-renderer";
import OTPTextInput from "../../src/OTPTextInput";
import { TextInput } from "react-native";

describe("OTP TextInput Test", () => {
  it("OTPTextInput renders correctly", () => {
    const component = renderer.create(<OTPTextInput />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("OTPTextInput should have title", () => {
    const component = renderer.create(<OTPTextInput title="Resend OTP" />);
    const testInstance = component.root;
    expect(testInstance.findByType(OTPTextInput).props.title).toBe(
      "Resend OTP"
    );
  });

  it("OTPTextInput should have subtitle", () => {
    const component = renderer.create(
      <OTPTextInput subtitle="remaining time" />
    );
    const testInstance = component.root;
    expect(testInstance.findByType(OTPTextInput).props.subtitle).toBe(
      "remaining time"
    );
  });

  it("OTPTextInput number of inputs", () => {
    const component = renderer.create(<OTPTextInput numberOfInputs={6} />);
    const testInstance = component.root;
    expect(testInstance.findAllByType(TextInput).length).toBe(6);
  });

  it("OTPTextInput selectionColor", () => {
    const component = renderer.create(
      <OTPTextInput selectionColor="#4C5457" />
    );
    const testInstance = component.root;
    expect(testInstance.findByType(OTPTextInput).props.selectionColor).toBe(
      "#4C5457"
    );
  });

  it("correctly applies type outline to OTPTextInput", () => {
    const component = renderer.create(
      <OTPTextInput type="outline" numberOfInputs={1} />
    );
    const testInstance = component.root;
    expect(testInstance.findByType(TextInput).props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: null,
          borderBottomWidth: null,
          borderColor: "#3E517A",
          borderRadius: 4,
          borderWidth: 1,
          marginRight: 0,
          maxWidth: 55,
          minWidth: 50,
          textAlign: "center",
        }),
      ])
    );
  });

  it("correctly applies type filled to OTPTextInput", () => {
    const component = renderer.create(
      <OTPTextInput type="filled" numberOfInputs={1} />
    );
    const testInstance = component.root;
    expect(testInstance.findByType(TextInput).props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: "#f5f5f5",
          borderBottomWidth: 1.5,
          borderColor: "#3E517A",
          borderRadius: 4,
          borderWidth: null,
          marginRight: 0,
          maxWidth: 55,
          minWidth: 50,
          textAlign: "center",
        }),
      ])
    );
  });

  it("inputStyle - outline", () => {
    const component = renderer.create(
      <OTPTextInput
        type="outline"
        numberOfInputs={1}
        inputStyle={{ borderWidth: 2 }}
      />
    );
    const testInstance = component.root;
    expect(testInstance.findByType(TextInput).props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderWidth: 2,
        }),
      ])
    );
  });
});
