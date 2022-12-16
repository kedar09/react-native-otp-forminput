import React from "react";
import renderer from "react-test-renderer";
import OTPInput from "../../src/OTPInput";
import { TextInput } from "react-native";

describe("OTP Input Test", () => {
  it("OTPInput renders correctly", () => {
    const component = renderer.create(<OTPInput title="Resend OTP" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("OTPInput should have title", () => {
    const component = renderer.create(<OTPInput title="Resend OTP" />);
    const testInstance = component.root;
    expect(testInstance.findByType(OTPInput).props.title).toBe("Resend OTP");
  });

  it("OTPInput should have subtitle", () => {
    const component = renderer.create(<OTPInput subtitle="remaining time" />);
    const testInstance = component.root;
    expect(testInstance.findByType(OTPInput).props.subtitle).toBe(
      "remaining time"
    );
  });

  it("OTPInput number of inputs", () => {
    const component = renderer.create(<OTPInput numberOfInputs={6} />);
    const testInstance = component.root;
    expect(testInstance.findAllByType(TextInput).length).toBe(6);
  });

  it("OTPInput selectionColor", () => {
    const component = renderer.create(<OTPInput selectionColor="#4C5457" />);
    const testInstance = component.root;
    expect(testInstance.findByType(OTPInput).props.selectionColor).toBe(
      "#4C5457"
    );
  });

  it("correctly applies type outline to OTPInput", () => {
    const component = renderer.create(
      <OTPInput type="outline" numberOfInputs={1} />
    );
    const testInstance = component.root;
    expect(testInstance.findByType(TextInput).props.style).toEqual(
      expect.objectContaining({
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#3E517A",
        borderRadius: 4,
        borderWidth: 1,
        height: 48,
        marginRight: 0,
        maxWidth: 55,
        minWidth: 50,
        textAlign: "center",
      })
    );
  });
});
