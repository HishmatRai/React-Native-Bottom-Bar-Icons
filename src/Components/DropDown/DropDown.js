import React, { useState } from "react";
import { Item, Picker, Icon } from "native-base";
import { View } from "react-native";
import styles from "../../Screens/Signup/Styles";
import { AntDesign } from "react-native-vector-icons";
// export default class PickerInputExample extends Component {
export default function Dropdown(props) {
  const [selected, setSelected] = useState("");

  const onValueChange2 = (value) => {
    setSelected(value);
  };
  return (
    <Item picker style={props.style}>
      <Picker
        mode="dropdown"
        iosIcon={
          <AntDesign name="caretdown" style={{ color: "white" }} size={30} />
        }
        style={{ width: undefined, color: "white", paddingLeft: 20 }}
        placeholder="Select your SIM"
        placeholderStyle={{ color: "#bfc6ea" }}
        placeholderIconColor="#007aff"
        selectedValue={selected}
        onValueChange={onValueChange2.bind(this)}
      >
        {props.data.map((val, i) => {
          return <Picker.Item label={val} value={val} />;
        })}
      </Picker>
    </Item>
  );
}
