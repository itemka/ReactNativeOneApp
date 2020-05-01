import React, { useState } from 'react';
import {
  View,
  TextInput,
  Modal, //❗️
  Alert,
} from 'react-native';
import styles from './styles';
import { THEME } from '../../utils/constants';
import PropTypes from 'prop-types';
import { AppButton } from '../AppButton';

export const EditModal = ({
  isModal,
  value,
  handleCancleEdit,
  handleSaveEdit,
}) => {
  const [title, setTitle] = useState(value);
  const handleOnCancel = () => {
    handleCancleEdit();
    setTitle(value);
  }
  const handleOnSave = () => {
    let lengthTitile = title.trim().length;
    lengthTitile < 3
      ? Alert.alert(
          `Error!`,
          `Min length is 3 symbols. Now is ${lengthTitile} symbols.`
        )
      : handleSaveEdit(title);
  }

  return (
    <Modal visible={isModal} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <AppButton onPress={handleOnCancel} color={THEME.DANGER_COLOR}>
            Cancel
          </AppButton>
          <AppButton color={THEME.OK} onPress={handleOnSave}>
            Save
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

EditModal.propTypes = {
  isModal: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  handleCancleEdit: PropTypes.func.isRequired,
  handleSaveEdit: PropTypes.func.isRequired,
};
