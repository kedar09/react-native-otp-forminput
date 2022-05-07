import React from "react";
import renderer from "react-test-renderer";
import OTPInput from "../../src/OTPInput";
import { TextInput } from "react-native";

describe("OTP Input Test", () => {
  it("OTPInput renders correctly", () => {
    const component = renderer.create(<OTPInput title="Resend OTP" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  // it('renders correctly', async () => {
  //   const tree = renderer.create(<OTPInput />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  // it('renders correctly', async () => {
  //   renderer.create(<OTPInput />);
  // });

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
        backgroundColor: null,
        borderBottomWidth: null,
        borderColor: "#3E517A",
        borderRadius: 4,
        borderWidth: 1,
        marginRight: 0,
        maxWidth: 55,
        minWidth: 50,
        textAlign: "center",
      })
    );
  });
  
  // it("inputStyle - outline", () => {
  //   const component = renderer.create(
  //     <OTPInput
  //       type="outline"
  //       numberOfInputs={1}
  //       inputStyle={{ borderWidth: 2 }}
  //     />
  //   );
  //   const testInstance = component.root;
  //   expect(testInstance.findByType(TextInput).props.style.borderWidth).toBe(2);
  // });

  // it("correctly applies type filled to OTPInput", () => {
  //   const component = renderer.create(
  //     <OTPInput type="filled" numberOfInputs={1} />
  //   );
  //   const testInstance = component.root;
  //   expect(testInstance.findByType(TextInput).props.style).toEqual(
  //     expect.objectContaining({
  //       backgroundColor: "#f5f5f5",
  //       borderBottomWidth: 1.5,
  //       borderColor: "#3E517A",
  //       borderRadius: 4,
  //       borderWidth: null,
  //       marginRight: 0,
  //       maxWidth: 55,
  //       minWidth: 50,
  //       textAlign: "center",
  //     })
  //   );
  // });

  // it("correctly applies type filled to OTPInput", () => {
  //   const component = renderer.create(
  //     <OTPInput type="filled" numberOfInputs={1} />
  //   );
  //   const testInstance = component.root;
  //   expect(testInstance.findByType(TextInput).props.style).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({
  //         backgroundColor: "#f5f5f5",
  //         borderBottomWidth: 1.5,
  //         borderColor: "#3E517A",
  //         borderRadius: 4,
  //         borderWidth: null,
  //         marginRight: 0,
  //         maxWidth: 55,
  //         minWidth: 50,
  //         textAlign: "center",
  //       }),
  //     ])
  //   );
  // });

});
