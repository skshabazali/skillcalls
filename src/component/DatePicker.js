import React from 'react';
import DisableKeyboard from 'react-native-formik/src/withPickerValues/DisableKeyboard';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {TextField as MaterialTextInput} from 'react-native-material-textfield';
import {format} from 'date-fns';

class DatePicker extends React.PureComponent {
  state = {
    pickerOpened: false,
  };

  focus = () => this.openPicker();

  openPicker = () => {
    this.setState({pickerOpened: true});
  };

  closePicker = () =>
    this.setState({pickerOpened: false}, () => {
      this.props.setFieldTouched();
    });

  handleDatePicked = value => {
    let formattedDate = value ? format(value, 'dd.MM.yyyy') : '';
    let splittedValues = formattedDate.split('-');
    console.log(splittedValues);
    if (this.props.mode === 'date') {
      formattedDate = splittedValues[0];
    }
    if (this.props.mode === 'time') {
      formattedDate = splittedValues[1];
    }
    this.props.setFieldValue(formattedDate);
    this.closePicker();
    // if (this.props.onSubmitEditing) {
    //   this.props.onSubmitEditing();
    // }
  };

  render() {
    // let formattedDate = this.props.value
    //   ? format(this.props.value, "DD/MM/YYYY-hh:mm A")
    //   : "";
    // if (this.props.mode === "date") {
    //   formattedDate = formattedDate.split("-")[0];

    // }
    // if (this.props.mode === "time") {
    //   formattedDate = formattedDate.split("-")[1];
    // }
    // if (this.props.mode === "datetime") {
    //   formattedDate = this.props.value
    //     ? format(this.props.value, "DD/MM/YYYY-hh:mm A")
    //     : ""
    // }

    return (
      <React.Fragment>
        <DisableKeyboard onPress={this.openPicker}>
          <MaterialTextInput {...this.props} value={this.props.value} />
        </DisableKeyboard>
        <DateTimePicker
          isVisible={this.state.pickerOpened}
          onConfirm={this.handleDatePicked}
          onCancel={this.closePicker}
        />
      </React.Fragment>
    );
  }
}

export default DatePicker;
